# STATUS — Auditoria de atendimento humano · Gabriel Habib · Kommo (funil Manual 13587595)

Última atualização: 2026-09-21 (America/Sao_Paulo). Sessão remota Claude Code, branch `claude/kommo-human-service-audit-7ljggg`.

## Concluído
- [x] Etapa 1 — Validação de acesso, escopo, histórico opcional e referência → `docs/ACESSO_E_BLOQUEIOS.md`, `docs/REFERENCIA_ROTEIRO.md`.
- [x] Metodologia, regras de cálculo, esquema de eventos → `docs/METODOLOGIA.md`, `src/schema.py`.
- [x] Rubrica com sinais observáveis definidos antes da pontuação → `docs/RUBRICA.md`, `src/rubric.py`.
- [x] Coletor API v4 somente GET → `coleta/kommo_api/collect.py`; roteiro de coleta por navegador → `coleta/navegador/README.md`.
- [x] Normalizador (autoria, deduplicação de chamadas, agrupamento de fragmentos) → `src/normalize.py`.
- [x] Motor de métricas (esperas, episódios, follow-ups, chamadas, marcos, consolidado) → `src/metrics.py`; 11 testes com fixtures sintéticas → `tests/` (`python3 -m pytest tests`).
- [x] Gerador de painel/dossiê/CSV/pacote anonimizado → `src/build.py`.
- [x] Painel portátil pt-BR com estado vazio honesto → `painel/index.html` (abrir localmente; ver `README.md`).
- [x] Modelos do dossiê e do treinamento → gerados por `src/build.py` a partir de dados reais; estrutura em `docs/TREINAMENTO_MODELO.md`.

## Pendente (bloqueado por acesso ao CRM)
- [ ] Etapa 2 — Mapear funil e testar coleta em 2 casos.
- [ ] Etapa 3 — Selecionar e coletar 10 atendimentos (+ alerta de transferências sem atuação).
- [ ] Etapa 4 — Normalizar, calcular, analisar evidências, chamadas e gravações.
- [ ] Etapa 5 — Dossiês, diagnóstico e treinamento com casos reais.
- [ ] Etapa 6 — Popular e testar o painel com dados reais (filtros, links, exportação, impressão, modo apresentação já testados em estado vazio e com fixture de teste).

**Bloqueio:** nenhuma via de acesso ao Kommo nesta sessão (sem navegador conectado, sem token, PDF não anexado). Detalhes e opções em `docs/ACESSO_E_BLOQUEIOS.md`.

## Como retomar sem repetir a coleta
1. Abrir este repositório/branch em sessão local com Chrome conectado e Kommo autenticado (Opção A), ou definir `KOMMO_TOKEN` (Opção B).
2. Seguir `coleta/navegador/README.md` (ou rodar `coleta/kommo_api/collect.py`). Salvar cada lead em `dados/restrito/leads/{id}.json` assim que concluído (progresso por caso).
3. Preencher `dados/publico/meta.json` (corte real), `pipeline.json`, `selecao.json`; anotar `ratings` e `analysis` por lead; curadoria em `dados/restrito/analise.json`.
4. `python3 src/build.py` → painel, dossiê, CSV. `python3 -m pytest tests` para validar.
5. Atualizar este STATUS.md após cada caso.

## Cobertura atual
Casos analisados: 0 · Chamadas localizadas: 0 · Gravações acessíveis: 0 · Transcrições: 0. Nenhum dado do CRM foi coletado.
