# Roteiro de treinamento (60 min) e plano de ação — Gabriel Habib · atendimento humano no Kommo
Base: 10 casos auditados · corte 2026-09-28T22:42:23-03:00 · frequências sempre com denominador (casos avaliáveis).

## Padrões recorrentes
- **Lead fica sem resposta humana por dias após escrever (pendência aberta no corte ou lacuna > 3 dias)** — 4 de 10 casos com pendência aberta no corte (86 h a 103 h); 8 de 10 com ao menos uma lacuna > 3 dias entre mensagem do lead e ação humana. Impacto: Leads em Negociação/Análise esfriam; documentos enviados não são conferidos; clientes ativados percebem abandono. Mudança: Rotina diária de 'fila de leads com última mensagem do lead sem resposta humana' (incluindo pós-ativação e pós-desqualificação) com meta proposta a validar; cadência do Playbook aplicada em Negociação. Acompanhamento: Indicador: nº de leads com última mensagem do lead sem ação humana > 24 h (base: 4 de 10 na amostra). Responsável: gestor comercial. (causa: processo/distribuição)
  - Evidências: https://gabrielhabibadv.kommo.com/leads/detail/80064014 · 25/09 08:32 → corte (86 h, Negociação); https://gabrielhabibadv.kommo.com/leads/detail/80012252 · 24/09 15:19 → corte (103 h); https://gabrielhabibadv.kommo.com/leads/detail/79490552 · 24/09 17:35 → corte (101 h, pós-ativação); https://gabrielhabibadv.kommo.com/leads/detail/79358770 · 04/09 14:26 → 25/09 (21 dias); https://gabrielhabibadv.kommo.com/leads/detail/79533290 · 04/09 → 17/09 (13 dias)
- **Robô continua respondendo ao lead depois da atuação humana** — 6 de 10 casos (79358770, 79490552, 79533290, 80012252, 80064014, 80105650). Impacto: Mensagens contraditórias, lead responde ao robô e o humano não vê; a lacuna de resposta parece 'coberta'. Mudança: Na integração Evolve Agentes × Kommo, desligar o agente quando a tag 'humano' é aplicada ou quando um usuário humano envia mensagem; remover tag 'agente' ao assumir. Acompanhamento: Indicador: mensagens do robô após a 1ª mensagem humana por lead (base: 31 mensagens em 6 casos). (causa: integração)
  - Evidências: https://gabrielhabibadv.kommo.com/leads/detail/80012252 · 23/09 11:02–13:19 robô após ligação humana; https://gabrielhabibadv.kommo.com/leads/detail/80064014 · 25/09 08:31 robô ×3 em lead em Negociação; https://gabrielhabibadv.kommo.com/leads/detail/79358770 · 27/08 11:19–11:24 robô e humano no mesmo minuto
- **Próximo passo sem prazo/horário ou sem tarefa após ligação ou reunião** — 3 de 5 ligações/reuniões avaliáveis (79877820, 80038784, 79533290 reunião OK com tarefa; 77456896 prazos sem tarefa; 80012252 docs sem acolhimento). Impacto: Bola fica com o lead; 1ª cobrança vem dias depois (4 dias em 79877820; nunca em 80038784). Mudança: Fechar toda ligação com data/hora do próximo contato e criar tarefa no CRM antes de desligar. Acompanhamento: Indicador: % de ligações atendidas > 60 s seguidas de tarefa com prazo em até 1 h (base: 1 de 5). (causa: habilidade comercial)
  - Evidências: https://gabrielhabibadv.kommo.com/leads/detail/79877820 · 17/09 12:33–12:52 transcrição; https://gabrielhabibadv.kommo.com/leads/detail/80038784 · 25/09 10:25 transcrição 02:20–02:39; https://gabrielhabibadv.kommo.com/leads/detail/77456896 · 25/09 11:52 resumo: 'até amanhã' e 'segunda' sem tarefa
- **Retomada de contexto: humano reinicia a investigação sem usar o que o robô/formulário colheu** — 1 de 2 ligações avaliáveis com abertura audível (80038784 negativa; 79877820 positiva). Impacto: Lead repete a história; percepção de desorganização. Mudança: Abertura padrão de 3 linhas citando serviço, situação e o que já foi dito ao assistente; checar se o resumo do agente aparece no lead (integração). Acompanhamento: Amostra mensal de 5 ligações: abertura cita contexto? (base: 1 de 2). (causa: habilidade comercial)
  - Evidências: https://gabrielhabibadv.kommo.com/leads/detail/80038784 · 25/09 transcrição 00:29–02:11 'não aparece esse relatório'; https://gabrielhabibadv.kommo.com/leads/detail/79877820 · 17/09 transcrição 00:13–00:28
- **Registro incompleto no CRM: sem motivo de perda, tarefas vencidas, etapas que não refletem a realidade, serviço vazio, ligação no usuário de integração** — Motivo de perda ausente: 2 de 2 desqualificados; tarefas vencidas: 3 de 10; serviço não informado: 4 de 10; ligações na conta 'Marketing Evolve': 2 de 10 casos (7 de 83 na base de 30 d); etapa avançada sem contato comprovado: 2 de 10 (77456896, 80064014). Impacto: Sem motivo de perda não há aprendizado; sem tarefa não há cadência; a gestão não enxerga o esforço real (ligações da Juliana aparecem como integração). Mudança: Motivo de perda obrigatório na etapa Desqualificado; mapear ramal da Juliana no API4com; preencher 'Serviço' na triagem; concluir/limpar tarefas automáticas. Acompanhamento: Indicadores: % desqualificados com motivo (base 0 de 2); tarefas vencidas > 2 dias (base 3 de 10); % ligações atribuídas a usuário real (base 76 de 83). (causa: registro)
  - Evidências: https://gabrielhabibadv.kommo.com/leads/detail/80012252 · 24/09 15:17; https://gabrielhabibadv.kommo.com/leads/detail/80105650 · 28/09 15:00; https://gabrielhabibadv.kommo.com/leads/detail/79763954 · 15/09 15:45 chamada created_by 10348307; https://gabrielhabibadv.kommo.com/leads/detail/77456896 · 08/06 10:49–12:07
- **Pedido de login/senha do INSS ao lead por telefone (para consultar CNIS/tempo de contribuição)** — 1 de 2 ligações previdenciárias com transcrição (80012252 sim; 77456896 não — pediu PPPs por foto). Impacto: Risco de segurança/LGPD e de perda de confiança; não é falha comercial, é ponto de política do escritório. Mudança: Validar com o responsável técnico: pedir extrato CNIS exportado pelo próprio lead (Meu INSS) em vez de senha. Acompanhamento: Checar em amostra de ligações previdenciárias (base: 1 de 2 transcritas). (causa: para validação do responsável técnico)
  - Evidências: https://gabrielhabibadv.kommo.com/leads/detail/80012252 · 23/09 10:24 transcrição 22:48–23:12 e 27:22–27:28
- **Transferência fora do expediente gera tarefa de 5 min impossível e 1ª ação só no dia seguinte** — 2 de 10 (80012252 às 18:54 → 15,5 h; 80038784 às 07:33 → 3,8 h). Impacto: Lead que acabou de falar com o robô fica sem expectativa; a tarefa vencida vira ruído. Mudança: Mensagem automática de expectativa fora do expediente ('nossa equipe fala com você a partir das 9h') e prazo da tarefa calculado no horário útil. Proposta para validação, expediente não confirmado. Acompanhamento: Tempo transferência → 1ª ação humana em horário útil (base: mediana 1,7 h; extremos 15,5 h e 700 h por registro). (causa: processo/distribuição)
  - Evidências: https://gabrielhabibadv.kommo.com/leads/detail/80012252 · 22/09 18:54 tarefa due 18:59 → concluída 23/09 10:15; https://gabrielhabibadv.kommo.com/leads/detail/80038784 · 24/09 07:33 → 11:19

## Boas práticas observadas
- Ligar primeiro e retornar no horário que o lead pediu, avisando antes por mensagem (79877820, 17/09).
- Pergunta de fechamento explícita ao fim da ligação: 'podemos dar seguimento? ficou alguma dúvida?' (79877820).
- Tarefa com resultado descrevendo o combinado: 'Reunião realizada. Enviar documentos para contratação…' (79533290, 24/09).
- Nota de caso com datas e fatos (79358770, 04/09).
- Persistir por ligação quando o lead não escreve (77456896: 3 atendidas em 10 tentativas).

## Casos para discussão
- 79877820: Acerto (ligação em 11 min, investigação ampla) e oportunidade (fechar com prazo; implicação).
- 80038784: Retomada de contexto falhou na ligação; encerramento sem próximo passo; sem follow-up em 3,5 dias.
- 80012252: Ligação longa seguida de 30 mensagens do lead sem retorno humano; desqualificação sem motivo.
- 79763954: Jornada completa em 5 h; discutir o pós-ativação (5 mensagens sem resposta por 13 dias).
- 79533290: 13 dias sem cadência em Negociação; reunião realizada 20 dias depois; o que mudou?

## Pauta

### 1. Diagnóstico e indicadores · 10 min
- Objetivo: Ler os indicadores com definição e cobertura; entender que 'espera aberta' é lead esperando a gente, não lead frio.
- Casos/trechos no painel: Visão executiva; Comparativo ordenado por 'Espera'
- Perguntas: O que o lead estava esperando de nós em 80064014 (25/09) e 80012252 (24/09)? | Quantas dessas esperas a gente sabia que existiam?
- Exercício: Cada SDR aponta no painel um lead seu com espera aberta e diz qual seria a próxima mensagem.
- Comportamento esperado: Reconhecer a fila de pendências como rotina diária.

### 2. Casos reais: acertos e oportunidades · 20 min
- Objetivo: Comparar 79877820 (ligação em 11 min, investigação ampla, mas sem prazo no fechamento) com 80038784 (contexto perdido, ligação sem próximo passo) e 79763954 (jornada de 5 h).
- Casos/trechos no painel: 79877820 — transcrição 00:13–00:28 e 12:33–12:52; 80038784 — transcrição 00:29–02:39; 79763954 — linha do tempo 15/09; 80012252 — 23/09 10:51–11:11
- Perguntas: Na ligação da Cybele com a Liana, em que momento faltou a implicação? | O que a atendente já sabia sobre o Bruno/‘senhor’ antes de ligar? Onde isso estava no CRM? | Depois dos 30 envios do Milton, qual mensagem de 1 linha mudaria a percepção dele?
- Exercício: Ler em voz alta o fechamento 12:33–12:52 e reescrever com prazo e horário.
- Comportamento esperado: Identificar o ponto exato de retomada e de fechamento datado.

### 3. Simulações · 15 min
- Objetivo: Praticar abertura com contexto, convite à ligação, fechamento com data/hora e acolhimento de documentos.
- Casos/trechos no painel: Gatilhos: 80038784 (abertura), 79533290 (D+1 sem resposta), 77456896 (pós-ligação com compromissos), 80012252 (documentos recebidos)
- Perguntas: Como você abriria a ligação sabendo score 94, carteira assinada, horas extras? | Como pede um horário quando o lead diz 'depois eu entro em contato'?
- Exercício: Duplas SDR × lead, 3 min por rodada, feedback pela rubrica (critérios 2, 5, 8, 9).
- Comportamento esperado: Abertura em 3 linhas com contexto; ≤ 2 perguntas por envio; próximo passo com data/hora e tarefa.
- Exemplos (sugestões reescritas):
  - Sugestão reescrita — abertura: 'Vi que você falou com nosso assistente sobre horas extras não pagas, com carteira assinada há mais de 3 anos. Está podendo falar 10 minutos agora?'
  - Sugestão reescrita — fechamento: 'Vou te mandar a lista agora. Consegue enviar até as 18h? Amanhã às 10h eu te chamo aqui pra conferir.'
  - Sugestão reescrita — documentos recebidos: 'Recebi tudo, obrigado. Vou analisar e te retorno até amanhã 12h.'
  - Sugestão reescrita — saída elegante: 'Pelo que temos hoje, o caminho jurídico não é o mais indicado. Se aparecer algo novo, me chame que reavaliamos.'

### 4. Checklist e compromissos operacionais · 10 min
- Objetivo: Fechar um checklist mínimo por atendimento e os ajustes de integração/registro.
- Casos/trechos no painel: Diagnóstico → padrões 2, 5 e 6
- Perguntas: Quem responde ao cliente depois da ativação? | O que fazemos quando a transferência chega às 18:54?
- Exercício: Escrever juntos o checklist: (1) abrir com contexto; (2) ligar no 1º contato em horário útil; (3) próximo passo com data/hora + tarefa; (4) confirmar recebimento de documentos; (5) motivo de perda + mensagem de saída; (6) nota curta após ligação.
- Comportamento esperado: Acordo sobre o checklist e sobre desligar o robô após o humano assumir.

### 5. Plano de ação e revisão · 5 min
- Objetivo: Confirmar prioridades, ações de 7 dias e indicadores de 30 dias com responsáveis por função.
- Casos/trechos no painel: Diagnóstico → plano de melhoria
- Perguntas: Qual indicador cada um acompanha?
- Exercício: —
- Comportamento esperado: Linha de base e critério de evolução aceitos como proposta para validação.

## Prioridades (até 5)
1. **Zerar a fila de leads sem resposta humana** — Rotina diária (manhã e tarde) sobre leads cuja última mensagem é do lead, incluindo pós-ativação e pós-desqualificação. (4 de 10 pendentes no corte; 8 de 10 com lacuna > 3 dias)
2. **Desligar o robô após a atuação humana** — Ajuste na integração Evolve Agentes × Kommo (tag 'humano' ou 1ª mensagem humana encerra o agente). (6 de 10)
3. **Toda ligação/reunião termina com data, hora e tarefa** — Script de fechamento + tarefa antes de desligar; cobrança em D+1 se o combinado não chegar. (3 de 5 avaliáveis sem prazo/tarefa)
4. **Registro mínimo: motivo de perda, serviço, ramal mapeado** — Motivo obrigatório ao desqualificar; campo Serviço na triagem; ramal da Juliana no API4com. (0 de 2 desqualificados com motivo; 4 de 10 sem serviço; 7 ligações em conta de integração)
5. **Abertura com contexto do robô** — 3 linhas padrão citando serviço e situação já informados; checar exibição do resumo do agente. (1 de 2 ligações avaliáveis)

## Ações para 7 dias
- Dia 1: listar todos os leads do funil Manual com última mensagem do lead sem ação humana; responder ou registrar motivo (gestor comercial + SDRs).
- Dia 1–2: Evolve ajusta a regra do agente (parar ao aplicar tag 'humano' / 1ª mensagem humana) e valida em 3 leads (responsável CRM/integração).
- Dia 2: mapear ramal da Juliana no API4com; conferir que as ligações passam a cair no usuário correto (responsável CRM).
- Dia 3: adotar o script de fechamento de ligação (data + hora + tarefa) e o script de abertura com contexto; simular em dupla (SDRs).
- Dia 3: tornar motivo de perda obrigatório na etapa Desqualificado e revisar as tarefas automáticas de 5 min (responsável CRM; proposta para validação).
- Dia 5: revisar os 10 casos do painel e executar as 'próximas ações recomendadas' que ainda fizerem sentido (SDRs).
- Dia 7: check-in de 20 min com os indicadores abaixo (gestor comercial).

## Indicadores para revisão em 30 dias
| Indicador | Linha de base | Responsável (função) | Critério de evolução (proposta) |
|---|---|---|---|
| Leads com última mensagem do lead sem ação humana > 24 h (contagem no funil) | 4 de 10 na amostra (86–103 h) | Gestor comercial | 0 pendências > 24 h em dias úteis (proposta para validação) |
| Mensagens do robô após a 1ª mensagem humana (por lead) | 6 de 10 casos; 31 mensagens | Responsável integração (Evolve) | 0 após ajuste |
| Ligações atendidas > 60 s seguidas de tarefa com prazo em ≤ 1 h | 1 de 5 | SDRs | ≥ 4 de 5 (proposta) |
| Desqualificados com motivo de perda registrado | 0 de 2 | SDRs / responsável CRM | 100% |
| Tempo transferência → 1ª ação humana em horário útil (mediana) | ≈ 1,7 h (n = 7 com transferência identificável e registro confiável) | SDRs | manter ≤ 1 h como proposta (Playbook sugere 10 min para 1ª tentativa); expediente a confirmar |
| Ligações atribuídas a usuário real no API4com | 76 de 83 (30 dias) | Responsável CRM | 100% |

## Metas propostas (para validação, não regras retroativas)
- Proposta: 1ª ação humana em até 1 h após a transferência em horário útil (Playbook FlowSales cita 10 min para 1ª tentativa; não confirmado como regra do cliente).
- Proposta: nenhuma mensagem do lead sem resposta humana por mais de 24 h em dias úteis, inclusive pós-ativação.
- Proposta: toda ligação atendida > 60 s gera tarefa com data em até 1 h.
- Proposta: cadência em Negociação conforme Playbook (1 h, 6 h, 24 h, 48 h, 4 d, 7 d) — hoje não observada.
