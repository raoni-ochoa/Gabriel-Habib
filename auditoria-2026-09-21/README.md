# Auditoria de atendimento humano — Gabriel Habib · Kommo · funil Manual

Pasta datada: `auditoria-2026-09-21/`. Não sobrescreve auditorias anteriores.

## Abrir o painel
1. Abra `painel/index.html` no navegador (duplo clique; funciona em `file://`, sem servidor). Se preferir: `python3 -m http.server 8080` na pasta `painel/` e acesse `http://localhost:8080`.
2. `painel_anon/index.html` é o pacote sem dados pessoais (nomes, telefones, links e textos removidos do arquivo, não apenas ocultos).
3. Botões no topo: **Exportar CSV**, **Imprimir** (folha de estilo própria), **Modo apresentação** (oculta dados pessoais na tela).

## Entregas desta rodada (corte 28/09/2026 22:42)
- `painel/index.html` — painel navegável com os 10 casos reais (abrir localmente).
- `painel_anon/` — versão sem dados pessoais para compartilhar.
- `DOSSIE.md` — dossiê consolidado dos 10 casos; `TREINAMENTO.md` — roteiro de 60 min e plano de ação.
- `exports/*.csv` — indicadores por lead e consolidado (não versionados).
- `dados/publico/` — funil, triagem (sem nomes), seleção, corte; `dados/restrito/` — eventos, evidências, gravações e transcrições (não versionados).

## Estrutura
- `STATUS.md` — concluído, pendências, como retomar.
- `docs/` — acesso e bloqueios, referência classificada, metodologia, rubrica, modelo de treinamento.
- `coleta/` — coletor API (somente GET) e roteiro de coleta por navegador.
- `src/` — esquema, normalização, métricas, rubrica, gerador (`build.py`).
- `tests/` — testes das fórmulas com fixtures sintéticas (`python3 -m pytest tests`).
- `dados/publico/` — metadados, funil, seleção (sem dados pessoais). `dados/restrito/` — eventos/evidências (ignorado pelo git).
- `painel/` — painel portátil; `exports/` — CSVs; `DOSSIE.md` e `TREINAMENTO.md` — gerados após a coleta.

## Pacote portátil
`zip -r auditoria-2026-09-21.zip auditoria-2026-09-21 -x "*/dados/restrito/*"` gera o pacote sem a base restrita. Para incluir evidências, compartilhe a pasta restrita por canal seguro, separadamente.
