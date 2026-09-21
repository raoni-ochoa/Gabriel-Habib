"""Esquema de eventos normalizados e constantes da auditoria (somente leitura)."""
from __future__ import annotations
from dataclasses import dataclass, field, asdict
from datetime import datetime
from typing import Any, Optional
from zoneinfo import ZoneInfo

TZ = ZoneInfo("America/Sao_Paulo")

ACTOR_TYPES = ("human", "robot", "lead", "system", "undetermined")
CHANNELS = ("whatsapp", "call", "note", "task", "system", "email", "other")
DIRECTIONS = ("in", "out", "internal")
ACTIONS = (
    "message", "call_attempt", "call_answered", "call_incoming", "call_incoming_missed",
    "note", "task_created", "task_completed", "stage_change", "responsible_change",
    "tag_added", "transfer", "document_sent", "document_signed", "meeting_offered",
    "meeting_accepted", "meeting_scheduled", "meeting_confirmed", "meeting_done",
    "meeting_noshow", "meeting_reschedule", "proposal_presented", "legal_handoff", "other",
)
# Ações humanas que contam como "dirigidas ao lead" (contato)
CONTACT_ACTIONS = {"message", "call_attempt", "call_answered", "document_sent",
                   "meeting_offered", "meeting_scheduled", "proposal_presented"}
WAIT_STATUS = ("aguardando_equipe", "aguardando_lead", "retorno_combinado", "encerrado", "nao_determinavel")


@dataclass
class Event:
    id: str
    lead_id: str
    ts: str                       # ISO-8601 com fuso
    channel: str
    direction: str
    actor_type: str
    action: str
    actor_id: Optional[str] = None
    actor_name: Optional[str] = None
    content: str = ""
    ts_precision: str = "min"     # s | min | day
    source: str = "kommo_ui"
    ref: str = ""                 # referência para conferência
    meta: dict = field(default_factory=dict)
    # Marcações analíticas (preenchidas na normalização/anotação manual documentada)
    requires_reply: Optional[bool] = None   # mensagens do lead que exigem retorno
    agreed_return_at: Optional[str] = None  # retorno combinado (ISO)

    def dt(self) -> datetime:
        return parse_ts(self.ts)

    def to_dict(self) -> dict:
        return asdict(self)


def parse_ts(s: str) -> datetime:
    d = datetime.fromisoformat(s)
    if d.tzinfo is None:
        d = d.replace(tzinfo=TZ)
    return d.astimezone(TZ)


def event_from_dict(d: dict[str, Any]) -> Event:
    known = {k: d.get(k) for k in Event.__dataclass_fields__ if k in d}
    ev = Event(**known)
    assert ev.actor_type in ACTOR_TYPES, ev.actor_type
    assert ev.channel in CHANNELS, ev.channel
    assert ev.direction in DIRECTIONS, ev.direction
    assert ev.action in ACTIONS, ev.action
    return ev
