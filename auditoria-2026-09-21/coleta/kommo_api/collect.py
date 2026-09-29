#!/usr/bin/env python3
"""Coletor somente-leitura da API Kommo v4 para a auditoria (funil Manual 13587595).

Uso:
  export KOMMO_TOKEN='<token de longa duração, validade curta>'   # nunca versionar
  python3 coleta/kommo_api/collect.py --subdomain gabrielhabibadv --pipeline 13587595 --days 15 \
      --out dados/restrito/raw_api

Somente métodos GET. Salva JSON bruto em dados/restrito/raw_api/ (pasta ignorada pelo git).
Endpoints (documentação oficial consultada em 21/09/2026):
  /api/v4/users, /api/v4/leads/pipelines/{id}, /api/v4/leads (filter pipeline/created_at/updated_at, with=contacts,loss_reason),
  /api/v4/events (filter[entity]=lead, filter[entity_id]), /api/v4/leads/{id}/notes, /api/v4/tasks (filter[entity_id]), /api/v4/talks
Limitação: texto das mensagens de chat não é exposto pela API v4 (ver docs/ACESSO_E_BLOQUEIOS.md).
"""
from __future__ import annotations
import argparse, json, os, sys, time, urllib.parse, urllib.request
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

TZ = ZoneInfo("America/Sao_Paulo")


def get(base: str, path: str, token: str, params: dict | None = None, retries: int = 3):
    url = base + path + ("?" + urllib.parse.urlencode(params, doseq=True) if params else "")
    headers = {"Accept": "application/hal+json"}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    req = urllib.request.Request(url, headers=headers, method="GET")
    for i in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                if r.status == 204:
                    return None
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code == 204:
                return None
            if e.code == 429 and i < retries - 1:
                time.sleep(2 ** (i + 1)); continue
            body = e.read().decode(errors="replace")[:500]
            raise SystemExit(f"HTTP {e.code} em {path}: {body}")
    return None


def paginate(base, path, token, params, key):
    page, out = 1, []
    while True:
        p = dict(params, page=page, limit=250)
        data = get(base, path, token, p)
        if not data:
            break
        items = (data.get("_embedded") or {}).get(key) or []
        out.extend(items)
        if len(items) < 250 or not (data.get("_links") or {}).get("next"):
            break
        page += 1
        time.sleep(0.25)  # limite documentado: 7 req/s
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--subdomain", required=True)
    ap.add_argument("--pipeline", type=int, required=True)
    ap.add_argument("--days", type=int, default=15)
    ap.add_argument("--out", default="dados/restrito/raw_api")
    ap.add_argument("--lead-ids", help="lista separada por vírgula para coletar histórico apenas desses leads")
    a = ap.parse_args()
    token = os.environ.get("KOMMO_TOKEN")
    if not token:
        # Modo credencial de API do ambiente em nuvem: o proxy anexa o Authorization ao sair da VM.
        print("KOMMO_TOKEN ausente: usando credencial do ambiente (proxy). Se a API responder 401, o token não foi configurado.")
        token = None
    base = f"https://{a.subdomain}.kommo.com"
    os.makedirs(a.out, exist_ok=True)
    cutoff = datetime.now(TZ)
    since = int((cutoff - timedelta(days=a.days)).timestamp())
    meta = {"cutoff": cutoff.isoformat(), "window_days": a.days, "pipeline_id": a.pipeline, "account": base, "source": "kommo_api"}
    json.dump(meta, open(f"{a.out}/meta.json", "w"), ensure_ascii=False, indent=2)

    users = paginate(base, "/api/v4/users", token, {}, "users")
    json.dump(users, open(f"{a.out}/users.json", "w"), ensure_ascii=False, indent=2)
    pipe = get(base, f"/api/v4/leads/pipelines/{a.pipeline}", token)
    json.dump(pipe, open(f"{a.out}/pipeline.json", "w"), ensure_ascii=False, indent=2)

    if a.lead_ids:
        ids = [int(x) for x in a.lead_ids.split(",")]
    else:
        created = paginate(base, "/api/v4/leads", token, {"filter[pipeline_id][]": a.pipeline, "filter[created_at][from]": since, "with": "contacts,loss_reason"}, "leads")
        updated = paginate(base, "/api/v4/leads", token, {"filter[pipeline_id][]": a.pipeline, "filter[updated_at][from]": since, "with": "contacts,loss_reason"}, "leads")
        leads = {l["id"]: l for l in created + updated}
        json.dump(list(leads.values()), open(f"{a.out}/leads_candidatos.json", "w"), ensure_ascii=False, indent=2)
        print(f"candidatos localizados: {len(leads)} (criados na janela: {len(created)}, atualizados: {len(updated)})")
        ids = list(leads)

    for i in range(0, len(ids), 10):
        chunk = ids[i:i + 10]
        ev = paginate(base, "/api/v4/events", token, {"filter[entity]": "lead", "filter[entity_id][]": chunk}, "events")
        by_lead: dict[int, list] = {}
        for e in ev:
            by_lead.setdefault(e["entity_id"], []).append(e)
        for lid in chunk:
            d = f"{a.out}/leads/{lid}"; os.makedirs(d, exist_ok=True)
            json.dump(by_lead.get(lid, []), open(f"{d}/events.json", "w"), ensure_ascii=False, indent=2)
            json.dump(paginate(base, f"/api/v4/leads/{lid}/notes", token, {}, "notes"), open(f"{d}/notes.json", "w"), ensure_ascii=False, indent=2)
            json.dump(paginate(base, "/api/v4/tasks", token, {"filter[entity_type]": "leads", "filter[entity_id][]": lid}, "tasks"), open(f"{d}/tasks.json", "w"), ensure_ascii=False, indent=2)
            json.dump(paginate(base, "/api/v4/talks", token, {"filter[entity_type]": "lead", "filter[entity_id][]": lid}, "talks"), open(f"{d}/talks.json", "w"), ensure_ascii=False, indent=2)
            json.dump(get(base, f"/api/v4/leads/{lid}", token, {"with": "contacts,loss_reason"}), open(f"{d}/lead.json", "w"), ensure_ascii=False, indent=2)
            print("lead", lid, "ok")
    print("coleta concluída em", a.out)


if __name__ == "__main__":
    main()
