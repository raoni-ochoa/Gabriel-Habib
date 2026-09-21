# Metodologia, fontes, limitações e atualização

## Fontes
1. Kommo — funil "Manual" (id 13587595), conta `gabrielhabibadv.kommo.com`. Coleta somente leitura por navegador autenticado (preferência) ou API v4 com token temporário (`coleta/`).
2. Notas de chamada (Kommo) e, quando acessíveis, registros/gravações API4com vinculados ao lead.
3. Referência de atendimento (Doc "Trabalhista - Reconhecimento de Vínculo") e Playbook FlowSales — ver `docs/REFERENCIA_ROTEIRO.md`.

## Período e corte
- Corte: data/hora real do início da coleta, fuso America/Sao_Paulo, gravado em `dados/publico/meta.json` (`cutoff`). Nesta sessão: 2026-09-21 17:05 -03 (coleta não realizada).
- Janela primária: 15 dias antes do corte; ampliada para 30 se houver menos de 10 elegíveis. Registrar em `meta.json` (`window_days`).

## Seleção (documentada em `dados/publico/selecao.json`)
1. Mapear etapas reais do funil (ordem, nomes, ids), inclusive Ganho/Perdido.
2. Listar leads do funil com `created_at` ou `updated_at` na janela; paginar até o fim (`limit=250`).
3. Para cada candidato, carregar histórico completo (eventos, notas, tarefas, conversas) e classificar autoria.
4. Elegível = há ≥1 ação humana (mensagem, ligação, nota, tarefa concluída por humano) **após** a transferência e dentro da janela. Data de atualização do cadastro não é prova.
5. Transferências sem ação humana → lista de alerta separada (`alertas_sem_atuacao`), não contam como atendimentos.
6. Deduplicar jornadas: negócios diferentes do mesmo contato só entram uma vez se compartilharem a mesma conversa; negócios com conversas distintas podem ambos entrar, mas nunca são fundidos.
7. Composição preferencial 7 avançados + até 3 travados/perdidos após atuação humana; variedade de atendentes e serviços sem forçar; gravação desempata.
8. Registrar: filtros, período, candidatos localizados, elegíveis, selecionados, motivo de inclusão, leads antigos com atendimento recente (marcados `legacy=true`).

## Esquema de evento normalizado (`src/schema.py`)
`id, lead_id, ts (ISO-8601 com fuso), ts_precision (s|min|day), channel (whatsapp|call|note|task|system|email|other), direction (in|out|internal), actor_type (human|robot|lead|system|undetermined), actor_id, actor_name, action (message|call_attempt|call_answered|call_incoming|note|task_created|task_completed|stage_change|responsible_change|tag_added|transfer|document_sent|document_signed|meeting_offered|meeting_scheduled|meeting_done|meeting_noshow|other), content (texto necessário ou resumo), meta (dict), source (kommo_ui|kommo_api|api4com|manual), ref (referência de conferência: url do lead + horário; id da nota/evento; id da chamada)`.

## Classificação de autoria
- **robot**: `created_by`/autor = usuário de robô/integração (ids mapeados em `dados/publico/users.json` com flag `is_robot`), mensagens com tag/origem do agente, eventos `robot_replied`.
- **human**: usuário real da conta. Se conta compartilhada → `actor_name` com sufixo "(conta compartilhada)" e sinalização no dossiê.
- **lead**: `incoming_chat_message`, `incoming_call`.
- **system**: automações (Salesbot/Digital pipeline), mudanças automáticas de etapa/tag/responsável.
- **undetermined**: autor não identificável na fonte.
Responsável atual ≠ responsável no momento ≠ executor. O executor vem do autor do evento; o responsável no momento é reconstruído pela sequência `entity_responsible_changed`.

## Momento da transferência (`transfer_confidence`)
- **confirmado**: evento explícito (mudança de responsável de robô→humano, entrada no funil Manual por automação, tag "humano" adicionada) com horário.
- **inferido**: primeiro sinal indireto (ex.: fim das mensagens do robô + primeiro evento humano); registrar a regra usada.
- **não identificável**: ausência de sinais. Nunca usar a primeira mensagem humana como transferência (espera zero artificial).

## Indicadores (regras em `src/metrics.py`)
- `t_transfer_to_first_human_attempt`: transferência → primeira ação humana dirigida ao lead (mensagem ou tentativa de ligação).
- `t_transfer_to_first_human_message`, `t_transfer_to_first_call_attempt`.
- `t_transfer_to_first_effective_conversation`: primeira troca bidirecional humano↔lead ou ligação atendida com duração > 0 (duração não prova conversa comercial; marcado como "atendida").
- **Episódio de espera**: sequência de mensagens do lead que exige retorno, agrupadas até a próxima ação humana dirigida ao lead. Tempo = última mensagem do lead do grupo → primeira ação humana. Só mensagens que exigem retorno (pergunta, informação pedida, pedido de contato). Agradecimento final isolado não abre episódio. Resposta por outro canal fecha o episódio. Retorno combinado ("te chamo segunda") fecha o episódio e abre `agreed_return` com prazo.
- Episódio aberto no corte: `open=true`, `elapsed_to_cutoff`; nunca somado às medianas de tempo de resposta concluída.
- Status da espera: `aguardando_equipe | aguardando_lead | retorno_combinado | encerrado | nao_determinavel`.
- Tentativas de ligação: `call_attempt` (saída, não atendida) e `call_answered` (atendida); deduplicação Kommo × API4com por `uniq`/id ou por (telefone, ±120 s, direção).
- Abordagem de follow-up: ação humana de saída após ≥ 4 h sem resposta do lead, ou mensagem claramente de retomada; mensagens fragmentadas em ≤ 10 min do mesmo autor contam como 1 abordagem.
- Marcos: reunião oferecida/aceita/agendada/confirmada/realizada/ausência/reagendamento; proposta apresentada; contrato enviado/assinado; procuração enviada/assinada; passagem ao jurídico. Cada marco tem `evidence` (ref) e `confirmed` (bool).
- Consolidado: totais, medianas por lead (n = leads com dado), extremos, sempre com denominador e cobertura. Zero ≠ NA ≠ indisponível.

## Limitações estruturais
- API v4 não expõe texto de chat; conteúdo exige navegador.
- Horários da interface do Kommo têm precisão de minuto; API tem segundos.
- Gravações: acesso testado por link; sem link reutilizável, indicar caminho pelo lead.
- Amostra intencional de 10 casos: sem extrapolação para a operação.

## Atualização
1. Repetir a coleta com novo corte em nova pasta datada (`auditoria-AAAA-MM-DD`), sem sobrescrever.
2. `python3 src/build.py` regenera `dados/publico/*.json`, `painel/data.json`, `exports/*.csv`.
3. `python3 -m pytest tests` valida fórmulas.
