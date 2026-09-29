# STATUS — Auditoria de atendimento humano · Gabriel Habib · Kommo (funil Manual 13587595)

Última atualização: 2026-09-29 (America/Sao_Paulo). Sessão remota Claude Code, branch `claude/kommo-human-service-audit-7ljggg`.
Corte da coleta: **2026-09-28 22:42 -03**. Fonte: API Kommo v4 (credencial do ambiente, somente GET) + gravações API4com transcritas localmente.

## Concluído
- [x] Etapa 1 — Acesso, escopo, referência (`docs/ACESSO_E_BLOQUEIOS.md`, `docs/REFERENCIA_ROTEIRO.md`).
- [x] Etapa 2 — Funil mapeado (`dados/publico/pipeline.json`, 11 etapas; Ativação = ganho, Resgate = perdido); coleta testada e executada.
- [x] Etapa 3 — Triagem de 210 candidatos (`dados/publico/triagem_resumo.json`), seleção de 10 jornadas (`dados/publico/selecao.json`: 7 avançadas + 3 travadas/desqualificadas; 6 criadas em 15 d, 3 em 30 d, 1 lead antigo com atuação recente), alerta de 12 transferências sem atuação humana em 15 d.
- [x] Etapa 4 — Eventos normalizados por caso (`dados/restrito/leads/*.json`), métricas (`src/metrics.py`), 24 chamadas localizadas, 10 com link, 7 acessíveis, 6 transcritas localmente (`dados/restrito/gravacoes/`), resumos automáticos do CRM incorporados.
- [x] Etapa 5 — Dossiês (`DOSSIE.md`), diagnóstico e treinamento (`TREINAMENTO.md`, `dados/restrito/analise.json`) com frequências "X de Y".
- [x] Etapa 6 — Painel com dados reais (`painel/index.html` + `data.js`), pacote anonimizado (`painel_anon/`), CSVs (`exports/`), testes de navegador (filtros, dossiê, CSV, impressão, modo apresentação) e testes de fórmulas (`tests/`, 11 passando).

## Pendente / refinamentos possíveis
- [ ] Leitura do **texto** das conversas de WhatsApp (só por navegador autenticado): refinar `requires_reply`, avaliar critérios 2–4, 6–7 nos casos marcados "DI".
- [ ] Transcrição da ligação de 28 min do caso 80012252 (em processamento no corte) e revisão dos trechos de 79763954 (transcrita após a análise).
- [ ] Confirmar com o cliente: expediente (para tempo útil), regra do robô após transferência, mapeamento do ramal no API4com.

## Como retomar sem repetir a coleta
1. Dados brutos em `dados/restrito/raw_api/` (ignorado pelo git) e casos em `dados/restrito/leads/`. Para atualizar: `python3 coleta/kommo_api/collect.py --subdomain gabrielhabibadv --pipeline 13587595 --days 30 --out dados/restrito/raw_api` (credencial do ambiente ou `KOMMO_TOKEN`).
2. `python3 src/triagem.py` → `python3 src/montar_casos.py` → `python3 src/transcrever.py <ids>` → `python3 src/analise_casos.py` → `python3 src/build.py`.
3. `python3 -m pytest tests`. Abrir `painel/index.html`.
4. Numa sessão local com Chrome: seguir `coleta/navegador/README.md` para complementar os textos e reexecutar `build.py`.

## Cobertura
Casos analisados: 10 · Conversas com texto: 0 (API não expõe) · Chamadas localizadas: 24 · Atendidas: 8 · Gravações com link: 10 · Acessíveis: 7 · Transcritas: 6 · Ligações analisadas: 10 (5 com conteúdo: transcrição e/ou resumo automático).
