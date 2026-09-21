"""Testes das fórmulas com FIXTURES SINTÉTICAS (não são dados do cliente; nunca entram no painel)."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "src"))
from datetime import datetime
from schema import Event, TZ
from metrics import wait_episodes, followups, lead_metrics, consolidate, NA, UNAVAIL
from normalize import dedupe_calls, group_fragments, classify_actor
from rubric import score

CUT = datetime(2026, 9, 21, 17, 0, tzinfo=TZ)


def ev(i, ts, actor, action, direction="out", channel="whatsapp", **meta):
    rr = meta.pop("requires_reply", None)
    ar = meta.pop("agreed_return_at", None)
    return Event(id=f"e{i}", lead_id="L1", ts=f"2026-09-{ts}-03:00", channel=channel, direction=direction, actor_type=actor,
                 action=action, actor_id="7" if actor == "human" else None, actor_name="Atendente X" if actor == "human" else None,
                 ref=f"ref{i}", meta=meta, requires_reply=rr, agreed_return_at=ar)


def test_wait_episode_groups_fragments_and_measures_from_last_lead_msg():
    evs = [ev(1, "10T10:00", "lead", "message", "in", requires_reply=True),
           ev(2, "10T10:02", "lead", "message", "in", requires_reply=True),
           ev(3, "10T11:02", "human", "message")]
    eps = wait_episodes(evs, CUT, None)
    assert len(eps) == 1 and eps[0]["wait_seconds"] == 3600 and not eps[0]["open"]


def test_open_episode_counts_to_cutoff_not_zero():
    evs = [ev(1, "20T17:00", "lead", "message", "in", requires_reply=True)]
    eps = wait_episodes(evs, CUT, None)
    assert eps[0]["open"] and eps[0]["elapsed_to_cutoff_seconds"] == 24 * 3600
    m = lead_metrics({"id": "L1", "transfer": {}}, evs, CUT)
    assert m["indicadores"]["mediana_resposta_h"]["valor"] == NA
    assert m["indicadores"]["espera_aberta_h"]["valor"] == 24.0
    assert m["status_espera"] == "aguardando_equipe"


def test_thanks_without_requires_reply_does_not_open_episode():
    evs = [ev(1, "10T10:00", "human", "message"), ev(2, "10T10:05", "lead", "message", "in", requires_reply=False)]
    assert wait_episodes(evs, CUT, None) == []
    m = lead_metrics({"id": "L1", "transfer": {}}, evs, CUT)
    assert m["status_espera"] == "nao_determinavel"


def test_transfer_unknown_gives_unavailable_never_zero():
    evs = [ev(1, "10T10:00", "human", "message")]
    m = lead_metrics({"id": "L1", "transfer": {}}, evs, CUT)
    assert m["indicadores"]["h_transf_primeira_tentativa"]["valor"] == UNAVAIL


def test_transfer_to_first_attempt_and_call_counts():
    evs = [ev(1, "10T09:00", "robot", "message"),
           ev(2, "10T09:30", "system", "transfer", "internal", "system"),
           ev(3, "10T10:00", "human", "call_attempt", "out", "call", duration=0),
           ev(4, "10T10:05", "human", "message"),
           ev(5, "10T12:00", "lead", "message", "in", requires_reply=True),
           ev(6, "10T12:30", "human", "call_answered", "out", "call", duration=300)]
    m = lead_metrics({"id": "L1", "transfer": {"ts": "2026-09-10T09:30-03:00", "confidence": "confirmado"}}, evs, CUT)
    I = m["indicadores"]
    assert I["h_transf_primeira_tentativa"]["valor"] == 0.5
    assert I["h_transf_primeira_mensagem"]["valor"] == 0.58
    assert I["h_transf_primeira_ligacao"]["valor"] == 0.5
    assert I["h_transf_primeira_conversa"]["valor"] == 2.5  # resposta do lead a humano
    assert I["tentativas_ligacao_saida"]["valor"] == 2 and I["ligacoes_saida_atendidas"]["valor"] == 1
    assert I["msgs_robo"]["valor"] == 1 and I["msgs_humanas"]["valor"] == 1


def test_followup_requires_gap_and_merges_fragments():
    evs = [ev(1, "10T10:00", "lead", "message", "in", requires_reply=True),
           ev(2, "10T10:10", "human", "message"),           # resposta, não follow-up
           ev(3, "11T10:00", "human", "message"),           # follow-up 1 (24h)
           ev(4, "11T10:05", "human", "message"),           # fragmento
           ev(5, "13T10:00", "human", "call_attempt", "out", "call")]  # follow-up 2
    assert len(followups(evs)) == 2


def test_dedupe_calls_kommo_vs_api4com():
    a = ev(1, "10T10:00:00", "human", "call_attempt", "out", "call", phone="5511999", duration=0)
    b = ev(2, "10T10:01:00", "human", "call_answered", "out", "call", phone="5511999", duration=120, link="x")
    b.source = "api4com"
    c = ev(3, "10T15:00", "human", "call_attempt", "out", "call", phone="5511999", duration=0)
    out = dedupe_calls([a, b, c])
    calls = [e for e in out if e.channel == "call"]
    assert len(calls) == 2 and calls[0].meta.get("duration") == 120 and calls[0].meta["duplicates"][0]["id"] == "e1"


def test_group_fragments():
    evs = [ev(1, "10T10:00", "human", "message"), ev(2, "10T10:03", "human", "message"), ev(3, "10T10:30", "human", "message")]
    assert [len(g) for g in group_fragments(evs)] == [2, 1]


def test_classify_actor():
    users = {"7": {"name": "Ana", "is_robot": False}, "9": {"name": "Bot", "is_robot": True}, "5": {"name": "Comercial", "shared": True}}
    assert classify_actor(7, users, set()) == ("human", "Ana")
    assert classify_actor(9, users, set()) == ("robot", "Bot")
    assert classify_actor(0, users, set()) == ("system", None)
    assert classify_actor(5, users, set())[1].endswith("(conta compartilhada)")
    assert classify_actor(42, users, set()) == ("undetermined", None)


def test_rubric_normalization_ignores_na_di():
    r = score({"c1": {"nota": 4}, "c2": {"nota": 2}, "c3": {"nota": "NA"}, "c4": {"nota": "DI"}})
    assert r["criterios_avaliados"] == 2 and r["nota_normalizada"] == 75.0 and r["cobertura"] == "2/10"


def test_consolidate_denominators():
    evs1 = [ev(1, "10T10:00", "lead", "message", "in", requires_reply=True), ev(2, "10T12:00", "human", "message")]
    evs2 = [ev(3, "10T10:00", "human", "message")]
    m1 = lead_metrics({"id": "L1", "transfer": {}}, evs1, CUT)
    m2 = lead_metrics({"id": "L2", "transfer": {}}, evs2, CUT)
    c = consolidate([m1, m2])
    k = c["indicadores"]["mediana_resposta_h"]
    assert k["n_com_dado"] == 1 and k["n_na"] == 1 and k["mediana"] == 2.0 and k["denominador"] == "1 de 2 casos"
