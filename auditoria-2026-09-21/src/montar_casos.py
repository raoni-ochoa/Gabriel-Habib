#!/usr/bin/env python3
"""Monta dados/restrito/leads/{id}.json (esquema Event) a partir de raw_api + chat_events + transcrições, para os casos selecionados.
Também grava dados/publico/selecao.json. Regras: docs/METODOLOGIA.md. Sem texto de chat (API v4): toda mensagem do lead é
tratada como 'exige retorno' (requires_reply=True, meta.assumido=True) — regra conservadora, a refinar com leitura no navegador."""
import json, os, sys, glob, collections
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo
TZ = ZoneInfo("America/Sao_Paulo")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "dados/restrito/raw_api"); GRAV = os.path.join(ROOT, "dados/restrito/gravacoes"); OUT = os.path.join(ROOT, "dados/restrito/leads"); os.makedirs(OUT, exist_ok=True)
sys.path.insert(0, os.path.join(ROOT, "src"))
from schema import Event
ROBOT_USERS = {"10348307"}
users = {str(u["id"]): u["name"] for u in json.load(open(f"{RAW}/users.json"))}
HUMAN_IDS = {u for u in users if u not in ROBOT_USERS}
pipe = json.load(open(os.path.join(ROOT, "dados/publico/pipeline.json"))); NAME = {s["status_id"]: s["name"] for s in pipe["statuses"]}
ACC = "https://gabrielhabibadv.kommo.com"
chat = collections.defaultdict(list)
for e in json.load(open(f"{RAW}/chat_events_45d.json")): chat[e["entity_id"]].append(e)
# minutos de lote (msgs humanas para ≥4 leads no mesmo minuto)
hm = collections.defaultdict(set)
for evs in chat.values():
    for e in evs:
        if e["type"] == "outgoing_chat_message" and str(e["created_by"]) in HUMAN_IDS:
            hm[datetime.fromtimestamp(e["created_at"], TZ).strftime("%Y-%m-%d %H:%M")].add(e["entity_id"])
BURST = {k for k, v in hm.items() if len(v) >= 4}
BATCH_TAG_MIN = {"2026-09-17T09:29", "2026-09-17T09:30", "2026-09-17T09:31"}
tri = {r["id"]: r for r in json.load(open(os.path.join(ROOT, "dados/restrito/triagem.json")))["leads"]}
transc = {}
for f in glob.glob(f"{GRAV}/*.json"):
    d = json.load(open(f)); transc[d["uniq"]] = d

def iso(ts): return datetime.fromtimestamp(ts, TZ).isoformat()
def actor(by):
    b = str(by)
    if b == "0": return "system", None
    if b in ROBOT_USERS: return "undetermined", users[b] + " (conta de integração/compartilhada)"
    if b in HUMAN_IDS: return "human", users[b]
    return "undetermined", None

def montar(lid, motivo, legacy):
    d = f"{RAW}/leads/{lid}"; lead = json.load(open(f"{d}/lead.json")); notes = json.load(open(f"{d}/notes.json")); tasks = json.load(open(f"{d}/tasks.json"))
    raw_ev = [e for e in json.load(open(f"{d}/events.json")) if not e["type"].endswith("_chat_message")] + chat.get(lid, [])
    ref = f"{ACC}/leads/detail/{lid}"
    evs = []
    tags_hist = []
    for e in sorted(raw_ev, key=lambda x: x["created_at"]):
        t = e["type"]; ts = iso(e["created_at"]); va = (e.get("value_after") or [{}])[0]; vb = (e.get("value_before") or [{}])[0]
        base = dict(lead_id=str(lid), ts=ts, ts_precision="s", source="kommo_api", ref=f"{ref} · {ts} · evento {e['id']}")
        at, an = actor(e["created_by"])
        if t == "incoming_chat_message":
            evs.append(Event(id=e["id"], channel="whatsapp", direction="in", actor_type="lead", action="message", content="[mensagem do lead — texto não exposto pela API]", requires_reply=True, meta={"assumido": True, "talk_id": va.get("message", {}).get("talk_id")}, **base))
        elif t == "outgoing_chat_message":
            if at == "system": at, an = "robot", "Agente (robô)"
            m = datetime.fromtimestamp(e["created_at"], TZ).strftime("%Y-%m-%d %H:%M")
            evs.append(Event(id=e["id"], channel="whatsapp", direction="out", actor_type=at, actor_id=str(e["created_by"]), actor_name=an, action="message", content="[mensagem de saída — texto não exposto pela API]" + (" · possível envio em lote" if m in BURST else ""), meta={"talk_id": va.get("message", {}).get("talk_id"), "lote": m in BURST}, **base))
        elif t == "lead_status_changed":
            evs.append(Event(id=e["id"], channel="system", direction="internal", actor_type=at, actor_id=str(e["created_by"]), actor_name=an, action="stage_change", content=f"{NAME.get(vb.get('lead_status', {}).get('id'), '?')} → {NAME.get(va.get('lead_status', {}).get('id'), '?')}", meta={"from": vb.get("lead_status", {}).get("id"), "to": va.get("lead_status", {}).get("id")}, **base))
        elif t == "entity_responsible_changed":
            evs.append(Event(id=e["id"], channel="system", direction="internal", actor_type=at, actor_id=str(e["created_by"]), actor_name=an, action="responsible_change", content=f"{users.get(str(vb.get('responsible_user', {}).get('id')), '?')} → {users.get(str(va.get('responsible_user', {}).get('id')), '?')}", meta={}, **base))
        elif t == "entity_tag_added":
            name = va.get("tag", {}).get("name", ""); tags_hist.append((ts, "+", name))
            evs.append(Event(id=e["id"], channel="system", direction="internal", actor_type=at, actor_id=str(e["created_by"]), actor_name=an, action="tag_added", content=f"+tag {name}" + (" (lote 17/09)" if name.lower() == "humano" and ts[:16] in BATCH_TAG_MIN else ""), meta={"tag": name, "lote": name.lower() == "humano" and ts[:16] in BATCH_TAG_MIN}, **base))
        elif t == "entity_tag_deleted":
            name = vb.get("tag", {}).get("name", ""); tags_hist.append((ts, "-", name))
            evs.append(Event(id=e["id"], channel="system", direction="internal", actor_type=at, actor_id=str(e["created_by"]), actor_name=an, action="other", content=f"-tag {name}", meta={"tag": name}, **base))
        elif t in ("outgoing_call", "incoming_call", "common_note_added", "service_note_added", "lead_added"):
            if t == "lead_added":
                evs.append(Event(id=e["id"], channel="system", direction="internal", actor_type="system", action="other", content="lead criado", meta={}, **base))
            # chamadas e notas: detalhe vem das notas abaixo
        elif t.startswith("custom_field") or t in ("name_field_changed", "entity_linked"):
            continue
        else:
            evs.append(Event(id=e["id"], channel="system", direction="internal", actor_type=at, actor_id=str(e["created_by"]), actor_name=an, action="other", content=t, meta={}, **base))
    for n in notes:
        ts = iso(n["created_at"]); p = n.get("params") or {}; at, an = actor(n["created_by"])
        base = dict(lead_id=str(lid), ts=ts, ts_precision="s", source="kommo_api", ref=f"{ref} · {ts} · nota {n['id']}")
        if n["note_type"] in ("call_in", "call_out"):
            dur = int(p.get("duration") or 0); uniq = p.get("uniq"); tr = transc.get(uniq)
            if n["note_type"] == "call_out": action = "call_answered" if dur > 0 else "call_attempt"
            else: action = "call_incoming" if dur > 0 else "call_incoming_missed"
            meta = {"duration": dur, "link": p.get("link"), "phone": p.get("phone"), "source": p.get("source"), "uniq": uniq, "call_status": p.get("call_status"), "call_result": p.get("call_result"),
                    "recording_access": (tr["link_tested"] if tr else ("nao_testado" if p.get("link") else "sem_link")), "transcript": (tr["text"] if tr and tr.get("text") else None), "transcript_segments": (tr["segments"] if tr and tr.get("segments") else None)}
            evs.append(Event(id=f"n{n['id']}", channel="call", direction="out" if n["note_type"] == "call_out" else "in", actor_type=at if n["note_type"] == "call_out" else "lead", actor_id=str(n["created_by"]), actor_name=an, action=action, content=f"{p.get('call_result') or n['note_type']} · {dur}s", meta=meta, **base))
        elif n["note_type"] == "common":
            txt = p.get("text", "") or ""
            kind = "resumo_automatico" if txt.startswith("# Resumo Gerencial") or txt.startswith("### Avaliação por Etapa do SPIN") else ("sync_robo" if ("Pré triagem" in txt or "sincronizada" in txt or "sincronizado" in txt) else "nota")
            evs.append(Event(id=f"n{n['id']}", channel="note", direction="internal", actor_type=("system" if kind != "nota" or at == "system" else at), actor_id=str(n["created_by"]), actor_name=an, action="note", content=txt, meta={"kind": kind}, **base))
        else:
            evs.append(Event(id=f"n{n['id']}", channel="note", direction="internal", actor_type=at, action="note", content=f"[{n['note_type']}] {json.dumps(p, ensure_ascii=False)[:200]}", meta={}, **base))
    for t in tasks:
        ts = iso(t["created_at"]); at, an = actor(t.get("created_by")); due = iso(t["complete_till"]) if t.get("complete_till") else None
        base = dict(lead_id=str(lid), ts=ts, ts_precision="s", source="kommo_api", ref=f"{ref} · {ts} · tarefa {t['id']}")
        evs.append(Event(id=f"t{t['id']}", channel="task", direction="internal", actor_type=at, actor_id=str(t.get("created_by")), actor_name=an, action="task_created", content=(t.get("text") or "").strip() or "(sem texto)", meta={"due": due, "completed": bool(t.get("is_completed")), "responsible": users.get(str(t.get("responsible_user_id"))), "result": (t.get("result") or {}).get("text") if isinstance(t.get("result"), dict) else None}, **base))
        if t.get("is_completed") and t.get("updated_at"):
            evs.append(Event(id=f"tc{t['id']}", channel="task", direction="internal", actor_type="human" if t.get("responsible_user_id") and str(t["responsible_user_id"]) in HUMAN_IDS else "undetermined", actor_name=users.get(str(t.get("responsible_user_id"))), action="task_completed", content=(t.get("text") or "").strip() or "(sem texto)", meta={"result": (t.get("result") or {}).get("text") if isinstance(t.get("result"), dict) else None}, lead_id=str(lid), ts=iso(t["updated_at"]), ts_precision="s", source="kommo_api", ref=f"{ref} · {iso(t['updated_at'])} · tarefa {t['id']} (concluída; horário = última atualização)"))
    evs.sort(key=lambda e: e.ts)
    # transferência (com correção de lote)
    r = tri[lid]; tr_ts, conf, rule = r["transfer_ts"], r["transfer_confidence"], r["transfer_rule"]
    if tr_ts and tr_ts[:16] in BATCH_TAG_MIN:
        conf, rule = "nao_identificavel", "tag 'humano' adicionada em lote (17/09 09:31, 36 leads) — não usada"; tr_ts = None
    if tr_ts and tr_ts[:16] == r["criado_em"][:16] and rule and rule.startswith("tag 'humano'"):
        rule += " no momento da criação (roteamento direto para humano)"
    if tr_ts is None and not any(e.actor_type == "robot" for e in evs) and any(e.actor_type == "human" for e in evs):
        tr_ts, conf, rule = iso(lead["created_at"]), "inferido", "lead criado sem atuação do robô; atendimento humano desde a criação (marco = criação do lead)"
    if tr_ts:
        evs.append(Event(id=f"transfer-{lid}", channel="system", direction="internal", actor_type="system", action="transfer", content=f"transferência para humano ({conf}): {rule}", meta={}, lead_id=str(lid), ts=tr_ts, ts_precision="s", source="kommo_api", ref=f"{ref} · {tr_ts}"))
        evs.sort(key=lambda e: e.ts)
    cf = {c["field_name"]: [v.get("value") for v in c["values"]] for c in (lead.get("custom_fields_values") or [])}
    tags = [t["name"] for t in (lead.get("_embedded") or {}).get("tags") or []]
    robo_ctx = [e.content for e in evs if e.action == "note" and e.meta.get("kind") == "sync_robo"]
    tl = " ".join(tags).lower(); sync = " ".join(robo_ctx).lower()
    if (cf.get("Serviço") or [None])[0]: serv = (cf.get("Serviço") or [None])[0]
    elif "reconhecimento" in tl or "reconhecimento de vínculo" in sync or any(k.startswith("[TR]") for k in cf): serv = "[TRABALHISTA] Reconhecimento de vínculo"
    elif "acidente" in tl or "auxílio acidente" in sync or "auxilio acidente" in sync: serv = "[PREVIDENCIÁRIO] Auxílio acidente"
    elif "suprimid" in tl or "horas extras" in sync: serv = "[TRABALHISTA] Direito suprimido"
    elif "trabalhista" in tl or "[t] " in " ".join(k.lower() for k in cf): serv = "[TRABALHISTA] genérico (serviço não especificado no CRM)"
    else: serv = "não informado no CRM"
    humans = sorted({e.actor_name for e in evs if e.actor_type == "human" and e.actor_name and e.action in ("message", "call_attempt", "call_answered", "note", "task_created")})
    formu = {k: v for k, v in cf.items() if k.startswith("[TR]") or k in ("[T] Situação", "[T] Vínculo", "[T] Tem Provas", "[T] Irregularidades", "Status de Qualificação", "Score")}
    case = {"lead": {"id": str(lid), "nome": lead.get("name"), "url": ref, "servico": serv, "origem": " / ".join(x for x in [(cf.get("Origem") or [None])[0], (cf.get("Sub Origem") or [None])[0], (cf.get("utm_source") or [None])[0]] if x) or None,
                     "criado_em": iso(lead["created_at"]), "atendentes": humans, "responsavel_atual": users.get(str(lead["responsible_user_id"])), "etapa_atual": NAME.get(lead["status_id"]), "etapa_max": r["maior_etapa"],
                     "status": r["status"], "motivo_perda": r.get("loss_reason"), "tags": tags, "legacy": legacy, "motivo_selecao": motivo,
                     "contexto_robo": ("; ".join(sorted(set(x.replace("\n", " ") for x in robo_ctx)))[:400] or "sem notas de sincronização do robô") + (" · formulário/qualificação: " + "; ".join(f"{k}: {', '.join(str(x) for x in v)}" for k, v in formu.items()) if formu else ""),
                     "transfer": {"ts": tr_ts, "confidence": conf, "rule": rule}},
            "events": [e.to_dict() for e in evs], "ratings": {}, "calls_analysis": [], "analysis": {}}
    prev = f"{OUT}/{lid}.json"
    if os.path.exists(prev):
        old = json.load(open(prev)); case["ratings"] = old.get("ratings", {}); case["calls_analysis"] = old.get("calls_analysis", []); case["analysis"] = old.get("analysis", {})
    json.dump(case, open(prev, "w"), ensure_ascii=False, indent=1)
    return case

SEL = [
    (79763954, "Avançado: ganho (Ativação; maior etapa Assinatura), criado na janela de 15 d, condução por texto com 1 ligação", False),
    (80064014, "Avançado: Negociação, criado na janela de 15 d, condução por texto sem ligação", False),
    (79877820, "Avançado: etapa 'atendimento humano', criado na janela de 15 d, 6 ligações com gravação e resumo automático", False),
    (80038784, "Avançado: etapa 'atendimento humano', criado na janela de 15 d, mensagens + 2 ligações", False),
    (79533290, "Avançado: Negociação, criado há 24 d (janela de 30 d), 2 atendentes, conversa longa ainda ativa no corte", True),
    (79490552, "Avançado: ganho (maior etapa Validação de documentação), criado há 26 d (janela de 30 d), 2 atendentes", True),
    (77456896, "Avançado: Negociação, serviço previdenciário (auxílio-acidente), lead antigo (jun/26) com 11 ligações e atuação até 28/09", True),
    (80105650, "Travado/perdido: Desqualificado após atuação humana e 2 ligações, criado na janela de 15 d", False),
    (80012252, "Travado/perdido: Desqualificado após conversa longa com o robô e pouca atuação humana + 1 ligação, criado na janela de 15 d", False),
    (79358770, "Travado: chegou a Negociação e voltou para Análise de viabilidade; 3 ligações, tarefas e notas; criado há 32 d", True),
]
if __name__ == "__main__":
    cases = [montar(*s) for s in SEL]
    tri_all = json.load(open(os.path.join(ROOT, "dados/publico/triagem_resumo.json")))
    alert = [{"lead_id": r["id"], "transfer_ts": r["transfer_ts"], "obs": f"transferido ({r['transfer_confidence']}) sem ação humana registrada; etapa {r['etapa_atual']}"} for r in tri_all["leads"] if r["alerta_sem_atuacao"] and r["criado_15d"] and r["transfer_ts"] and r["transfer_ts"][:16] not in BATCH_TAG_MIN]
    sel = {"cutoff": tri_all["cutoff"], "filtros": "GET /api/v4/leads filter[pipeline_id]=13587595 com created_at ≥ corte−30d OU updated_at ≥ corte−30d, paginação completa (limit 250); eventos por lead + eventos de chat da conta (45 d) agrupados por lead; notas, tarefas e conversas por lead",
           "periodo": "janela primária 15 d (13/09–28/09/2026); ampliada para 30 d (29/08–28/09) para completar avançados; 1 lead antigo (jun/26) com atuação recente identificado separadamente",
           "candidatos_localizados": tri_all["candidatos_localizados"], "criados_15d": tri_all["criados_15d"], "criados_30d": tri_all["criados_30d"], "elegiveis": tri_all["elegiveis_15d"], "elegiveis_30d": tri_all["elegiveis_30d"], "selecionados": len(SEL),
           "regra_elegibilidade": "≥1 ação humana (mensagem de saída por usuário humano, ligação, nota ou tarefa criada por humano) dentro da janela; data de atualização do cadastro não conta",
           "motivos": [f"{lid}: {m}" for lid, m, _ in SEL], "reservas": ["79964636 (Em atendimento, 3 ligações, transferência não identificável)", "79411452 (ganho, 95 mensagens, criado 29/08)"],
           "lotes_detectados": {"tag_humano_em_lote": "17/09/2026 09:30–09:31 em 36 leads — desconsiderada como transferência", "mensagens_humanas_em_lote": sorted(BURST)},
           "alertas_sem_atuacao": alert, "transferidos_sem_atuacao_15d": len(alert)}
    json.dump(sel, open(os.path.join(ROOT, "dados/publico/selecao.json"), "w"), ensure_ascii=False, indent=1)
    for c in cases:
        l = c["lead"]; ev = c["events"]
        print(l["id"], l["etapa_atual"], "|", l["servico"][:30], "|", l["atendentes"], "| transf", (l["transfer"]["ts"] or "")[:16], l["transfer"]["confidence"], "| eventos", len(ev), "| msgs lead", sum(1 for e in ev if e["actor_type"] == "lead" and e["action"] == "message"), "| msgs humanas", sum(1 for e in ev if e["actor_type"] == "human" and e["action"] == "message"), "| robô", sum(1 for e in ev if e["actor_type"] == "robot" and e["action"] == "message"), "| chamadas", sum(1 for e in ev if e["channel"] == "call"))
    print("alertas sem atuação (15d):", len(alert))
