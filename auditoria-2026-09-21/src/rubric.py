"""Pontuação da rubrica (docs/RUBRICA.md). Notas vêm de anotação humana documentada com evidências; aqui só normalizamos."""
from __future__ import annotations

CRITERIA = [
    ("c1", "Agilidade e continuidade da resposta"),
    ("c2", "Retomada do contexto e personalização"),
    ("c3", "Investigação da necessidade e uso pertinente do SPIN"),
    ("c4", "Qualificação adequada ao serviço"),
    ("c5", "Iniciativa e pertinência das ligações"),
    ("c6", "Clareza da apresentação de valor e do processo"),
    ("c7", "Tratamento das dúvidas e objeções"),
    ("c8", "Condução para reunião ou próximo passo concreto"),
    ("c9", "Follow-up, confirmação e acompanhamento até assinatura"),
    ("c10", "Organização e registros no CRM"),
]
VALID = {0, 1, 2, 3, 4, "NA", "DI"}


def score(ratings: dict) -> dict:
    """ratings: {"c1": {"nota": 3, "evidencias": [...], "justificativa": "..."}, ...}
    Retorna nota normalizada 0-100, cobertura (avaliados/10) e detalhes. NA/DI não contam."""
    evaluated, total = 0, 0
    detail = {}
    for cid, label in CRITERIA:
        r = ratings.get(cid) or {"nota": "DI", "justificativa": "sem avaliação"}
        n = r.get("nota", "DI")
        assert n in VALID, f"nota inválida {n} em {cid}"
        detail[cid] = {"criterio": label, "nota": n, "justificativa": r.get("justificativa", ""), "evidencias": r.get("evidencias", []),
                       "categoria_causa": r.get("categoria_causa")}
        if isinstance(n, int):
            evaluated += 1; total += n
    norm = round(100 * total / (4 * evaluated), 1) if evaluated else None
    return {"nota_normalizada": norm, "criterios_avaliados": evaluated, "cobertura": f"{evaluated}/10", "detalhe": detail}
