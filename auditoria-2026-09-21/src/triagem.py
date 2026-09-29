#!/usr/bin/env python3
"""Triagem dos candidatos coletados pela API (dados/restrito/raw_api) → dados/publico/triagem.json.

Por lead: criação, etapa atual, maior etapa atingida, tags, histórico de responsáveis, transferência para humano
(confirmada = 1ª mudança de responsável do usuário-robô/integração para pessoa; ou tag 'humano'; ou entrada em
'atendimento humano'), contagem de mensagens in/out antes e depois da transferência, chamadas, notas humanas, tarefas.
Elegível = ação humana (msg de saída após transferência, chamada, nota ou tarefa por usuário humano) dentro da janela.
"""
from __future__ import annotations
import json, glob, os, sys
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo
TZ = ZoneInfo("America/Sao_Paulo")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "dados/restrito/raw_api")
ROBOT_USERS = {"10348307"}          # Marketing Evolve = usuário de integração/automação (created_by 0 também é sistema)
HUMAN_STAGE = 108794987             # "atendimento humano"
WON, LOST = 142, 143

pipe = json.load(open(os.path.join(ROOT, "dados/publico/pipeline.json")))
ORDER = {s["status_id"]: s["order"] for s in pipe["statuses"]}
NAME = {s["status_id"]: s["name"] for s in pipe["statuses"]}
users = {str(u["id"]): u["name"] for u in json.load(open(os.path.join(RAW, "users.json")))}
meta = json.load(open(os.path.join(ROOT, "dados/publico/meta.json")))
cutoff = datetime.fromisoformat(meta["cutoff"])
CHAT = {}
_cp = os.path.join(RAW, "chat_events_45d.json")
if os.path.exists(_cp):
    for e in json.load(open(_cp)):
        CHAT.setdefault(e["entity_id"], []).append(e)
HUMAN_IDS = {u for u in users if u not in ROBOT_USERS}

def iso(ts): return datetime.fromtimestamp(ts, TZ).isoformat()

def triage(lead_dir):
    lead = json.load(open(f"{lead_dir}/lead.json"))
    ev = json.load(open(f"{lead_dir}/events.json"))
    ev = [e for e in ev if not e["type"].endswith("_chat_message")] + CHAT.get(int(os.path.basename(lead_dir)), [])
    ev = sorted(ev, key=lambda e: e["created_at"])
    notes = json.load(open(f"{lead_dir}/notes.json"))
    tasks = json.load(open(f"{lead_dir}/tasks.json"))
    lid = lead["id"]
    tags = [t["name"] for t in (lead.get("_embedded") or {}).get("tags") or []]
    cf = {c["field_name"]: [v.get("value") for v in c["values"]] for c in (lead.get("custom_fields_values") or [])}
    stages = [(e["created_at"], (e["value_before"] or [{}])[0].get("lead_status", {}).get("id"), (e["value_after"] or [{}])[0].get("lead_status", {}).get("id")) for e in ev if e["type"] == "lead_status_changed"]
    reached = {lead["status_id"]} | {s[2] for s in stages if s[2]} | {s[1] for s in stages if s[1]}
    reached_in_pipe = [s for s in reached if s in ORDER and s not in (WON, LOST)]
    max_stage = max(reached_in_pipe, key=lambda s: ORDER[s]) if reached_in_pipe else lead["status_id"]
    resp = [(e["created_at"], str((e["value_before"] or [{}])[0].get("responsible_user", {}).get("id")), str((e["value_after"] or [{}])[0].get("responsible_user", {}).get("id")), e["created_by"]) for e in ev if e["type"] == "entity_responsible_changed"]
    # transferência para humano: tag 'humano' | etapa 'atendimento humano' (confirmado) | 1ª tarefa para pessoa (inferido)
    cands = []
    for e in ev:
        if e["type"] == "entity_tag_added" and (e["value_after"] or [{}])[0].get("tag", {}).get("name", "").lower() == "humano":
            cands.append((e["created_at"], "confirmado", "tag 'humano' adicionada"))
    for ts, b, a in stages:
        if a == HUMAN_STAGE:
            cands.append((ts, "confirmado", "entrada na etapa 'atendimento humano'"))
    for t in tasks:
        if str(t.get("responsible_user_id")) in HUMAN_IDS:
            cands.append((t["created_at"], "inferido", f"1ª tarefa atribuída a pessoa ({(t.get('text') or '').strip()[:30] or 'sem texto'})"))
    cands.sort()
    transfer, conf, rule = (cands[0] if cands else (None, "nao_identificavel", None))
    tag_agente_inicial = any(e["type"] == "entity_tag_added" and (e["value_after"] or [{}])[0].get("tag", {}).get("name", "").lower() == "agente" for e in ev)
    msgs_in = [e["created_at"] for e in ev if e["type"] == "incoming_chat_message"]
    msgs_out = [e["created_at"] for e in ev if e["type"] == "outgoing_chat_message"]
    msgs_out_h = [e["created_at"] for e in ev if e["type"] == "outgoing_chat_message" and str(e["created_by"]) in HUMAN_IDS]
    msgs_out_r = [e["created_at"] for e in ev if e["type"] == "outgoing_chat_message" and str(e["created_by"]) not in HUMAN_IDS]
    calls = [n for n in notes if n["note_type"] in ("call_in", "call_out")]
    human_notes = [n for n in notes if n["note_type"] == "common" and str(n.get("created_by")) in users and str(n["created_by"]) not in ROBOT_USERS]
    human_tasks = [t for t in tasks if str(t.get("created_by")) in users and str(t["created_by"]) not in ROBOT_USERS]
    human_actions = msgs_out_h + [n["created_at"] for n in calls if str(n.get("created_by")) in HUMAN_IDS] + [n["created_at"] for n in human_notes] + [t["created_at"] for t in human_tasks]
    human_events_after = [ts for ts in human_actions if transfer and ts >= transfer]
    last_human = max(human_actions) if human_actions else None
    first_human = min(human_actions) if human_actions else None
    responsibles = sorted({users.get(a, a) for _, _, a, _ in resp if a in users and a not in ROBOT_USERS} | ({users.get(str(lead["responsible_user_id"]))} if str(lead["responsible_user_id"]) not in ROBOT_USERS else set()))
    return {
        "id": lid, "url": f"https://gabrielhabibadv.kommo.com/leads/detail/{lid}", "nome_restrito": lead.get("name"),
        "criado_em": iso(lead["created_at"]), "atualizado_em": iso(lead["updated_at"]), "fechado_em": iso(lead["closed_at"]) if lead.get("closed_at") else None,
        "etapa_atual": NAME.get(lead["status_id"], lead["status_id"]), "etapa_atual_id": lead["status_id"], "maior_etapa": NAME.get(max_stage, max_stage), "maior_etapa_ordem": ORDER.get(max_stage, 0),
        "status": "won" if lead["status_id"] == WON else "lost" if lead["status_id"] == LOST else "open",
        "loss_reason": ((lead.get("_embedded") or {}).get("loss_reason") or [{}])[0].get("name") if (lead.get("_embedded") or {}).get("loss_reason") else None,
        "servico": (cf.get("Serviço") or [None])[0], "origem": (cf.get("Origem") or [None])[0], "sub_origem": (cf.get("Sub Origem") or [None])[0], "qualificacao": (cf.get("Status de Qualificação") or [None])[0],
        "tags": tags, "responsavel_atual": users.get(str(lead["responsible_user_id"]), str(lead["responsible_user_id"])), "atendentes": [r for r in responsibles if r],
        "transfer_ts": iso(transfer) if transfer else None, "transfer_confidence": conf, "transfer_rule": rule,
        "msgs_in": len(msgs_in), "msgs_out": len(msgs_out), "msgs_out_humano": len(msgs_out_h), "msgs_out_robo": len(msgs_out_r), "tag_agente": tag_agente_inicial,
        "msgs_in_apos_transf": len([t for t in msgs_in if transfer and t >= transfer]), "msgs_out_humano_apos_transf": len([t for t in msgs_out_h if transfer and t >= transfer]), "msgs_robo_apos_transf": len([t for t in msgs_out_r if transfer and t >= transfer]),
        "acoes_humanas_total": len(human_actions), "acoes_humanas_apos_transf": len(human_events_after), "primeira_acao_humana": iso(first_human) if first_human else None,
        "chamadas": len(calls), "notas_humanas": len(human_notes), "tarefas_humanas": len(human_tasks), "tarefas_total": len(tasks),
        "ultima_acao_humana": iso(last_human) if last_human else None, "ultima_msg_lead": iso(max(msgs_in)) if msgs_in else None,
        "n_mudancas_etapa": len(stages), "criado_na_janela": None, "elegivel": None, "alerta_sem_atuacao": None,
    }

def main():
    rows = [triage(d) for d in sorted(glob.glob(os.path.join(RAW, "leads/*"))) if os.path.exists(f"{d}/lead.json") and os.path.exists(f"{d}/tasks.json")]
    for w in (15, 30):
        since = cutoff - timedelta(days=w)
        for r in rows:
            created = datetime.fromisoformat(r["criado_em"])
            lh = datetime.fromisoformat(r["ultima_acao_humana"]) if r["ultima_acao_humana"] else None
            r[f"criado_{w}d"] = created >= since
            r[f"elegivel_{w}d"] = bool(lh and lh >= since)
    for r in rows:
        r["criado_na_janela"] = r["criado_15d"]; r["elegivel"] = r["elegivel_15d"]
        r["alerta_sem_atuacao"] = bool(r["transfer_ts"] and r["acoes_humanas_apos_transf"] == 0)
    out = {"cutoff": meta["cutoff"], "candidatos_localizados": len(rows), "criados_15d": sum(r["criado_15d"] for r in rows), "criados_30d": sum(r["criado_30d"] for r in rows),
           "elegiveis_15d": sum(r["elegivel_15d"] for r in rows), "elegiveis_30d": sum(r["elegivel_30d"] for r in rows),
           "com_transferencia": sum(1 for r in rows if r["transfer_ts"]), "transferidos_sem_atuacao_humana": sum(1 for r in rows if r["alerta_sem_atuacao"]),
           "leads": rows}
    json.dump(out, open(os.path.join(ROOT, "dados/restrito/triagem.json"), "w"), ensure_ascii=False, indent=1)
    pub = dict(out); pub["leads"] = [{k: v for k, v in r.items() if k != "nome_restrito"} for r in rows]
    json.dump(pub, open(os.path.join(ROOT, "dados/publico/triagem_resumo.json"), "w"), ensure_ascii=False, indent=1)
    print({k: v for k, v in out.items() if k != "leads"})

if __name__ == "__main__":
    main()
