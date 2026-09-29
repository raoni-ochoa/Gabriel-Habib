#!/usr/bin/env python3
"""Baixa gravações (links já presentes nas notas do Kommo, integração API4com autorizada) e transcreve LOCALMENTE
com faster-whisper (modelo small, CPU). Nada é enviado a serviço externo. Saída: dados/restrito/gravacoes/{uniq}.mp3 e .json
Uso: python3 src/transcrever.py 79877820 80038784 ...
"""
import json, os, sys, urllib.request, time
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "dados/restrito/raw_api/leads"); OUT = os.path.join(ROOT, "dados/restrito/gravacoes"); os.makedirs(OUT, exist_ok=True)
from faster_whisper import WhisperModel
model = None
log = open(os.path.join(OUT, "transcricao.log"), "a")
def say(*a):
    print(*a, flush=True); print(*a, file=log, flush=True)
for lid in sys.argv[1:]:
    notes = json.load(open(f"{RAW}/{lid}/notes.json"))
    for n in notes:
        if n["note_type"] not in ("call_in", "call_out"): continue
        p = n["params"]; uniq = p.get("uniq") or str(n["id"]); link = p.get("link"); dur = int(p.get("duration") or 0)
        meta_path = f"{OUT}/{uniq}.json"
        if os.path.exists(meta_path): say(lid, uniq, "já transcrita"); continue
        rec = {"lead_id": lid, "note_id": n["id"], "uniq": uniq, "duration": dur, "direction": n["note_type"], "created_at": n["created_at"], "created_by": n["created_by"], "phone_masked": (p.get("phone") or "")[:-4] + "****" if p.get("phone") else None, "link_tested": None, "segments": [], "text": "", "model": "faster-whisper small int8 (local)", "language": None}
        if not link or dur == 0:
            rec["link_tested"] = "sem_link" if not link else "duracao_zero"; json.dump(rec, open(meta_path, "w"), ensure_ascii=False, indent=1); say(lid, uniq, rec["link_tested"]); continue
        mp3 = f"{OUT}/{uniq}.mp3"
        try:
            if not os.path.exists(mp3):
                req = urllib.request.Request(link, headers={"User-Agent": "curl/8"})
                with urllib.request.urlopen(req, timeout=120) as r, open(mp3, "wb") as f: f.write(r.read())
            rec["link_tested"] = "acessivel"; rec["bytes"] = os.path.getsize(mp3)
        except Exception as e:
            rec["link_tested"] = f"inacessivel: {type(e).__name__} {str(e)[:80]}"; json.dump(rec, open(meta_path, "w"), ensure_ascii=False, indent=1); say(lid, uniq, rec["link_tested"]); continue
        if model is None: model = WhisperModel("small", device="cpu", compute_type="int8")
        t0 = time.time()
        segs, info = model.transcribe(mp3, language="pt", vad_filter=True, beam_size=5)
        rec["language"] = info.language
        for s in segs:
            rec["segments"].append({"start": round(s.start, 1), "end": round(s.end, 1), "text": s.text.strip(), "avg_logprob": round(s.avg_logprob, 2), "no_speech_prob": round(s.no_speech_prob, 2)})
        rec["text"] = " ".join(s["text"] for s in rec["segments"]); rec["transcribe_seconds"] = round(time.time() - t0, 1)
        json.dump(rec, open(meta_path, "w"), ensure_ascii=False, indent=1)
        say(lid, uniq, f"{dur}s transcrita em {rec['transcribe_seconds']}s, {len(rec['segments'])} segmentos")
say("FIM")
