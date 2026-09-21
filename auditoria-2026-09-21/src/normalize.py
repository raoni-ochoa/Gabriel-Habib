"""Normalização de dados brutos do Kommo (API v4 ou captura de navegador) para o esquema Event.

Regras documentadas em docs/METODOLOGIA.md. Nenhuma função escreve no CRM.
"""
from __future__ import annotations
import hashlib
from datetime import datetime, timedelta
from typing import Iterable
from schema import Event, TZ, parse_ts

# ---------- autoria ----------

def classify_actor(created_by, users: dict, robot_ids: set[str], origin_hint: str | None = None) -> tuple[str, str | None]:
    """Retorna (actor_type, actor_name).
    users: {id: {"name":..., "is_robot": bool, "shared": bool}}
    created_by == 0 costuma ser "sistema/robô" na API do Kommo.
    """
    if created_by is None:
        return "undetermined", None
    cid = str(created_by)
    if cid == "0":
        return ("robot" if origin_hint == "bot" else "system"), None
    if cid in robot_ids or users.get(cid, {}).get("is_robot"):
        return "robot", users.get(cid, {}).get("name")
    u = users.get(cid)
    if not u:
        return "undetermined", None
    name = u["name"] + (" (conta compartilhada)" if u.get("shared") else "")
    return "human", name


def _eid(*parts) -> str:
    return hashlib.sha1("|".join(str(p) for p in parts).encode()).hexdigest()[:12]


def _iso(ts: int | float) -> str:
    return datetime.fromtimestamp(int(ts), TZ).isoformat()

# ---------- API v4 ----------

def from_api_events(lead_id: str | int, events: Iterable[dict], users: dict, robot_ids: set[str], account_url: str) -> list[Event]:
    """Converte eventos de GET /api/v4/events (filter[entity]=lead) em Event."""
    out: list[Event] = []
    lead_ref = f"{account_url}/leads/detail/{lead_id}"
    for e in events:
        t = e.get("type")
        ts = _iso(e["created_at"])
        by = e.get("created_by")
        va = (e.get("value_after") or [{}])[0] if e.get("value_after") else {}
        vb = (e.get("value_before") or [{}])[0] if e.get("value_before") else {}
        base = dict(lead_id=str(lead_id), ts=ts, ts_precision="s", source="kommo_api",
                    ref=f"{lead_ref} · evento {e.get('id')} · {ts}")
        if t == "incoming_chat_message":
            out.append(Event(id=_eid("ev", e["id"]), channel="whatsapp", direction="in", actor_type="lead",
                             action="message", content="[texto não exposto pela API v4]", meta={"raw_type": t, "va": va}, **base))
        elif t == "outgoing_chat_message":
            at, an = classify_actor(by, users, robot_ids, origin_hint="bot" if (va.get("message") or {}).get("origin") in ("salesbot", "bot") else None)
            out.append(Event(id=_eid("ev", e["id"]), channel="whatsapp", direction="out", actor_type=at, actor_id=str(by), actor_name=an,
                             action="message", content="[texto não exposto pela API v4]", meta={"raw_type": t, "va": va}, **base))
        elif t in ("incoming_call", "outgoing_call"):
            # detalhe (duração/status) vem das notas call_in/call_out; aqui só marcamos o evento
            at, an = classify_actor(by, users, robot_ids)
            out.append(Event(id=_eid("ev", e["id"]), channel="call", direction="in" if t == "incoming_call" else "out",
                             actor_type="lead" if t == "incoming_call" else at, actor_id=str(by), actor_name=an,
                             action="call_incoming" if t == "incoming_call" else "call_attempt", meta={"raw_type": t, "va": va}, **base))
        elif t == "lead_status_changed":
            at, an = classify_actor(by, users, robot_ids)
            out.append(Event(id=_eid("ev", e["id"]), channel="system", direction="internal", actor_type=at, actor_id=str(by), actor_name=an,
                             action="stage_change", content="", meta={"from": vb.get("lead_status"), "to": va.get("lead_status")}, **base))
        elif t == "entity_responsible_changed":
            at, an = classify_actor(by, users, robot_ids)
            out.append(Event(id=_eid("ev", e["id"]), channel="system", direction="internal", actor_type=at, actor_id=str(by), actor_name=an,
                             action="responsible_change", meta={"from": vb.get("responsible_user"), "to": va.get("responsible_user")}, **base))
        elif t == "entity_tag_added":
            at, an = classify_actor(by, users, robot_ids)
            out.append(Event(id=_eid("ev", e["id"]), channel="system", direction="internal", actor_type=at, actor_id=str(by), actor_name=an,
                             action="tag_added", content=str(va.get("tag", {}).get("name", "")), meta={"va": va}, **base))
        elif t == "task_added":
            at, an = classify_actor(by, users, robot_ids)
            out.append(Event(id=_eid("ev", e["id"]), channel="task", direction="internal", actor_type=at, actor_id=str(by), actor_name=an,
                             action="task_created", content=str(va.get("task", {}).get("text", "")), meta={"va": va}, **base))
        elif t == "task_completed":
            at, an = classify_actor(by, users, robot_ids)
            out.append(Event(id=_eid("ev", e["id"]), channel="task", direction="internal", actor_type=at, actor_id=str(by), actor_name=an,
                             action="task_completed", content=str(va.get("task", {}).get("text", "")), meta={"va": va}, **base))
        elif t in ("common_note_added", "service_note_added"):
            at, an = classify_actor(by, users, robot_ids)
            out.append(Event(id=_eid("ev", e["id"]), channel="note", direction="internal", actor_type=at if t == "common_note_added" else "system",
                             actor_id=str(by), actor_name=an, action="note", content=str(va.get("note", {}).get("text", "")), meta={"va": va}, **base))
        elif t == "robot_replied":
            out.append(Event(id=_eid("ev", e["id"]), channel="system", direction="internal", actor_type="robot", action="other", content="bot iniciado", meta={"raw_type": t}, **base))
        else:
            at, an = classify_actor(by, users, robot_ids)
            out.append(Event(id=_eid("ev", e["id"]), channel="system", direction="internal", actor_type=at, actor_id=str(by), actor_name=an,
                             action="other", content=t or "", meta={"raw_type": t, "va": va}, **base))
    return out


def from_api_notes(lead_id: str | int, notes: Iterable[dict], users: dict, robot_ids: set[str], account_url: str) -> list[Event]:
    """Notas call_in/call_out/common/service_message → Event. Chamadas trazem duração e link."""
    out: list[Event] = []
    lead_ref = f"{account_url}/leads/detail/{lead_id}"
    for n in notes:
        nt = n.get("note_type")
        p = n.get("params") or {}
        ts = _iso(n["created_at"])
        by = n.get("created_by")
        at, an = classify_actor(by, users, robot_ids)
        base = dict(lead_id=str(lead_id), ts=ts, ts_precision="s", source="kommo_api",
                    ref=f"{lead_ref} · nota {n.get('id')} · {ts}")
        if nt in ("call_in", "call_out"):
            dur = int(p.get("duration") or 0)
            if nt == "call_out":
                action = "call_answered" if dur > 0 else "call_attempt"
            else:
                action = "call_incoming" if dur > 0 else "call_incoming_missed"
            out.append(Event(id=_eid("note", n["id"]), channel="call", direction="in" if nt == "call_in" else "out",
                             actor_type=at if nt == "call_out" else "lead", actor_id=str(by), actor_name=an, action=action,
                             content=f"chamada {nt} · {dur}s", meta={"duration": dur, "link": p.get("link"), "phone": p.get("phone"),
                             "source": p.get("source"), "uniq": p.get("uniq"), "call_status": p.get("call_status"),
                             "call_result": p.get("call_result"), "responsible": n.get("responsible_user_id")}, **base))
        elif nt in ("common", "service_message", "extended_service_message"):
            out.append(Event(id=_eid("note", n["id"]), channel="note", direction="internal",
                             actor_type=at if nt == "common" else "system", actor_id=str(by), actor_name=an,
                             action="note", content=str(p.get("text", "")), meta={"service": p.get("service")}, **base))
    return out

# ---------- deduplicação de chamadas ----------

def dedupe_calls(events: list[Event], window_s: int = 120) -> list[Event]:
    """Remove chamadas duplicadas entre fontes (Kommo × API4com).
    Chave forte: meta.uniq ou meta.call_id igual. Chave fraca: mesmo telefone, mesma direção, |Δt| ≤ window_s.
    Mantém o evento com mais informação (duração/link) e registra em meta.duplicates."""
    calls = [e for e in events if e.channel == "call"]
    others = [e for e in events if e.channel != "call"]
    kept: list[Event] = []
    for c in sorted(calls, key=lambda e: e.ts):
        dup = None
        for k in kept:
            strong = (c.meta.get("uniq") and c.meta.get("uniq") == k.meta.get("uniq")) or \
                     (c.meta.get("call_id") and c.meta.get("call_id") == k.meta.get("call_id"))
            weak = (c.direction == k.direction and c.meta.get("phone") and c.meta.get("phone") == k.meta.get("phone")
                    and abs((c.dt() - k.dt()).total_seconds()) <= window_s)
            if strong or weak:
                dup = k
                break
        if dup is None:
            kept.append(c)
        else:
            richer = c if (c.meta.get("duration") or 0) > (dup.meta.get("duration") or 0) or (c.meta.get("link") and not dup.meta.get("link")) else dup
            loser = dup if richer is c else c
            richer.meta.setdefault("duplicates", []).append({"id": loser.id, "source": loser.source, "ref": loser.ref})
            if richer is c:
                kept[kept.index(dup)] = c
    return sorted(others + kept, key=lambda e: e.ts)


# ---------- agrupamento de mensagens fragmentadas ----------

def group_fragments(events: list[Event], gap_min: int = 10) -> list[list[Event]]:
    """Agrupa mensagens consecutivas do mesmo actor_type/actor_id em abordagens (gap ≤ gap_min)."""
    groups: list[list[Event]] = []
    for e in sorted(events, key=lambda x: x.ts):
        if e.action != "message":
            groups.append([e]); continue
        if groups and groups[-1][-1].action == "message" and groups[-1][-1].actor_type == e.actor_type \
                and groups[-1][-1].actor_id == e.actor_id and (e.dt() - groups[-1][-1].dt()) <= timedelta(minutes=gap_min):
            groups[-1].append(e)
        else:
            groups.append([e])
    return groups
