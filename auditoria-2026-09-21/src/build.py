#!/usr/bin/env python3
"""Gera dados públicos, painel (data.js / data_anon.js), dossiê Markdown e CSVs a partir de dados/restrito/.

Entradas (todas opcionais; sem elas o painel mostra estado 'sem_coleta'):
  dados/publico/meta.json            {cutoff, window_days, cliente, funil, pipeline_id, account_url, expediente_confirmado}
  dados/publico/pipeline.json        etapas reais
  dados/publico/selecao.json         filtros, candidatos, elegíveis, selecionados, alertas_sem_atuacao
  dados/restrito/leads/{id}.json     {lead:{...}, events:[Event], transfer:{...}, ratings:{c1..c10}, calls_analysis:[...], analysis:{...}}
  dados/restrito/analise.json        padrões, boas práticas, treinamento, prioridades, plano (curadoria com evidências)
Saídas: painel/data.js, painel_anon/data_anon.js (+ index.html copiado), exports/*.csv, DOSSIE.md, dados/publico/casos_resumo.json
"""
from __future__ import annotations
import csv, glob, json, os, re, shutil, sys
from datetime import datetime
sys.path.insert(0, os.path.dirname(__file__))
from schema import event_from_dict, TZ, parse_ts
from normalize import dedupe_calls
from metrics import lead_metrics, consolidate
from rubric import score, CRITERIA

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P = lambda *a: os.path.join(ROOT, *a)


def load_json(path, default):
    return json.load(open(path, encoding="utf-8")) if os.path.exists(path) else default


def anonymize(obj, names: list[str]):
    """Remove nomes, telefones, links do CRM/gravação e textos livres do conteúdo exportado."""
    pat = re.compile(r"(\+?\d[\d\s().-]{7,}\d)")
    def scrub(s: str) -> str:
        for i, n in enumerate(names):
            if n and len(n) > 2:
                s = re.sub(r"\b" + re.escape(n) + r"\b", "[pessoa]", s, flags=re.I)
        s = re.sub(r"\b(Dra?\.?|doutora|doutor|seu|senhor|senhora)\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõç]+", "[pessoa]", s)
        s = pat.sub("[telefone]", s)
        s = re.sub(r"https?://\S+", "[link removido]", s)
        return s
    if isinstance(obj, dict):
        out = {}
        for k, v in obj.items():
            if k in ("url", "link", "ref", "phone", "nome", "actor_name", "atendentes", "content", "conteudo", "trecho", "transcript", "transcript_segments", "call_result", "phone_masked", "nome_restrito"):
                out[k] = ("[removido]" if isinstance(v, str) else ["[removido]"] * len(v) if isinstance(v, list) else v) if k != "atendentes" else [f"Atendente {i+1}" for i in range(len(v))]
            else:
                out[k] = anonymize(v, names)
        return out
    if isinstance(obj, list):
        return [anonymize(x, names) for x in obj]
    if isinstance(obj, str):
        return scrub(obj)
    return obj


def main():
    meta = load_json(P("dados/publico/meta.json"), {})
    pipeline = load_json(P("dados/publico/pipeline.json"), [])
    selecao = load_json(P("dados/publico/selecao.json"), {})
    analise = load_json(P("dados/restrito/analise.json"), {})
    files = sorted(glob.glob(P("dados/restrito/leads/*.json")))
    now = datetime.now(TZ)
    cutoff = parse_ts(meta["cutoff"]) if meta.get("cutoff") else now
    casos, per_lead, names = [], [], []
    for f in files:
        d = load_json(f, {})
        lead = d["lead"]; lead.setdefault("transfer", d.get("transfer", {}))
        evs = dedupe_calls([event_from_dict(e) for e in d.get("events", [])])
        m = lead_metrics(lead, evs, cutoff)
        r = score(d.get("ratings", {}))
        per_lead.append(m)
        names += [lead.get("nome", "")] + [e.actor_name for e in evs if e.actor_name] + lead.get("atendentes", []) + (d.get("analysis", {}).get("nomes_citados") or [])
        names += [tok for n in ([lead.get("nome", "")] + lead.get("atendentes", [])) for tok in str(n).split() if len(tok) >= 4]
        casos.append({**lead, "transfer": lead["transfer"], "indicadores": m["indicadores"], "episodios": m["episodios"], "followups": m["followups"],
                      "chamadas": m["chamadas"], "marcos": m["marcos"], "status_espera": m["status_espera"], "ultimo_evento": m["ultimo_evento"],
                      "rubrica": r, "timeline": [e.to_dict() for e in evs], "calls_analysis": d.get("calls_analysis", []), **d.get("analysis", {})})
    cons = consolidate(per_lead) if per_lead else {}
    cover = {"casos": len(casos),
             "chamadas_localizadas": sum(c["chamadas"]["chamadas_localizadas"] for c in casos),
             "chamadas_atendidas": sum(c["chamadas"]["saida_atendidas"] + c["chamadas"]["entrada"] - c["chamadas"]["entrada_perdidas"] for c in casos),
             "gravacoes_com_link": sum(c["chamadas"]["com_gravacao_link"] for c in casos),
             "gravacoes_acessiveis": sum(c["chamadas"]["gravacao_acessivel"] for c in casos),
             "transcritas": sum(c["chamadas"]["transcritas"] for c in casos),
             "ligacoes_analisadas": sum(len(c.get("calls_analysis", [])) for c in casos),
             "conversas_com_conteudo": sum(1 for c in casos if any(e["action"] == "message" and e["content"] and not e["content"].startswith("[") for e in c["timeline"]))}
    data = {"status": "ok" if casos else "sem_coleta", "generated_at": now.isoformat(), "meta": {"cliente": "Gabriel Habib", "funil": "Manual", "pipeline_id": 13587595,
            "account_url": "https://gabrielhabibadv.kommo.com", **meta}, "pipeline": pipeline, "selecao": selecao,
            "alertas_sem_atuacao": selecao.get("alertas_sem_atuacao", []), "cobertura": cover, "casos": casos, "consolidado": cons,
            "criterios": [{"id": c, "label": l} for c, l in CRITERIA], **{k: analise.get(k, []) for k in ("padroes", "boas_praticas", "casos_discussao", "prioridades", "plano_7d", "indicadores_30d", "propostas_meta", "acertos_gerais")},
            "treinamento": analise.get("treinamento", {}), "bloqueios": load_json(P("dados/publico/bloqueios.json"), [])}
    os.makedirs(P("painel"), exist_ok=True)
    with open(P("painel/data.js"), "w", encoding="utf-8") as fh:
        fh.write("window.AUDIT_DATA = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n")
    # pacote anonimizado (dados pessoais removidos do conteúdo, não só ocultos)
    os.makedirs(P("painel_anon"), exist_ok=True)
    anon = anonymize(data, sorted(set(n for n in names if n and n.lower() not in ("gomes", "andrade")), key=len, reverse=True))
    anon["anonimizado"] = True
    for i, c in enumerate(anon["casos"]):
        c["nome"] = f"Caso {i+1}"; c["url"] = ""
    with open(P("painel_anon/data.js"), "w", encoding="utf-8") as fh:
        fh.write("window.AUDIT_DATA = " + json.dumps(anon, ensure_ascii=False, indent=1) + ";\n")
    if os.path.exists(P("painel/index.html")):
        shutil.copy(P("painel/index.html"), P("painel_anon/index.html"))
    # CSV de indicadores
    os.makedirs(P("exports"), exist_ok=True)
    if casos:
        keys = sorted({k for c in casos for k in c["indicadores"]})
        with open(P("exports/indicadores_por_lead.csv"), "w", newline="", encoding="utf-8") as fh:
            w = csv.writer(fh, delimiter=";")
            w.writerow(["lead_id", "servico", "atendentes", "etapa_atual", "etapa_max", "status", "status_espera", "transfer_confidence", "nota_normalizada", "cobertura"] + keys)
            for c in casos:
                w.writerow([c["id"], c.get("servico"), "|".join(c.get("atendentes", [])), c.get("etapa_atual"), c.get("etapa_max"), c.get("status"), c["status_espera"],
                            c["transfer"].get("confidence"), c["rubrica"]["nota_normalizada"], c["rubrica"]["cobertura"]] + [c["indicadores"][k]["valor"] for k in keys])
        with open(P("exports/consolidado.csv"), "w", newline="", encoding="utf-8") as fh:
            w = csv.writer(fh, delimiter=";")
            w.writerow(["indicador", "definicao", "n_com_dado", "n_na", "n_indisponivel", "mediana", "min", "max", "soma", "denominador"])
            for k, v in cons["indicadores"].items():
                w.writerow([k, v["definicao"], v["n_com_dado"], v["n_na"], v["n_indisponivel"], v["mediana"], v["min"], v["max"], v["soma"], v["denominador"]])
        json.dump([{k: c[k] for k in ("id", "servico", "atendentes", "etapa_atual", "etapa_max", "status", "status_espera")} | {"nota": c["rubrica"]["nota_normalizada"]} for c in casos],
                  open(P("dados/publico/casos_resumo.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=2)
        write_dossie(data)
        write_treinamento(data)
    print(f"status={data['status']} casos={len(casos)} → painel/data.js, painel_anon/data.js, exports/, DOSSIE.md")


def write_treinamento(data):
    t = data.get("treinamento") or {}
    L = ["# Roteiro de treinamento (60 min) e plano de ação — Gabriel Habib · atendimento humano no Kommo\n",
         f"Base: {len(data['casos'])} casos auditados · corte {data['meta'].get('cutoff')} · frequências sempre com denominador (casos avaliáveis).\n",
         "\n## Padrões recorrentes\n"]
    for p in data.get("padroes", []):
        L.append(f"- **{p['comportamento']}** — {p['frequencia']}. Impacto: {p.get('impacto','')} Mudança: {p.get('mudanca','')} Acompanhamento: {p.get('acompanhamento','')} (causa: {p.get('causa','')})\n  - Evidências: " + "; ".join(p.get("evidencias", [])) + "\n")
    L.append("\n## Boas práticas observadas\n" + "".join(f"- {x}\n" for x in data.get("boas_praticas", [])))
    L.append("\n## Casos para discussão\n" + "".join(f"- {c['caso']}: {c['motivo']}\n" for c in data.get("casos_discussao", [])))
    L.append("\n## Pauta\n")
    for b in t.get("blocos", []):
        L.append(f"\n### {b['titulo']} · {b['tempo']}\n- Objetivo: {b['objetivo']}\n- Casos/trechos no painel: {'; '.join(b.get('casos', []))}\n- Perguntas: " + " | ".join(b.get("perguntas", [])) + f"\n- Exercício: {b.get('exercicio','')}\n- Comportamento esperado: {b.get('esperado','')}\n")
        if b.get("exemplos"): L.append("- Exemplos (sugestões reescritas):\n" + "".join(f"  - {x}\n" for x in b["exemplos"]))
    L.append("\n## Prioridades (até 5)\n" + "".join(f"{i+1}. **{p['titulo']}** — {p['descricao']} ({p.get('frequencia','')})\n" for i, p in enumerate(data.get("prioridades", [])[:5])))
    L.append("\n## Ações para 7 dias\n" + "".join(f"- {x}\n" for x in data.get("plano_7d", [])))
    L.append("\n## Indicadores para revisão em 30 dias\n| Indicador | Linha de base | Responsável (função) | Critério de evolução (proposta) |\n|---|---|---|---|\n" + "".join(f"| {i['indicador']} | {i['linha_base']} | {i['responsavel']} | {i['criterio']} |\n" for i in data.get("indicadores_30d", [])))
    L.append("\n## Metas propostas (para validação, não regras retroativas)\n" + "".join(f"- {x}\n" for x in data.get("propostas_meta", [])))
    open(os.path.join(ROOT, "TREINAMENTO.md"), "w", encoding="utf-8").write("".join(L))


def write_dossie(data):
    L = [f"# Dossiê — Auditoria de atendimento humano · Gabriel Habib · Kommo (funil Manual)\n",
         f"Corte: {data['meta'].get('cutoff')} · Janela: {data['meta'].get('window_days')} dias · Casos: {len(data['casos'])} · Gerado em {data['generated_at']}\n",
         "Cobertura: " + ", ".join(f"{k}={v}" for k, v in data["cobertura"].items()) + "\n"]
    for i, c in enumerate(data["casos"], 1):
        L.append(f"\n## Caso {i} — lead {c['id']} · {c.get('servico','serviço não informado')}\n")
        L.append(f"- Link: {c.get('url','')}\n- Motivo da seleção: {c.get('motivo_selecao','')}\n- Contexto/robô: {c.get('contexto_robo','')}\n")
        L.append(f"- Transferência: {c['transfer'].get('ts')} ({c['transfer'].get('confidence')}; regra: {c['transfer'].get('rule','')})\n")
        L.append(f"- Etapa atual: {c.get('etapa_atual')} · Maior etapa: {c.get('etapa_max')} · Situação: {c.get('status')} · Espera: {c['status_espera']}\n")
        L.append("\n### Linha do tempo humana (marcos e esperas)\n")
        for e in c["timeline"]:
            if e["actor_type"] in ("human", "lead") or e["action"] in ("transfer", "stage_change", "document_sent", "document_signed") or e["action"].startswith("meeting"):
                L.append(f"- {e['ts']} · {e['actor_type']} · {e['action']} · {e.get('actor_name') or ''} · {(e.get('content') or '')[:160]} · ref: {e['ref']}\n")
        L.append("\n### Indicadores\n")
        for k, v in c["indicadores"].items():
            L.append(f"- {k}: **{v['valor']}** — {v['definicao']} (base: {v['base']}; cobertura: {v['cobertura']})\n")
        L.append("\n### Ligações e gravações\n")
        for cl in c["chamadas"]["lista"]:
            L.append(f"- {cl['ts']} · {cl['direction']} · {cl['action']} · {cl.get('actor') or ''} · {cl.get('duration')}s · gravação: {cl.get('recording_access') or 'sem link'} · id {cl['id']}\n")
        for ca in c.get("calls_analysis", []):
            L.append(f"- Análise ({ca.get('call_id')}): {ca.get('resumo','')}\n")
            for t in ca.get("trechos", []):
                L.append(f"  - Trecho real [{t.get('timestamp','')}]: \"{t.get('trecho','')}\" → interpretação: {t.get('interpretacao','')} → alternativa sugerida (reescrita): {t.get('alternativa','')}\n")
        L.append(f"\n### Avaliação — nota {c['rubrica']['nota_normalizada']} (cobertura {c['rubrica']['cobertura']})\n")
        for cid, d in c["rubrica"]["detalhe"].items():
            L.append(f"- {d['criterio']}: **{d['nota']}** — {d['justificativa']} {('· evidências: ' + '; '.join(d['evidencias'])) if d['evidencias'] else ''}\n")
        for sec, key in (("Acertos replicáveis", "acertos"), ("Melhorias prioritárias", "melhorias"), ("Evidências", "evidencias"), ("Como conduzir melhor (exemplos reescritos)", "conduzir_melhor"), ("Limitações", "limitacoes")):
            items = c.get(key) or []
            if items:
                L.append(f"\n### {sec}\n" + "".join(f"- {x}\n" for x in items))
        L.append(f"\n**Próxima ação recomendada (não executada):** {c.get('proxima_acao','')}\n\n**Grau de confiança:** {c.get('confianca','')}\n")
    open(os.path.join(ROOT, "DOSSIE.md"), "w", encoding="utf-8").write("".join(L))


if __name__ == "__main__":
    main()
