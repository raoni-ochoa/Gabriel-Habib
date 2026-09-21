# Coleta por navegador autenticado (somente leitura)

Pré-requisito: sessão local do Claude Code com *Claude in Chrome* (ou navegador embutido do app) e Kommo autenticado em `raoni@letsevolve.com.br`.

## Passo 1 — Confirmar acesso
1. Abrir `https://gabrielhabibadv.kommo.com/leads/pipeline/13587595/?skip_filter=Y`.
2. Confirmar na tela: domínio `gabrielhabibadv`, nome da conta e funil "Manual". Registrar data/hora de corte (America/Sao_Paulo) em `dados/publico/meta.json`.

## Passo 2 — Mapear etapas
Ler os cabeçalhos das colunas do funil (nome, ordem, contagem) e as etapas Ganho/Perdido. Salvar em `dados/publico/pipeline.json`:
`[{"order":1,"name":"...","status_id":null,"is_won":false,"is_lost":false}, ...]`.

## Passo 3 — Triagem de candidatos
1. Trocar para visão de lista, ordenar por data de criação (últimos 15 dias). Anotar total localizado e paginação (rolar/carregar até o fim). Repetir com "última atividade"/data de atualização para pegar leads antigos com atuação recente.
2. Para cada candidato, abrir o lead (`/leads/detail/{id}`) e ler o histórico completo (usar "mostrar mais"/rolar até o início). Só é elegível se houver ação humana após a transferência.
3. Salvar `dados/publico/selecao.json` com candidatos, elegíveis, selecionados, motivos e alertas de transferência sem atuação.

## Passo 4 — Captura por lead (10 selecionados)
Para cada lead, gerar `dados/restrito/leads/{id}.json` com:
- `lead`: id, nome (restrito), serviço, origem, etapa atual, responsável, tags, criado em, motivo de perda registrado.
- `events`: lista no esquema `src/schema.py` (usar `get_page_text`/`read_page`; cada mensagem com autor, horário exibido e texto; ligações com status/duração/link; tarefas; notas; mudanças de etapa/responsável/tag).
- `transfer`: `{"ts": "...", "confidence": "confirmado|inferido|nao_identificavel", "rule": "..."}`.
- Anotar `requires_reply` nas mensagens do lead que pedem retorno e `agreed_return_at` quando houver retorno combinado (critérios em `docs/METODOLOGIA.md`).
- Chamadas: testar o link de gravação (abrir sem reproduzir automaticamente). Registrar `acessivel: true|false|exige_sessao|expirado`.

## Passo 5 — Processar
`python3 src/build.py` → gera `dados/publico/`, `painel/data.json`, `exports/`.

Regras de segurança: não clicar em "ligar", "enviar", "assinar"; não alterar etapa, responsável, tag ou tarefa; filtros de visualização não devem ser salvos.
