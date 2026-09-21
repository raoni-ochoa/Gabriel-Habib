"""Motor de indicadores por lead e consolidado. Regras em docs/METODOLOGIA.md.

Entrada: lista de Event por lead + dados do lead (transferência, etapas, corte).
Saída: dict serializável com definição/base/cobertura por indicador. Zero ≠ NA ≠ indisponível.
"""
from __future__ import annotations
from datetime import datetime, timedelta
from statistics import median
from typing import Optional
from schema import Event, CONTACT_ACTIONS, parse_ts

NA = "NA"          # não aplicável (situação não ocorreu)
UNAVAIL = "DI"     # dado indisponível (falta acesso/evidência)


def _h(seconds: Optional[float]):
    return None if seconds is None else round(seconds / 3600, 2)


def human_contact_events(evs: list[Event]) -> list[Event]:
    return [e for e in evs if e.actor_type == "human" and e.direction == "out" and e.action in CONTACT_ACTIONS]


def first_after(evs: list[Event], t0: datetime, pred) -> Optional[Event]:
    for e in sorted(evs, key=lambda x: x.ts):
        if e.dt() >= t0 and pred(e):
            return e
    return None


# ---------- episódios de espera ----------

def wait_episodes(evs: list[Event], cutoff: datetime, transfer_ts: Optional[datetime]) -> list[dict]:
    """Agrupa mensagens do lead que exigem retorno até a próxima ação humana dirigida ao lead.
    Só considera mensagens após a transferência (se conhecida). Episódio aberto no corte → open=True."""
    evs = sorted(evs, key=lambda x: x.ts)
    episodes: list[dict] = []
    cur: Optional[dict] = None
    for e in evs:
        if transfer_ts and e.dt() < transfer_ts:
            continue
        is_lead_msg = e.actor_type == "lead" and e.action in ("message", "call_incoming_missed")
        is_human_contact = e.actor_type == "human" and e.direction == "out" and e.action in CONTACT_ACTIONS
        if is_lead_msg and e.requires_reply:
            if cur is None:
                cur = {"start": e.ts, "last_lead_msg": e.ts, "msgs": [e.id], "refs": [e.ref], "status": None}
            else:
                cur["last_lead_msg"] = e.ts; cur["msgs"].append(e.id); cur["refs"].append(e.ref)
        elif is_human_contact and cur is not None:
            cur["answered_at"] = e.ts
            cur["answer_ref"] = e.ref
            cur["answer_action"] = e.action
            cur["wait_seconds"] = (e.dt() - parse_ts(cur["last_lead_msg"])).total_seconds()
            cur["open"] = False
            cur["status"] = "retorno_combinado" if e.agreed_return_at else "encerrado"
            episodes.append(cur); cur = None
    if cur is not None:
        cur["open"] = True
        cur["elapsed_to_cutoff_seconds"] = (cutoff - parse_ts(cur["last_lead_msg"])).total_seconds()
        cur["status"] = "aguardando_equipe"
        episodes.append(cur)
    return episodes


def followups(evs: list[Event], min_gap_hours: float = 4.0) -> list[dict]:
    """Abordagens de follow-up humano: ação de saída após ≥ min_gap_hours sem mensagem do lead
    (ou sem qualquer evento anterior do lead). Fragmentos ≤10 min do mesmo autor contam 1."""
    evs = sorted(evs, key=lambda x: x.ts)
    out = []
    last_lead: Optional[datetime] = None
    last_fu: Optional[datetime] = None
    for e in evs:
        if e.actor_type == "lead":
            last_lead = e.dt(); continue
        if e.actor_type == "human" and e.direction == "out" and e.action in CONTACT_ACTIONS:
            gap = None if last_lead is None else (e.dt() - last_lead).total_seconds() / 3600
            if last_lead is not None and gap >= min_gap_hours:
                if last_fu and (e.dt() - last_fu) <= timedelta(minutes=10):
                    continue
                out.append({"ts": e.ts, "action": e.action, "gap_hours": round(gap, 2), "ref": e.ref, "actor": e.actor_name})
                last_fu = e.dt()
    return out


def call_stats(evs: list[Event]) -> dict:
    calls = [e for e in evs if e.channel == "call"]
    out_attempts = [e for e in calls if e.direction == "out" and e.actor_type == "human"]
    answered = [e for e in out_attempts if e.action == "call_answered"]
    incoming = [e for e in calls if e.direction == "in"]
    return {
        "chamadas_localizadas": len(calls),
        "tentativas_saida": len(out_attempts),
        "saida_atendidas": len(answered),
        "entrada": len(incoming),
        "entrada_perdidas": len([e for e in incoming if e.action == "call_incoming_missed"]),
        "duracao_total_s": sum(int(e.meta.get("duration") or 0) for e in calls),
        "com_gravacao_link": len([e for e in calls if e.meta.get("link")]),
        "gravacao_acessivel": len([e for e in calls if e.meta.get("recording_access") == "acessivel"]),
        "transcritas": len([e for e in calls if e.meta.get("transcript")]),
        "lista": [{"ts": e.ts, "direction": e.direction, "action": e.action, "actor": e.actor_name,
                   "duration": e.meta.get("duration"), "status": e.meta.get("call_status"), "link": bool(e.meta.get("link")),
                   "recording_access": e.meta.get("recording_access"), "id": e.meta.get("uniq") or e.meta.get("call_id") or e.id,
                   "ref": e.ref} for e in calls],
    }


def milestones(evs: list[Event]) -> dict:
    keys = ["meeting_offered", "meeting_accepted", "meeting_scheduled", "meeting_confirmed", "meeting_done", "meeting_noshow",
            "meeting_reschedule", "proposal_presented", "document_sent", "document_signed", "legal_handoff"]
    m = {}
    for k in keys:
        hits = [e for e in evs if e.action == k]
        m[k] = {"ocorreu": bool(hits), "primeira": hits[0].ts if hits else None,
                "evidencias": [{"ref": e.ref, "conteudo": e.content, "doc": e.meta.get("doc_type"), "confirmado": e.meta.get("confirmed", False)} for e in hits]}
    # contrato × procuração separados
    for doc in ("contrato", "procuracao"):
        m[f"{doc}_enviado"] = any(e.action == "document_sent" and e.meta.get("doc_type") == doc for e in evs)
        m[f"{doc}_assinado_confirmado"] = any(e.action == "document_signed" and e.meta.get("doc_type") == doc and e.meta.get("confirmed") for e in evs)
    return m


def lead_metrics(lead: dict, evs: list[Event], cutoff: datetime) -> dict:
    """lead: {id, url, service, source, created_at, stage_current, stage_max, stages:[...], transfer:{ts, confidence, rule}, status, loss_reason}"""
    evs = sorted(evs, key=lambda x: x.ts)
    tr = lead.get("transfer") or {}
    t_ts = parse_ts(tr["ts"]) if tr.get("ts") else None
    res = {"lead_id": lead["id"], "transfer_confidence": tr.get("confidence", "nao_identificavel"), "transfer_rule": tr.get("rule")}
    hum = human_contact_events(evs)
    res["indicadores"] = {}
    I = res["indicadores"]

    def put(key, value, definicao, base, cobertura):
        I[key] = {"valor": value, "definicao": definicao, "base": base, "cobertura": cobertura}

    if t_ts is None:
        for k in ("h_transf_primeira_tentativa", "h_transf_primeira_mensagem", "h_transf_primeira_ligacao", "h_transf_primeira_conversa"):
            put(k, UNAVAIL, "tempo corrido desde a transferência", "transferência não identificável", "indisponível")
    else:
        fa = first_after(evs, t_ts, lambda e: e.actor_type == "human" and e.direction == "out" and e.action in CONTACT_ACTIONS)
        fm = first_after(evs, t_ts, lambda e: e.actor_type == "human" and e.direction == "out" and e.action == "message")
        fc = first_after(evs, t_ts, lambda e: e.actor_type == "human" and e.channel == "call" and e.direction == "out")
        def is_conv(e):
            return (e.action == "call_answered") or (e.actor_type == "lead" and e.action == "message" and any(h.dt() < e.dt() for h in hum))
        fe = first_after(evs, t_ts, is_conv)
        put("h_transf_primeira_tentativa", _h((fa.dt() - t_ts).total_seconds()) if fa else NA if not hum else None,
            "horas corridas da transferência até 1ª ação humana dirigida ao lead (mensagem ou tentativa de ligação)", f"transferência {tr.get('confidence')}", "completa" if fa else "sem ação humana após transferência")
        put("h_transf_primeira_mensagem", _h((fm.dt() - t_ts).total_seconds()) if fm else NA, "horas até 1ª mensagem humana", "eventos", "completa" if fm else "não ocorreu")
        put("h_transf_primeira_ligacao", _h((fc.dt() - t_ts).total_seconds()) if fc else NA, "horas até 1ª tentativa de ligação de saída", "notas/eventos de chamada", "completa" if fc else "não ocorreu")
        put("h_transf_primeira_conversa", _h((fe.dt() - t_ts).total_seconds()) if fe else NA, "horas até 1ª conversa efetiva (resposta do lead a humano ou ligação atendida)", "eventos", "completa" if fe else "não ocorreu")

    eps = wait_episodes(evs, cutoff, t_ts)
    closed = [e for e in eps if not e["open"]]
    opened = [e for e in eps if e["open"]]
    put("episodios_espera", len(eps), "grupos de mensagens do lead que exigiam retorno", "mensagens anotadas requires_reply", "completa" if evs else "indisponível")
    put("mediana_resposta_h", _h(median([e["wait_seconds"] for e in closed])) if closed else NA, "mediana do tempo corrido última msg do lead → 1ª ação humana, só episódios concluídos", f"{len(closed)} episódios concluídos", "completa")
    put("maior_espera_concluida_h", _h(max(e["wait_seconds"] for e in closed)) if closed else NA, "maior espera concluída", f"{len(closed)} episódios", "completa")
    put("espera_aberta_h", _h(opened[0]["elapsed_to_cutoff_seconds"]) if opened else NA, "tempo acumulado até o corte da pendência aberta (não somado às medianas)", "episódio aberto", "completa")
    res["episodios"] = eps

    # atividades
    hm = [e for e in evs if e.actor_type == "human" and e.action == "message"]
    lm = [e for e in evs if e.actor_type == "lead" and e.action == "message"]
    rm = [e for e in evs if e.actor_type == "robot" and e.action == "message"]
    fu = followups(evs)
    cs = call_stats(evs)
    tasks_c = [e for e in evs if e.action == "task_created"]
    tasks_d = [e for e in evs if e.action == "task_completed"]
    tasks_overdue = [e for e in tasks_c if e.meta.get("due") and parse_ts(e.meta["due"]) < cutoff and not e.meta.get("completed")]
    days_active = len({e.dt().date() for e in evs if e.actor_type == "human"})
    put("msgs_humanas", len(hm), "mensagens enviadas por humano (fragmentos contados individualmente)", "eventos", "completa")
    put("msgs_lead", len(lm), "mensagens recebidas do lead", "eventos", "completa")
    put("msgs_robo", len(rm), "mensagens do robô (contexto)", "eventos", "completa")
    put("abordagens_followup", len(fu), "ações humanas de saída após ≥4 h sem resposta do lead; fragmentos ≤10 min = 1", "eventos", "completa")
    put("tentativas_ligacao_saida", cs["tentativas_saida"], "ligações de saída por humano (atendidas ou não), deduplicadas", "notas de chamada + API4com", "completa")
    put("ligacoes_saida_atendidas", cs["saida_atendidas"], "ligações de saída com duração > 0 (atendida ≠ conversa comercial)", "notas de chamada", "completa")
    put("chamadas_entrada", cs["entrada"], "ligações recebidas", "notas de chamada", "completa")
    put("dias_com_atuacao_humana", days_active, "dias distintos com ação humana", "eventos", "completa")
    put("tarefas_criadas", len(tasks_c), "tarefas criadas", "eventos", "completa")
    put("tarefas_concluidas", len(tasks_d), "tarefas concluídas (não prova ligação)", "eventos", "completa")
    put("tarefas_vencidas", len(tasks_overdue), "tarefas com prazo anterior ao corte sem conclusão", "eventos", "completa" if tasks_c else "não aplicável")
    res["followups"] = fu
    res["chamadas"] = cs
    res["marcos"] = milestones(evs)

    # tempos até marcos
    def t_to(action, pred=lambda e: True):
        if not t_ts:
            return UNAVAIL
        e = first_after(evs, t_ts, lambda x: x.action == action and pred(x))
        return _h((e.dt() - t_ts).total_seconds()) if e else NA
    put("h_ate_agendamento", t_to("meeting_scheduled"), "horas transferência → reunião agendada", "marcos", "completa")
    put("h_ate_reuniao_realizada", t_to("meeting_done"), "horas transferência → reunião realizada", "marcos", "completa")
    put("h_ate_envio_documento", t_to("document_sent"), "horas transferência → 1º documento enviado", "marcos", "completa")
    put("h_ate_assinatura_confirmada", t_to("document_signed", lambda e: e.meta.get("confirmed")), "horas transferência → assinatura comprovada", "marcos", "completa")

    # status da espera
    last = evs[-1] if evs else None
    if opened:
        status = "aguardando_equipe"
    elif last is None:
        status = "nao_determinavel"
    elif lead.get("status") in ("won", "lost"):
        status = "encerrado"
    elif any(e.agreed_return_at and parse_ts(e.agreed_return_at) > cutoff for e in evs):
        status = "retorno_combinado"
    elif last.actor_type == "human" and last.direction == "out":
        status = "aguardando_lead"
    else:
        status = "nao_determinavel"
    res["status_espera"] = status
    res["ultimo_evento"] = last.ts if last else None
    return res


def consolidate(per_lead: list[dict]) -> dict:
    """Totais, medianas por lead com denominador e cobertura. Não pondera por volume de mensagens."""
    out = {"n_casos": len(per_lead), "indicadores": {}}
    keys = set()
    for r in per_lead:
        keys |= set(r["indicadores"])
    for k in sorted(keys):
        vals = [r["indicadores"][k]["valor"] for r in per_lead if k in r["indicadores"]]
        num = [v for v in vals if isinstance(v, (int, float)) and v is not None]
        out["indicadores"][k] = {
            "n_com_dado": len(num), "n_na": len([v for v in vals if v == NA]), "n_indisponivel": len([v for v in vals if v == UNAVAIL or v is None]),
            "mediana": round(median(num), 2) if num else None, "min": min(num) if num else None, "max": max(num) if num else None,
            "soma": round(sum(num), 2) if num and k.startswith(("msgs", "abordagens", "tentativas", "ligacoes", "chamadas", "tarefas", "episodios", "dias")) else None,
            "denominador": f"{len(num)} de {len(per_lead)} casos",
            "definicao": next((r["indicadores"][k]["definicao"] for r in per_lead if k in r["indicadores"]), ""),
        }
    out["status_espera"] = {}
    for r in per_lead:
        out["status_espera"][r["status_espera"]] = out["status_espera"].get(r["status_espera"], 0) + 1
    out["transferencia"] = {}
    for r in per_lead:
        out["transferencia"][r["transfer_confidence"]] = out["transferencia"].get(r["transfer_confidence"], 0) + 1
    return out
