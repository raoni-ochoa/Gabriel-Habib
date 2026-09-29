window.AUDIT_DATA = {
 "status": "ok",
 "generated_at": "[telefone]T23:58:[telefone]:00",
 "meta": {
  "cliente": "Gabriel Habib",
  "funil": "Funil manual",
  "pipeline_id": 13587595,
  "account_url": "[link removido]",
  "cutoff": "[telefone]T22:42:23-03:00",
  "window_days": 15,
  "window_days_max": 30,
  "account_name": "Gabriel Habib Adv.",
  "fonte": "kommo_api (credencial do ambiente, somente GET)",
  "expediente_confirmado": "não confirmado"
 },
 "pipeline": {
  "pipeline_id": 13587595,
  "name": "Funil manual",
  "is_main": false,
  "statuses": [
   {
    "order": 10,
    "status_id": 104845347,
    "name": "Etapa de leads de entrada",
    "is_won": false,
    "is_lost": false,
    "type": 1
   },
   {
    "order": 20,
    "status_id": 104845351,
    "name": "Novo Lead",
    "is_won": false,
    "is_lost": false,
    "type": 0
   },
   {
    "order": 30,
    "status_id": 104845355,
    "name": "Em atendimento",
    "is_won": false,
    "is_lost": false,
    "type": 0
   },
   {
    "order": 40,
    "status_id": 104845359,
    "name": "Análise de viabilidade",
    "is_won": false,
    "is_lost": false,
    "type": 0
   },
   {
    "order": 50,
    "status_id": 108794987,
    "name": "atendimento humano",
    "is_won": false,
    "is_lost": false,
    "type": 0
   },
   {
    "order": 60,
    "status_id": 104845499,
    "name": "Negociação",
    "is_won": false,
    "is_lost": false,
    "type": 0
   },
   {
    "order": 70,
    "status_id": 104845503,
    "name": "Assinatura",
    "is_won": false,
    "is_lost": false,
    "type": 0
   },
   {
    "order": 80,
    "status_id": 104845507,
    "name": "Validação de documentação",
    "is_won": false,
    "is_lost": false,
    "type": 0
   },
   {
    "order": 90,
    "status_id": 111874647,
    "name": "Desqualificado",
    "is_won": false,
    "is_lost": false,
    "type": 0
   },
   {
    "order": 10000,
    "status_id": 142,
    "name": "Ativação",
    "is_won": true,
    "is_lost": false,
    "type": 0
   },
   {
    "order": 11000,
    "status_id": 143,
    "name": "Resgate",
    "is_won": false,
    "is_lost": true,
    "type": 0
   }
  ]
 },
 "selecao": {
  "cutoff": "[telefone]T22:42:23-03:00",
  "filtros": "GET /api/v4/leads filter[pipeline_id]=13587595 com created_at ≥ corte−30d OU updated_at ≥ corte−30d, paginação completa (limit 250); eventos por lead + eventos de chat da conta (45 d) agrupados por lead; notas, tarefas e conversas por lead",
  "periodo": "janela primária 15 d (13/09–28/09/2026); ampliada para 30 d (29/08–28/09) para completar avançados; 1 lead antigo (jun/26) com atuação recente identificado separadamente",
  "candidatos_localizados": 210,
  "criados_15d": 49,
  "criados_30d": 93,
  "elegiveis": 51,
  "elegiveis_30d": 119,
  "selecionados": 10,
  "regra_elegibilidade": "≥1 ação humana (mensagem de saída por usuário humano, ligação, nota ou tarefa criada por humano) dentro da janela; data de atualização do cadastro não conta",
  "motivos": [
   "79763954: Avançado: ganho (Ativação; maior etapa Assinatura), criado na janela de 15 d, condução por texto com 1 ligação",
   "80064014: Avançado: Negociação, criado na janela de 15 d, condução por texto sem ligação",
   "79877820: Avançado: etapa 'atendimento humano', criado na janela de 15 d, 6 ligações com gravação e resumo automático",
   "80038784: Avançado: etapa 'atendimento humano', criado na janela de 15 d, mensagens + 2 ligações",
   "79533290: Avançado: Negociação, criado há 24 d (janela de 30 d), 2 atendentes, conversa longa ainda ativa no corte",
   "79490552: Avançado: ganho (maior etapa Validação de documentação), criado há 26 d (janela de 30 d), 2 atendentes",
   "77456896: Avançado: Negociação, serviço previdenciário (auxílio-acidente), lead antigo (jun/26) com 11 ligações e atuação até 28/09",
   "80105650: Travado/perdido: Desqualificado após atuação humana e 2 ligações, criado na janela de 15 d",
   "80012252: Travado/perdido: Desqualificado após conversa longa com o robô e pouca atuação humana + 1 ligação, criado na janela de 15 d",
   "79358770: Travado: chegou a Negociação e voltou para Análise de viabilidade; 3 ligações, tarefas e notas; criado há 32 d"
  ],
  "reservas": [
   "79964636 (Em atendimento, 3 ligações, transferência não identificável)",
   "79411452 (ganho, 95 mensagens, criado 29/08)"
  ],
  "lotes_detectados": {
   "tag_humano_em_lote": "17/09/2026 09:30–09:31 em 36 leads — desconsiderada como transferência",
   "mensagens_humanas_em_lote": [
    "[telefone]:49",
    "[telefone]:32",
    "[telefone]:21",
    "[telefone]:49"
   ]
  },
  "alertas_sem_atuacao": [
   {
    "lead_id": 79952292,
    "transfer_ts": "[telefone]T09:02:43-03:00",
    "obs": "transferido (confirmado) sem ação humana registrada; etapa Análise de viabilidade"
   },
   {
    "lead_id": 79963720,
    "transfer_ts": "[telefone]T09:15:50-03:00",
    "obs": "transferido (confirmado) sem ação humana registrada; etapa Em atendimento"
   },
   {
    "lead_id": 79990118,
    "transfer_ts": "[telefone]T20:08:03-03:00",
    "obs": "transferido (confirmado) sem ação humana registrada; etapa Em atendimento"
   },
   {
    "lead_id": 79993906,
    "transfer_ts": "[telefone]T04:23:32-03:00",
    "obs": "transferido (confirmado) sem ação humana registrada; etapa Análise de viabilidade"
   },
   {
    "lead_id": 80018812,
    "transfer_ts": "[telefone]T08:06:20-03:00",
    "obs": "transferido (confirmado) sem ação humana registrada; etapa Em atendimento"
   },
   {
    "lead_id": 80025728,
    "transfer_ts": "[telefone]T11:53:11-03:00",
    "obs": "transferido (confirmado) sem ação humana registrada; etapa Em atendimento"
   },
   {
    "lead_id": 80034796,
    "transfer_ts": "[telefone]T21:28:55-03:00",
    "obs": "transferido (confirmado) sem ação humana registrada; etapa Em atendimento"
   },
   {
    "lead_id": 80035518,
    "transfer_ts": "[telefone]T22:39:08-03:00",
    "obs": "transferido (confirmado) sem ação humana registrada; etapa atendimento humano"
   },
   {
    "lead_id": 80099556,
    "transfer_ts": "[telefone]T21:31:11-03:00",
    "obs": "transferido (confirmado) sem ação humana registrada; etapa atendimento humano"
   },
   {
    "lead_id": 80105816,
    "transfer_ts": "[telefone]T13:47:49-03:00",
    "obs": "transferido (confirmado) sem ação humana registrada; etapa Análise de viabilidade"
   },
   {
    "lead_id": 80112548,
    "transfer_ts": "[telefone]T01:57:27-03:00",
    "obs": "transferido (confirmado) sem ação humana registrada; etapa Em atendimento"
   },
   {
    "lead_id": 80153552,
    "transfer_ts": "[telefone]T22:15:38-03:00",
    "obs": "transferido (confirmado) sem ação humana registrada; etapa Análise de viabilidade"
   }
  ],
  "transferidos_sem_atuacao_15d": 12
 },
 "alertas_sem_atuacao": [
  {
   "lead_id": 79952292,
   "transfer_ts": "[telefone]T09:02:43-03:00",
   "obs": "transferido (confirmado) sem ação humana registrada; etapa Análise de viabilidade"
  },
  {
   "lead_id": 79963720,
   "transfer_ts": "[telefone]T09:15:50-03:00",
   "obs": "transferido (confirmado) sem ação humana registrada; etapa Em atendimento"
  },
  {
   "lead_id": 79990118,
   "transfer_ts": "[telefone]T20:08:03-03:00",
   "obs": "transferido (confirmado) sem ação humana registrada; etapa Em atendimento"
  },
  {
   "lead_id": 79993906,
   "transfer_ts": "[telefone]T04:23:32-03:00",
   "obs": "transferido (confirmado) sem ação humana registrada; etapa Análise de viabilidade"
  },
  {
   "lead_id": 80018812,
   "transfer_ts": "[telefone]T08:06:20-03:00",
   "obs": "transferido (confirmado) sem ação humana registrada; etapa Em atendimento"
  },
  {
   "lead_id": 80025728,
   "transfer_ts": "[telefone]T11:53:11-03:00",
   "obs": "transferido (confirmado) sem ação humana registrada; etapa Em atendimento"
  },
  {
   "lead_id": 80034796,
   "transfer_ts": "[telefone]T21:28:55-03:00",
   "obs": "transferido (confirmado) sem ação humana registrada; etapa Em atendimento"
  },
  {
   "lead_id": 80035518,
   "transfer_ts": "[telefone]T22:39:08-03:00",
   "obs": "transferido (confirmado) sem ação humana registrada; etapa atendimento humano"
  },
  {
   "lead_id": 80099556,
   "transfer_ts": "[telefone]T21:31:11-03:00",
   "obs": "transferido (confirmado) sem ação humana registrada; etapa atendimento humano"
  },
  {
   "lead_id": 80105816,
   "transfer_ts": "[telefone]T13:47:49-03:00",
   "obs": "transferido (confirmado) sem ação humana registrada; etapa Análise de viabilidade"
  },
  {
   "lead_id": 80112548,
   "transfer_ts": "[telefone]T01:57:27-03:00",
   "obs": "transferido (confirmado) sem ação humana registrada; etapa Em atendimento"
  },
  {
   "lead_id": 80153552,
   "transfer_ts": "[telefone]T22:15:38-03:00",
   "obs": "transferido (confirmado) sem ação humana registrada; etapa Análise de viabilidade"
  }
 ],
 "cobertura": {
  "casos": 10,
  "chamadas_localizadas": 27,
  "chamadas_atendidas": 8,
  "gravacoes_com_link": 10,
  "gravacoes_acessiveis": 9,
  "transcritas": 8,
  "ligacoes_analisadas": 10,
  "conversas_com_conteudo": 0
 },
 "casos": [
  {
   "id": "77456896",
   "nome": "Caso 1",
   "url": "",
   "servico": "[PREVIDENCIÁRIO] Auxílio acidente",
   "origem": "Mídia Paga / [Mídia] Meta Ads / metaads",
   "criado_em": "[telefone]T10:14:09-03:00",
   "atendentes": [
    "Atendente 1"
   ],
   "responsavel_atual": "[pessoa]",
   "etapa_atual": "Negociação",
   "etapa_max": "Negociação",
   "status": "open",
   "motivo_perda": null,
   "tags": [
    "auxilio acidente",
    "humano",
    "⭐️"
   ],
   "legacy": true,
   "motivo_selecao": "Avançado: Negociação, serviço previdenciário (auxílio-acidente), lead antigo (jun/26) com 11 ligações e atuação até 28/09",
   "contexto_robo": "Pré triagem de Auxílio Acidente feita ✅ · formulário/qualificação: Score: 23; Status de Qualificação: Qualificado",
   "transfer": {
    "ts": "[telefone]T10:14:09-03:00",
    "confidence": "confirmado",
    "rule": "tag 'humano' adicionada no momento da criação (roteamento direto para humano)"
   },
   "indicadores": {
    "h_transf_primeira_tentativa": {
     "valor": 700.59,
     "definicao": "horas corridas da transferência até 1ª ação humana dirigida ao lead (mensagem ou tentativa de ligação)",
     "base": "transferência confirmado",
     "cobertura": "completa"
    },
    "h_transf_primeira_mensagem": {
     "valor": 2425.83,
     "definicao": "horas até 1ª mensagem humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_transf_primeira_ligacao": {
     "valor": 700.59,
     "definicao": "horas até 1ª tentativa de ligação de saída",
     "base": "notas/eventos de chamada",
     "cobertura": "completa"
    },
    "h_transf_primeira_conversa": {
     "valor": 2425.9,
     "definicao": "horas até 1ª conversa efetiva (resposta do lead a humano ou ligação atendida)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "episodios_espera": {
     "valor": 0,
     "definicao": "grupos de mensagens do lead que exigiam retorno",
     "base": "mensagens anotadas requires_reply",
     "cobertura": "completa"
    },
    "mediana_resposta_h": {
     "valor": "NA",
     "definicao": "mediana do tempo corrido última msg do lead → 1ª ação humana, só episódios concluídos",
     "base": "0 episódios concluídos",
     "cobertura": "completa"
    },
    "maior_espera_concluida_h": {
     "valor": "NA",
     "definicao": "maior espera concluída",
     "base": "0 episódios",
     "cobertura": "completa"
    },
    "espera_aberta_h": {
     "valor": "NA",
     "definicao": "tempo acumulado até o corte da pendência aberta (não somado às medianas)",
     "base": "episódio aberto",
     "cobertura": "completa"
    },
    "msgs_humanas": {
     "valor": 13,
     "definicao": "mensagens enviadas por humano (fragmentos contados individualmente)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_lead": {
     "valor": 0,
     "definicao": "mensagens recebidas do lead",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_robo": {
     "valor": 0,
     "definicao": "mensagens do robô (contexto)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "abordagens_followup": {
     "valor": 0,
     "definicao": "ações humanas de saída após ≥4 h sem resposta do lead; fragmentos ≤10 min = 1",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tentativas_ligacao_saida": {
     "valor": 11,
     "definicao": "ligações de saída por humano (atendidas ou não), deduplicadas",
     "base": "notas de chamada + API4com",
     "cobertura": "completa"
    },
    "ligacoes_saida_atendidas": {
     "valor": 3,
     "definicao": "ligações de saída com duração > 0 (atendida ≠ conversa comercial)",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "chamadas_entrada": {
     "valor": 0,
     "definicao": "ligações recebidas",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "dias_com_atuacao_humana": {
     "valor": 9,
     "definicao": "dias distintos com ação humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_criadas": {
     "valor": 1,
     "definicao": "tarefas criadas",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_concluidas": {
     "valor": 1,
     "definicao": "tarefas concluídas (não prova ligação)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_vencidas": {
     "valor": 0,
     "definicao": "tarefas com prazo anterior ao corte sem conclusão",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_ate_agendamento": {
     "valor": "NA",
     "definicao": "horas transferência → reunião agendada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_reuniao_realizada": {
     "valor": 2617.42,
     "definicao": "horas transferência → reunião realizada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_envio_documento": {
     "valor": "NA",
     "definicao": "horas transferência → 1º documento enviado",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_assinatura_confirmada": {
     "valor": "NA",
     "definicao": "horas transferência → assinatura comprovada",
     "base": "marcos",
     "cobertura": "completa"
    }
   },
   "episodios": [],
   "followups": [],
   "chamadas": {
    "chamadas_localizadas": 11,
    "tentativas_saida": 11,
    "saida_atendidas": 3,
    "entrada": 0,
    "entrada_perdidas": 0,
    "duracao_total_s": 658,
    "com_gravacao_link": 3,
    "gravacao_acessivel": 3,
    "transcritas": 2,
    "lista": [
     {
      "ts": "[telefone]T14:49:47-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "b6e509b9-41fc-4e1a-a685-b33abe582009",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T14:52:22-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "71f[telefone]c6-afe0-eb0b52c18256",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T10:40:15-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "9b823a35-1e1b-4fdb-933c-d448990ce66e",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T12:02:54-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "52d5d9d3-1f21-4ae0-9589-4ad807caeacd",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T12:08:12-03:00",
      "direction": "out",
      "action": "call_answered",
      "actor": "[pessoa]",
      "duration": 22,
      "status": 4,
      "link": true,
      "recording_access": "acessivel",
      "id": "03c6de6d-0a2b-4de5-a891-d61c52d685f0",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T11:39:27-03:00",
      "direction": "out",
      "action": "call_answered",
      "actor": "[pessoa]",
      "duration": 629,
      "status": 4,
      "link": true,
      "recording_access": "acessivel",
      "id": "ff7c7f6b-5444-4aea-920a-b15021f1640a",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T11:45:00-03:00",
      "direction": "out",
      "action": "proposal_presented",
      "actor": "[pessoa]",
      "duration": null,
      "status": null,
      "link": false,
      "recording_access": null,
      "id": "m-prop-77456896",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T13:46:51-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "a6cd99df-b6e7-46bc-8dc4-b6c03a808aab",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T17:00:04-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "3bf0c096-89df-440b-aaf9-5d466e516641",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T14:22:48-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "a78977a5-2473-4a74-a335-86fd76795326",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T14:28:04-03:00",
      "direction": "out",
      "action": "call_answered",
      "actor": "[pessoa]",
      "duration": 7,
      "status": 4,
      "link": true,
      "recording_access": "acessivel",
      "id": "2ca44cdc-90ee-4d1d-86d7-e6d9c37f2436",
      "ref": "[removido]"
     }
    ]
   },
   "marcos": {
    "meeting_offered": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_accepted": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_scheduled": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_confirmed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_done": {
     "ocorreu": true,
     "primeira": "[telefone]T11:39:27-03:00",
     "evidencias": [
      {
       "ref": "[removido]",
       "conteudo": "[removido]",
       "doc": "ligação",
       "confirmado": true
      }
     ]
    },
    "meeting_noshow": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_reschedule": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "proposal_presented": {
     "ocorreu": true,
     "primeira": "[telefone]T11:45:00-03:00",
     "evidencias": [
      {
       "ref": "[removido]",
       "conteudo": "[removido]",
       "doc": null,
       "confirmado": false
      }
     ]
    },
    "document_sent": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_signed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "legal_handoff": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "contrato_enviado": false,
    "contrato_assinado_confirmado": false,
    "procuracao_enviado": false,
    "procuracao_assinado_confirmado": false
   },
   "status_espera": "aguardando_lead",
   "ultimo_evento": "[telefone]T17:21:55-03:00",
   "rubrica": {
    "nota_normalizada": 75.0,
    "criterios_avaliados": 9,
    "cobertura": "9/10",
    "detalhe": {
     "c1": {
      "criterio": "Agilidade e continuidade da resposta",
      "nota": 2,
      "justificativa": "Junho: tarefa concluída em 34 min e 3 mudanças de etapa em 2 h sem contato registrado; notas de 09/06 e 23/06 dizem 'liguei, não atende'. Julho: 4 tentativas não atendidas. Depois 57 dias sem ação (22/07 → 17/09). Setembro: cadência boa (17, 25 e 28/09).",
      "evidencias": [
       "[link removido] · 08/06 10:48–12:07",
       "[link removido] · 09/06 13:31 nota 'já liguei'",
       "[link removido] · 22/07 12:02 → 17/09 12:03"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c2": {
      "criterio": "Retomada do contexto e personalização",
      "nota": "DI",
      "justificativa": "Sem texto de mensagens; ligação de 25/09 só via resumo automático.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c3": {
      "criterio": "Investigação da necessidade e uso pertinente do SPIN",
      "nota": 4,
      "justificativa": "Transcrição de 25/09: perguntas de situação (onde mora, desde quando, idade, embarcado, adicionais, PPPs) levam à descoberta de uma segunda oportunidade (aposentadoria especial). Situação e problema bem cobertos; implicação tratada de forma breve ('não vamos perder tempo').",
      "evidencias": [
       "[link removido] · 25/09 11:39 transcrição 05:32–09:38"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c4": {
      "criterio": "Qualificação adequada ao serviço",
      "nota": 3,
      "justificativa": "Pede CPF, endereço e fotos dos PPPs; distingue auxílio-acidente de aposentadoria especial. Serviço previdenciário tratado com os requisitos próprios, não com o roteiro de vínculo.",
      "evidencias": [
       "[link removido] · 25/09 11:52 nota (resumo automático)"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c5": {
      "criterio": "Iniciativa e pertinência das ligações",
      "nota": 4,
      "justificativa": "10 tentativas de saída registradas (3 atendidas), incluindo retentativas no mesmo dia e após mensagens sem resposta. Lead nunca escreveu no WhatsApp registrado; a ligação foi o canal que funcionou.",
      "evidencias": [
       "[link removido] · 07/07, 16/07, 22/07, 17/09, 25/09, 28/09 notas de chamada"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c6": {
      "criterio": "Clareza da apresentação de valor e do processo",
      "nota": 3,
      "justificativa": "Transcrição: honorários (30% dos atrasados + 30% dos 12 primeiros meses), prazo 3–4 meses e pagamento só se o INSS pagar explicados; o lead pede para falar mais devagar (04:31). Condições para validação do responsável técnico.",
      "evidencias": [
       "[link removido] · 25/09 11:39 transcrição 01:29–02:05 e 04:31"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c7": {
      "criterio": "Tratamento das dúvidas e objeções",
      "nota": 3,
      "justificativa": "Dúvidas sobre documentação e custo respondidas (segundo o resumo automático).",
      "evidencias": [
       "[link removido] · 25/09 11:52 nota"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c8": {
      "criterio": "Condução para reunião ou próximo passo concreto",
      "nota": 3,
      "justificativa": "Compromissos claros: lead envia dados e PPPs 'até amanhã'; escritório monta contrato e envia vídeo 'segunda-feira'. Sem tarefa criada para esses prazos.",
      "evidencias": [
       "[link removido] · 25/09 11:52 nota"
      ],
      "categoria_causa": "registro"
     },
     "c9": {
      "criterio": "Follow-up, confirmação e acompanhamento até assinatura",
      "nota": 3,
      "justificativa": "Cobranças em 25/09 13:45–17:00 e 28/09 (mensagens + ligações). Não há evidência de envio do vídeo/contrato prometido para segunda (28/09) — texto indisponível.",
      "evidencias": [
       "[link removido] · 25/09 13:45–17:00",
       "[link removido] · 28/09 14:19–17:21"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c10": {
      "criterio": "Organização e registros no CRM",
      "nota": 2,
      "justificativa": "Notas humanas curtas em junho (bom); ligações de junho não registradas (integração posterior?); etapa Negociação desde 08/06 sem contato comprovado; nenhuma tarefa para os prazos combinados em 25/09; 6 ligações sem link de gravação.",
      "evidencias": [
       "[link removido] · 08/06 12:07 etapa Negociação",
       "[link removido] · 25/09 sem tarefa"
      ],
      "categoria_causa": "registro"
     }
    }
   },
   "timeline": [
    {
     "id": "01ktknx11fbzq2k6r35ftj04v7",
     "lead_id": "77456896",
     "ts": "[telefone]T10:14:09-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01ktknx11fx0khkbfqwj762q59",
     "lead_id": "77456896",
     "ts": "[telefone]T10:14:09-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "humano",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01ktknx11fhybhkq1bh49an6aw",
     "lead_id": "77456896",
     "ts": "[telefone]T10:14:09-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "auxilio acidente",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01ktknx078fvd9dv6gsmfbc6bk",
     "lead_id": "77456896",
     "ts": "[telefone]T10:14:09-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "transfer-77456896",
     "lead_id": "77456896",
     "ts": "[telefone]T10:14:09-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "transfer",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01ktknx4karvpr8wp22550j6yh",
     "lead_id": "77456896",
     "ts": "[telefone]T10:14:13-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "humano"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01ktknx4kajvpm3n82vtr289y1",
     "lead_id": "77456896",
     "ts": "[telefone]T10:14:13-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01ktknx4ka0j23xt3kgpn97ycw",
     "lead_id": "77456896",
     "ts": "[telefone]T10:14:13-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "⭐️",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01ktknx4gehb795vrqte3pvhxt",
     "lead_id": "77456896",
     "ts": "[telefone]T10:14:13-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "responsible_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T10:14:13-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T10:14:13-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "sync_robo"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T10:16:22-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "system",
     "action": "task_created",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T10:21:22-03:00",
      "completed": true,
      "responsible": "[pessoa]",
      "result": "Em atendimento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "tc[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T10:48:46-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_completed",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "result": "Em atendimento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01ktkqxd8nave7jdpkw109jm6p",
     "lead_id": "77456896",
     "ts": "[telefone]T10:49:19-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845351,
      "to": 104845355
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01ktkrwkcpcxep46jttqzts3fp",
     "lead_id": "77456896",
     "ts": "[telefone]T11:06:21-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845355,
      "to": 104845359
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01ktkwd3ta12djwjm6x6m47k5d",
     "lead_id": "77456896",
     "ts": "[telefone]T12:07:48-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845359,
      "to": 104845499
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T13:31:49-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "human",
     "action": "note",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T15:56:08-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "human",
     "action": "note",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T14:49:47-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "b6e509b9-41fc-4e1a-a685-b33abe582009",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T14:52:22-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "71f[telefone]c6-afe0-eb0b52c18256",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T10:40:15-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "9b823a35-1e1b-4fdb-933c-d448990ce66e",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T12:02:54-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "52d5d9d3-1f21-4ae0-9589-4ad807caeacd",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qngr4fs2jxcaf9v84ppmm8",
     "lead_id": "77456896",
     "ts": "[telefone]T09:29:59-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "humano",
      "lote": true
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qyan6m6jwg9fbf46txys2b",
     "lead_id": "77456896",
     "ts": "[telefone]T12:03:57-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 339,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qyf3kcjd7fybtgeqgyhgrs",
     "lead_id": "77456896",
     "ts": "[telefone]T12:06:23-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 339,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T12:08:12-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_answered",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 22,
      "link": "[removido]",
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "03c6de6d-0a2b-4de5-a891-d61c52d685f0",
      "call_status": 4,
      "call_result": "[removido]",
      "recording_access": "acessivel",
      "transcript": "[removido]",
      "transcript_segments": [
       "[removido]"
      ]
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qymx2y5g8pc8jtbpwjy7x5",
     "lead_id": "77456896",
     "ts": "[telefone]T12:09:33-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 339,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "m-n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T11:39:27-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "meeting_done",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "confirmed": true,
      "doc_type": "ligação"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T11:39:27-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_answered",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 629,
      "link": "[removido]",
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "ff7c7f6b-5444-4aea-920a-b15021f1640a",
      "call_status": 4,
      "call_result": "[removido]",
      "recording_access": "acessivel",
      "transcript": "[removido]",
      "transcript_segments": [
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]"
      ]
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3cg47ab2z2xrkapsgp25fg2",
     "lead_id": "77456896",
     "ts": "[telefone]T11:39:49-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 339,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "m-prop-77456896",
     "lead_id": "77456896",
     "ts": "[telefone]T11:45:00-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "proposal_presented",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "min",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "confirmed": false,
      "fonte": "resumo automático"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T11:52:26-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "resumo_automatico"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T11:52:26-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3cqarbxg1fc6epa6eng9852",
     "lead_id": "77456896",
     "ts": "[telefone]T13:45:43-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 339,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3cqb0gh5ezrnfewxzmr6eqn",
     "lead_id": "77456896",
     "ts": "[telefone]T13:45:52-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 339,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3cqba1qq6x8eeyv78e2mdxc",
     "lead_id": "77456896",
     "ts": "[telefone]T13:46:01-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 339,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T13:46:51-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "a6cd99df-b6e7-46bc-8dc4-b6c03a808aab",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3cqe2t6yb3anqw27k4k8hgg",
     "lead_id": "77456896",
     "ts": "[telefone]T13:47:32-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 339,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T17:00:04-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "3bf0c096-89df-440b-aaf9-5d466e516641",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3mgdwjhba0agkrrc1xm8xac",
     "lead_id": "77456896",
     "ts": "[telefone]T14:19:01-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 339,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3mgektg8n15gxzvwnnsb2n0",
     "lead_id": "77456896",
     "ts": "[telefone]T14:19:25-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 339,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3mgf0jy5rf7ah673pdnqza6",
     "lead_id": "77456896",
     "ts": "[telefone]T14:19:38-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 339,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T14:22:48-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "a78977a5-2473-4a74-a335-86fd76795326",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "77456896",
     "ts": "[telefone]T14:28:04-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_answered",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 7,
      "link": "[removido]",
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "2ca44cdc-90ee-4d1d-86d7-e6d9c37f2436",
      "call_status": 4,
      "call_result": "[removido]",
      "recording_access": "acessivel",
      "transcript": null,
      "transcript_segments": null,
      "duplicates": [
       {
        "id": "n[telefone]",
        "source": "kommo_api",
        "ref": "[removido]"
       }
      ]
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3mtw5kstreq0kc19md21f89",
     "lead_id": "77456896",
     "ts": "[telefone]T17:21:35-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 339,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3mtws21xg69qfeqwqraedxn",
     "lead_id": "77456896",
     "ts": "[telefone]T17:21:55-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 339,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    }
   ],
   "calls_analysis": [
    {
     "call_id": "ligação 25/09 11:39 (629 s) — transcrição local disponível",
     "transcript_source": "transcrição local (faster-whisper small) + resumo automático do CRM (nota 25/09 11:52)",
     "resumo": "10 min 29 s. Abertura direta ('só faltam os seus dados para montar o contrato'); o lead está embarcado e sem documentos à mão; a atendente aceita nome, CPF e endereço por mensagem. Explica honorários (30% dos atrasados + 30% dos 12 primeiros meses) e prazo de 3–4 meses; o lead pede que fale mais devagar. Coleta nome e endereço, investiga zona rural, idade (62), 25 anos embarcado, insalubridade/periculosidade e 56 PPPs, e identifica possível aposentadoria especial (decisão recente do STF). Fecha: PPPs por foto amanhã; contrato do auxílio-acidente e vídeo na segunda.",
     "trechos": [
      {
       "timestamp": "00:19–01:08",
       "trecho": "[removido]",
       "interpretacao": "Remove atrito: aceita os dados por mensagem quando o lead não tem documentos à mão. Boa prática de fechamento.",
       "alternativa": "(manter)"
      },
      {
       "timestamp": "01:29–02:05 e 04:31",
       "trecho": "[removido]",
       "interpretacao": "Condições apresentadas com clareza de conteúdo, mas rápido demais para o lead (ele pede para desacelerar). Condições comerciais ficam para validação do responsável técnico.",
       "alternativa": "Sugestão reescrita: 'Vou explicar em duas partes e depois te mando por escrito. Primeiro: só pagamos se o INSS pagar. Segundo: quanto. Pode me interromper.'"
      },
      {
       "timestamp": "05:32–09:38",
       "trecho": "[removido]",
       "interpretacao": "Investigação ativa que descobre uma segunda oportunidade (aposentadoria especial) a partir de perguntas de situação. Exemplo de SPIN bem aplicado a serviço previdenciário.",
       "alternativa": "(manter) Registrar a nova oportunidade como nota e etapa própria no CRM."
      },
      {
       "timestamp": "09:38–10:19",
       "trecho": "[removido]",
       "interpretacao": "Próximos passos datados dos dois lados (bom); nenhuma tarefa criada no CRM e não há evidência de envio do contrato/vídeo (texto indisponível).",
       "alternativa": "Sugestão: tarefa 'enviar contrato + vídeo' para 28/09 09:00 e mensagem de confirmação logo após a ligação."
      }
     ],
     "limites": "Trecho 08:19–09:02 é artefato da transcrição (repetição de 'Entendo'); nomes com erros; tom não avaliado. Notas de junho indicam ligações não registradas no CRM."
    }
   ],
   "acertos": [
    "Persistência pertinente por ligação em lead que não responde por texto (10 tentativas, 3 atendidas).",
    "Ligação longa com investigação adequada ao serviço previdenciário e compromissos bilaterais datados.",
    "Notas humanas registrando tentativas em junho."
   ],
   "melhorias": [
    "Evitar o 'buraco' de 57 dias: lead em Negociação sem nenhuma ação entre 22/07 e 17/09 — definir regra de cadência ou mover para resgate com motivo.",
    "Não avançar etapas (Em atendimento → Análise → Negociação em 2 h) sem contato comprovado; etapa deve refletir a realidade.",
    "Criar tarefa para cada compromisso combinado na ligação (docs 'amanhã', vídeo 'segunda').",
    "Confirmar por mensagem, logo após a ligação, o que foi combinado e o que o escritório vai enviar."
   ],
   "evidencias": [
    "[link removido] · 08/06 10:48–12:07 tarefa e 3 etapas",
    "[link removido] · 22/07 → 17/09 sem ação",
    "[link removido] · 25/09 11:39 ligação 629 s + resumo 11:52",
    "[link removido] · 28/09 14:22–14:28 três tentativas"
   ],
   "conduzir_melhor": [
    "Sugestão reescrita (pós-ligação 25/09): 'Seu [pessoa], obrigado pela conversa. Combinamos: o senhor me manda até amanhã CPF, endereço e as fotos dos PPPs; na segunda eu te envio o contrato e um vídeo explicando. Qualquer dúvida, me chama aqui.'",
    "Sugestão reescrita (segunda, 28/09): 'Bom dia! Como prometido, segue o vídeo e o contrato. Consegue assinar hoje? Se preferir, revisamos juntos por ligação às 15h.'"
   ],
   "proxima_acao": "Não executar: enviar (ou confirmar o envio de) contrato e vídeo prometidos; criar tarefa de assinatura com prazo; registrar nota com status dos documentos.",
   "limitacoes": [
    "Ligações de junho não constam no CRM (apenas notas); tempos até o 1º contato não são confiáveis para este caso (indicador 'h_transf_primeira_tentativa' = 700 h reflete registro, não comportamento).",
    "Sem texto de mensagens."
   ],
   "confianca": "média",
   "observado_vs_sugerido": [],
   "nomes_citados": [
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]"
   ]
  },
  {
   "id": "79358770",
   "nome": "Caso 2",
   "url": "",
   "servico": "[TRABALHISTA] Reconhecimento de vínculo",
   "origem": "Mídia Paga / [Mídia] Meta Ads",
   "criado_em": "[telefone]T02:41:36-03:00",
   "atendentes": [
    "Atendente 1",
    "Atendente 2"
   ],
   "responsavel_atual": "[pessoa]",
   "etapa_atual": "Análise de viabilidade",
   "etapa_max": "Negociação",
   "status": "open",
   "motivo_perda": null,
   "tags": [
    "humano",
    "⭐️",
    "Trabalhista generica"
   ],
   "legacy": true,
   "motivo_selecao": "Travado: chegou a Negociação e voltou para Análise de viabilidade; 3 ligações, tarefas e notas; criado há 32 d",
   "contexto_robo": "Pré triagem de Reconhecimento de Vínculo feita ✅ · formulário/qualificação: Score: 79; [T] Vínculo: Carteira assinada; Status de Qualificação: Qualificado",
   "transfer": {
    "ts": "[telefone]T10:24:11-03:00",
    "confidence": "inferido",
    "rule": "1ª tarefa atribuída a pessoa (Reuniçao ligação)"
   },
   "indicadores": {
    "h_transf_primeira_tentativa": {
     "valor": 2.0,
     "definicao": "horas corridas da transferência até 1ª ação humana dirigida ao lead (mensagem ou tentativa de ligação)",
     "base": "transferência inferido",
     "cobertura": "completa"
    },
    "h_transf_primeira_mensagem": {
     "valor": 2.0,
     "definicao": "horas até 1ª mensagem humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_transf_primeira_ligacao": {
     "valor": 507.89,
     "definicao": "horas até 1ª tentativa de ligação de saída",
     "base": "notas/eventos de chamada",
     "cobertura": "completa"
    },
    "h_transf_primeira_conversa": {
     "valor": 1.31,
     "definicao": "horas até 1ª conversa efetiva (resposta do lead a humano ou ligação atendida)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "episodios_espera": {
     "valor": 6,
     "definicao": "grupos de mensagens do lead que exigiam retorno",
     "base": "mensagens anotadas requires_reply",
     "cobertura": "completa"
    },
    "mediana_resposta_h": {
     "valor": 0.11,
     "definicao": "mediana do tempo corrido última msg do lead → 1ª ação humana, só episódios concluídos",
     "base": "6 episódios concluídos",
     "cobertura": "completa"
    },
    "maior_espera_concluida_h": {
     "valor": 503.82,
     "definicao": "maior espera concluída",
     "base": "6 episódios",
     "cobertura": "completa"
    },
    "espera_aberta_h": {
     "valor": "NA",
     "definicao": "tempo acumulado até o corte da pendência aberta (não somado às medianas)",
     "base": "episódio aberto",
     "cobertura": "completa"
    },
    "msgs_humanas": {
     "valor": 30,
     "definicao": "mensagens enviadas por humano (fragmentos contados individualmente)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_lead": {
     "valor": 22,
     "definicao": "mensagens recebidas do lead",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_robo": {
     "valor": 10,
     "definicao": "mensagens do robô (contexto)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "abordagens_followup": {
     "valor": 4,
     "definicao": "ações humanas de saída após ≥4 h sem resposta do lead; fragmentos ≤10 min = 1",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tentativas_ligacao_saida": {
     "valor": 1,
     "definicao": "ligações de saída por humano (atendidas ou não), deduplicadas",
     "base": "notas de chamada + API4com",
     "cobertura": "completa"
    },
    "ligacoes_saida_atendidas": {
     "valor": 0,
     "definicao": "ligações de saída com duração > 0 (atendida ≠ conversa comercial)",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "chamadas_entrada": {
     "valor": 0,
     "definicao": "ligações recebidas",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "dias_com_atuacao_humana": {
     "valor": 6,
     "definicao": "dias distintos com ação humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_criadas": {
     "valor": 3,
     "definicao": "tarefas criadas",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_concluidas": {
     "valor": 2,
     "definicao": "tarefas concluídas (não prova ligação)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_vencidas": {
     "valor": 1,
     "definicao": "tarefas com prazo anterior ao corte sem conclusão",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_ate_agendamento": {
     "valor": 0.0,
     "definicao": "horas transferência → reunião agendada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_reuniao_realizada": {
     "valor": "NA",
     "definicao": "horas transferência → reunião realizada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_envio_documento": {
     "valor": "NA",
     "definicao": "horas transferência → 1º documento enviado",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_assinatura_confirmada": {
     "valor": "NA",
     "definicao": "horas transferência → assinatura comprovada",
     "base": "marcos",
     "cobertura": "completa"
    }
   },
   "episodios": [
    {
     "start": "[telefone]T11:42:54-03:00",
     "last_lead_msg": "[telefone]T11:43:01-03:00",
     "msgs": [
      "01m1pdyrdgm2zgvk36j4j4wya9",
      "01m1pdyz88sx4x38qkpdaf5ved"
     ],
     "refs": [
      "[link removido] · [telefone]T11:42:54-03:00 · evento 01m1pdyrdgm2zgvk36j4j4wya9",
      "[link removido] · [telefone]T11:43:01-03:00 · evento 01m1pdyz88sx4x38qkpdaf5ved"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T12:24:11-03:00",
     "answer_ref": "[link removido] · [telefone]T12:24:11-03:00 · evento 01m1pgabzct3pbx471z049d1fz",
     "answer_action": "message",
     "wait_seconds": 2470.0,
     "open": false
    },
    {
     "start": "[telefone]T12:33:00-03:00",
     "last_lead_msg": "[telefone]T12:33:00-03:00",
     "msgs": [
      "01m1pgtfz0q5hk58mbx8xgqkww"
     ],
     "refs": [
      "[link removido] · [telefone]T12:33:00-03:00 · evento 01m1pgtfz0q5hk58mbx8xgqkww"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T12:39:01-03:00",
     "answer_ref": "[link removido] · [telefone]T12:39:01-03:00 · evento 01m1ph5h0yh5vxr30ctk9x2cp4",
     "answer_action": "message",
     "wait_seconds": 361.0,
     "open": false
    },
    {
     "start": "[telefone]T12:39:59-03:00",
     "last_lead_msg": "[telefone]T12:39:59-03:00",
     "msgs": [
      "01m1ph794rnhxrrdxwgxvy0wzb"
     ],
     "refs": [
      "[link removido] · [telefone]T12:39:59-03:00 · evento 01m1ph794rnhxrrdxwgxvy0wzb"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T12:45:03-03:00",
     "answer_ref": "[link removido] · [telefone]T12:45:03-03:00 · evento 01m1phgj7dkx4adyaq57c3cpmm",
     "answer_action": "message",
     "wait_seconds": 304.0,
     "open": false
    },
    {
     "start": "[telefone]T14:16:24-03:00",
     "last_lead_msg": "[telefone]T14:16:24-03:00",
     "msgs": [
      "01m1ppqtj04gdzjm5758c0m95a"
     ],
     "refs": [
      "[link removido] · [telefone]T14:16:24-03:00 · evento 01m1ppqtj04gdzjm5758c0m95a"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T14:24:04-03:00",
     "answer_ref": "[link removido] · [telefone]T14:24:04-03:00 · evento 01m1pq5vwvqrvtss7f1fb23e9p",
     "answer_action": "message",
     "wait_seconds": 460.0,
     "open": false
    },
    {
     "start": "[telefone]T14:24:56-03:00",
     "last_lead_msg": "[telefone]T14:24:56-03:00",
     "msgs": [
      "01m1pq7ej03qqxrsbq7jjjg11q"
     ],
     "refs": [
      "[link removido] · [telefone]T14:24:56-03:00 · evento 01m1pq7ej03qqxrsbq7jjjg11q"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T14:25:48-03:00",
     "answer_ref": "[link removido] · [telefone]T14:25:48-03:00 · evento 01m1pq91z719p83hxt3ffnswrv",
     "answer_action": "message",
     "wait_seconds": 52.0,
     "open": false
    },
    {
     "start": "[telefone]T14:26:43-03:00",
     "last_lead_msg": "[telefone]T14:26:43-03:00",
     "msgs": [
      "01m1pqaq1rs2be4mwr6hp3c6ap"
     ],
     "refs": [
      "[link removido] · [telefone]T14:26:43-03:00 · evento 01m1pqaq1rs2be4mwr6hp3c6ap"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T14:15:46-03:00",
     "answer_ref": "[link removido] · [telefone]T14:15:46-03:00 · evento 01m3cs1s3nw0a8drw0tkctpdg4",
     "answer_action": "message",
     "wait_seconds": 1813743.0,
     "open": false
    }
   ],
   "followups": [
    {
     "ts": "[telefone]T15:23:42-03:00",
     "action": "message",
     "gap_hours": 99.82,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T11:53:38-03:00",
     "action": "message",
     "gap_hours": 168.32,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T10:23:04-03:00",
     "action": "message",
     "gap_hours": 15.4,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T14:15:46-03:00",
     "action": "message",
     "gap_hours": 503.82,
     "ref": "[removido]",
     "actor": "[pessoa]"
    }
   ],
   "chamadas": {
    "chamadas_localizadas": 2,
    "tentativas_saida": 1,
    "saida_atendidas": 0,
    "entrada": 0,
    "entrada_perdidas": 0,
    "duracao_total_s": 4,
    "com_gravacao_link": 1,
    "gravacao_acessivel": 0,
    "transcritas": 0,
    "lista": [
     {
      "ts": "[telefone]T12:41:27-03:00",
      "direction": "out",
      "action": "call_answered",
      "actor": "Marketing Evolve (conta de integração/compartilhada)",
      "duration": 4,
      "status": 4,
      "link": true,
      "recording_access": "nao_testado",
      "id": "69c59afe-e58b-4573-8ad7-4e7a2b36ee72",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T14:17:37-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "52cd0cec-d52b-4cca-a8fb-edc44aa41698",
      "ref": "[removido]"
     }
    ]
   },
   "marcos": {
    "meeting_offered": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_accepted": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_scheduled": {
     "ocorreu": true,
     "primeira": "[telefone]T10:24:11-03:00",
     "evidencias": [
      {
       "ref": "[removido]",
       "conteudo": "[removido]",
       "doc": "tarefa",
       "confirmado": false
      }
     ]
    },
    "meeting_confirmed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_done": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_noshow": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_reschedule": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "proposal_presented": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_sent": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_signed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "legal_handoff": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "contrato_enviado": false,
    "contrato_assinado_confirmado": false,
    "procuracao_enviado": false,
    "procuracao_assinado_confirmado": false
   },
   "status_espera": "nao_determinavel",
   "ultimo_evento": "[telefone]T14:19:28-03:00",
   "rubrica": {
    "nota_normalizada": 45.8,
    "criterios_avaliados": 6,
    "cobertura": "6/10",
    "detalhe": {
     "c1": {
      "criterio": "Agilidade e continuidade da resposta",
      "nota": 1,
      "justificativa": "Boa resposta inicial (27/08 10:28, 7,8 h após criação às 02:41; troca ativa 11:22–11:36). Depois: lead pediu documentos? (tarefa 04/09 'ver se encaminhou documentos' para 08/09) e a última mensagem do lead (04/09 14:26) só teve ação humana em 25/09 (21 dias); tarefa concluída 17 dias após o prazo.",
      "evidencias": [
       "[link removido] · 27/08 10:28",
       "[link removido] · 04/09 14:26 → 25/09 14:15",
       "[link removido] · 04/09 14:26 tarefa vencida 08/09 → concluída 25/09"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c2": {
      "criterio": "Retomada do contexto e personalização",
      "nota": "DI",
      "justificativa": "Sem texto. Observação: robô e humano responderam ao lead nos mesmos minutos (27/08 11:19–11:24; 03/09; 04/09).",
      "evidencias": [
       "[link removido] · 27/08 11:19–11:24"
      ],
      "categoria_causa": "integração"
     },
     "c3": {
      "criterio": "Investigação da necessidade e uso pertinente do SPIN",
      "nota": "DI",
      "justificativa": "Sem texto de mensagens; ligação de 4 s.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c4": {
      "criterio": "Qualificação adequada ao serviço",
      "nota": 3,
      "justificativa": "Nota humana de 04/09 registra fatos relevantes: acidente 22/01/2026, afastamento, cirurgia, benefício cortado, ação com outro advogado, desejo de auxílio-acidente + rescisão indireta. Caso mistura previdenciário e trabalhista; qualificação captada.",
      "evidencias": [
       "[link removido] · 04/09 14:29 nota de [pessoa]"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c5": {
      "criterio": "Iniciativa e pertinência das ligações",
      "nota": 2,
      "justificativa": "Tarefa 'Reunião ligação' para 04/09 12:00; ligação às 12:41 de 4 s (registrada na conta de integração) e uma cancelada; sem nova tentativa até 25/09 (cancelada). Sem ligação nos 21 dias de silêncio.",
      "evidencias": [
       "[link removido] · 04/09 12:41 notas de chamada",
       "[link removido] · 25/09 14:17"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c6": {
      "criterio": "Clareza da apresentação de valor e do processo",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c7": {
      "criterio": "Tratamento das dúvidas e objeções",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c8": {
      "criterio": "Condução para reunião ou próximo passo concreto",
      "nota": 2,
      "justificativa": "Chegou a Negociação em 04/09 com documentos solicitados; sem reunião registrada; em 15/09 voltou a Análise sem nota que explique.",
      "evidencias": [
       "[link removido] · 04/09 14:25 etapa Negociação",
       "[link removido] · 15/09 15:02 volta para Análise"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c9": {
      "criterio": "Follow-up, confirmação e acompanhamento até assinatura",
      "nota": 1,
      "justificativa": "Follow-up de documentos previsto para 08/09 não executado; regressão de etapa sem contato; retomada só em 25/09.",
      "evidencias": [
       "[link removido] · 04/09 14:26 tarefa → 25/09 14:19 conclusão"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c10": {
      "criterio": "Organização e registros no CRM",
      "nota": 2,
      "justificativa": "Nota de caso boa; tarefas criadas; mas tarefa vencida 17 dias, regressão de etapa sem nota, ligações na conta de integração, serviço não preenchido.",
      "evidencias": [
       "[link removido] · 04/09 14:29 nota",
       "[link removido] · 15/09 15:02"
      ],
      "categoria_causa": "registro"
     }
    }
   },
   "timeline": [
    {
     "id": "01m10vswjbx279jsxcym41n1p2",
     "lead_id": "79358770",
     "ts": "[telefone]T02:41:36-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m10vswjb5kceszrap12w16s5",
     "lead_id": "79358770",
     "ts": "[telefone]T02:41:36-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "Trabalhista generica",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m10vsvm00q9sezmkr53ff5ag",
     "lead_id": "79358770",
     "ts": "[telefone]T02:41:36-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m10vsy4073wjde4k4746qwm5",
     "lead_id": "79358770",
     "ts": "[telefone]T02:41:38-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "⭐️",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m10vsy409e6wv0yhs27hyrdq",
     "lead_id": "79358770",
     "ts": "[telefone]T02:41:38-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m10vsy35276yt7qjajr6fewf",
     "lead_id": "79358770",
     "ts": "[telefone]T02:41:38-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "responsible_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m10vsxyz63y47cv75y6dn445",
     "lead_id": "79358770",
     "ts": "[telefone]T02:41:38-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "agente",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m10vsxy073n66548r0gtrn8j",
     "lead_id": "79358770",
     "ts": "[telefone]T02:41:38-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "responsible_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79358770",
     "ts": "[telefone]T02:41:38-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79358770",
     "ts": "[telefone]T02:41:38-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79358770",
     "ts": "[telefone]T02:41:38-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79358770",
     "ts": "[telefone]T02:41:38-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "sync_robo"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m10vvq689bc43gyqrnphcx4n",
     "lead_id": "79358770",
     "ts": "[telefone]T02:42:37-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11pgz6nd7n7f6jne3afg0w5",
     "lead_id": "79358770",
     "ts": "[telefone]T10:28:36-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 838,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11phh7ev6n2ddmk87j1c0aa",
     "lead_id": "79358770",
     "ts": "[telefone]T10:28:54-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 838,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11q8nyssds1rnxpmm74gntp",
     "lead_id": "79358770",
     "ts": "[telefone]T10:41:33-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845351,
      "to": 104845355
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11says8th4hfwas4jkee77t",
     "lead_id": "79358770",
     "ts": "[telefone]T11:17:45-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 838
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m11sbfcg90wmj1pvwhgptfmk",
     "lead_id": "79358770",
     "ts": "[telefone]T11:18:02-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 838
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m11se790md119qqxvm2yztev",
     "lead_id": "79358770",
     "ts": "[telefone]T11:19:32-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m11sf0ng3bby2stbrm5caejp",
     "lead_id": "79358770",
     "ts": "[telefone]T11:19:58-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11sf1mrs2jdfd86xkvb774c",
     "lead_id": "79358770",
     "ts": "[telefone]T11:19:59-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m11sfp50jm2vx9gb62cvt2zd",
     "lead_id": "79358770",
     "ts": "[telefone]T11:20:20-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11sj76r0yycvwmtx17s1vjt",
     "lead_id": "79358770",
     "ts": "[telefone]T11:21:43-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m11sjhygf89tf365qkxfe17z",
     "lead_id": "79358770",
     "ts": "[telefone]T11:21:54-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m11sjymr96n3vdvhc1v8h872",
     "lead_id": "79358770",
     "ts": "[telefone]T11:22:07-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11sk9cg36yqzryhjdkc55jw",
     "lead_id": "79358770",
     "ts": "[telefone]T11:22:18-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11skqnbfzdw5qfytq6rx30g",
     "lead_id": "79358770",
     "ts": "[telefone]T11:22:32-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11sm1sr2xz9yfcs0eej3310",
     "lead_id": "79358770",
     "ts": "[telefone]T11:22:43-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m11sm92kngqvm75wb9f9qqts",
     "lead_id": "79358770",
     "ts": "[telefone]T11:22:50-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11snea6q3sy1wspe8t6s6kv",
     "lead_id": "79358770",
     "ts": "[telefone]T11:23:28-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11sndr0sw2e2j70amshg1nx",
     "lead_id": "79358770",
     "ts": "[telefone]T11:23:28-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m11snsf09cfg0fkj29vnfvm3",
     "lead_id": "79358770",
     "ts": "[telefone]T11:23:40-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m11spsjy0za3thyvj4ght2z3",
     "lead_id": "79358770",
     "ts": "[telefone]T11:24:12-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11t2p1sb2k7d7f525peh73d",
     "lead_id": "79358770",
     "ts": "[telefone]T11:30:42-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11t9r4gwwqgydj7c36fkw08",
     "lead_id": "79358770",
     "ts": "[telefone]T11:34:34-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m11t9y00hw9jwwxmqfbhjrkz",
     "lead_id": "79358770",
     "ts": "[telefone]T11:34:40-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m11tbx3naqb4zyver540bt0v",
     "lead_id": "79358770",
     "ts": "[telefone]T11:35:44-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m11tcst5xttv3mbytq7na89t",
     "lead_id": "79358770",
     "ts": "[telefone]T11:36:14-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1ch06kymm3zfhdybhv5tsmj",
     "lead_id": "79358770",
     "ts": "[telefone]T15:23:42-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1ch1cwkam6h5n51sbqqd3m0",
     "lead_id": "79358770",
     "ts": "[telefone]T15:24:21-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1kw5ptewy0nqcqxr57p501s",
     "lead_id": "79358770",
     "ts": "[telefone]T11:53:38-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1kw5yjcqkdgykamjwcb5jga",
     "lead_id": "79358770",
     "ts": "[telefone]T11:53:46-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1kw6y9pzcb6q9d4rn7p622s",
     "lead_id": "79358770",
     "ts": "[telefone]T11:54:18-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1m0qecgexrmw74hf6g3c9bs",
     "lead_id": "79358770",
     "ts": "[telefone]T13:13:14-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1m0t69098wgqqvstdfw6hat",
     "lead_id": "79358770",
     "ts": "[telefone]T13:14:44-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1m0ye0r13yvhe829ga3ax4z",
     "lead_id": "79358770",
     "ts": "[telefone]T13:17:03-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1m107mgr6pjdbnndj3z3c0g",
     "lead_id": "79358770",
     "ts": "[telefone]T13:18:02-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1m1tc68svzcmzr2ht8qajjw",
     "lead_id": "79358770",
     "ts": "[telefone]T13:32:18-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1m1tr60wg09r9fk9znn7r7h",
     "lead_id": "79358770",
     "ts": "[telefone]T13:32:30-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1mmfhxrf86d84mrxbmdzntj",
     "lead_id": "79358770",
     "ts": "[telefone]T18:58:27-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1mmgj50q9wvpsabk22grnt6",
     "lead_id": "79358770",
     "ts": "[telefone]T18:59:00-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1mmh1s00rj252x9wz3gez5w",
     "lead_id": "79358770",
     "ts": "[telefone]T18:59:16-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1mmj2zgcx44ynap6rbgsmxr",
     "lead_id": "79358770",
     "ts": "[telefone]T18:59:50-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1p9cjvxbhw1wr6425nqmvzy",
     "lead_id": "79358770",
     "ts": "[telefone]T10:23:04-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1p9dayxnd2e6w0cwg395j1s",
     "lead_id": "79358770",
     "ts": "[telefone]T10:23:28-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1p9dwx0ph5v85atzfa20ffs",
     "lead_id": "79358770",
     "ts": "[telefone]T10:23:47-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "79358770",
     "ts": "[telefone]T10:24:11-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_created",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T12:00:00-03:00",
      "completed": false,
      "responsible": "[pessoa]",
      "result": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "m-t[telefone]",
     "lead_id": "79358770",
     "ts": "[telefone]T10:24:11-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "meeting_scheduled",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "confirmed": false,
      "doc_type": "tarefa"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "transfer-79358770",
     "lead_id": "79358770",
     "ts": "[telefone]T10:24:11-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "transfer",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1p9etxtd41hxg68yjnkm31y",
     "lead_id": "79358770",
     "ts": "[telefone]T10:24:17-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845355,
      "to": 104845359
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdyrdgm2zgvk36j4j4wya9",
     "lead_id": "79358770",
     "ts": "[telefone]T11:42:54-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdyz88sx4x38qkpdaf5ved",
     "lead_id": "79358770",
     "ts": "[telefone]T11:43:01-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdzyg8hkcne4qzv2eazm9r",
     "lead_id": "79358770",
     "ts": "[telefone]T11:43:33-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pgabzct3pbx471z049d1fz",
     "lead_id": "79358770",
     "ts": "[telefone]T12:24:11-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pgtfz0q5hk58mbx8xgqkww",
     "lead_id": "79358770",
     "ts": "[telefone]T12:33:00-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1ph5h0yh5vxr30ctk9x2cp4",
     "lead_id": "79358770",
     "ts": "[telefone]T12:39:01-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1ph5yv7e4bmxcypsf7h39tg",
     "lead_id": "79358770",
     "ts": "[telefone]T12:39:15-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 837,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1ph794rnhxrrdxwgxvy0wzb",
     "lead_id": "79358770",
     "ts": "[telefone]T12:39:59-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 837
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79358770",
     "ts": "[telefone]T12:41:27-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "undetermined",
     "action": "call_answered",
     "actor_id": "10348307",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 4,
      "link": "[removido]",
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "69c59afe-e58b-4573-8ad7-4e7a2b36ee72",
      "call_status": 4,
      "call_result": "[removido]",
      "recording_access": "nao_testado",
      "transcript": null,
      "transcript_segments": null,
      "duplicates": [
       {
        "id": "n[telefone]",
        "source": "kommo_api",
        "ref": "[removido]"
       }
      ]
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1phgj7dkx4adyaq57c3cpmm",
     "lead_id": "79358770",
     "ts": "[telefone]T12:45:03-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 838,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pkdzc95t5a7g8ztwakptba",
     "lead_id": "79358770",
     "ts": "[telefone]T13:18:35-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 838,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1ppqtj04gdzjm5758c0m95a",
     "lead_id": "79358770",
     "ts": "[telefone]T14:16:24-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 838
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pq5vwvqrvtss7f1fb23e9p",
     "lead_id": "79358770",
     "ts": "[telefone]T14:24:04-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 838,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pq67wr50m6ggtevwfx8b4g",
     "lead_id": "79358770",
     "ts": "[telefone]T14:24:16-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 838,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pq73dkqqn6zwvkb08qxkzc",
     "lead_id": "79358770",
     "ts": "[telefone]T14:24:44-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 838,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pq7ej03qqxrsbq7jjjg11q",
     "lead_id": "79358770",
     "ts": "[telefone]T14:24:56-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 838
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pq8dr37sdv0cfkqqw9p6rq",
     "lead_id": "79358770",
     "ts": "[telefone]T14:25:27-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "agente"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pq8dr32mc04c922ke8cgav",
     "lead_id": "79358770",
     "ts": "[telefone]T14:25:27-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "humano",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pq8d5ca94te0y1eefqmw5x",
     "lead_id": "79358770",
     "ts": "[telefone]T14:25:27-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845359,
      "to": 104845499
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "79358770",
     "ts": "[telefone]T14:25:28-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "system",
     "action": "task_created",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T14:30:28-03:00",
      "completed": true,
      "responsible": "[pessoa]",
      "result": "Aguardando documentação"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pq91z719p83hxt3ffnswrv",
     "lead_id": "79358770",
     "ts": "[telefone]T14:25:48-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 838,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "79358770",
     "ts": "[telefone]T14:26:36-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_created",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T11:00:00-03:00",
      "completed": true,
      "responsible": "[pessoa]",
      "result": "aguardando documentação"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pqaq1rs2be4mwr6hp3c6ap",
     "lead_id": "79358770",
     "ts": "[telefone]T14:26:43-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 838
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79358770",
     "ts": "[telefone]T14:29:27-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "human",
     "action": "note",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k3rdq4tzwtthfg3kpme34v",
     "lead_id": "79358770",
     "ts": "[telefone]T15:02:39-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845499,
      "to": 104845359
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3cs1s3nw0a8drw0tkctpdg4",
     "lead_id": "79358770",
     "ts": "[telefone]T14:15:46-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 838,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79358770",
     "ts": "[telefone]T14:17:37-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "52cd0cec-d52b-4cca-a8fb-edc44aa41698",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3cs7cvg28qgbet4fagfrvp8",
     "lead_id": "79358770",
     "ts": "[telefone]T14:18:50-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 838,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "tc[telefone]",
     "lead_id": "79358770",
     "ts": "[telefone]T14:19:16-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_completed",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "result": "aguardando documentação"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "tc[telefone]",
     "lead_id": "79358770",
     "ts": "[telefone]T14:19:28-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_completed",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "result": "Aguardando documentação"
     },
     "requires_reply": null,
     "agreed_return_at": null
    }
   ],
   "calls_analysis": [
    {
     "call_id": "04/09 12:41 (4 s, conta de integração)",
     "transcript_source": "sem gravação útil",
     "resumo": "Ligação de 4 s (atendida e encerrada) e uma cancelada no mesmo minuto — tentativa de reunião por ligação não concretizada; a conversa seguiu por texto.",
     "trechos": [],
     "limites": "sem áudio"
    }
   ],
   "acertos": [
    "Nota humana completa com os fatos do caso (referência para a equipe).",
    "Tarefa de reunião e tarefa de documentos criadas com prazo no dia da negociação."
   ],
   "melhorias": [
    "Executar a tarefa no prazo: 'ver se encaminhou documentos' venceu em 08/09 e só foi tratada em 25/09.",
    "Ao regredir a etapa (15/09), registrar motivo e contatar o lead; regressão silenciosa não ajuda ninguém.",
    "Tentar ligação real (não 4 s) quando a reunião por ligação estava agendada; e ao menos uma ligação durante o silêncio de 21 dias."
   ],
   "evidencias": [
    "[link removido] · 27/08 11:19–11:24 robô e humano simultâneos",
    "[link removido] · 04/09 10:24 tarefa 'Reunião ligação' 12:00",
    "[link removido] · 04/09 14:26 → 25/09 14:15 (21 dias)"
   ],
   "conduzir_melhor": [
    "Sugestão reescrita (08/09, tarefa): '[nome], conseguiu separar os documentos que combinamos (atestados, comprovantes do benefício)? Se preferir, me manda foto de um por vez.'",
    "Sugestão reescrita (15/09, ao regredir): 'Como ainda não recebemos os documentos, vou manter seu caso em análise. Quando conseguir, me avisa que retomamos de onde paramos.'"
   ],
   "proxima_acao": "Não executar: ligação para retomar a coleta de documentos com dois horários; nota explicando a regressão; se sem retorno em 7 dias, motivo de perda registrado.",
   "limitacoes": [
    "Sem texto; a mensagem do lead de 04/09 14:26 pode não exigir resposta (regra conservadora aplicada)."
   ],
   "confianca": "alta para tempos e tarefas; baixa para conteúdo.",
   "observado_vs_sugerido": [],
   "nomes_citados": [
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]"
   ]
  },
  {
   "id": "79490552",
   "nome": "Caso 3",
   "url": "",
   "servico": "não informado no CRM",
   "origem": "[Outbound] Evento",
   "criado_em": "[telefone]T10:36:24-03:00",
   "atendentes": [
    "Atendente 1",
    "Atendente 2"
   ],
   "responsavel_atual": "[pessoa]",
   "etapa_atual": "Ativação",
   "etapa_max": "Validação de documentação",
   "status": "won",
   "motivo_perda": null,
   "tags": [
    "humano"
   ],
   "legacy": true,
   "motivo_selecao": "Avançado: ganho (maior etapa Validação de documentação), criado há 26 d (janela de 30 d), 2 atendentes",
   "contexto_robo": "sem notas de sincronização do robô",
   "transfer": {
    "ts": "[telefone]T10:43:26-03:00",
    "confidence": "inferido",
    "rule": "1ª tarefa atribuída a pessoa (Novo Lead)"
   },
   "indicadores": {
    "h_transf_primeira_tentativa": {
     "valor": 1.66,
     "definicao": "horas corridas da transferência até 1ª ação humana dirigida ao lead (mensagem ou tentativa de ligação)",
     "base": "transferência inferido",
     "cobertura": "completa"
    },
    "h_transf_primeira_mensagem": {
     "valor": 1.66,
     "definicao": "horas até 1ª mensagem humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_transf_primeira_ligacao": {
     "valor": "NA",
     "definicao": "horas até 1ª tentativa de ligação de saída",
     "base": "notas/eventos de chamada",
     "cobertura": "não ocorreu"
    },
    "h_transf_primeira_conversa": {
     "valor": 0.24,
     "definicao": "horas até 1ª conversa efetiva (resposta do lead a humano ou ligação atendida)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "episodios_espera": {
     "valor": 17,
     "definicao": "grupos de mensagens do lead que exigiam retorno",
     "base": "mensagens anotadas requires_reply",
     "cobertura": "completa"
    },
    "mediana_resposta_h": {
     "valor": 0.06,
     "definicao": "mediana do tempo corrido última msg do lead → 1ª ação humana, só episódios concluídos",
     "base": "16 episódios concluídos",
     "cobertura": "completa"
    },
    "maior_espera_concluida_h": {
     "valor": 167.04,
     "definicao": "maior espera concluída",
     "base": "16 episódios",
     "cobertura": "completa"
    },
    "espera_aberta_h": {
     "valor": 101.12,
     "definicao": "tempo acumulado até o corte da pendência aberta (não somado às medianas)",
     "base": "episódio aberto",
     "cobertura": "completa"
    },
    "msgs_humanas": {
     "valor": 36,
     "definicao": "mensagens enviadas por humano (fragmentos contados individualmente)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_lead": {
     "valor": 43,
     "definicao": "mensagens recebidas do lead",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_robo": {
     "valor": 4,
     "definicao": "mensagens do robô (contexto)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "abordagens_followup": {
     "valor": 4,
     "definicao": "ações humanas de saída após ≥4 h sem resposta do lead; fragmentos ≤10 min = 1",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tentativas_ligacao_saida": {
     "valor": 0,
     "definicao": "ligações de saída por humano (atendidas ou não), deduplicadas",
     "base": "notas de chamada + API4com",
     "cobertura": "completa"
    },
    "ligacoes_saida_atendidas": {
     "valor": 0,
     "definicao": "ligações de saída com duração > 0 (atendida ≠ conversa comercial)",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "chamadas_entrada": {
     "valor": 0,
     "definicao": "ligações recebidas",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "dias_com_atuacao_humana": {
     "valor": 5,
     "definicao": "dias distintos com ação humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_criadas": {
     "valor": 3,
     "definicao": "tarefas criadas",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_concluidas": {
     "valor": 3,
     "definicao": "tarefas concluídas (não prova ligação)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_vencidas": {
     "valor": 0,
     "definicao": "tarefas com prazo anterior ao corte sem conclusão",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_ate_agendamento": {
     "valor": "NA",
     "definicao": "horas transferência → reunião agendada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_reuniao_realizada": {
     "valor": "NA",
     "definicao": "horas transferência → reunião realizada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_envio_documento": {
     "valor": "NA",
     "definicao": "horas transferência → 1º documento enviado",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_assinatura_confirmada": {
     "valor": "NA",
     "definicao": "horas transferência → assinatura comprovada",
     "base": "marcos",
     "cobertura": "completa"
    }
   },
   "episodios": [
    {
     "start": "[telefone]T10:57:58-03:00",
     "last_lead_msg": "[telefone]T10:58:16-03:00",
     "msgs": [
      "01m1h6k1kgdn6h53ytr0572cg3",
      "01m1h6kk6053r2jm29ng0kekyq"
     ],
     "refs": [
      "[link removido] · [telefone]T10:57:58-03:00 · evento 01m1h6k1kgdn6h53ytr0572cg3",
      "[link removido] · [telefone]T10:58:16-03:00 · evento 01m1h6kk6053r2jm29ng0kekyq"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T12:23:08-03:00",
     "answer_ref": "[link removido] · [telefone]T12:23:08-03:00 · evento 01m1hbf04gsvyn72b5x08c4jw8",
     "answer_action": "message",
     "wait_seconds": 5092.0,
     "open": false
    },
    {
     "start": "[telefone]T17:09:34-03:00",
     "last_lead_msg": "[telefone]T17:09:34-03:00",
     "msgs": [
      "01m291dy1g8c5f7wqz52eehc7m"
     ],
     "refs": [
      "[link removido] · [telefone]T17:09:34-03:00 · evento 01m291dy1g8c5f7wqz52eehc7m"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T17:13:20-03:00",
     "answer_ref": "[link removido] · [telefone]T17:13:20-03:00 · evento 01m291mvnmdd8tb6dehghj0beh",
     "answer_action": "message",
     "wait_seconds": 226.0,
     "open": false
    },
    {
     "start": "[telefone]T17:14:01-03:00",
     "last_lead_msg": "[telefone]T07:54:57-03:00",
     "msgs": [
      "01m291p2s8w915p67724wsrssz",
      "01m2ja8k2gw5xaw82t2et4kcwh",
      "01m2jb98z8c647pnn82dbh8abx"
     ],
     "refs": [
      "[link removido] · [telefone]T17:14:01-03:00 · evento 01m291p2s8w915p67724wsrssz",
      "[link removido] · [telefone]T07:37:06-03:00 · evento 01m2ja8k2gw5xaw82t2et4kcwh",
      "[link removido] · [telefone]T07:54:57-03:00 · evento 01m2jb98z8c647pnn82dbh8abx"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T14:25:28-03:00",
     "answer_ref": "[link removido] · [telefone]T14:25:28-03:00 · evento 01m2k1mb0myp0bca4p7st6956m",
     "answer_action": "message",
     "wait_seconds": 23431.0,
     "open": false
    },
    {
     "start": "[telefone]T14:50:34-03:00",
     "last_lead_msg": "[telefone]T14:54:18-03:00",
     "msgs": [
      "01m2k329gg7dr1tbcj44ffvmkg",
      "01m2k3948g6cf49cverwv3gtvy"
     ],
     "refs": [
      "[link removido] · [telefone]T14:50:34-03:00 · evento 01m2k329gg7dr1tbcj44ffvmkg",
      "[link removido] · [telefone]T14:54:18-03:00 · evento 01m2k3948g6cf49cverwv3gtvy"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T14:57:58-03:00",
     "answer_ref": "[link removido] · [telefone]T14:57:58-03:00 · evento 01m2k3fvpew75wbef03xy9en2e",
     "answer_action": "message",
     "wait_seconds": 220.0,
     "open": false
    },
    {
     "start": "[telefone]T15:01:42-03:00",
     "last_lead_msg": "[telefone]T15:01:42-03:00",
     "msgs": [
      "01m2k3pnvg13km3ccx2xrexk3w"
     ],
     "refs": [
      "[link removido] · [telefone]T15:01:42-03:00 · evento 01m2k3pnvg13km3ccx2xrexk3w"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:04:17-03:00",
     "answer_ref": "[link removido] · [telefone]T15:04:17-03:00 · evento 01m2k3vdjq1ed5yszet1acjmgq",
     "answer_action": "message",
     "wait_seconds": 155.0,
     "open": false
    },
    {
     "start": "[telefone]T15:04:35-03:00",
     "last_lead_msg": "[telefone]T15:04:35-03:00",
     "msgs": [
      "01m2k3vysr7s40vhtd6f1grrkj"
     ],
     "refs": [
      "[link removido] · [telefone]T15:04:35-03:00 · evento 01m2k3vysr7s40vhtd6f1grrkj"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:05:28-03:00",
     "answer_ref": "[link removido] · [telefone]T15:05:28-03:00 · evento 01m2k3xkcq7yapt3k2jnp1yy0m",
     "answer_action": "message",
     "wait_seconds": 53.0,
     "open": false
    },
    {
     "start": "[telefone]T15:08:25-03:00",
     "last_lead_msg": "[telefone]T15:08:25-03:00",
     "msgs": [
      "01m2k42zd803554g0je11123sk"
     ],
     "refs": [
      "[link removido] · [telefone]T15:08:25-03:00 · evento 01m2k42zd803554g0je11123sk"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:08:46-03:00",
     "answer_ref": "[link removido] · [telefone]T15:08:46-03:00 · evento 01m2k43m03kz1zxf669byhte9d",
     "answer_action": "message",
     "wait_seconds": 21.0,
     "open": false
    },
    {
     "start": "[telefone]T15:09:38-03:00",
     "last_lead_msg": "[telefone]T15:09:38-03:00",
     "msgs": [
      "01m2k456pg9vc77rss4neeavef"
     ],
     "refs": [
      "[link removido] · [telefone]T15:09:38-03:00 · evento 01m2k456pg9vc77rss4neeavef"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:11:52-03:00",
     "answer_ref": "[link removido] · [telefone]T15:11:52-03:00 · evento 01m2k499r6xgeq2t7emcbxqfxy",
     "answer_action": "message",
     "wait_seconds": 134.0,
     "open": false
    },
    {
     "start": "[telefone]T15:21:02-03:00",
     "last_lead_msg": "[telefone]T15:22:28-03:00",
     "msgs": [
      "01m2k4t2ngwk62sekkqdaqqsea",
      "01m2k4wpn0d2z3dx6cwtcgeze4"
     ],
     "refs": [
      "[link removido] · [telefone]T15:21:02-03:00 · evento 01m2k4t2ngwk62sekkqdaqqsea",
      "[link removido] · [telefone]T15:22:28-03:00 · evento 01m2k4wpn0d2z3dx6cwtcgeze4"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:23:39-03:00",
     "answer_ref": "[link removido] · [telefone]T15:23:39-03:00 · evento 01m2k4ywm5sm4ch6kp19th19ze",
     "answer_action": "message",
     "wait_seconds": 71.0,
     "open": false
    },
    {
     "start": "[telefone]T15:24:01-03:00",
     "last_lead_msg": "[telefone]T15:24:01-03:00",
     "msgs": [
      "01m2k4zhf8f945nz9ex85g8v4t"
     ],
     "refs": [
      "[link removido] · [telefone]T15:24:01-03:00 · evento 01m2k4zhf8f945nz9ex85g8v4t"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:40:47-03:00",
     "answer_ref": "[link removido] · [telefone]T15:40:47-03:00 · evento 01m2k5y8n40nfnr1awnc0pnb0y",
     "answer_action": "message",
     "wait_seconds": 1006.0,
     "open": false
    },
    {
     "start": "[telefone]T15:57:39-03:00",
     "last_lead_msg": "[telefone]T15:57:39-03:00",
     "msgs": [
      "01m2k6x45rbj90j5wb2kp16bd4"
     ],
     "refs": [
      "[link removido] · [telefone]T15:57:39-03:00 · evento 01m2k6x45rbj90j5wb2kp16bd4"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T16:13:49-03:00",
     "answer_ref": "[link removido] · [telefone]T16:13:49-03:00 · evento 01m2k7tqncmtkr1a6at2rryt8y",
     "answer_action": "message",
     "wait_seconds": 970.0,
     "open": false
    },
    {
     "start": "[telefone]T16:41:21-03:00",
     "last_lead_msg": "[telefone]T16:42:09-03:00",
     "msgs": [
      "01m2k9d4q8mc5kf4d1rjesvtjr",
      "01m2k9ekk8nphv0z5pgrdcm47g"
     ],
     "refs": [
      "[link removido] · [telefone]T16:41:21-03:00 · evento 01m2k9d4q8mc5kf4d1rjesvtjr",
      "[link removido] · [telefone]T16:42:09-03:00 · evento 01m2k9ekk8nphv0z5pgrdcm47g"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T16:44:36-03:00",
     "answer_ref": "[link removido] · [telefone]T16:44:36-03:00 · evento 01m2k9k3kvrcqftc35v37wbcxa",
     "answer_action": "message",
     "wait_seconds": 147.0,
     "open": false
    },
    {
     "start": "[telefone]T18:29:02-03:00",
     "last_lead_msg": "[telefone]T08:53:23-03:00",
     "msgs": [
      "01m2kfja9gppaj0knmfbhd7hfb",
      "01m2kfja9gkxrs62gb4j6pdqwg",
      "01m2kfja9ggffywrqs24f596b8",
      "01m2kfjb8r9k1s0s94s8hf7bpb",
      "01m2kfjb8rt0th2pcpmsy0zp8f",
      "01m2kfqga06xf3jc73474vhhzr",
      "01m2n1vjcgbm6eb5ke21qkpqjy",
      "01m2qkdpsr498zcfc40vf1p91q"
     ],
     "refs": [
      "[link removido] · [telefone]T18:29:02-03:00 · evento 01m2kfja9gppaj0knmfbhd7hfb",
      "[link removido] · [telefone]T18:29:02-03:00 · evento 01m2kfja9gkxrs62gb4j6pdqwg",
      "[link removido] · [telefone]T18:29:02-03:00 · evento 01m2kfja9ggffywrqs24f596b8",
      "[link removido] · [telefone]T18:29:03-03:00 · evento 01m2kfjb8r9k1s0s94s8hf7bpb",
      "[link removido] · [telefone]T18:29:03-03:00 · evento 01m2kfjb8rt0th2pcpmsy0zp8f",
      "[link removido] · [telefone]T18:31:52-03:00 · evento 01m2kfqga06xf3jc73474vhhzr",
      "[link removido] · [telefone]T09:07:54-03:00 · evento 01m2n1vjcgbm6eb5ke21qkpqjy",
      "[link removido] · [telefone]T08:53:23-03:00 · evento 01m2qkdpsr498zcfc40vf1p91q"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:11:56-03:00",
     "answer_ref": "[link removido] · [telefone]T15:11:56-03:00 · evento 01m2r92w4z5bc5rkxaf34zdtdz",
     "answer_action": "message",
     "wait_seconds": 22713.0,
     "open": false
    },
    {
     "start": "[telefone]T15:12:53-03:00",
     "last_lead_msg": "[telefone]T15:12:53-03:00",
     "msgs": [
      "01m2r94k482sa1k2xr9hr9xcha"
     ],
     "refs": [
      "[link removido] · [telefone]T15:12:53-03:00 · evento 01m2r94k482sa1k2xr9hr9xcha"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T14:15:26-03:00",
     "answer_ref": "[link removido] · [telefone]T14:15:26-03:00 · evento 01m3a6mednp4jzfs78hfztghqq",
     "answer_action": "message",
     "wait_seconds": 601353.0,
     "open": false
    },
    {
     "start": "[telefone]T14:23:28-03:00",
     "last_lead_msg": "[telefone]T14:52:02-03:00",
     "msgs": [
      "01m3a734m0w0a5zm33tkn4y2tr",
      "01m3a89q00se5a2rpcd8dre7jp",
      "01m3a8afd8fz4t2fjsmf2jf73e",
      "01m3a8b5w08wf2v2qhzv5vq89e",
      "01m3a8c638bfdbdxncrmrarc4p",
      "01m3a8cppgd87wytndc6wk1a78",
      "01m3a8d6agdp04wyn73s08et13",
      "01m3a8dj1gtesgycrvax5sg7d5",
      "01m3a8eebrxaqqpewthspsfy0q",
      "01m3a8g338y02hpf4bhrz97h3a",
      "01m3a8jywr10dnt2xp6p56jyvj",
      "01m3a8qeeg2d2jwv33v02bm85n"
     ],
     "refs": [
      "[link removido] · [telefone]T14:23:28-03:00 · evento 01m3a734m0w0a5zm33tkn4y2tr",
      "[link removido] · [telefone]T14:44:32-03:00 · evento 01m3a89q00se5a2rpcd8dre7jp",
      "[link removido] · [telefone]T14:44:57-03:00 · evento 01m3a8afd8fz4t2fjsmf2jf73e",
      "[link removido] · [telefone]T14:45:20-03:00 · evento 01m3a8b5w08wf2v2qhzv5vq89e",
      "[link removido] · [telefone]T14:45:53-03:00 · evento 01m3a8c638bfdbdxncrmrarc4p",
      "[link removido] · [telefone]T14:46:10-03:00 · evento 01m3a8cppgd87wytndc6wk1a78",
      "[link removido] · [telefone]T14:46:26-03:00 · evento 01m3a8d6agdp04wyn73s08et13",
      "[link removido] · [telefone]T14:46:38-03:00 · evento 01m3a8dj1gtesgycrvax5sg7d5",
      "[link removido] · [telefone]T14:47:07-03:00 · evento 01m3a8eebrxaqqpewthspsfy0q",
      "[link removido] · [telefone]T14:48:01-03:00 · evento 01m3a8g338y02hpf4bhrz97h3a",
      "[link removido] · [telefone]T14:49:35-03:00 · evento 01m3a8jywr10dnt2xp6p56jyvj",
      "[link removido] · [telefone]T14:52:02-03:00 · evento 01m3a8qeeg2d2jwv33v02bm85n"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T14:52:22-03:00",
     "answer_ref": "[link removido] · [telefone]T14:52:22-03:00 · evento 01m3a8r2m6ntzn3jvgrwn6mf4s",
     "answer_action": "message",
     "wait_seconds": 20.0,
     "open": false
    },
    {
     "start": "[telefone]T14:53:53-03:00",
     "last_lead_msg": "[telefone]T15:01:07-03:00",
     "msgs": [
      "01m3a8ttv8pw4fsvzyk8q2b3wr",
      "01m3a93ty064n0xadna6tyebxx",
      "01m3a982nrej5vm36q2bpe79rw"
     ],
     "refs": [
      "[link removido] · [telefone]T14:53:53-03:00 · evento 01m3a8ttv8pw4fsvzyk8q2b3wr",
      "[link removido] · [telefone]T14:58:48-03:00 · evento 01m3a93ty064n0xadna6tyebxx",
      "[link removido] · [telefone]T15:01:07-03:00 · evento 01m3a982nrej5vm36q2bpe79rw"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T16:30:38-03:00",
     "answer_ref": "[link removido] · [telefone]T16:30:38-03:00 · evento 01m3aec0b5wx6z59za822vv1r5",
     "answer_action": "message",
     "wait_seconds": 5371.0,
     "open": false
    },
    {
     "start": "[telefone]T17:35:08-03:00",
     "last_lead_msg": "[telefone]T17:35:08-03:00",
     "msgs": [
      "01m3aj23301133ew1nqh5ndwdd"
     ],
     "refs": [
      "[link removido] · [telefone]T17:35:08-03:00 · evento 01m3aj23301133ew1nqh5ndwdd"
     ],
     "status": "aguardando_equipe",
     "open": true,
     "elapsed_to_cutoff_seconds": 364035.0
    }
   ],
   "followups": [
    {
     "ts": "[telefone]T16:21:27-03:00",
     "action": "message",
     "gap_hours": 221.39,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T14:25:28-03:00",
     "action": "message",
     "gap_hours": 6.51,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T15:11:56-03:00",
     "action": "message",
     "gap_hours": 6.31,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T14:15:26-03:00",
     "action": "message",
     "gap_hours": 167.04,
     "ref": "[removido]",
     "actor": "[pessoa]"
    }
   ],
   "chamadas": {
    "chamadas_localizadas": 0,
    "tentativas_saida": 0,
    "saida_atendidas": 0,
    "entrada": 0,
    "entrada_perdidas": 0,
    "duracao_total_s": 0,
    "com_gravacao_link": 0,
    "gravacao_acessivel": 0,
    "transcritas": 0,
    "lista": []
   },
   "marcos": {
    "meeting_offered": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_accepted": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_scheduled": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_confirmed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_done": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_noshow": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_reschedule": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "proposal_presented": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_sent": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_signed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "legal_handoff": {
     "ocorreu": true,
     "primeira": "[telefone]T17:31:25-03:00",
     "evidencias": [
      {
       "ref": "[removido]",
       "conteudo": "[removido]",
       "doc": null,
       "confirmado": false
      }
     ]
    },
    "contrato_enviado": false,
    "contrato_assinado_confirmado": false,
    "procuracao_enviado": false,
    "procuracao_assinado_confirmado": false
   },
   "status_espera": "aguardando_equipe",
   "ultimo_evento": "[telefone]T18:01:30-03:00",
   "rubrica": {
    "nota_normalizada": 68.8,
    "criterios_avaliados": 4,
    "cobertura": "4/10",
    "detalhe": {
     "c1": {
      "criterio": "Agilidade e continuidade da resposta",
      "nota": 3,
      "justificativa": "Contato humano 1 min após a criação (lead outbound/evento); respostas no mesmo turno na maior parte; episódios de 6,5 h (15/09 manhã) e 6,3 h (17/09). Após a ativação: 167 h (17→24/09) e pendência aberta de 101 h no corte.",
      "evidencias": [
       "[link removido] · 02/09 10:37",
       "[link removido] · 17/09 15:12 → 24/09 14:15",
       "[link removido] · 24/09 17:35 sem retorno humano"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c2": {
      "criterio": "Retomada do contexto e personalização",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c3": {
      "criterio": "Investigação da necessidade e uso pertinente do SPIN",
      "nota": "DI",
      "justificativa": "Sem texto nem ligação.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c4": {
      "criterio": "Qualificação adequada ao serviço",
      "nota": "DI",
      "justificativa": "Passou por Validação de documentação e Ativação (decisão humana), mas o conteúdo da qualificação não é acessível.",
      "evidencias": [
       "[link removido] · 15/09 16:19 → 17:31"
      ],
      "categoria_causa": null
     },
     "c5": {
      "criterio": "Iniciativa e pertinência das ligações",
      "nota": "NA",
      "justificativa": "Nenhuma ligação registrada; contratação concluída por texto em 13 dias. Não penalizado (roteiro admite fechamento por texto); não há evidência de oferta ou recusa de ligação.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c6": {
      "criterio": "Clareza da apresentação de valor e do processo",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c7": {
      "criterio": "Tratamento das dúvidas e objeções",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c8": {
      "criterio": "Condução para reunião ou próximo passo concreto",
      "nota": 4,
      "justificativa": "Etapas Análise (02/09), atendimento humano (02/09), Validação de documentação e Ativação (15/09) com tarefas de acompanhamento.",
      "evidencias": [
       "[link removido] · 15/09 16:19 e 17:31"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c9": {
      "criterio": "Follow-up, confirmação e acompanhamento até assinatura",
      "nota": 2,
      "justificativa": "Tarefas criadas e concluídas até a ativação (bom). Pós-ativação: 12 mensagens do cliente em 24/09 respondidas com 2 h de atraso e a última (17:35) sem retorno humano até o corte; robô respondeu.",
      "evidencias": [
       "[link removido] · 24/09 14:23–14:52",
       "[link removido] · 24/09 17:35 → robô 18:01"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c10": {
      "criterio": "Organização e registros no CRM",
      "nota": 2,
      "justificativa": "Tarefas com resultado e etapas coerentes; serviço e origem sem preenchimento ('Outbound Evento' só na sub-origem); sem notas.",
      "evidencias": [
       "[link removido] · 02/09 13:39 tarefa; 15/09 15:07 tarefa"
      ],
      "categoria_causa": "registro"
     }
    }
   },
   "timeline": [
    {
     "id": "01m1h5bhy059aq2dzc6jf0p4x7",
     "lead_id": "79490552",
     "ts": "[telefone]T10:36:24-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1h5bn4f0zmnzpzwhvrzvmsn",
     "lead_id": "79490552",
     "ts": "[telefone]T10:36:27-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "responsible_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1h5dn0mjn39kz8vkrhxj02b",
     "lead_id": "79490552",
     "ts": "[telefone]T10:37:32-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1h5e0gzp4e6yyrxagc5rmqv",
     "lead_id": "79490552",
     "ts": "[telefone]T10:37:44-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1h5egtck9qade7w7gmcpgbx",
     "lead_id": "79490552",
     "ts": "[telefone]T10:38:01-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1h5p76tec24xzzdkpg7w1yq",
     "lead_id": "79490552",
     "ts": "[telefone]T10:42:13-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 873,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1h5r4gsdmf71vz8v40bmphq",
     "lead_id": "79490552",
     "ts": "[telefone]T10:43:16-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 873,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "79490552",
     "ts": "[telefone]T10:43:26-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "system",
     "action": "task_created",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T10:48:26-03:00",
      "completed": true,
      "responsible": "[pessoa]",
      "result": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "transfer-79490552",
     "lead_id": "79490552",
     "ts": "[telefone]T10:43:26-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "transfer",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1h6k1kgdn6h53ytr0572cg3",
     "lead_id": "79490552",
     "ts": "[telefone]T10:57:58-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1h6kk6053r2jm29ng0kekyq",
     "lead_id": "79490552",
     "ts": "[telefone]T10:58:16-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1hbf04gsvyn72b5x08c4jw8",
     "lead_id": "79490552",
     "ts": "[telefone]T12:23:08-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1hbfbajj64fv3gng1aga0gj",
     "lead_id": "79490552",
     "ts": "[telefone]T12:23:19-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1hbfkvtd4h8mp2ghpnyfj30",
     "lead_id": "79490552",
     "ts": "[telefone]T12:23:28-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845351,
      "to": 104845359
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "tc[telefone]",
     "lead_id": "79490552",
     "ts": "[telefone]T13:39:22-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_completed",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "result": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "79490552",
     "ts": "[telefone]T13:39:22-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_created",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T11:30:00-03:00",
      "completed": true,
      "responsible": "[pessoa]",
      "result": "Em atendimento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1hqgrr6zvneh5x6f3wnsp8f",
     "lead_id": "79490552",
     "ts": "[telefone]T15:53:49-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845359,
      "to": 108794987
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1hqgsqafcrzdfpqcfwqtypg",
     "lead_id": "79490552",
     "ts": "[telefone]T15:53:50-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "humano",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "79490552",
     "ts": "[telefone]T15:53:51-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "system",
     "action": "task_created",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T15:58:51-03:00",
      "completed": true,
      "responsible": "[pessoa]",
      "result": "em atendimento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m28yntxtvdfqk0xa5ngfj9j4",
     "lead_id": "79490552",
     "ts": "[telefone]T16:21:27-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m28yq0wh6x0bnra7x4fa6z2y",
     "lead_id": "79490552",
     "ts": "[telefone]T16:22:06-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m291dy1g8c5f7wqz52eehc7m",
     "lead_id": "79490552",
     "ts": "[telefone]T17:09:34-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m291mvnmdd8tb6dehghj0beh",
     "lead_id": "79490552",
     "ts": "[telefone]T17:13:20-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m291p2s8w915p67724wsrssz",
     "lead_id": "79490552",
     "ts": "[telefone]T17:14:01-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2ja8k2gw5xaw82t2et4kcwh",
     "lead_id": "79490552",
     "ts": "[telefone]T07:37:06-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2jb98z8c647pnn82dbh8abx",
     "lead_id": "79490552",
     "ts": "[telefone]T07:54:57-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2jbdjnghvqkhmhrcdrcag6f",
     "lead_id": "79490552",
     "ts": "[telefone]T07:57:18-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "tc[telefone]",
     "lead_id": "79490552",
     "ts": "[telefone]T14:25:16-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_completed",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "result": "em atendimento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k1mb0myp0bca4p7st6956m",
     "lead_id": "79490552",
     "ts": "[telefone]T14:25:28-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k329gg7dr1tbcj44ffvmkg",
     "lead_id": "79490552",
     "ts": "[telefone]T14:50:34-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k3948g6cf49cverwv3gtvy",
     "lead_id": "79490552",
     "ts": "[telefone]T14:54:18-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k3fvpew75wbef03xy9en2e",
     "lead_id": "79490552",
     "ts": "[telefone]T14:57:58-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k3pnvg13km3ccx2xrexk3w",
     "lead_id": "79490552",
     "ts": "[telefone]T15:01:42-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k3vdjq1ed5yszet1acjmgq",
     "lead_id": "79490552",
     "ts": "[telefone]T15:04:17-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k3vysr7s40vhtd6f1grrkj",
     "lead_id": "79490552",
     "ts": "[telefone]T15:04:35-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k3xkcq7yapt3k2jnp1yy0m",
     "lead_id": "79490552",
     "ts": "[telefone]T15:05:28-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k3zrg82zwb6adysz0c2eb6",
     "lead_id": "79490552",
     "ts": "[telefone]T15:06:39-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "tc[telefone]",
     "lead_id": "79490552",
     "ts": "[telefone]T15:07:49-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_completed",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "result": "Em atendimento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k42zd803554g0je11123sk",
     "lead_id": "79490552",
     "ts": "[telefone]T15:08:25-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k43m03kz1zxf669byhte9d",
     "lead_id": "79490552",
     "ts": "[telefone]T15:08:46-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k456pg9vc77rss4neeavef",
     "lead_id": "79490552",
     "ts": "[telefone]T15:09:38-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k499r6xgeq2t7emcbxqfxy",
     "lead_id": "79490552",
     "ts": "[telefone]T15:11:52-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k4arsnk3s5ydj273s5ee2b",
     "lead_id": "79490552",
     "ts": "[telefone]T15:12:40-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k4t2ngwk62sekkqdaqqsea",
     "lead_id": "79490552",
     "ts": "[telefone]T15:21:02-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k4wpn0d2z3dx6cwtcgeze4",
     "lead_id": "79490552",
     "ts": "[telefone]T15:22:28-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k4ywm5sm4ch6kp19th19ze",
     "lead_id": "79490552",
     "ts": "[telefone]T15:23:39-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k4zhf8f945nz9ex85g8v4t",
     "lead_id": "79490552",
     "ts": "[telefone]T15:24:01-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k5y8n40nfnr1awnc0pnb0y",
     "lead_id": "79490552",
     "ts": "[telefone]T15:40:47-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k5ynfwdxxncpw364edw4cb",
     "lead_id": "79490552",
     "ts": "[telefone]T15:41:00-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k60gw919gp3zjpyzpbamvg",
     "lead_id": "79490552",
     "ts": "[telefone]T15:42:01-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k62hz7gm2t3gp47sn8x84k",
     "lead_id": "79490552",
     "ts": "[telefone]T15:43:08-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k6x45rbj90j5wb2kp16bd4",
     "lead_id": "79490552",
     "ts": "[telefone]T15:57:39-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k7tqncmtkr1a6at2rryt8y",
     "lead_id": "79490552",
     "ts": "[telefone]T16:13:49-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k85pjsqp5j3pmhkjsgvc5k",
     "lead_id": "79490552",
     "ts": "[telefone]T16:19:48-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 108794987,
      "to": 104845507
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k9bvt398rqxhzh7bdazx4k",
     "lead_id": "79490552",
     "ts": "[telefone]T16:40:39-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k9cg8ayb0tv4jnqjynd5eh",
     "lead_id": "79490552",
     "ts": "[telefone]T16:41:00-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k9d4q8mc5kf4d1rjesvtjr",
     "lead_id": "79490552",
     "ts": "[telefone]T16:41:21-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k9ekk8nphv0z5pgrdcm47g",
     "lead_id": "79490552",
     "ts": "[telefone]T16:42:09-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k9k3kvrcqftc35v37wbcxa",
     "lead_id": "79490552",
     "ts": "[telefone]T16:44:36-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k9kc32562kf492qgt0rqy4",
     "lead_id": "79490552",
     "ts": "[telefone]T16:44:45-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k9kg6pjm9qab9fv1906w04",
     "lead_id": "79490552",
     "ts": "[telefone]T16:44:49-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2kc8ty2sxwhkz6fpcwaam75",
     "lead_id": "79490552",
     "ts": "[telefone]T17:31:25-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845507,
      "to": 142
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "m-01m2kc8ty2sxwhkz6fpcwaam75",
     "lead_id": "79490552",
     "ts": "[telefone]T17:31:25-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "legal_handoff",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "confirmed": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79490552",
     "ts": "[telefone]T17:31:29-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79490552",
     "ts": "[telefone]T17:31:29-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2kfja9gppaj0knmfbhd7hfb",
     "lead_id": "79490552",
     "ts": "[telefone]T18:29:02-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2kfja9gkxrs62gb4j6pdqwg",
     "lead_id": "79490552",
     "ts": "[telefone]T18:29:02-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2kfja9ggffywrqs24f596b8",
     "lead_id": "79490552",
     "ts": "[telefone]T18:29:02-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2kfjb8r9k1s0s94s8hf7bpb",
     "lead_id": "79490552",
     "ts": "[telefone]T18:29:03-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2kfjb8rt0th2pcpmsy0zp8f",
     "lead_id": "79490552",
     "ts": "[telefone]T18:29:03-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2kfqga06xf3jc73474vhhzr",
     "lead_id": "79490552",
     "ts": "[telefone]T18:31:52-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2n1vjcgbm6eb5ke21qkpqjy",
     "lead_id": "79490552",
     "ts": "[telefone]T09:07:54-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2qkdpsr498zcfc40vf1p91q",
     "lead_id": "79490552",
     "ts": "[telefone]T08:53:23-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2r92w4z5bc5rkxaf34zdtdz",
     "lead_id": "79490552",
     "ts": "[telefone]T15:11:56-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2r93v43xzh65zjh7z056vq7",
     "lead_id": "79490552",
     "ts": "[telefone]T15:12:28-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2r94k482sa1k2xr9hr9xcha",
     "lead_id": "79490552",
     "ts": "[telefone]T15:12:53-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a6mednp4jzfs78hfztghqq",
     "lead_id": "79490552",
     "ts": "[telefone]T14:15:26-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3a6pjqef13pvbq0ms7j2f4h",
     "lead_id": "79490552",
     "ts": "[telefone]T14:16:36-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3a734m0w0a5zm33tkn4y2tr",
     "lead_id": "79490552",
     "ts": "[telefone]T14:23:28-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a89q00se5a2rpcd8dre7jp",
     "lead_id": "79490552",
     "ts": "[telefone]T14:44:32-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8afd8fz4t2fjsmf2jf73e",
     "lead_id": "79490552",
     "ts": "[telefone]T14:44:57-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8b5w08wf2v2qhzv5vq89e",
     "lead_id": "79490552",
     "ts": "[telefone]T14:45:20-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8c638bfdbdxncrmrarc4p",
     "lead_id": "79490552",
     "ts": "[telefone]T14:45:53-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8cppgd87wytndc6wk1a78",
     "lead_id": "79490552",
     "ts": "[telefone]T14:46:10-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8d6agdp04wyn73s08et13",
     "lead_id": "79490552",
     "ts": "[telefone]T14:46:26-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8dj1gtesgycrvax5sg7d5",
     "lead_id": "79490552",
     "ts": "[telefone]T14:46:38-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8eebrxaqqpewthspsfy0q",
     "lead_id": "79490552",
     "ts": "[telefone]T14:47:07-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8g338y02hpf4bhrz97h3a",
     "lead_id": "79490552",
     "ts": "[telefone]T14:48:01-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8jywr10dnt2xp6p56jyvj",
     "lead_id": "79490552",
     "ts": "[telefone]T14:49:35-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8qeeg2d2jwv33v02bm85n",
     "lead_id": "79490552",
     "ts": "[telefone]T14:52:02-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8r2m6ntzn3jvgrwn6mf4s",
     "lead_id": "79490552",
     "ts": "[telefone]T14:52:22-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8scp8vctpey2wtz2swxzf",
     "lead_id": "79490552",
     "ts": "[telefone]T14:53:05-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8ttv8pw4fsvzyk8q2b3wr",
     "lead_id": "79490552",
     "ts": "[telefone]T14:53:53-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a93ty064n0xadna6tyebxx",
     "lead_id": "79490552",
     "ts": "[telefone]T14:58:48-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a982nrej5vm36q2bpe79rw",
     "lead_id": "79490552",
     "ts": "[telefone]T15:01:07-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3aec0b5wx6z59za822vv1r5",
     "lead_id": "79490552",
     "ts": "[telefone]T16:30:38-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aedd12z1417149xcp3bten",
     "lead_id": "79490552",
     "ts": "[telefone]T16:31:24-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aeg6vwjsg7g9441qmg9rg1",
     "lead_id": "79490552",
     "ts": "[telefone]T16:32:56-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aj23301133ew1nqh5ndwdd",
     "lead_id": "79490552",
     "ts": "[telefone]T17:35:08-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 872
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3akjc0gjhfyqg9ax37hqwe4",
     "lead_id": "79490552",
     "ts": "[telefone]T18:01:30-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 872,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    }
   ],
   "calls_analysis": [],
   "acertos": [
    "Lead de evento trabalhado no mesmo minuto da criação e contratado em 13 dias por texto, com tarefas de acompanhamento cumpridas.",
    "Retomadas em 11/09 e 15/09 sem depender do lead."
   ],
   "melhorias": [
    "Pós-ativação: quem responde? Última mensagem do cliente (24/09 17:35) sem retorno humano no corte."
   ],
   "evidencias": [
    "[link removido] · 02/09 10:37–10:43 humano e robô",
    "[link removido] · 15/09 17:31 Ativação",
    "[link removido] · 24/09 17:35 → 18:01 robô"
   ],
   "conduzir_melhor": [
    "Sugestão reescrita (pós-ativação, ao receber documentos): 'Recebi suas 12 mensagens, obrigado! Vou conferir e te retorno até as 16h com o que ainda falta.'"
   ],
   "proxima_acao": "Não executar: responder à mensagem pendente de 24/09 e confirmar recebimento/conferência de documentos.",
   "limitacoes": [
    "Sem texto; qualidade da condução não avaliável; sem ligações."
   ],
   "confianca": "alta para tempos; baixa para condução.",
   "observado_vs_sugerido": [],
   "nomes_citados": [
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]"
   ]
  },
  {
   "id": "79533290",
   "nome": "Caso 4",
   "url": "",
   "servico": "[TRABALHISTA] Reconhecimento de vínculo",
   "origem": "Mídia Paga / [Mídia] Meta Ads",
   "criado_em": "[telefone]T11:06:00-03:00",
   "atendentes": [
    "Atendente 1",
    "Atendente 2"
   ],
   "responsavel_atual": "[pessoa]",
   "etapa_atual": "Negociação",
   "etapa_max": "Negociação",
   "status": "open",
   "motivo_perda": null,
   "tags": [
    "humano",
    "⭐️",
    "Trabalhista generica"
   ],
   "legacy": true,
   "motivo_selecao": "Avançado: Negociação, criado há 24 d (janela de 30 d), 2 atendentes, conversa longa ainda ativa no corte",
   "contexto_robo": "Pré triagem de Reconhecimento de Vínculo feita ✅ · formulário/qualificação: Score: 80; [T] Vínculo: Carteira assinada; [T] Irregularidades: discriminatória; Status de Qualificação: Qualificado",
   "transfer": {
    "ts": "[telefone]T11:12:12-03:00",
    "confidence": "inferido",
    "rule": "1ª tarefa atribuída a pessoa (Novo Lead)"
   },
   "indicadores": {
    "h_transf_primeira_tentativa": {
     "valor": 0.17,
     "definicao": "horas corridas da transferência até 1ª ação humana dirigida ao lead (mensagem ou tentativa de ligação)",
     "base": "transferência inferido",
     "cobertura": "completa"
    },
    "h_transf_primeira_mensagem": {
     "valor": 0.17,
     "definicao": "horas até 1ª mensagem humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_transf_primeira_ligacao": {
     "valor": 579.48,
     "definicao": "horas até 1ª tentativa de ligação de saída",
     "base": "notas/eventos de chamada",
     "cobertura": "completa"
    },
    "h_transf_primeira_conversa": {
     "valor": 0.18,
     "definicao": "horas até 1ª conversa efetiva (resposta do lead a humano ou ligação atendida)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "episodios_espera": {
     "valor": 22,
     "definicao": "grupos de mensagens do lead que exigiam retorno",
     "base": "mensagens anotadas requires_reply",
     "cobertura": "completa"
    },
    "mediana_resposta_h": {
     "valor": 0.04,
     "definicao": "mediana do tempo corrido última msg do lead → 1ª ação humana, só episódios concluídos",
     "base": "22 episódios concluídos",
     "cobertura": "completa"
    },
    "maior_espera_concluida_h": {
     "valor": 49.09,
     "definicao": "maior espera concluída",
     "base": "22 episódios",
     "cobertura": "completa"
    },
    "espera_aberta_h": {
     "valor": "NA",
     "definicao": "tempo acumulado até o corte da pendência aberta (não somado às medianas)",
     "base": "episódio aberto",
     "cobertura": "completa"
    },
    "msgs_humanas": {
     "valor": 46,
     "definicao": "mensagens enviadas por humano (fragmentos contados individualmente)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_lead": {
     "valor": 57,
     "definicao": "mensagens recebidas do lead",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_robo": {
     "valor": 2,
     "definicao": "mensagens do robô (contexto)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "abordagens_followup": {
     "valor": 5,
     "definicao": "ações humanas de saída após ≥4 h sem resposta do lead; fragmentos ≤10 min = 1",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tentativas_ligacao_saida": {
     "valor": 1,
     "definicao": "ligações de saída por humano (atendidas ou não), deduplicadas",
     "base": "notas de chamada + API4com",
     "cobertura": "completa"
    },
    "ligacoes_saida_atendidas": {
     "valor": 0,
     "definicao": "ligações de saída com duração > 0 (atendida ≠ conversa comercial)",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "chamadas_entrada": {
     "valor": 0,
     "definicao": "ligações recebidas",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "dias_com_atuacao_humana": {
     "valor": 5,
     "definicao": "dias distintos com ação humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_criadas": {
     "valor": 3,
     "definicao": "tarefas criadas",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_concluidas": {
     "valor": 3,
     "definicao": "tarefas concluídas (não prova ligação)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_vencidas": {
     "valor": 0,
     "definicao": "tarefas com prazo anterior ao corte sem conclusão",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_ate_agendamento": {
     "valor": "NA",
     "definicao": "horas transferência → reunião agendada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_reuniao_realizada": {
     "valor": 487.56,
     "definicao": "horas transferência → reunião realizada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_envio_documento": {
     "valor": "NA",
     "definicao": "horas transferência → 1º documento enviado",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_assinatura_confirmada": {
     "valor": "NA",
     "definicao": "horas transferência → assinatura comprovada",
     "base": "marcos",
     "cobertura": "completa"
    }
   },
   "episodios": [
    {
     "start": "[telefone]T11:23:02-03:00",
     "last_lead_msg": "[telefone]T11:23:02-03:00",
     "msgs": [
      "01m1pctcbgdd5mqbd06r6d23h5"
     ],
     "refs": [
      "[link removido] · [telefone]T11:23:02-03:00 · evento 01m1pctcbgdd5mqbd06r6d23h5"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T11:23:23-03:00",
     "answer_ref": "[link removido] · [telefone]T11:23:23-03:00 · evento 01m1pcv18g35v798jctjwj4d9j",
     "answer_action": "message",
     "wait_seconds": 21.0,
     "open": false
    },
    {
     "start": "[telefone]T11:25:49-03:00",
     "last_lead_msg": "[telefone]T11:26:28-03:00",
     "msgs": [
      "01m1pczfe8nnehqwaj4v35an68",
      "01m1pd0nh0zgphnyw5ea055tqy"
     ],
     "refs": [
      "[link removido] · [telefone]T11:25:49-03:00 · evento 01m1pczfe8nnehqwaj4v35an68",
      "[link removido] · [telefone]T11:26:28-03:00 · evento 01m1pd0nh0zgphnyw5ea055tqy"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T11:39:32-03:00",
     "answer_ref": "[link removido] · [telefone]T11:39:32-03:00 · evento 01m1pdrkc3kar9t8kgcgj3dg04",
     "answer_action": "message",
     "wait_seconds": 784.0,
     "open": false
    },
    {
     "start": "[telefone]T11:39:45-03:00",
     "last_lead_msg": "[telefone]T11:39:45-03:00",
     "msgs": [
      "01m1pdrzv84m4mwycsyevy9ad4"
     ],
     "refs": [
      "[link removido] · [telefone]T11:39:45-03:00 · evento 01m1pdrzv84m4mwycsyevy9ad4"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T11:39:55-03:00",
     "answer_ref": "[link removido] · [telefone]T11:39:55-03:00 · evento 01m1pds9s03t83aydgw7mws5f3",
     "answer_action": "message",
     "wait_seconds": 10.0,
     "open": false
    },
    {
     "start": "[telefone]T11:39:56-03:00",
     "last_lead_msg": "[telefone]T11:40:18-03:00",
     "msgs": [
      "01m1pdsak0avpnhjfn2zrfkvkx",
      "01m1pdsgeg63ck0pg5tzd05kz4",
      "01m1pdsz38nk111pveb3gqqnn3",
      "01m1pdsz38sg9yy9qgas8hs6fs",
      "01m1pdt02g8aevrnj6rbr19ttt",
      "01m1pdt02gxbsr0psm0w3fg58x"
     ],
     "refs": [
      "[link removido] · [telefone]T11:39:56-03:00 · evento 01m1pdsak0avpnhjfn2zrfkvkx",
      "[link removido] · [telefone]T11:40:02-03:00 · evento 01m1pdsgeg63ck0pg5tzd05kz4",
      "[link removido] · [telefone]T11:40:17-03:00 · evento 01m1pdsz38nk111pveb3gqqnn3",
      "[link removido] · [telefone]T11:40:17-03:00 · evento 01m1pdsz38sg9yy9qgas8hs6fs",
      "[link removido] · [telefone]T11:40:18-03:00 · evento 01m1pdt02g8aevrnj6rbr19ttt",
      "[link removido] · [telefone]T11:40:18-03:00 · evento 01m1pdt02gxbsr0psm0w3fg58x"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T11:40:58-03:00",
     "answer_ref": "[link removido] · [telefone]T11:40:58-03:00 · evento 01m1pdv7dd1cvs1ynztq3r7w9d",
     "answer_action": "message",
     "wait_seconds": 40.0,
     "open": false
    },
    {
     "start": "[telefone]T11:41:39-03:00",
     "last_lead_msg": "[telefone]T11:44:03-03:00",
     "msgs": [
      "01m1pdwf5rbjfxwa7g7xkjdsny",
      "01m1pdxdegy5d4yye06tjr76dp",
      "01m1pdy4wgk00sfcg2tczdf4z4",
      "01m1pdyqe8g0k6104t8y7vpt23",
      "01m1pe0vsrkaa8wtmg9qf4zy65"
     ],
     "refs": [
      "[link removido] · [telefone]T11:41:39-03:00 · evento 01m1pdwf5rbjfxwa7g7xkjdsny",
      "[link removido] · [telefone]T11:42:10-03:00 · evento 01m1pdxdegy5d4yye06tjr76dp",
      "[link removido] · [telefone]T11:42:34-03:00 · evento 01m1pdy4wgk00sfcg2tczdf4z4",
      "[link removido] · [telefone]T11:42:53-03:00 · evento 01m1pdyqe8g0k6104t8y7vpt23",
      "[link removido] · [telefone]T11:44:03-03:00 · evento 01m1pe0vsrkaa8wtmg9qf4zy65"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T11:47:08-03:00",
     "answer_ref": "[link removido] · [telefone]T11:47:08-03:00 · evento 01m1pe6gr8nbxcvvha525zhydp",
     "answer_action": "message",
     "wait_seconds": 185.0,
     "open": false
    },
    {
     "start": "[telefone]T11:48:09-03:00",
     "last_lead_msg": "[telefone]T11:52:58-03:00",
     "msgs": [
      "01m1pe8c189r43v98ggp7qyh72",
      "01m1pe9aa0q6bzjbgf2yx2pcqc",
      "01m1pebcq01segns86mk3j1ep1",
      "01m1pef0xr5ymvcgjpgp7xg52v",
      "01m1peh68geta8543g935ex8kz"
     ],
     "refs": [
      "[link removido] · [telefone]T11:48:09-03:00 · evento 01m1pe8c189r43v98ggp7qyh72",
      "[link removido] · [telefone]T11:48:40-03:00 · evento 01m1pe9aa0q6bzjbgf2yx2pcqc",
      "[link removido] · [telefone]T11:49:48-03:00 · evento 01m1pebcq01segns86mk3j1ep1",
      "[link removido] · [telefone]T11:51:47-03:00 · evento 01m1pef0xr5ymvcgjpgp7xg52v",
      "[link removido] · [telefone]T11:52:58-03:00 · evento 01m1peh68geta8543g935ex8kz"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T11:53:07-03:00",
     "answer_ref": "[link removido] · [telefone]T11:53:07-03:00 · evento 01m1pehfmw6ygjz5wwyraywd7f",
     "answer_action": "message",
     "wait_seconds": 9.0,
     "open": false
    },
    {
     "start": "[telefone]T11:55:34-03:00",
     "last_lead_msg": "[telefone]T11:55:34-03:00",
     "msgs": [
      "01m1penykg171j5qs4cy2w6a8q"
     ],
     "refs": [
      "[link removido] · [telefone]T11:55:34-03:00 · evento 01m1penykg171j5qs4cy2w6a8q"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T11:56:17-03:00",
     "answer_ref": "[link removido] · [telefone]T11:56:17-03:00 · evento 01m1peq9gjb5faa8s5yaphfv0r",
     "answer_action": "message",
     "wait_seconds": 43.0,
     "open": false
    },
    {
     "start": "[telefone]T11:56:43-03:00",
     "last_lead_msg": "[telefone]T12:00:03-03:00",
     "msgs": [
      "01m1per1zrx1rdj45g0t3kxhjb",
      "01m1permhgep6ynfgvy8z3act4",
      "01m1pes08g2cyjjv912wcnkp7r",
      "01m1peth30exmdv49wg4jtdjk8",
      "01m1pev1p8z4yz01jww5v97vvz",
      "01m1pex24refcseqq7kd2zev6e",
      "01m1pey59rnwgyrmh8q5vrfjj4"
     ],
     "refs": [
      "[link removido] · [telefone]T11:56:43-03:00 · evento 01m1per1zrx1rdj45g0t3kxhjb",
      "[link removido] · [telefone]T11:57:02-03:00 · evento 01m1permhgep6ynfgvy8z3act4",
      "[link removido] · [telefone]T11:57:14-03:00 · evento 01m1pes08g2cyjjv912wcnkp7r",
      "[link removido] · [telefone]T11:58:04-03:00 · evento 01m1peth30exmdv49wg4jtdjk8",
      "[link removido] · [telefone]T11:58:21-03:00 · evento 01m1pev1p8z4yz01jww5v97vvz",
      "[link removido] · [telefone]T11:59:27-03:00 · evento 01m1pex24refcseqq7kd2zev6e",
      "[link removido] · [telefone]T12:00:03-03:00 · evento 01m1pey59rnwgyrmh8q5vrfjj4"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T12:00:27-03:00",
     "answer_ref": "[link removido] · [telefone]T12:00:27-03:00 · evento 01m1peywwfqre1hjx773n1cpds",
     "answer_action": "message",
     "wait_seconds": 24.0,
     "open": false
    },
    {
     "start": "[telefone]T12:00:45-03:00",
     "last_lead_msg": "[telefone]T12:00:45-03:00",
     "msgs": [
      "01m1pezea89ph1hfsgy2fayaag"
     ],
     "refs": [
      "[link removido] · [telefone]T12:00:45-03:00 · evento 01m1pezea89ph1hfsgy2fayaag"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T12:01:07-03:00",
     "answer_ref": "[link removido] · [telefone]T12:01:07-03:00 · evento 01m1pf04904q5pjgdzxcsry879",
     "answer_action": "message",
     "wait_seconds": 22.0,
     "open": false
    },
    {
     "start": "[telefone]T12:01:10-03:00",
     "last_lead_msg": "[telefone]T12:02:10-03:00",
     "msgs": [
      "01m1pf06qgs8hzhda0km6fvy19",
      "01m1pf0pbg6y0wnj3sc4qb0eec",
      "01m1pf21agc55f4j5aajrche96"
     ],
     "refs": [
      "[link removido] · [telefone]T12:01:10-03:00 · evento 01m1pf06qgs8hzhda0km6fvy19",
      "[link removido] · [telefone]T12:01:26-03:00 · evento 01m1pf0pbg6y0wnj3sc4qb0eec",
      "[link removido] · [telefone]T12:02:10-03:00 · evento 01m1pf21agc55f4j5aajrche96"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T12:13:19-03:00",
     "answer_ref": "[link removido] · [telefone]T12:13:19-03:00 · evento 01m1pfpeq99tsm5w08eyqx6rxs",
     "answer_action": "message",
     "wait_seconds": 669.0,
     "open": false
    },
    {
     "start": "[telefone]T12:15:25-03:00",
     "last_lead_msg": "[telefone]T12:15:25-03:00",
     "msgs": [
      "01m1pft9p8ewcbb2c1gdngsvhz"
     ],
     "refs": [
      "[link removido] · [telefone]T12:15:25-03:00 · evento 01m1pft9p8ewcbb2c1gdngsvhz"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T12:18:24-03:00",
     "answer_ref": "[link removido] · [telefone]T12:18:24-03:00 · evento 01m1pfzrxnwzc218m2y5n2zwdy",
     "answer_action": "message",
     "wait_seconds": 179.0,
     "open": false
    },
    {
     "start": "[telefone]T12:25:19-03:00",
     "last_lead_msg": "[telefone]T12:25:19-03:00",
     "msgs": [
      "01m1pgcdrr1mnj4nv60ph1namh"
     ],
     "refs": [
      "[link removido] · [telefone]T12:25:19-03:00 · evento 01m1pgcdrr1mnj4nv60ph1namh"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T12:35:50-03:00",
     "answer_ref": "[link removido] · [telefone]T12:35:50-03:00 · evento 01m1pgzpygddzqescxphhzeptj",
     "answer_action": "message",
     "wait_seconds": 631.0,
     "open": false
    },
    {
     "start": "[telefone]T12:38:13-03:00",
     "last_lead_msg": "[telefone]T12:38:13-03:00",
     "msgs": [
      "01m1ph41m8eyqj2vxbzxrpjqdb"
     ],
     "refs": [
      "[link removido] · [telefone]T12:38:13-03:00 · evento 01m1ph41m8eyqj2vxbzxrpjqdb"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:13:12-03:00",
     "answer_ref": "[link removido] · [telefone]T15:13:12-03:00 · evento 01m1pszv0rabkx249btty5df29",
     "answer_action": "message",
     "wait_seconds": 9299.0,
     "open": false
    },
    {
     "start": "[telefone]T10:37:33-03:00",
     "last_lead_msg": "[telefone]T10:37:59-03:00",
     "msgs": [
      "01m2qscea8vq0ajmvyn8z8a76y",
      "01m2qscvzrtc9rb5da8kp6akd6",
      "01m2qsd7pr25m67jsnfmh6tmac"
     ],
     "refs": [
      "[link removido] · [telefone]T10:37:33-03:00 · evento 01m2qscea8vq0ajmvyn8z8a76y",
      "[link removido] · [telefone]T10:37:47-03:00 · evento 01m2qscvzrtc9rb5da8kp6akd6",
      "[link removido] · [telefone]T10:37:59-03:00 · evento 01m2qsd7pr25m67jsnfmh6tmac"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T10:38:45-03:00",
     "answer_ref": "[link removido] · [telefone]T10:38:45-03:00 · evento 01m2qsenhjzvs4hqn4s93nsaj4",
     "answer_action": "message",
     "wait_seconds": 46.0,
     "open": false
    },
    {
     "start": "[telefone]T11:11:03-03:00",
     "last_lead_msg": "[telefone]T11:11:10-03:00",
     "msgs": [
      "01m2qv9s6rr7qwmzed82tzwd8d",
      "01m2qva01gadtd1mkzrtp2610r"
     ],
     "refs": [
      "[link removido] · [telefone]T11:11:03-03:00 · evento 01m2qv9s6rr7qwmzed82tzwd8d",
      "[link removido] · [telefone]T11:11:10-03:00 · evento 01m2qva01gadtd1mkzrtp2610r"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T11:13:33-03:00",
     "answer_ref": "[link removido] · [telefone]T11:13:33-03:00 · evento 01m2qvebtbznr1gebwrq5wfw7n",
     "answer_action": "message",
     "wait_seconds": 143.0,
     "open": false
    },
    {
     "start": "[telefone]T12:44:10-03:00",
     "last_lead_msg": "[telefone]T12:44:19-03:00",
     "msgs": [
      "01m3a1da8gp81kcq3h61p16enr",
      "01m3a1dg404y9979zpqakt1w2j",
      "01m3a1dk1rp7sqvjbyhkqhsyds"
     ],
     "refs": [
      "[link removido] · [telefone]T12:44:10-03:00 · evento 01m3a1da8gp81kcq3h61p16enr",
      "[link removido] · [telefone]T12:44:16-03:00 · evento 01m3a1dg404y9979zpqakt1w2j",
      "[link removido] · [telefone]T12:44:19-03:00 · evento 01m3a1dk1rp7sqvjbyhkqhsyds"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T12:50:17-03:00",
     "answer_ref": "[link removido] · [telefone]T12:50:17-03:00 · evento 01m3a1rgps85s8v147nry6r016",
     "answer_action": "message",
     "wait_seconds": 358.0,
     "open": false
    },
    {
     "start": "[telefone]T12:57:07-03:00",
     "last_lead_msg": "[telefone]T12:57:12-03:00",
     "msgs": [
      "01m3a2511r4zcy7hj4k3zg2arf",
      "01m3a255y0p4651afm29ve21rw"
     ],
     "refs": [
      "[link removido] · [telefone]T12:57:07-03:00 · evento 01m3a2511r4zcy7hj4k3zg2arf",
      "[link removido] · [telefone]T12:57:12-03:00 · evento 01m3a255y0p4651afm29ve21rw"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T14:51:49-03:00",
     "answer_ref": "[link removido] · [telefone]T14:51:49-03:00 · evento 01m3a8q2dqzgkrkcz63jse9w61",
     "answer_action": "message",
     "wait_seconds": 6877.0,
     "open": false
    },
    {
     "start": "[telefone]T15:33:12-03:00",
     "last_lead_msg": "[telefone]T15:33:26-03:00",
     "msgs": [
      "01m3ab2tj08hr0rdjgq1f8apb3",
      "01m3ab387g51w3hwwgn1ysrhp2"
     ],
     "refs": [
      "[link removido] · [telefone]T15:33:12-03:00 · evento 01m3ab2tj08hr0rdjgq1f8apb3",
      "[link removido] · [telefone]T15:33:26-03:00 · evento 01m3ab387g51w3hwwgn1ysrhp2"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:55:28-03:00",
     "answer_ref": "[link removido] · [telefone]T15:55:28-03:00 · evento 01m3acbk9g52ad2eb2fg343er9",
     "answer_action": "message",
     "wait_seconds": 1322.0,
     "open": false
    },
    {
     "start": "[telefone]T18:04:21-03:00",
     "last_lead_msg": "[telefone]T18:04:26-03:00",
     "msgs": [
      "01m3akqk0844b8sj6a67cb7h66",
      "01m3akqqwgk7hq8b4nvykc2n4e"
     ],
     "refs": [
      "[link removido] · [telefone]T18:04:21-03:00 · evento 01m3akqk0844b8sj6a67cb7h66",
      "[link removido] · [telefone]T18:04:26-03:00 · evento 01m3akqqwgk7hq8b4nvykc2n4e"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T18:06:34-03:00",
     "answer_ref": "[link removido] · [telefone]T18:06:34-03:00 · evento 01m3akvnetjgwmtt833ydn08h9",
     "answer_action": "message",
     "wait_seconds": 128.0,
     "open": false
    },
    {
     "start": "[telefone]T18:07:10-03:00",
     "last_lead_msg": "[telefone]T18:07:10-03:00",
     "msgs": [
      "01m3akwr1gkaas7y4h7009w2gb"
     ],
     "refs": [
      "[link removido] · [telefone]T18:07:10-03:00 · evento 01m3akwr1gkaas7y4h7009w2gb"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T18:11:45-03:00",
     "answer_ref": "[link removido] · [telefone]T18:11:45-03:00 · evento 01m3am55bbbc3h4y39xtnjvzhk",
     "answer_action": "message",
     "wait_seconds": 275.0,
     "open": false
    },
    {
     "start": "[telefone]T14:07:38-03:00",
     "last_lead_msg": "[telefone]T14:07:55-03:00",
     "msgs": [
      "01m3crjvwg55d87qt5sk7pcybc",
      "01m3crkcfrw40k88bypadndvqd"
     ],
     "refs": [
      "[link removido] · [telefone]T14:07:38-03:00 · evento 01m3crjvwg55d87qt5sk7pcybc",
      "[link removido] · [telefone]T14:07:55-03:00 · evento 01m3crkcfrw40k88bypadndvqd"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T14:08:43-03:00",
     "answer_ref": "[link removido] · [telefone]T14:08:43-03:00 · evento 01m3crmvp8k797kaszbmjwxs6f",
     "answer_action": "message",
     "wait_seconds": 48.0,
     "open": false
    },
    {
     "start": "[telefone]T09:33:00-03:00",
     "last_lead_msg": "[telefone]T09:44:09-03:00",
     "msgs": [
      "01m3ev8q305ctw1kzc663m5vwf",
      "01m3evqqj04qkdapa0pwkgcqz9",
      "01m3evr390v90qr50p3yney3ds",
      "01m3evwdygg1ct1g40tgav8pgh",
      "01m3evx4d8x85jnmcbamhb0tk7"
     ],
     "refs": [
      "[link removido] · [telefone]T09:33:00-03:00 · evento 01m3ev8q305ctw1kzc663m5vwf",
      "[link removido] · [telefone]T09:41:12-03:00 · evento 01m3evqqj04qkdapa0pwkgcqz9",
      "[link removido] · [telefone]T09:41:24-03:00 · evento 01m3evr390v90qr50p3yney3ds",
      "[link removido] · [telefone]T09:43:46-03:00 · evento 01m3evwdygg1ct1g40tgav8pgh",
      "[link removido] · [telefone]T09:44:09-03:00 · evento 01m3evx4d8x85jnmcbamhb0tk7"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T10:49:32-03:00",
     "answer_ref": "[link removido] · [telefone]T10:49:32-03:00 · evento 01m3m4e9thcg7zbxqfztjke0jn",
     "answer_action": "message",
     "wait_seconds": 176723.0,
     "open": false
    }
   ],
   "followups": [
    {
     "ts": "[telefone]T10:36:38-03:00",
     "action": "message",
     "gap_hours": 309.97,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T14:00:14-03:00",
     "action": "message",
     "gap_hours": 19.88,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T10:49:32-03:00",
     "action": "message",
     "gap_hours": 49.09,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T12:29:00-03:00",
     "action": "message",
     "gap_hours": 50.75,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T14:41:16-03:00",
     "action": "call_attempt",
     "gap_hours": 52.95,
     "ref": "[removido]",
     "actor": "[pessoa]"
    }
   ],
   "chamadas": {
    "chamadas_localizadas": 1,
    "tentativas_saida": 1,
    "saida_atendidas": 0,
    "entrada": 0,
    "entrada_perdidas": 0,
    "duracao_total_s": 0,
    "com_gravacao_link": 0,
    "gravacao_acessivel": 0,
    "transcritas": 0,
    "lista": [
     {
      "ts": "[telefone]T14:41:16-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "30de8db9-c62c-446b-afe7-dd9124f60fe6",
      "ref": "[removido]"
     }
    ]
   },
   "marcos": {
    "meeting_offered": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_accepted": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_scheduled": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_confirmed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_done": {
     "ocorreu": true,
     "primeira": "[telefone]T18:45:37-03:00",
     "evidencias": [
      {
       "ref": "[removido]",
       "conteudo": "[removido]",
       "doc": "tarefa",
       "confirmado": true
      }
     ]
    },
    "meeting_noshow": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_reschedule": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "proposal_presented": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_sent": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_signed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "legal_handoff": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "contrato_enviado": false,
    "contrato_assinado_confirmado": false,
    "procuracao_enviado": false,
    "procuracao_assinado_confirmado": false
   },
   "status_espera": "aguardando_lead",
   "ultimo_evento": "[telefone]T14:41:16-03:00",
   "rubrica": {
    "nota_normalizada": 60.0,
    "criterios_avaliados": 5,
    "cobertura": "5/10",
    "detalhe": {
     "c1": {
      "criterio": "Agilidade e continuidade da resposta",
      "nota": 2,
      "justificativa": "Início excelente (1ª mensagem humana 6 min após a criação; troca intensa 11:22–12:38). Lacuna: lead silencioso desde 04/09 12:38 e nenhuma ação humana entre 04/09 15:19 e 17/09 10:36 (13 dias). Em 26/09 (sábado) lead enviou 5 mensagens; retorno na segunda 28/09 10:49 (49 h).",
      "evidencias": [
       "[link removido] · 04/09 11:12",
       "[link removido] · 04/09 15:19 → 17/09 10:36",
       "[link removido] · 26/09 09:44 → 28/09 10:49"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c2": {
      "criterio": "Retomada do contexto e personalização",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c3": {
      "criterio": "Investigação da necessidade e uso pertinente do SPIN",
      "nota": "DI",
      "justificativa": "Sem texto; reunião de 24/09 sem registro de conteúdo.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c4": {
      "criterio": "Qualificação adequada ao serviço",
      "nota": "DI",
      "justificativa": "Sem texto. Campos do robô: carteira assinada, irregularidade 'discriminatória', score 80.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c5": {
      "criterio": "Iniciativa e pertinência das ligações",
      "nota": 2,
      "justificativa": "Única tentativa de ligação em 28/09 (caixa postal), 24 dias após a entrada. A reunião de 24/09 (tarefa 'Reunião realizada') ocorreu, canal não registrado. Sem tentativa de ligação nos 13 dias de silêncio.",
      "evidencias": [
       "[link removido] · 28/09 14:41",
       "[link removido] · 24/09 18:45 tarefa 'Reunião realizada'"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c6": {
      "criterio": "Clareza da apresentação de valor e do processo",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c7": {
      "criterio": "Tratamento das dúvidas e objeções",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c8": {
      "criterio": "Condução para reunião ou próximo passo concreto",
      "nota": 3,
      "justificativa": "Negociação em 04/09; reunião realizada em 24/09 com próximo passo registrado (enviar documentos para contratação; pegar documentos e provas).",
      "evidencias": [
       "[link removido] · 04/09 16:10 etapa",
       "[link removido] · 24/09 18:45 tarefa"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c9": {
      "criterio": "Follow-up, confirmação e acompanhamento até assinatura",
      "nota": 2,
      "justificativa": "Após a reunião, cobrança em 25/09 (tarefa concluída 'esperando documentação'); lead respondeu no sábado e o retorno veio na segunda; 28/09 4 mensagens + ligação. Mas 13 dias parados entre 04 e 17/09 em Negociação.",
      "evidencias": [
       "[link removido] · 25/09 14:00",
       "[link removido] · 28/09 12:29–14:41"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c10": {
      "criterio": "Organização e registros no CRM",
      "nota": 3,
      "justificativa": "Tarefas com resultado ('atendimento whatsapp', 'Em andamento', 'esperando a documentação'); etapas coerentes; sem nota da reunião; serviço não preenchido.",
      "evidencias": [
       "[link removido] · 24/09 18:45 tarefa"
      ],
      "categoria_causa": "registro"
     }
    }
   },
   "timeline": [
    {
     "id": "01m1pbv6npea5tr0ppfheq52gq",
     "lead_id": "79533290",
     "ts": "[telefone]T11:06:00-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "Trabalhista generica",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pbv6np50gh05yebykx9rnb",
     "lead_id": "79533290",
     "ts": "[telefone]T11:06:00-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pbv6a0nrbm6d841vmkgxj2",
     "lead_id": "79533290",
     "ts": "[telefone]T11:06:00-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pbv96m09y932mn9yajycqx",
     "lead_id": "79533290",
     "ts": "[telefone]T11:06:02-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "responsible_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pbv8v7zw35n3pqwh65swed",
     "lead_id": "79533290",
     "ts": "[telefone]T11:06:02-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pbv8v7s3p249xz2kr1mgt5",
     "lead_id": "79533290",
     "ts": "[telefone]T11:06:02-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "⭐️",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79533290",
     "ts": "[telefone]T11:06:02-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79533290",
     "ts": "[telefone]T11:06:02-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79533290",
     "ts": "[telefone]T11:06:02-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "sync_robo"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pc4jee12pp1t395hr9e5sk",
     "lead_id": "79533290",
     "ts": "[telefone]T11:11:07-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pc678pacwqkmdm7p61p7ha",
     "lead_id": "79533290",
     "ts": "[telefone]T11:12:01-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pc6f7azqy6qcmtgysk60xn",
     "lead_id": "79533290",
     "ts": "[telefone]T11:12:09-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "79533290",
     "ts": "[telefone]T11:12:12-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "system",
     "action": "task_created",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T11:17:12-03:00",
      "completed": true,
      "responsible": "[pessoa]",
      "result": "atendimento whatsapp"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "transfer-79533290",
     "lead_id": "79533290",
     "ts": "[telefone]T11:12:12-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "transfer",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "tc[telefone]",
     "lead_id": "79533290",
     "ts": "[telefone]T11:22:09-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_completed",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "result": "atendimento whatsapp"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pcrsq6e2ctckxpg572vn2e",
     "lead_id": "79533290",
     "ts": "[telefone]T11:22:10-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845351,
      "to": 104845355
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pcsrv50ccawtfajz9s5bca",
     "lead_id": "79533290",
     "ts": "[telefone]T11:22:42-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pctcbgdd5mqbd06r6d23h5",
     "lead_id": "79533290",
     "ts": "[telefone]T11:23:02-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pcv18g35v798jctjwj4d9j",
     "lead_id": "79533290",
     "ts": "[telefone]T11:23:23-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pczfe8nnehqwaj4v35an68",
     "lead_id": "79533290",
     "ts": "[telefone]T11:25:49-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pd0nh0zgphnyw5ea055tqy",
     "lead_id": "79533290",
     "ts": "[telefone]T11:26:28-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdrkc3kar9t8kgcgj3dg04",
     "lead_id": "79533290",
     "ts": "[telefone]T11:39:32-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdrzv84m4mwycsyevy9ad4",
     "lead_id": "79533290",
     "ts": "[telefone]T11:39:45-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pds9s03t83aydgw7mws5f3",
     "lead_id": "79533290",
     "ts": "[telefone]T11:39:55-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdsak0avpnhjfn2zrfkvkx",
     "lead_id": "79533290",
     "ts": "[telefone]T11:39:56-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdsgeg63ck0pg5tzd05kz4",
     "lead_id": "79533290",
     "ts": "[telefone]T11:40:02-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdsz38nk111pveb3gqqnn3",
     "lead_id": "79533290",
     "ts": "[telefone]T11:40:17-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdsz38sg9yy9qgas8hs6fs",
     "lead_id": "79533290",
     "ts": "[telefone]T11:40:17-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdt02g8aevrnj6rbr19ttt",
     "lead_id": "79533290",
     "ts": "[telefone]T11:40:18-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdt02gxbsr0psm0w3fg58x",
     "lead_id": "79533290",
     "ts": "[telefone]T11:40:18-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdv7dd1cvs1ynztq3r7w9d",
     "lead_id": "79533290",
     "ts": "[telefone]T11:40:58-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdwf5rbjfxwa7g7xkjdsny",
     "lead_id": "79533290",
     "ts": "[telefone]T11:41:39-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdxdegy5d4yye06tjr76dp",
     "lead_id": "79533290",
     "ts": "[telefone]T11:42:10-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdy4wgk00sfcg2tczdf4z4",
     "lead_id": "79533290",
     "ts": "[telefone]T11:42:34-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pdyqe8g0k6104t8y7vpt23",
     "lead_id": "79533290",
     "ts": "[telefone]T11:42:53-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pe0vsrkaa8wtmg9qf4zy65",
     "lead_id": "79533290",
     "ts": "[telefone]T11:44:03-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pe6gr8nbxcvvha525zhydp",
     "lead_id": "79533290",
     "ts": "[telefone]T11:47:08-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pe8c189r43v98ggp7qyh72",
     "lead_id": "79533290",
     "ts": "[telefone]T11:48:09-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pe9aa0q6bzjbgf2yx2pcqc",
     "lead_id": "79533290",
     "ts": "[telefone]T11:48:40-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pebcq01segns86mk3j1ep1",
     "lead_id": "79533290",
     "ts": "[telefone]T11:49:48-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pef0xr5ymvcgjpgp7xg52v",
     "lead_id": "79533290",
     "ts": "[telefone]T11:51:47-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1peh68geta8543g935ex8kz",
     "lead_id": "79533290",
     "ts": "[telefone]T11:52:58-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pehfmw6ygjz5wwyraywd7f",
     "lead_id": "79533290",
     "ts": "[telefone]T11:53:07-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pemrdv9g918d0dwvs5w1qc",
     "lead_id": "79533290",
     "ts": "[telefone]T11:54:54-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1penykg171j5qs4cy2w6a8q",
     "lead_id": "79533290",
     "ts": "[telefone]T11:55:34-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1peq9gjb5faa8s5yaphfv0r",
     "lead_id": "79533290",
     "ts": "[telefone]T11:56:17-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1peqz9184p0eq6gxcg3sgm4",
     "lead_id": "79533290",
     "ts": "[telefone]T11:56:40-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1per1zrx1rdj45g0t3kxhjb",
     "lead_id": "79533290",
     "ts": "[telefone]T11:56:43-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1permhgep6ynfgvy8z3act4",
     "lead_id": "79533290",
     "ts": "[telefone]T11:57:02-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pes08g2cyjjv912wcnkp7r",
     "lead_id": "79533290",
     "ts": "[telefone]T11:57:14-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1peth30exmdv49wg4jtdjk8",
     "lead_id": "79533290",
     "ts": "[telefone]T11:58:04-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pev1p8z4yz01jww5v97vvz",
     "lead_id": "79533290",
     "ts": "[telefone]T11:58:21-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pex24refcseqq7kd2zev6e",
     "lead_id": "79533290",
     "ts": "[telefone]T11:59:27-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pey59rnwgyrmh8q5vrfjj4",
     "lead_id": "79533290",
     "ts": "[telefone]T12:00:03-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1peywwfqre1hjx773n1cpds",
     "lead_id": "79533290",
     "ts": "[telefone]T12:00:27-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pezea89ph1hfsgy2fayaag",
     "lead_id": "79533290",
     "ts": "[telefone]T12:00:45-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pf04904q5pjgdzxcsry879",
     "lead_id": "79533290",
     "ts": "[telefone]T12:01:07-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pf06qgs8hzhda0km6fvy19",
     "lead_id": "79533290",
     "ts": "[telefone]T12:01:10-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pf0pbg6y0wnj3sc4qb0eec",
     "lead_id": "79533290",
     "ts": "[telefone]T12:01:26-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pf21agc55f4j5aajrche96",
     "lead_id": "79533290",
     "ts": "[telefone]T12:02:10-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pfpeq99tsm5w08eyqx6rxs",
     "lead_id": "79533290",
     "ts": "[telefone]T12:13:19-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pfpxxg50f003cph75rr4tk",
     "lead_id": "79533290",
     "ts": "[telefone]T12:13:34-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pfrh25jpd4fgxwgahxr3s0",
     "lead_id": "79533290",
     "ts": "[telefone]T12:14:27-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pft9p8ewcbb2c1gdngsvhz",
     "lead_id": "79533290",
     "ts": "[telefone]T12:15:25-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pfzrxnwzc218m2y5n2zwdy",
     "lead_id": "79533290",
     "ts": "[telefone]T12:18:24-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1pgcdrr1mnj4nv60ph1namh",
     "lead_id": "79533290",
     "ts": "[telefone]T12:25:19-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pgzpygddzqescxphhzeptj",
     "lead_id": "79533290",
     "ts": "[telefone]T12:35:50-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1ph41m8eyqj2vxbzxrpjqdb",
     "lead_id": "79533290",
     "ts": "[telefone]T12:38:13-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m1pszv0rabkx249btty5df29",
     "lead_id": "79533290",
     "ts": "[telefone]T15:13:12-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1ptbd82a6xv8ehkn56kcwq7",
     "lead_id": "79533290",
     "ts": "[telefone]T15:19:31-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1px8qzyc29tqwq4sy20bdqg",
     "lead_id": "79533290",
     "ts": "[telefone]T16:10:29-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "humano",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m1px8qbw56yfw5aa31y105bg",
     "lead_id": "79533290",
     "ts": "[telefone]T16:10:29-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845355,
      "to": 104845499
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "79533290",
     "ts": "[telefone]T16:10:31-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "system",
     "action": "task_created",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T16:15:31-03:00",
      "completed": true,
      "responsible": "[pessoa]",
      "result": "Em andamento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qsarxrbqpqbcx08xphdfx6",
     "lead_id": "79533290",
     "ts": "[telefone]T10:36:38-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "tc[telefone]",
     "lead_id": "79533290",
     "ts": "[telefone]T10:36:49-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_completed",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "result": "Em andamento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qscea8vq0ajmvyn8z8a76y",
     "lead_id": "79533290",
     "ts": "[telefone]T10:37:33-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2qscvzrtc9rb5da8kp6akd6",
     "lead_id": "79533290",
     "ts": "[telefone]T10:37:47-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2qsd7pr25m67jsnfmh6tmac",
     "lead_id": "79533290",
     "ts": "[telefone]T10:37:59-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2qsenhjzvs4hqn4s93nsaj4",
     "lead_id": "79533290",
     "ts": "[telefone]T10:38:45-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qv9s6rr7qwmzed82tzwd8d",
     "lead_id": "79533290",
     "ts": "[telefone]T11:11:03-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2qva01gadtd1mkzrtp2610r",
     "lead_id": "79533290",
     "ts": "[telefone]T11:11:10-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2qvebtbznr1gebwrq5wfw7n",
     "lead_id": "79533290",
     "ts": "[telefone]T11:13:33-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qvh38b530xke2c6vze6pg7",
     "lead_id": "79533290",
     "ts": "[telefone]T11:15:02-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qvhgt1gzj7t0jrd9akbe27",
     "lead_id": "79533290",
     "ts": "[telefone]T11:15:16-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qvhwpn8jf0vt5v2yqaryn6",
     "lead_id": "79533290",
     "ts": "[telefone]T11:15:28-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qvkpzsq1ae8dcz6dwz3ycx",
     "lead_id": "79533290",
     "ts": "[telefone]T11:16:28-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3a1da8gp81kcq3h61p16enr",
     "lead_id": "79533290",
     "ts": "[telefone]T12:44:10-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a1dg404y9979zpqakt1w2j",
     "lead_id": "79533290",
     "ts": "[telefone]T12:44:16-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a1dk1rp7sqvjbyhkqhsyds",
     "lead_id": "79533290",
     "ts": "[telefone]T12:44:19-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a1rgps85s8v147nry6r016",
     "lead_id": "79533290",
     "ts": "[telefone]T12:50:17-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3a2511r4zcy7hj4k3zg2arf",
     "lead_id": "79533290",
     "ts": "[telefone]T12:57:07-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a255y0p4651afm29ve21rw",
     "lead_id": "79533290",
     "ts": "[telefone]T12:57:12-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a8q2dqzgkrkcz63jse9w61",
     "lead_id": "79533290",
     "ts": "[telefone]T14:51:49-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3ab2tj08hr0rdjgq1f8apb3",
     "lead_id": "79533290",
     "ts": "[telefone]T15:33:12-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3ab387g51w3hwwgn1ysrhp2",
     "lead_id": "79533290",
     "ts": "[telefone]T15:33:26-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3acbk9g52ad2eb2fg343er9",
     "lead_id": "79533290",
     "ts": "[telefone]T15:55:28-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3akq8wax1nz7asm60tqk69m",
     "lead_id": "79533290",
     "ts": "[telefone]T18:04:10-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3akqk0844b8sj6a67cb7h66",
     "lead_id": "79533290",
     "ts": "[telefone]T18:04:21-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3akqqwgk7hq8b4nvykc2n4e",
     "lead_id": "79533290",
     "ts": "[telefone]T18:04:26-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3akvnetjgwmtt833ydn08h9",
     "lead_id": "79533290",
     "ts": "[telefone]T18:06:34-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3akwjc2vs14f8hyabev5dx0",
     "lead_id": "79533290",
     "ts": "[telefone]T18:07:04-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3akwr1gkaas7y4h7009w2gb",
     "lead_id": "79533290",
     "ts": "[telefone]T18:07:10-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3am55bbbc3h4y39xtnjvzhk",
     "lead_id": "79533290",
     "ts": "[telefone]T18:11:45-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3am5fbsfhryzynkq1n8es3b",
     "lead_id": "79533290",
     "ts": "[telefone]T18:11:56-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "79533290",
     "ts": "[telefone]T18:45:37-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_created",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T23:59:00-03:00",
      "completed": true,
      "responsible": "[pessoa]",
      "result": "Em atendimento esperando a documentação"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "m-t[telefone]",
     "lead_id": "79533290",
     "ts": "[telefone]T18:45:37-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "meeting_done",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "confirmed": true,
      "doc_type": "tarefa"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3cr5amke1bw3r938xxmct4f",
     "lead_id": "79533290",
     "ts": "[telefone]T14:00:14-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "tc[telefone]",
     "lead_id": "79533290",
     "ts": "[telefone]T14:00:27-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_completed",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "result": "Em atendimento esperando a documentação"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3cr6mv6tq108179vxyj0vhr",
     "lead_id": "79533290",
     "ts": "[telefone]T14:00:57-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3crjvwg55d87qt5sk7pcybc",
     "lead_id": "79533290",
     "ts": "[telefone]T14:07:38-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3crkcfrw40k88bypadndvqd",
     "lead_id": "79533290",
     "ts": "[telefone]T14:07:55-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3crmvp8k797kaszbmjwxs6f",
     "lead_id": "79533290",
     "ts": "[telefone]T14:08:43-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3cs987xgsvey7n8cke0cvv5",
     "lead_id": "79533290",
     "ts": "[telefone]T14:19:51-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3csakqbd2y46h5hqsws4p2b",
     "lead_id": "79533290",
     "ts": "[telefone]T14:20:36-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3cv123zzq4e10jyj5b4axb6",
     "lead_id": "79533290",
     "ts": "[telefone]T14:50:20-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3ev8q305ctw1kzc663m5vwf",
     "lead_id": "79533290",
     "ts": "[telefone]T09:33:00-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3evqqj04qkdapa0pwkgcqz9",
     "lead_id": "79533290",
     "ts": "[telefone]T09:41:12-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3evr390v90qr50p3yney3ds",
     "lead_id": "79533290",
     "ts": "[telefone]T09:41:24-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3evwdygg1ct1g40tgav8pgh",
     "lead_id": "79533290",
     "ts": "[telefone]T09:43:46-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3evx4d8x85jnmcbamhb0tk7",
     "lead_id": "79533290",
     "ts": "[telefone]T09:44:09-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 898
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3m4e9thcg7zbxqfztjke0jn",
     "lead_id": "79533290",
     "ts": "[telefone]T10:49:32-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3ma4e1eaa4dawe7e0y95875",
     "lead_id": "79533290",
     "ts": "[telefone]T12:29:00-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3ma4v084ekzdnwbv4545021",
     "lead_id": "79533290",
     "ts": "[telefone]T12:29:13-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3ma68wykpbp2d05vzv2d34c",
     "lead_id": "79533290",
     "ts": "[telefone]T12:30:00-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3ma7aq72nhmd6mk4gmqys0x",
     "lead_id": "79533290",
     "ts": "[telefone]T12:30:35-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 898,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79533290",
     "ts": "[telefone]T14:41:16-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "30de8db9-c62c-446b-afe7-dd9124f60fe6",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    }
   ],
   "calls_analysis": [],
   "acertos": [
    "Resposta em 6 minutos à entrada e condução intensa no 1º dia; Negociação no mesmo dia.",
    "Reunião realizada e próximo passo registrado em tarefa com prazo (24/09)."
   ],
   "melhorias": [
    "Regra de cadência para Negociação: 13 dias sem ação humana após o lead parar de responder (04→17/09). O Playbook prevê retomadas em 1 h, 6 h, 24 h, 48 h, 4 d, 7 d — nenhuma ocorreu.",
    "Oferecer ligação no 1º dia (troca de 100+ mensagens por texto) e ao retomar em 17/09.",
    "Registrar nota da reunião de 24/09 (o que foi apresentado, objeções, documentos pedidos)."
   ],
   "evidencias": [
    "[link removido] · 04/09 11:06–12:38",
    "[link removido] · 04/09 15:19 → 17/09 10:36 (13 dias)",
    "[link removido] · 24/09 18:45 tarefa 'Reunião realizada'"
   ],
   "conduzir_melhor": [
    "Sugestão reescrita (05/09, D+1 sem resposta): 'Oi [nome], ontem conversamos bastante sobre a sua saída. Pra eu te dar um caminho concreto, posso te ligar hoje às 15h? São 10 minutos.'",
    "Sugestão reescrita (26/09, sábado, resposta rápida): 'Recebi! Segunda de manhã eu confiro tudo e te retorno até as 11h.'"
   ],
   "proxima_acao": "Não executar: conferir os documentos enviados em 26/09, responder ponto a ponto e agendar ligação para assinatura; tarefa com data.",
   "limitacoes": [
    "Sem texto; canal da reunião de 24/09 não registrado (não há ligação nesse dia no CRM)."
   ],
   "confianca": "alta para tempos; baixa para conteúdo.",
   "observado_vs_sugerido": [],
   "nomes_citados": [
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]"
   ]
  },
  {
   "id": "79763954",
   "nome": "Caso 5",
   "url": "",
   "servico": "não informado no CRM",
   "origem": null,
   "criado_em": "[telefone]T12:04:21-03:00",
   "atendentes": [
    "Atendente 1",
    "Atendente 2"
   ],
   "responsavel_atual": "[pessoa]",
   "etapa_atual": "Ativação",
   "etapa_max": "Assinatura",
   "status": "won",
   "motivo_perda": null,
   "tags": [],
   "legacy": false,
   "motivo_selecao": "Avançado: ganho (Ativação; maior etapa Assinatura), criado na janela de 15 d, condução por texto com 1 ligação",
   "contexto_robo": "sem notas de sincronização do robô",
   "transfer": {
    "ts": "[telefone]T12:04:21-03:00",
    "confidence": "inferido",
    "rule": "lead criado sem atuação do robô; atendimento humano desde a criação (marco = criação do lead)"
   },
   "indicadores": {
    "h_transf_primeira_tentativa": {
     "valor": 0.01,
     "definicao": "horas corridas da transferência até 1ª ação humana dirigida ao lead (mensagem ou tentativa de ligação)",
     "base": "transferência inferido",
     "cobertura": "completa"
    },
    "h_transf_primeira_mensagem": {
     "valor": 0.01,
     "definicao": "horas até 1ª mensagem humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_transf_primeira_ligacao": {
     "valor": "NA",
     "definicao": "horas até 1ª tentativa de ligação de saída",
     "base": "notas/eventos de chamada",
     "cobertura": "não ocorreu"
    },
    "h_transf_primeira_conversa": {
     "valor": 0.27,
     "definicao": "horas até 1ª conversa efetiva (resposta do lead a humano ou ligação atendida)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "episodios_espera": {
     "valor": 12,
     "definicao": "grupos de mensagens do lead que exigiam retorno",
     "base": "mensagens anotadas requires_reply",
     "cobertura": "completa"
    },
    "mediana_resposta_h": {
     "valor": 0.02,
     "definicao": "mediana do tempo corrido última msg do lead → 1ª ação humana, só episódios concluídos",
     "base": "12 episódios concluídos",
     "cobertura": "completa"
    },
    "maior_espera_concluida_h": {
     "valor": 311.56,
     "definicao": "maior espera concluída",
     "base": "12 episódios",
     "cobertura": "completa"
    },
    "espera_aberta_h": {
     "valor": "NA",
     "definicao": "tempo acumulado até o corte da pendência aberta (não somado às medianas)",
     "base": "episódio aberto",
     "cobertura": "completa"
    },
    "msgs_humanas": {
     "valor": 24,
     "definicao": "mensagens enviadas por humano (fragmentos contados individualmente)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_lead": {
     "valor": 23,
     "definicao": "mensagens recebidas do lead",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_robo": {
     "valor": 0,
     "definicao": "mensagens do robô (contexto)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "abordagens_followup": {
     "valor": 1,
     "definicao": "ações humanas de saída após ≥4 h sem resposta do lead; fragmentos ≤10 min = 1",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tentativas_ligacao_saida": {
     "valor": 0,
     "definicao": "ligações de saída por humano (atendidas ou não), deduplicadas",
     "base": "notas de chamada + API4com",
     "cobertura": "completa"
    },
    "ligacoes_saida_atendidas": {
     "valor": 0,
     "definicao": "ligações de saída com duração > 0 (atendida ≠ conversa comercial)",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "chamadas_entrada": {
     "valor": 0,
     "definicao": "ligações recebidas",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "dias_com_atuacao_humana": {
     "valor": 2,
     "definicao": "dias distintos com ação humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_criadas": {
     "valor": 0,
     "definicao": "tarefas criadas",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_concluidas": {
     "valor": 0,
     "definicao": "tarefas concluídas (não prova ligação)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_vencidas": {
     "valor": 0,
     "definicao": "tarefas com prazo anterior ao corte sem conclusão",
     "base": "eventos",
     "cobertura": "não aplicável"
    },
    "h_ate_agendamento": {
     "valor": "NA",
     "definicao": "horas transferência → reunião agendada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_reuniao_realizada": {
     "valor": 3.68,
     "definicao": "horas transferência → reunião realizada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_envio_documento": {
     "valor": 4.25,
     "definicao": "horas transferência → 1º documento enviado",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_assinatura_confirmada": {
     "valor": "NA",
     "definicao": "horas transferência → assinatura comprovada",
     "base": "marcos",
     "cobertura": "completa"
    }
   },
   "episodios": [
    {
     "start": "[telefone]T12:20:26-03:00",
     "last_lead_msg": "[telefone]T12:20:28-03:00",
     "msgs": [
      "01m2jtfcmgkpsyranmjdz4fh9k",
      "01m2jtfek055a8gsynhb5tem6r"
     ],
     "refs": [
      "[link removido] · [telefone]T12:20:26-03:00 · evento 01m2jtfcmgkpsyranmjdz4fh9k",
      "[link removido] · [telefone]T12:20:28-03:00 · evento 01m2jtfek055a8gsynhb5tem6r"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T12:36:48-03:00",
     "answer_ref": "[link removido] · [telefone]T12:36:48-03:00 · evento 01m2jvdcb781j6vfevrj4sebmn",
     "answer_action": "message",
     "wait_seconds": 980.0,
     "open": false
    },
    {
     "start": "[telefone]T12:38:20-03:00",
     "last_lead_msg": "[telefone]T12:38:20-03:00",
     "msgs": [
      "01m2jvg5f032tn0nk5jear6m5q"
     ],
     "refs": [
      "[link removido] · [telefone]T12:38:20-03:00 · evento 01m2jvg5f032tn0nk5jear6m5q"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T12:39:06-03:00",
     "answer_ref": "[link removido] · [telefone]T12:39:06-03:00 · evento 01m2jvhjt0d1mavx0haec8w65z",
     "answer_action": "message",
     "wait_seconds": 46.0,
     "open": false
    },
    {
     "start": "[telefone]T15:33:01-03:00",
     "last_lead_msg": "[telefone]T15:33:27-03:00",
     "msgs": [
      "01m2k5g0t828736mcbgvv1mm84",
      "01m2k5gt6rehenmxt194zdqwxh"
     ],
     "refs": [
      "[link removido] · [telefone]T15:33:01-03:00 · evento 01m2k5g0t828736mcbgvv1mm84",
      "[link removido] · [telefone]T15:33:27-03:00 · evento 01m2k5gt6rehenmxt194zdqwxh"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:37:04-03:00",
     "answer_ref": "[link removido] · [telefone]T15:37:04-03:00 · evento 01m2k5qexnh36epdmfdz8fenb8",
     "answer_action": "message",
     "wait_seconds": 217.0,
     "open": false
    },
    {
     "start": "[telefone]T15:42:26-03:00",
     "last_lead_msg": "[telefone]T15:42:57-03:00",
     "msgs": [
      "01m2k618jgzepnt2vcxnxtk1cm",
      "01m2k626v865n9q5d13rfj9e7b"
     ],
     "refs": [
      "[link removido] · [telefone]T15:42:26-03:00 · evento 01m2k618jgzepnt2vcxnxtk1cm",
      "[link removido] · [telefone]T15:42:57-03:00 · evento 01m2k626v865n9q5d13rfj9e7b"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:43:43-03:00",
     "answer_ref": "[link removido] · [telefone]T15:43:43-03:00 · evento 01m2k63m6g71trvthkqg1xh6td",
     "answer_action": "message",
     "wait_seconds": 46.0,
     "open": false
    },
    {
     "start": "[telefone]T16:14:37-03:00",
     "last_lead_msg": "[telefone]T16:14:38-03:00",
     "msgs": [
      "01m2k7w6a8888vk5pakr1vfrsy",
      "01m2k7w79gs9tj0z8yvffsa617"
     ],
     "refs": [
      "[link removido] · [telefone]T16:14:37-03:00 · evento 01m2k7w6a8888vk5pakr1vfrsy",
      "[link removido] · [telefone]T16:14:38-03:00 · evento 01m2k7w79gs9tj0z8yvffsa617"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T16:14:53-03:00",
     "answer_ref": "[link removido] · [telefone]T16:14:53-03:00 · evento 01m2k7wnzd0h771s09hmfgwwym",
     "answer_action": "message",
     "wait_seconds": 15.0,
     "open": false
    },
    {
     "start": "[telefone]T16:15:07-03:00",
     "last_lead_msg": "[telefone]T16:15:52-03:00",
     "msgs": [
      "01m2k7x3krvv6yamkvsj5wwczb",
      "01m2k7x8g0csr2wpjm3h63xjfb",
      "01m2k7yfj04mnw9zn5m9cbpppf"
     ],
     "refs": [
      "[link removido] · [telefone]T16:15:07-03:00 · evento 01m2k7x3krvv6yamkvsj5wwczb",
      "[link removido] · [telefone]T16:15:12-03:00 · evento 01m2k7x8g0csr2wpjm3h63xjfb",
      "[link removido] · [telefone]T16:15:52-03:00 · evento 01m2k7yfj04mnw9zn5m9cbpppf"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T16:15:55-03:00",
     "answer_ref": "[link removido] · [telefone]T16:15:55-03:00 · evento 01m2k7yjkhz87q17sx1ntpr3yc",
     "answer_action": "message",
     "wait_seconds": 3.0,
     "open": false
    },
    {
     "start": "[telefone]T16:16:39-03:00",
     "last_lead_msg": "[telefone]T16:16:52-03:00",
     "msgs": [
      "01m2k7zxer8gnrt2brkcps4drq",
      "01m2k80a50mt6ak9h4x9h1p0aw"
     ],
     "refs": [
      "[link removido] · [telefone]T16:16:39-03:00 · evento 01m2k7zxer8gnrt2brkcps4drq",
      "[link removido] · [telefone]T16:16:52-03:00 · evento 01m2k80a50mt6ak9h4x9h1p0aw"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T16:17:07-03:00",
     "answer_ref": "[link removido] · [telefone]T16:17:07-03:00 · evento 01m2k80smyncvffv281rhzfata",
     "answer_action": "message",
     "wait_seconds": 15.0,
     "open": false
    },
    {
     "start": "[telefone]T16:20:15-03:00",
     "last_lead_msg": "[telefone]T16:21:02-03:00",
     "msgs": [
      "01m2k86gcr26kz2fdq1a1hyjb9",
      "01m2k877trq0ax72kr3kck55d3",
      "01m2k87y9gbraybmwmm0eprnsr"
     ],
     "refs": [
      "[link removido] · [telefone]T16:20:15-03:00 · evento 01m2k86gcr26kz2fdq1a1hyjb9",
      "[link removido] · [telefone]T16:20:39-03:00 · evento 01m2k877trq0ax72kr3kck55d3",
      "[link removido] · [telefone]T16:21:02-03:00 · evento 01m2k87y9gbraybmwmm0eprnsr"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T16:21:28-03:00",
     "answer_ref": "[link removido] · [telefone]T16:21:28-03:00 · evento 01m2k88rjkc8bn0czhcr2j0w2x",
     "answer_action": "message",
     "wait_seconds": 26.0,
     "open": false
    },
    {
     "start": "[telefone]T16:22:42-03:00",
     "last_lead_msg": "[telefone]T16:22:42-03:00",
     "msgs": [
      "01m2k8azygmkr4vpyjr59a3p5x"
     ],
     "refs": [
      "[link removido] · [telefone]T16:22:42-03:00 · evento 01m2k8azygmkr4vpyjr59a3p5x"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T16:45:33-03:00",
     "answer_ref": "[link removido] · [telefone]T16:45:33-03:00 · evento 01m2k9mvh9n28b0hwz7dpssk3w",
     "answer_action": "message",
     "wait_seconds": 1371.0,
     "open": false
    },
    {
     "start": "[telefone]T17:24:41-03:00",
     "last_lead_msg": "[telefone]T17:24:44-03:00",
     "msgs": [
      "01m2kbwfs8cc4g8ca3emh8app3",
      "01m2kbwjq0cyhfjbevxy6y2vzb"
     ],
     "refs": [
      "[link removido] · [telefone]T17:24:41-03:00 · evento 01m2kbwfs8cc4g8ca3emh8app3",
      "[link removido] · [telefone]T17:24:44-03:00 · evento 01m2kbwjq0cyhfjbevxy6y2vzb"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T16:58:25-03:00",
     "answer_ref": "[link removido] · [telefone]T16:58:25-03:00 · evento 01m3mshqsnmrtvf53mqmep0pjj",
     "answer_action": "message",
     "wait_seconds": 1121621.0,
     "open": false
    },
    {
     "start": "[telefone]T16:59:32-03:00",
     "last_lead_msg": "[telefone]T16:59:35-03:00",
     "msgs": [
      "01m3msks50md5214hvtwq6p50t",
      "01m3mskw2r8zcabvvcqztbrm50"
     ],
     "refs": [
      "[link removido] · [telefone]T16:59:32-03:00 · evento 01m3msks50md5214hvtwq6p50t",
      "[link removido] · [telefone]T16:59:35-03:00 · evento 01m3mskw2r8zcabvvcqztbrm50"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T17:01:32-03:00",
     "answer_ref": "[link removido] · [telefone]T17:01:32-03:00 · evento 01m3msqebnw2ape41v55t59wak",
     "answer_action": "message",
     "wait_seconds": 117.0,
     "open": false
    },
    {
     "start": "[telefone]T17:06:44-03:00",
     "last_lead_msg": "[telefone]T17:06:44-03:00",
     "msgs": [
      "01m3mt0z10rw34tx5wk01jr0rq"
     ],
     "refs": [
      "[link removido] · [telefone]T17:06:44-03:00 · evento 01m3mt0z10rw34tx5wk01jr0rq"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T17:15:58-03:00",
     "answer_ref": "[link removido] · [telefone]T17:15:58-03:00 · evento 01m3mthwgv267vwy94rxaf7nby",
     "answer_action": "message",
     "wait_seconds": 554.0,
     "open": false
    }
   ],
   "followups": [
    {
     "ts": "[telefone]T16:58:25-03:00",
     "action": "message",
     "gap_hours": 311.56,
     "ref": "[removido]",
     "actor": "[pessoa]"
    }
   ],
   "chamadas": {
    "chamadas_localizadas": 2,
    "tentativas_saida": 0,
    "saida_atendidas": 0,
    "entrada": 0,
    "entrada_perdidas": 0,
    "duracao_total_s": 1714,
    "com_gravacao_link": 1,
    "gravacao_acessivel": 1,
    "transcritas": 1,
    "lista": [
     {
      "ts": "[telefone]T15:45:09-03:00",
      "direction": "out",
      "action": "call_answered",
      "actor": "Marketing Evolve (conta de integração/compartilhada)",
      "duration": 1714,
      "status": 4,
      "link": true,
      "recording_access": "acessivel",
      "id": "f6e3df23-afd6-4486-b771-0e00e045dcae",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T16:10:00-03:00",
      "direction": "out",
      "action": "proposal_presented",
      "actor": "Marketing Evolve (conta de integração/compartilhada)",
      "duration": null,
      "status": null,
      "link": false,
      "recording_access": null,
      "id": "m-prop-79763954",
      "ref": "[removido]"
     }
    ]
   },
   "marcos": {
    "meeting_offered": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_accepted": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_scheduled": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_confirmed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_done": {
     "ocorreu": true,
     "primeira": "[telefone]T15:45:09-03:00",
     "evidencias": [
      {
       "ref": "[removido]",
       "conteudo": "[removido]",
       "doc": "ligação",
       "confirmado": true
      }
     ]
    },
    "meeting_noshow": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_reschedule": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "proposal_presented": {
     "ocorreu": true,
     "primeira": "[telefone]T16:10:00-03:00",
     "evidencias": [
      {
       "ref": "[removido]",
       "conteudo": "[removido]",
       "doc": null,
       "confirmado": false
      }
     ]
    },
    "document_sent": {
     "ocorreu": true,
     "primeira": "[telefone]T16:19:37-03:00",
     "evidencias": [
      {
       "ref": "[removido]",
       "conteudo": "[removido]",
       "doc": "contrato",
       "confirmado": false
      }
     ]
    },
    "document_signed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "legal_handoff": {
     "ocorreu": true,
     "primeira": "[telefone]T17:37:07-03:00",
     "evidencias": [
      {
       "ref": "[removido]",
       "conteudo": "[removido]",
       "doc": null,
       "confirmado": false
      }
     ]
    },
    "contrato_enviado": true,
    "contrato_assinado_confirmado": false,
    "procuracao_enviado": false,
    "procuracao_assinado_confirmado": false
   },
   "status_espera": "encerrado",
   "ultimo_evento": "[telefone]T17:15:58-03:00",
   "rubrica": {
    "nota_normalizada": 75.0,
    "criterios_avaliados": 9,
    "cobertura": "9/10",
    "detalhe": {
     "c1": {
      "criterio": "Agilidade e continuidade da resposta",
      "nota": 3,
      "justificativa": "Contato humano 1 min após a criação; respostas em minutos ao longo de 15/09; contratação no mesmo dia. Após a ativação, 2 mensagens do lead (15/09 17:24) e mais 3 até 17/09 sem retorno humano por 13 dias (pós-venda).",
      "evidencias": [
       "[link removido] · 15/09 12:04–12:39",
       "[link removido] · 15/09 17:24 → 28/09 16:58"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c2": {
      "criterio": "Retomada do contexto e personalização",
      "nota": "DI",
      "justificativa": "Sem texto; ligação só via resumo automático (transcrição local pendente no corte).",
      "evidencias": [],
      "categoria_causa": null
     },
     "c3": {
      "criterio": "Investigação da necessidade e uso pertinente do SPIN",
      "nota": 3,
      "justificativa": "Resumo automático da ligação de 28 min: período trabalhado, função, filiais, câmaras frias, horas extras em fins de semana, riscos — investigação rica; o próprio resumo sugere evitar repetição de perguntas.",
      "evidencias": [
       "[link removido] · 15/09 16:14 nota (resumo automático)"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c4": {
      "criterio": "Qualificação adequada ao serviço",
      "nota": 3,
      "justificativa": "Foco em insalubridade e horas extras; pede documentos de suporte. Lead saiu em ago/2023 — prescrição de 2 anos vencida em ago/2025 salvo particularidades: ponto a validar pelo responsável técnico (não avaliado aqui).",
      "evidencias": [
       "[link removido] · 15/09 16:14 nota (resumo automático)"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c5": {
      "criterio": "Iniciativa e pertinência das ligações",
      "nota": 4,
      "justificativa": "Ligação de 28 min 3,7 h após a criação, no meio da conversa por texto, seguida de avanço para Assinatura em 5 min.",
      "evidencias": [
       "[link removido] · 15/09 15:45 ligação 1714 s (registrada na conta de integração)"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c6": {
      "criterio": "Clareza da apresentação de valor e do processo",
      "nota": 3,
      "justificativa": "Processo explicado com prazo (elaboração em 10 dias úteis) segundo o resumo automático.",
      "evidencias": [
       "[link removido] · 15/09 16:14 nota"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c7": {
      "criterio": "Tratamento das dúvidas e objeções",
      "nota": 3,
      "justificativa": "Dúvidas sobre documentação tratadas (resumo automático).",
      "evidencias": [
       "[link removido] · 15/09 16:14 nota"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c8": {
      "criterio": "Condução para reunião ou próximo passo concreto",
      "nota": 4,
      "justificativa": "Assinatura e ativação no mesmo dia (etapas 16:19 e 17:37; nota 'Cliente ativado').",
      "evidencias": [
       "[link removido] · 15/09 16:19 → 17:37"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c9": {
      "criterio": "Follow-up, confirmação e acompanhamento até assinatura",
      "nota": 2,
      "justificativa": "Contratação concluída, mas 5 mensagens do lead pós-ativação (15–17/09) ficaram 13 dias sem retorno humano.",
      "evidencias": [
       "[link removido] · 15/09 18:29–17/09 08:53",
       "[link removido] · 28/09 16:58"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c10": {
      "criterio": "Organização e registros no CRM",
      "nota": 2,
      "justificativa": "Ligação registrada no usuário 'Marketing Evolve' (ramal não mapeado); serviço e origem não preenchidos; sem notas humanas; sem tarefas.",
      "evidencias": [
       "[link removido] · 15/09 15:45 nota de chamada created_by 10348307"
      ],
      "categoria_causa": "integração"
     }
    }
   },
   "timeline": [
    {
     "id": "01m2jshy88s2hedkj40nxvk5aw",
     "lead_id": "79763954",
     "ts": "[telefone]T12:04:21-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "transfer-79763954",
     "lead_id": "79763954",
     "ts": "[telefone]T12:04:21-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "transfer",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2jsk94d443djzn0mxv4kv1w",
     "lead_id": "79763954",
     "ts": "[telefone]T12:05:04-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2jtfcmgkpsyranmjdz4fh9k",
     "lead_id": "79763954",
     "ts": "[telefone]T12:20:26-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2jtfek055a8gsynhb5tem6r",
     "lead_id": "79763954",
     "ts": "[telefone]T12:20:28-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2jvdcb781j6vfevrj4sebmn",
     "lead_id": "79763954",
     "ts": "[telefone]T12:36:48-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2jvejn8m7ge72nj3kwkk3nw",
     "lead_id": "79763954",
     "ts": "[telefone]T12:37:27-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2jvg5f032tn0nk5jear6m5q",
     "lead_id": "79763954",
     "ts": "[telefone]T12:38:20-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2jvhjt0d1mavx0haec8w65z",
     "lead_id": "79763954",
     "ts": "[telefone]T12:39:06-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2jyd5es820q8j9xjy88rneq",
     "lead_id": "79763954",
     "ts": "[telefone]T13:29:07-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845355,
      "to": 104845359
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k4hjv6yqf1rtj0tvmjved1",
     "lead_id": "79763954",
     "ts": "[telefone]T15:16:23-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k4hz0sb236yrfsjv6ztrjv",
     "lead_id": "79763954",
     "ts": "[telefone]T15:16:36-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k5g0t828736mcbgvv1mm84",
     "lead_id": "79763954",
     "ts": "[telefone]T15:33:01-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k5gt6rehenmxt194zdqwxh",
     "lead_id": "79763954",
     "ts": "[telefone]T15:33:27-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k5qexnh36epdmfdz8fenb8",
     "lead_id": "79763954",
     "ts": "[telefone]T15:37:04-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k618jgzepnt2vcxnxtk1cm",
     "lead_id": "79763954",
     "ts": "[telefone]T15:42:26-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k626v865n9q5d13rfj9e7b",
     "lead_id": "79763954",
     "ts": "[telefone]T15:42:57-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k63m6g71trvthkqg1xh6td",
     "lead_id": "79763954",
     "ts": "[telefone]T15:43:43-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k640pk3c3hma8sa8171a2r",
     "lead_id": "79763954",
     "ts": "[telefone]T15:43:56-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "m-n[telefone]",
     "lead_id": "79763954",
     "ts": "[telefone]T15:45:09-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "undetermined",
     "action": "meeting_done",
     "actor_id": "10348307",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "confirmed": true,
      "doc_type": "ligação"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79763954",
     "ts": "[telefone]T15:45:09-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "undetermined",
     "action": "call_answered",
     "actor_id": "10348307",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 1714,
      "link": "[removido]",
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "f6e3df23-afd6-4486-b771-0e00e045dcae",
      "call_status": 4,
      "call_result": "[removido]",
      "recording_access": "acessivel",
      "transcript": "[removido]",
      "transcript_segments": [
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]"
      ]
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "m-prop-79763954",
     "lead_id": "79763954",
     "ts": "[telefone]T16:10:00-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "undetermined",
     "action": "proposal_presented",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "min",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "confirmed": false,
      "fonte": "resumo automático"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k7w21kecxssv32k40vsmc7",
     "lead_id": "79763954",
     "ts": "[telefone]T16:14:32-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k7w6a8888vk5pakr1vfrsy",
     "lead_id": "79763954",
     "ts": "[telefone]T16:14:37-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k7w79gs9tj0z8yvffsa617",
     "lead_id": "79763954",
     "ts": "[telefone]T16:14:38-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79763954",
     "ts": "[telefone]T16:14:43-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79763954",
     "ts": "[telefone]T16:14:43-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "resumo_automatico"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k7wnzd0h771s09hmfgwwym",
     "lead_id": "79763954",
     "ts": "[telefone]T16:14:53-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k7x3krvv6yamkvsj5wwczb",
     "lead_id": "79763954",
     "ts": "[telefone]T16:15:07-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k7x8g0csr2wpjm3h63xjfb",
     "lead_id": "79763954",
     "ts": "[telefone]T16:15:12-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k7yfj04mnw9zn5m9cbpppf",
     "lead_id": "79763954",
     "ts": "[telefone]T16:15:52-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k7yjkhz87q17sx1ntpr3yc",
     "lead_id": "79763954",
     "ts": "[telefone]T16:15:55-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k7zxer8gnrt2brkcps4drq",
     "lead_id": "79763954",
     "ts": "[telefone]T16:16:39-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k80a50mt6ak9h4x9h1p0aw",
     "lead_id": "79763954",
     "ts": "[telefone]T16:16:52-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k80smyncvffv281rhzfata",
     "lead_id": "79763954",
     "ts": "[telefone]T16:17:07-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k81p6f8jkckj1v2s0269y8",
     "lead_id": "79763954",
     "ts": "[telefone]T16:17:37-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k832m0sbt4nta6pkabn5a4",
     "lead_id": "79763954",
     "ts": "[telefone]T16:18:22-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k85c104yrxs0k1cjg3v3j2",
     "lead_id": "79763954",
     "ts": "[telefone]T16:19:37-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845359,
      "to": 104845503
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "m-01m2k85c104yrxs0k1cjg3v3j2",
     "lead_id": "79763954",
     "ts": "[telefone]T16:19:37-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "document_sent",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "doc_type": "contrato",
      "confirmed": false,
      "inferido": true
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k86gcr26kz2fdq1a1hyjb9",
     "lead_id": "79763954",
     "ts": "[telefone]T16:20:15-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k877trq0ax72kr3kck55d3",
     "lead_id": "79763954",
     "ts": "[telefone]T16:20:39-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k87y9gbraybmwmm0eprnsr",
     "lead_id": "79763954",
     "ts": "[telefone]T16:21:02-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k88rjkc8bn0czhcr2j0w2x",
     "lead_id": "79763954",
     "ts": "[telefone]T16:21:28-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k89fcpg73zhhyzhtyvq9fk",
     "lead_id": "79763954",
     "ts": "[telefone]T16:21:52-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k8azygmkr4vpyjr59a3p5x",
     "lead_id": "79763954",
     "ts": "[telefone]T16:22:42-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2k9mvh9n28b0hwz7dpssk3w",
     "lead_id": "79763954",
     "ts": "[telefone]T16:45:33-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k9nhes47n18m2s2156304h",
     "lead_id": "79763954",
     "ts": "[telefone]T16:45:56-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k9qkm0gcehqpaff1w92npk",
     "lead_id": "79763954",
     "ts": "[telefone]T16:47:03-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2k9rrhhnwt3q6pe20ppj10q",
     "lead_id": "79763954",
     "ts": "[telefone]T16:47:41-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2kbwfs8cc4g8ca3emh8app3",
     "lead_id": "79763954",
     "ts": "[telefone]T17:24:41-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2kbwjq0cyhfjbevxy6y2vzb",
     "lead_id": "79763954",
     "ts": "[telefone]T17:24:44-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2kck8d3wa6qppwwv9sc9wy2",
     "lead_id": "79763954",
     "ts": "[telefone]T17:37:07-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845503,
      "to": 142
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "m-01m2kck8d3wa6qppwwv9sc9wy2",
     "lead_id": "79763954",
     "ts": "[telefone]T17:37:07-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "legal_handoff",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "confirmed": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79763954",
     "ts": "[telefone]T17:37:11-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79763954",
     "ts": "[telefone]T17:37:11-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3mshqsnmrtvf53mqmep0pjj",
     "lead_id": "79763954",
     "ts": "[telefone]T16:58:25-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3msks50md5214hvtwq6p50t",
     "lead_id": "79763954",
     "ts": "[telefone]T16:59:32-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3mskw2r8zcabvvcqztbrm50",
     "lead_id": "79763954",
     "ts": "[telefone]T16:59:35-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3msqebnw2ape41v55t59wak",
     "lead_id": "79763954",
     "ts": "[telefone]T17:01:32-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3mt0z10rw34tx5wk01jr0rq",
     "lead_id": "79763954",
     "ts": "[telefone]T17:06:44-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 995
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3mthwgv267vwy94rxaf7nby",
     "lead_id": "79763954",
     "ts": "[telefone]T17:15:58-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 995,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    }
   ],
   "calls_analysis": [
    {
     "call_id": "f6e3df23-afd6-4486-b771-0e00e045dcae (15/09 15:45, 1714 s) — registrada na conta de integração",
     "transcript_source": "transcrição local (faster-whisper small; qualidade baixa nos primeiros minutos) + resumo automático do CRM (nota 15/09 16:14)",
     "resumo": "28 min. Abertura conecta ao caso de um colega já atendido pelo escritório (indicação). Investigação longa: entrada em 2016, conferente de inventário desde 2018, câmaras frias/congelados, sem adicional de insalubridade, provas (fotos, testemunhas), filiais, jornada, alteração de cargo com documento assinado. Aos 23:53 explica o processo ('entrevista → base do processo'), lista as teses (insalubridade, dano moral por trabalho em altura) e é transparente sobre prescrição das horas extras. Encerra falando de valor estimado a buscar.",
     "trechos": [
      {
       "timestamp": "00:18–00:46",
       "trecho": "[removido]",
       "interpretacao": "Retomada de contexto por indicação: usa o caso do colega para gerar confiança. Cuidado: 'em breve já está recebendo' é promessa sobre caso de terceiro — evitar.",
       "alternativa": "Sugestão reescrita: 'Seu colega [pessoa] está com o caso conosco e o processo segue bem. Cada caso tem seu tempo, mas vamos usar a mesma base para o seu.'"
      },
      {
       "timestamp": "02:54–03:26",
       "trecho": "[removido]",
       "interpretacao": "Trata a objeção 'não tenho prova' proativamente (roteiro 05B parte 3) e amplia para testemunhas.",
       "alternativa": "(manter)"
      },
      {
       "timestamp": "06:04–06:40",
       "trecho": "[removido]",
       "interpretacao": "Pergunta de problema bem feita: revela trabalho em fins de semana sem registro e pago por fora — fato central para o pedido.",
       "alternativa": "(manter)"
      },
      {
       "timestamp": "10:25–12:23",
       "trecho": "[removido]",
       "interpretacao": "Reformula quando o lead não entende (boa escuta). O trecho sobre o que dizer no processo toca em orientação de depoimento: ponto para o responsável técnico validar a forma de explicar (não é avaliação jurídica desta auditoria).",
       "alternativa": "Sugestão: 'Preciso entender exatamente como era, porque o cálculo do processo parte do que de fato acontecia.'"
      },
      {
       "timestamp": "23:53–24:17",
       "trecho": "[removido]",
       "interpretacao": "Explicação clara do processo, mas só aos 24 min; o lead ficou 20 min sem saber para onde a conversa ia.",
       "alternativa": "Sugestão: apresentar o mapa da conversa na abertura ('vou te fazer perguntas por uns 10 minutos, depois te explico o que dá para pedir e como funciona')."
      },
      {
       "timestamp": "25:00–25:17",
       "trecho": "[removido]",
       "interpretacao": "Transparência sobre prescrição e compromisso de confirmar — boa prática. (Saída em ago/2023: o prazo de 2 anos é ponto técnico a validar pelo responsável.)",
       "alternativa": "(manter) Registrar a dúvida técnica em nota para o jurídico."
      }
     ],
     "limites": "Transcrição automática com muitos trechos de baixa confiança; nomes incertos; tom não avaliado. Ligação atribuída ao usuário 'Marketing Evolve' — pelo contexto, atendente [pessoa]."
    }
   ],
   "acertos": [
    "Jornada completa em 5 h 33 min: contato humano imediato, ligação longa no momento certo, assinatura e ativação no mesmo dia.",
    "Dupla de atendentes alternando sem deixar o lead esperar durante a negociação."
   ],
   "melhorias": [
    "Pós-venda: responder às mensagens do cliente ativado (5 mensagens em 3 dias sem retorno) ou definir quem responde após a ativação.",
    "Preencher serviço/origem e registrar nota da ligação (o resumo automático existe, mas não substitui a decisão humana)."
   ],
   "evidencias": [
    "[link removido] · 15/09 12:04 criação; 12:05 1ª mensagem humana",
    "[link removido] · 15/09 15:45 ligação 1714 s",
    "[link removido] · 15/09 17:37 Ativação",
    "[link removido] · 15/09 17:24–17/09 08:53 mensagens do lead sem retorno"
   ],
   "conduzir_melhor": [
    "Sugestão reescrita (pós-ativação): '[pessoa], bem-vindo! A partir de agora quem cuida do seu caso é [nome]. Recebi suas mensagens de ontem; nos próximos dias te enviamos a lista de documentos. Qualquer dúvida, é aqui mesmo.'"
   ],
   "proxima_acao": "Não executar: definir responsável pelo pós-ativação e responder às mensagens pendentes do cliente.",
   "limitacoes": [
    "Sem texto; ligação avaliada por resumo automático.",
    "Aderência da contratação a prazos prescricionais é ponto técnico, fora desta auditoria."
   ],
   "confianca": "alta para linha do tempo; média para condução.",
   "observado_vs_sugerido": [],
   "nomes_citados": [
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]"
   ]
  },
  {
   "id": "79877820",
   "nome": "Caso 6",
   "url": "",
   "servico": "[TRABALHISTA] Reconhecimento de vínculo",
   "origem": "Mídia Paga / [Mídia] Meta Ads / metaads",
   "criado_em": "[telefone]T12:21:49-03:00",
   "atendentes": [
    "Atendente 1"
   ],
   "responsavel_atual": "[pessoa]",
   "etapa_atual": "atendimento humano",
   "etapa_max": "atendimento humano",
   "status": "open",
   "motivo_perda": null,
   "tags": [
    "trabalhista - reconhecimento",
    "humano",
    "⭐️"
   ],
   "legacy": false,
   "motivo_selecao": "Avançado: etapa 'atendimento humano', criado na janela de 15 d, 6 ligações com gravação e resumo automático",
   "contexto_robo": "Pré triagem de Reconhecimento de Vínculo feita ✅ · formulário/qualificação: [TR] Qual situação mais se aproxima da sua?: Trabalhei sem carteira assinada (informal, CLT sonegado); [TR] Qual é a sua situação hoje?: Ainda estou trabalhando lá; [TR] Quais direitos você deixou de receber?: Férias, 13º salário e/ou FGTS nunca depositado; [TR] Você tem alguma prova da sua situação de trabalho?: Sim — mensagens, fotos, escalas, contracheques ou testemunhas; [TR] Quem está preenchendo este formulário?: Sou o próprio trabalhador; Score: 16; Status de Qualificação: Qualificado; [T] Vínculo: Trabalho sem carteira assinada; [T] Situação: Trabalha na empresa; [T] Irregularidades: Férias, 13º salário e/ou FGTS nunca depositado; [T] Tem Provas: Sim",
   "transfer": {
    "ts": "[telefone]T12:21:49-03:00",
    "confidence": "confirmado",
    "rule": "tag 'humano' adicionada no momento da criação (roteamento direto para humano)"
   },
   "indicadores": {
    "h_transf_primeira_tentativa": {
     "valor": 0.18,
     "definicao": "horas corridas da transferência até 1ª ação humana dirigida ao lead (mensagem ou tentativa de ligação)",
     "base": "transferência confirmado",
     "cobertura": "completa"
    },
    "h_transf_primeira_mensagem": {
     "valor": 2.53,
     "definicao": "horas até 1ª mensagem humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_transf_primeira_ligacao": {
     "valor": 0.18,
     "definicao": "horas até 1ª tentativa de ligação de saída",
     "base": "notas/eventos de chamada",
     "cobertura": "completa"
    },
    "h_transf_primeira_conversa": {
     "valor": 0.18,
     "definicao": "horas até 1ª conversa efetiva (resposta do lead a humano ou ligação atendida)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "episodios_espera": {
     "valor": 1,
     "definicao": "grupos de mensagens do lead que exigiam retorno",
     "base": "mensagens anotadas requires_reply",
     "cobertura": "completa"
    },
    "mediana_resposta_h": {
     "valor": 0.03,
     "definicao": "mediana do tempo corrido última msg do lead → 1ª ação humana, só episódios concluídos",
     "base": "1 episódios concluídos",
     "cobertura": "completa"
    },
    "maior_espera_concluida_h": {
     "valor": 0.03,
     "definicao": "maior espera concluída",
     "base": "1 episódios",
     "cobertura": "completa"
    },
    "espera_aberta_h": {
     "valor": "NA",
     "definicao": "tempo acumulado até o corte da pendência aberta (não somado às medianas)",
     "base": "episódio aberto",
     "cobertura": "completa"
    },
    "msgs_humanas": {
     "valor": 6,
     "definicao": "mensagens enviadas por humano (fragmentos contados individualmente)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_lead": {
     "valor": 2,
     "definicao": "mensagens recebidas do lead",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_robo": {
     "valor": 2,
     "definicao": "mensagens do robô (contexto)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "abordagens_followup": {
     "valor": 3,
     "definicao": "ações humanas de saída após ≥4 h sem resposta do lead; fragmentos ≤10 min = 1",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tentativas_ligacao_saida": {
     "valor": 6,
     "definicao": "ligações de saída por humano (atendidas ou não), deduplicadas",
     "base": "notas de chamada + API4com",
     "cobertura": "completa"
    },
    "ligacoes_saida_atendidas": {
     "valor": 3,
     "definicao": "ligações de saída com duração > 0 (atendida ≠ conversa comercial)",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "chamadas_entrada": {
     "valor": 0,
     "definicao": "ligações recebidas",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "dias_com_atuacao_humana": {
     "valor": 4,
     "definicao": "dias distintos com ação humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_criadas": {
     "valor": 2,
     "definicao": "tarefas criadas",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_concluidas": {
     "valor": 1,
     "definicao": "tarefas concluídas (não prova ligação)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_vencidas": {
     "valor": 1,
     "definicao": "tarefas com prazo anterior ao corte sem conclusão",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_ate_agendamento": {
     "valor": "NA",
     "definicao": "horas transferência → reunião agendada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_reuniao_realizada": {
     "valor": 2.57,
     "definicao": "horas transferência → reunião realizada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_envio_documento": {
     "valor": "NA",
     "definicao": "horas transferência → 1º documento enviado",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_assinatura_confirmada": {
     "valor": "NA",
     "definicao": "horas transferência → assinatura comprovada",
     "base": "marcos",
     "cobertura": "completa"
    }
   },
   "episodios": [
    {
     "start": "[telefone]T14:54:00-03:00",
     "last_lead_msg": "[telefone]T14:54:05-03:00",
     "msgs": [
      "01m2r820p07971j18jzrky23m2",
      "01m2r825j8wjpy7q5k9gtn39aj"
     ],
     "refs": [
      "[link removido] · [telefone]T14:54:00-03:00 · evento 01m2r820p07971j18jzrky23m2",
      "[link removido] · [telefone]T14:54:05-03:00 · evento 01m2r825j8wjpy7q5k9gtn39aj"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T14:55:57-03:00",
     "answer_ref": "[link removido] · [telefone]T14:55:57-03:00 · nota [telefone]",
     "answer_action": "call_answered",
     "wait_seconds": 112.0,
     "open": false
    }
   ],
   "followups": [
    {
     "ts": "[telefone]T15:42:40-03:00",
     "action": "call_attempt",
     "gap_hours": 96.81,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T17:05:03-03:00",
     "action": "call_answered",
     "gap_hours": 122.18,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T10:34:07-03:00",
     "action": "call_attempt",
     "gap_hours": 187.67,
     "ref": "[removido]",
     "actor": "[pessoa]"
    }
   ],
   "chamadas": {
    "chamadas_localizadas": 6,
    "tentativas_saida": 6,
    "saida_atendidas": 3,
    "entrada": 0,
    "entrada_perdidas": 0,
    "duracao_total_s": 845,
    "com_gravacao_link": 3,
    "gravacao_acessivel": 3,
    "transcritas": 3,
    "lista": [
     {
      "ts": "[telefone]T12:32:26-03:00",
      "direction": "out",
      "action": "call_answered",
      "actor": "[pessoa]",
      "duration": 55,
      "status": 4,
      "link": true,
      "recording_access": "acessivel",
      "id": "d8e45993-ea64-4c84-8cef-319c3d056f6c",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T14:55:57-03:00",
      "direction": "out",
      "action": "call_answered",
      "actor": "[pessoa]",
      "duration": 775,
      "status": 4,
      "link": true,
      "recording_access": "acessivel",
      "id": "321880e0-5dc4-4f3e-a275-090d53e46acb",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T15:03:00-03:00",
      "direction": "out",
      "action": "proposal_presented",
      "actor": "[pessoa]",
      "duration": null,
      "status": null,
      "link": false,
      "recording_access": null,
      "id": "m-prop-79877820",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T15:42:40-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "6e01c8f6-7c0c-414b-a916-790e172b511d",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T17:05:03-03:00",
      "direction": "out",
      "action": "call_answered",
      "actor": "[pessoa]",
      "duration": 15,
      "status": 4,
      "link": true,
      "recording_access": "acessivel",
      "id": "ab386399-0ad4-44cb-96ab-4ae08288ddcc",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T10:34:07-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "42a86a70-a142-4bfe-be6f-6b0c61b77538",
      "ref": "[removido]"
     }
    ]
   },
   "marcos": {
    "meeting_offered": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_accepted": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_scheduled": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_confirmed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_done": {
     "ocorreu": true,
     "primeira": "[telefone]T14:55:57-03:00",
     "evidencias": [
      {
       "ref": "[removido]",
       "conteudo": "[removido]",
       "doc": "ligação",
       "confirmado": true
      }
     ]
    },
    "meeting_noshow": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_reschedule": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "proposal_presented": {
     "ocorreu": true,
     "primeira": "[telefone]T15:03:00-03:00",
     "evidencias": [
      {
       "ref": "[removido]",
       "conteudo": "[removido]",
       "doc": null,
       "confirmado": true
      }
     ]
    },
    "document_sent": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_signed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "legal_handoff": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "contrato_enviado": false,
    "contrato_assinado_confirmado": false,
    "procuracao_enviado": false,
    "procuracao_assinado_confirmado": false
   },
   "status_espera": "aguardando_lead",
   "ultimo_evento": "[telefone]T10:34:07-03:00",
   "rubrica": {
    "nota_normalizada": 75.0,
    "criterios_avaliados": 10,
    "cobertura": "10/10",
    "detalhe": {
     "c1": {
      "criterio": "Agilidade e continuidade da resposta",
      "nota": 4,
      "justificativa": "Tarefa 'Novo Lead' criada 12:24 e 1ª ligação às 12:32 (11 min após a criação/transferência); retomada no horário combinado (14:53 mensagem, 14:55 ligação de 13 min). Lead silencioso desde 17/09; equipe tentou em 21, 22 e 25/09.",
      "evidencias": [
       "[link removido] · 17/09 12:32 nota [telefone]",
       "[link removido] · 17/09 14:55 nota [telefone]"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c2": {
      "criterio": "Retomada do contexto e personalização",
      "nota": 3,
      "justificativa": "Abertura da ligação cita o contato anterior ('você entrou em contato... questão trabalhista') e testa a informação do formulário ('trabalhou sem a carteira assinada?'); a lead corrige (tinha carteira) e a atendente adapta. Não repete o formulário inteiro.",
      "evidencias": [
       "[link removido] · 17/09 14:55 transcrição local 00:13–00:28"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c3": {
      "criterio": "Investigação da necessidade e uso pertinente do SPIN",
      "nota": 3,
      "justificativa": "Situação e problema bem explorados na ligação de 775 s: tempo de casa, data da demissão, função, câmara fria/insalubridade, acidente, jornada, ponto, forma de pagamento. Implicação pouco explorada (não pergunta o impacto financeiro da falta das verbas); avaliação automática também aponta implicação 6/10.",
      "evidencias": [
       "[link removido] · 17/09 14:55 transcrição 00:28–07:07",
       "[link removido] · 17/09 15:09 nota [telefone] (resumo automático)"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c4": {
      "criterio": "Qualificação adequada ao serviço",
      "nota": 3,
      "justificativa": "Identifica verbas rescisórias não pagas, seguro-desemprego, insalubridade, acidente com laudo e possível dano moral; pede foto do laudo e documentos do acidente. Não confirma valores de salário nem checa prescrição (demissão jan/26, dentro do prazo).",
      "evidencias": [
       "[link removido] · 17/09 14:55 transcrição 10:20–12:32"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c5": {
      "criterio": "Iniciativa e pertinência das ligações",
      "nota": 4,
      "justificativa": "Ligação como 1ª ação (não mensagem), retorno no horário que a lead pediu, novas tentativas em 21/09, 22/09 (2 ligações atendidas de 15 s e 10 s com problema de áudio) e 25/09.",
      "evidencias": [
       "[link removido] · 17/09 12:32",
       "[link removido] · 21/09 15:42",
       "[link removido] · 22/09 17:05",
       "[link removido] · 25/09 10:34"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c6": {
      "criterio": "Clareza da apresentação de valor e do processo",
      "nota": 3,
      "justificativa": "Explica ação trabalhista, honorários de 30% só no êxito, processo online com audiência presencial e possibilidade de acordo. Trechos confusos na transcrição ('tem casos que não marca o dinheiro') — pode ser erro de transcrição; sem promessa de resultado. Condições de honorários ficam para validação do responsável técnico.",
      "evidencias": [
       "[link removido] · 17/09 14:55 transcrição 07:10–08:48"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c7": {
      "criterio": "Tratamento das dúvidas e objeções",
      "nota": 3,
      "justificativa": "Responde à indicação de um [pessoa] (explica como registrar a indicação) e às dúvidas sobre laudo/atestado, pedindo o documento em vez de prometer.",
      "evidencias": [
       "[link removido] · 17/09 14:55 transcrição 08:53–11:59"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c8": {
      "criterio": "Condução para reunião ou próximo passo concreto",
      "nota": 3,
      "justificativa": "Pergunta de fechamento clara ('podemos dar seguimento? ficou com alguma dúvida?') e próximo passo definido (enviar relação de dados para o contrato; lead envia fotos do laudo). Faltou prazo/hora combinada para o envio e para o retorno.",
      "evidencias": [
       "[link removido] · 17/09 14:55 transcrição 08:48–12:41",
       "[link removido] · 17/09 15:10 mensagem"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c9": {
      "criterio": "Follow-up, confirmação e acompanhamento até assinatura",
      "nota": 2,
      "justificativa": "Após enviar a relação (17/09 15:10) a 1ª cobrança veio em 21/09 15:42 (4 dias, com fim de semana). Depois cadência boa (22 e 25/09). Nenhuma confirmação de recebimento de documentos registrada.",
      "evidencias": [
       "[link removido] · 17/09 15:10",
       "[link removido] · 21/09 15:42–15:44"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c10": {
      "criterio": "Organização e registros no CRM",
      "nota": 2,
      "justificativa": "Ligações registradas com gravação (bom). Tarefa de 22/09 10:47 nunca concluída (vencida); etapa 'atendimento humano' só em 22/09; nenhuma nota humana resumindo a ligação (há resumo automático). Formulário dizia 'sem carteira' e o caso é 'com carteira' — campo não corrigido.",
      "evidencias": [
       "[link removido] · 22/09 10:42 tarefa",
       "[link removido] · 17/09 16:13–16:14 mudanças de etapa"
      ],
      "categoria_causa": "registro"
     }
    }
   },
   "timeline": [
    {
     "id": "01m2qzbbyyyaatvzptpzm2qe45",
     "lead_id": "79877820",
     "ts": "[telefone]T12:21:49-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "humano",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qzbbyy5gakwg45f4btva5b",
     "lead_id": "79877820",
     "ts": "[telefone]T12:21:49-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "trabalhista - reconhecimento",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qzbbyyf0xbzx5yfc33g33k",
     "lead_id": "79877820",
     "ts": "[telefone]T12:21:49-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qzbbp8e46c1tp4z4k025yj",
     "lead_id": "79877820",
     "ts": "[telefone]T12:21:49-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "transfer-79877820",
     "lead_id": "79877820",
     "ts": "[telefone]T12:21:49-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "transfer",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qzbd8zb7gy860ghq687gbp",
     "lead_id": "79877820",
     "ts": "[telefone]T12:21:50-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "⭐️",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qzbd7rb7amwvtdyz3mdabr",
     "lead_id": "79877820",
     "ts": "[telefone]T12:21:50-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "humano"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qzbd7rt1c6tt42xvj5rk3q",
     "lead_id": "79877820",
     "ts": "[telefone]T12:21:50-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qzbd4837nkm3f1x37eyjwz",
     "lead_id": "79877820",
     "ts": "[telefone]T12:21:50-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "responsible_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qzbdkb20whjwkdzp3670ss",
     "lead_id": "79877820",
     "ts": "[telefone]T12:21:50-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1019,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79877820",
     "ts": "[telefone]T12:21:50-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "sync_robo"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79877820",
     "ts": "[telefone]T12:21:50-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "sync_robo"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2qzf9spaf4cktbp3xbzye5m",
     "lead_id": "79877820",
     "ts": "[telefone]T12:23:58-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1019,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "79877820",
     "ts": "[telefone]T12:24:03-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "system",
     "action": "task_created",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T12:29:02-03:00",
      "completed": true,
      "responsible": "[pessoa]",
      "result": "Em atendimento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "tc[telefone]",
     "lead_id": "79877820",
     "ts": "[telefone]T12:32:08-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_completed",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "result": "Em atendimento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79877820",
     "ts": "[telefone]T12:32:26-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_answered",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 55,
      "link": "[removido]",
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "d8e45993-ea64-4c84-8cef-319c3d056f6c",
      "call_status": 4,
      "call_result": "[removido]",
      "recording_access": "acessivel",
      "transcript": "[removido]",
      "transcript_segments": [
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]"
      ]
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2r81ekjcr25jv2zsxcd89gp",
     "lead_id": "79877820",
     "ts": "[telefone]T14:53:41-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1019,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2r81r04fzxtfk9qrwjgs8v8",
     "lead_id": "79877820",
     "ts": "[telefone]T14:53:51-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1019,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2r820p07971j18jzrky23m2",
     "lead_id": "79877820",
     "ts": "[telefone]T14:54:00-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1019
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m2r825j8wjpy7q5k9gtn39aj",
     "lead_id": "79877820",
     "ts": "[telefone]T14:54:05-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1019
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "m-n[telefone]",
     "lead_id": "79877820",
     "ts": "[telefone]T14:55:57-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "meeting_done",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "confirmed": true,
      "doc_type": "ligação"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79877820",
     "ts": "[telefone]T14:55:57-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_answered",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 775,
      "link": "[removido]",
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "321880e0-5dc4-4f3e-a275-090d53e46acb",
      "call_status": 4,
      "call_result": "[removido]",
      "recording_access": "acessivel",
      "transcript": "[removido]",
      "transcript_segments": [
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]"
      ]
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "m-prop-79877820",
     "lead_id": "79877820",
     "ts": "[telefone]T15:03:00-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "proposal_presented",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "min",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "confirmed": true
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79877820",
     "ts": "[telefone]T15:09:32-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "resumo_automatico"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79877820",
     "ts": "[telefone]T15:09:33-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "resumo_automatico"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2r8zrbp9m9kmcdpgjdqsf1m",
     "lead_id": "79877820",
     "ts": "[telefone]T15:10:14-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1019,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2rcma865xxpt39skxqg57j8",
     "lead_id": "79877820",
     "ts": "[telefone]T16:13:53-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845351,
      "to": 104845355
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m2rcmgamnc311w18az7bvjmv",
     "lead_id": "79877820",
     "ts": "[telefone]T16:14:00-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845355,
      "to": 104845359
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79877820",
     "ts": "[telefone]T15:42:40-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "6e01c8f6-7c0c-414b-a916-790e172b511d",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m32mh0tw88vfq4a5gn7c92me",
     "lead_id": "79877820",
     "ts": "[telefone]T15:44:18-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1019,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m32mhj8y0dr1my23aek2nvp3",
     "lead_id": "79877820",
     "ts": "[telefone]T15:44:36-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1019,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m34nmcepn4md5xd9f6wkep37",
     "lead_id": "79877820",
     "ts": "[telefone]T10:42:06-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845359,
      "to": 108794987
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m34nmm55q5evtjrzzy7r6fq8",
     "lead_id": "79877820",
     "ts": "[telefone]T10:42:14-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "humano",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "79877820",
     "ts": "[telefone]T10:42:20-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "system",
     "action": "task_created",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T10:47:20-03:00",
      "completed": false,
      "responsible": "[pessoa]",
      "result": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79877820",
     "ts": "[telefone]T17:05:03-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_answered",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 15,
      "link": "[removido]",
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "ab386399-0ad4-44cb-96ab-4ae08288ddcc",
      "call_status": 4,
      "call_result": "[removido]",
      "recording_access": "acessivel",
      "transcript": "[removido]",
      "transcript_segments": [
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]"
      ],
      "duplicates": [
       {
        "id": "n[telefone]",
        "source": "kommo_api",
        "ref": "[removido]"
       }
      ]
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35bnd55t12g6c88dzd4csbd",
     "lead_id": "79877820",
     "ts": "[telefone]T17:07:08-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1019,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "79877820",
     "ts": "[telefone]T10:34:07-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "42a86a70-a142-4bfe-be6f-6b0c61b77538",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    }
   ],
   "calls_analysis": [
    {
     "call_id": "d8e45993-ea64-4c84-8cef-319c3d056f6c",
     "transcript_source": "transcrição local (faster-whisper small) — qualidade baixa nos primeiros 30 s",
     "resumo": "Ligação de 55 s às 12:32: lead não pode falar; combina retorno 'de tarde, umas duas e meia, três horas'; atendente diz que avisará por mensagem antes de ligar. Compromisso cumprido (mensagem 14:53, ligação 14:55).",
     "trechos": [
      {
       "timestamp": "00:38–00:46",
       "trecho": "[removido]",
       "interpretacao": "Boa prática: quando o lead não pode falar, obtém horário e avisa antes de ligar. Reduz ligação perdida.",
       "alternativa": "(manter) Sugestão reescrita para fixar o compromisso: 'Fechado, [pessoa]: 14h30 eu te ligo deste número. Se mudar algo, me avisa por aqui.'"
      }
     ],
     "limites": "trechos iniciais marcados como dúvida pelo modelo"
    },
    {
     "call_id": "321880e0-5dc4-4f3e-a275-090d53e46acb",
     "transcript_source": "transcrição local (faster-whisper small) + resumo automático do CRM (nota [telefone]/[telefone])",
     "resumo": "Ligação de 12 min 55 s. Investigação ampla (tempo de casa, demissão em 22/01, verbas não pagas, insalubridade, acidente com corte no dedo, jornada com folgas, ponto, pagamento em conta). Apresenta ação trabalhista, honorários 30% no êxito, processo online. Fecha com 'podemos dar seguimento?' e pede dados para o contrato e foto do laudo. Lead menciona [pessoa] para indicar.",
     "trechos": [
      {
       "timestamp": "00:13–00:28",
       "trecho": "[removido]",
       "interpretacao": "Retoma o contexto do contato e valida a informação do formulário em vez de assumi-la. A lead corrige e a atendente segue sem atrito.",
       "alternativa": "(manter) Sugestão: registrar a correção no CRM (campo '[TR] situação') logo após a ligação."
      },
      {
       "timestamp": "01:00–01:02",
       "trecho": "[removido]",
       "interpretacao": "Validação emocional curta e devolução em forma de pergunta: mantém a lead narrando.",
       "alternativa": "(manter)"
      },
      {
       "timestamp": "07:10–07:20",
       "trecho": "[removido]",
       "interpretacao": "Transição para a solução. Implicação apenas insinuada ('vão ganhar tempo'); não quantifica o que está em jogo nem pergunta como a falta das verbas afetou a lead (etapa I do SPIN).",
       "alternativa": "Sugestão reescrita: '[pessoa], desde janeiro você está sem essas verbas e sem o seguro-desemprego. Como isso tem pesado no seu mês? [ouvir] Pois é — e cada mês que passa é um mês a menos que a Justiça alcança. Por isso eu quero te mostrar o caminho hoje.'"
      },
      {
       "timestamp": "08:48–08:53",
       "trecho": "[removido]",
       "interpretacao": "Pergunta de fechamento direta, adequada.",
       "alternativa": "(manter) Variante do roteiro: 'Tem algo que hoje te impede de dar entrada e recuperar o que é seu?'"
      },
      {
       "timestamp": "12:33–12:52",
       "trecho": "[removido]",
       "interpretacao": "Encerra com próximo passo, mas sem prazo nem horário de retorno. A lead sumiu depois disso; a 1ª cobrança veio 4 dias depois.",
       "alternativa": "Sugestão reescrita: 'Vou te mandar a lista agora. Consegue me enviar as fotos hoje até as 18h? Se não der, amanhã às 10h eu te chamo aqui pra ver o que faltou, combinado?'"
      }
     ],
     "limites": "Transcrição automática local com erros de nomes e trechos marcados como dúvida; tom de voz não avaliado. Honorários e prazos citados ficam para validação do responsável técnico."
    },
    {
     "call_id": "ab386399-0ad4-44cb-96ab-4ae08288ddcc",
     "transcript_source": "transcrição local",
     "resumo": "15 s em 22/09 17:05: atendente se apresenta e pergunta se a lead lembra da conversa; áudio cai.",
     "trechos": [],
     "limites": "curta; provável falha de áudio"
    },
    {
     "call_id": "d090bff6-2f[telefone]f8-d9313fb8450b",
     "transcript_source": "transcrição local (baixa confiança)",
     "resumo": "10 s em 22/09 17:05: 'a senhora me ouve?' — falha de áudio; a atendente mandou mensagem em seguida (17:07).",
     "trechos": [],
     "limites": "inaudível"
    }
   ],
   "acertos": [
    "Ligação como primeiro contato, 11 minutos após a entrada, e retorno exatamente no horário pedido pela lead.",
    "Investigação ampla e escuta na ligação principal (jornada, ponto, pagamento, acidente, laudo).",
    "Pergunta de fechamento explícita e pedido de dados para o contrato ainda na ligação.",
    "Persistência com registro: 5 tentativas de ligação em 8 dias, todas gravadas/registradas."
   ],
   "melhorias": [
    "Fechar a ligação com prazo e horário: 'fotos até 18h; te chamo amanhã às 10h'. A relação foi enviada às 15:10 e a 1ª cobrança só em 21/09 (4 dias).",
    "Explorar implicação antes de apresentar a solução (o que a falta das verbas causou; prazo prescricional como urgência real).",
    "Registrar após a ligação: nota curta com o que foi combinado, correção do campo 'sem carteira' → 'com carteira', tarefa de retorno com data.",
    "Quando a ligação falha por áudio (22/09), enviar mensagem oferecendo horário alternativo em vez de só registrar a tentativa — houve mensagem, mas sem proposta de horário identificável (texto indisponível)."
   ],
   "evidencias": [
    "[link removido] · 17/09 12:24 tarefa 'Novo Lead' → 12:32 ligação 55 s",
    "[link removido] · 17/09 14:55 ligação 775 s + resumo automático 15:09",
    "[link removido] · 21/09 15:42 ligação não atendida; 22/09 17:05 duas ligações curtas; 25/09 10:34 caixa postal",
    "[link removido] · 22/09 10:47 tarefa vencida não concluída"
   ],
   "conduzir_melhor": [
    "Sugestão reescrita (pós-ligação, 15:10): '[pessoa], foi ótimo falar com você. Segue a lista: nome completo, CPF, endereço, foto da carteira de trabalho e do laudo da coluna. Consegue me mandar hoje até as 18h? Amanhã às 10h eu te chamo aqui pra conferir o que faltou.'",
    "Sugestão reescrita (D+1, sem resposta): 'Bom dia, [pessoa]! Conseguiu localizar o laudo? Se estiver difícil, me manda só o nome completo e o CPF que eu já começo o contrato e o resto a gente encaixa depois.'",
    "Sugestão reescrita (após ligação com falha de áudio): '[pessoa], a ligação caiu aqui. Posso te ligar de novo às 17h30 ou prefere amanhã de manhã?'"
   ],
   "proxima_acao": "Não executar: enviar mensagem com duas opções de horário para retomar (ex.: hoje 16h ou amanhã 10h) e criar tarefa com data; se sem resposta em 2 dias úteis, registrar motivo provisório ('sem retorno após ligação') e mover para cadência de resgate.",
   "limitacoes": [
    "Texto das mensagens de WhatsApp não acessível pela API; conteúdo avaliado apenas nas ligações (transcrição local) e no resumo automático.",
    "Transcrição automática com erros; nomes podem estar incorretos."
   ],
   "confianca": "alta para tempos, ligações e cadência; média para qualidade da condução (transcrição automática); baixa para conteúdo das mensagens.",
   "observado_vs_sugerido": [
    {
     "ts": "[telefone]T15:10:00-03:00",
     "trecho": "[removido]",
     "interpretacao": "Sem prazo combinado, a bola ficou com a lead por 4 dias sem cobrança.",
     "alternativa": "Sugestão reescrita: mensagem com lista + prazo ('até 18h') + horário do próximo contato ('amanhã 10h te chamo').",
     "ref": "[removido]"
    }
   ],
   "nomes_citados": [
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]"
   ]
  },
  {
   "id": "80012252",
   "nome": "Caso 7",
   "url": "",
   "servico": "[TRABALHISTA] Reconhecimento de vínculo",
   "origem": "Mídia Paga / [Mídia] Meta Ads",
   "criado_em": "[telefone]T18:17:20-03:00",
   "atendentes": [
    "Atendente 1"
   ],
   "responsavel_atual": "[pessoa]",
   "etapa_atual": "Desqualificado",
   "etapa_max": "Desqualificado",
   "status": "open",
   "motivo_perda": null,
   "tags": [
    "humano",
    "⭐️",
    "Trabalhista generica"
   ],
   "legacy": false,
   "motivo_selecao": "Travado/perdido: Desqualificado após conversa longa com o robô e pouca atuação humana + 1 ligação, criado na janela de 15 d",
   "contexto_robo": "Atualização de etapa sincronizada  Etapa anterior: Agendamento Nova etapa: Atendimento Humano  A etapa também foi atualizada na Kommo.; Atualização de etapa sincronizada  Etapa anterior: Em Atendimento Nova etapa: Análise de Viabilidade  A etapa também foi atualizada na Kommo.; Pré triagem de Reconhecimento de Vínculo feita ✅ · formulário/qualificação: Score: 69; [T] Vínculo: Carteira assinada; Status de Qualificação: Qualificado",
   "transfer": {
    "ts": "[telefone]T18:54:08-03:00",
    "confidence": "confirmado",
    "rule": "entrada na etapa 'atendimento humano'"
   },
   "indicadores": {
    "h_transf_primeira_tentativa": {
     "valor": 15.47,
     "definicao": "horas corridas da transferência até 1ª ação humana dirigida ao lead (mensagem ou tentativa de ligação)",
     "base": "transferência confirmado",
     "cobertura": "completa"
    },
    "h_transf_primeira_mensagem": {
     "valor": 15.47,
     "definicao": "horas até 1ª mensagem humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_transf_primeira_ligacao": {
     "valor": 15.51,
     "definicao": "horas até 1ª tentativa de ligação de saída",
     "base": "notas/eventos de chamada",
     "cobertura": "completa"
    },
    "h_transf_primeira_conversa": {
     "valor": 15.48,
     "definicao": "horas até 1ª conversa efetiva (resposta do lead a humano ou ligação atendida)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "episodios_espera": {
     "valor": 5,
     "definicao": "grupos de mensagens do lead que exigiam retorno",
     "base": "mensagens anotadas requires_reply",
     "cobertura": "completa"
    },
    "mediana_resposta_h": {
     "valor": 7.74,
     "definicao": "mediana do tempo corrido última msg do lead → 1ª ação humana, só episódios concluídos",
     "base": "4 episódios concluídos",
     "cobertura": "completa"
    },
    "maior_espera_concluida_h": {
     "valor": 26.0,
     "definicao": "maior espera concluída",
     "base": "4 episódios",
     "cobertura": "completa"
    },
    "espera_aberta_h": {
     "valor": 103.38,
     "definicao": "tempo acumulado até o corte da pendência aberta (não somado às medianas)",
     "base": "episódio aberto",
     "cobertura": "completa"
    },
    "msgs_humanas": {
     "valor": 4,
     "definicao": "mensagens enviadas por humano (fragmentos contados individualmente)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_lead": {
     "valor": 64,
     "definicao": "mensagens recebidas do lead",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_robo": {
     "valor": 36,
     "definicao": "mensagens do robô (contexto)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "abordagens_followup": {
     "valor": 2,
     "definicao": "ações humanas de saída após ≥4 h sem resposta do lead; fragmentos ≤10 min = 1",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tentativas_ligacao_saida": {
     "valor": 1,
     "definicao": "ligações de saída por humano (atendidas ou não), deduplicadas",
     "base": "notas de chamada + API4com",
     "cobertura": "completa"
    },
    "ligacoes_saida_atendidas": {
     "valor": 1,
     "definicao": "ligações de saída com duração > 0 (atendida ≠ conversa comercial)",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "chamadas_entrada": {
     "valor": 0,
     "definicao": "ligações recebidas",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "dias_com_atuacao_humana": {
     "valor": 2,
     "definicao": "dias distintos com ação humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_criadas": {
     "valor": 1,
     "definicao": "tarefas criadas",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_concluidas": {
     "valor": 1,
     "definicao": "tarefas concluídas (não prova ligação)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_vencidas": {
     "valor": 0,
     "definicao": "tarefas com prazo anterior ao corte sem conclusão",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_ate_agendamento": {
     "valor": "NA",
     "definicao": "horas transferência → reunião agendada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_reuniao_realizada": {
     "valor": 15.51,
     "definicao": "horas transferência → reunião realizada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_envio_documento": {
     "valor": "NA",
     "definicao": "horas transferência → 1º documento enviado",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_assinatura_confirmada": {
     "valor": "NA",
     "definicao": "horas transferência → assinatura comprovada",
     "base": "marcos",
     "cobertura": "completa"
    }
   },
   "episodios": [
    {
     "start": "[telefone]T18:54:56-03:00",
     "last_lead_msg": "[telefone]T18:54:56-03:00",
     "msgs": [
      "01m35htrw00jw42ejjgpt3j4jk"
     ],
     "refs": [
      "[link removido] · [telefone]T18:54:56-03:00 · evento 01m35htrw00jw42ejjgpt3j4jk"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T10:22:25-03:00",
     "answer_ref": "[link removido] · [telefone]T10:22:25-03:00 · evento 01m376x1qb2ar51kzy7gzf0wp0",
     "answer_action": "message",
     "wait_seconds": 55649.0,
     "open": false
    },
    {
     "start": "[telefone]T10:22:45-03:00",
     "last_lead_msg": "[telefone]T10:22:45-03:00",
     "msgs": [
      "01m376xn48xt00cvxh4vampt4t"
     ],
     "refs": [
      "[link removido] · [telefone]T10:22:45-03:00 · evento 01m376xn48xt00cvxh4vampt4t"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T10:24:09-03:00",
     "answer_ref": "[link removido] · [telefone]T10:24:09-03:00 · evento 01m37707dzmbmpeeaxbt80eeqh",
     "answer_action": "message",
     "wait_seconds": 84.0,
     "open": false
    },
    {
     "start": "[telefone]T10:24:30-03:00",
     "last_lead_msg": "[telefone]T10:24:30-03:00",
     "msgs": [
      "01m3770vngrfkd8tejpcjse545"
     ],
     "refs": [
      "[link removido] · [telefone]T10:24:30-03:00 · evento 01m3770vngrfkd8tejpcjse545"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T10:24:44-03:00",
     "answer_ref": "[link removido] · [telefone]T10:24:44-03:00 · nota [telefone]",
     "answer_action": "call_answered",
     "wait_seconds": 14.0,
     "open": false
    },
    {
     "start": "[telefone]T10:51:42-03:00",
     "last_lead_msg": "[telefone]T13:17:31-03:00",
     "msgs": [
      "01m378jndg811qyx0rwkajbke6",
      "01m378kpm0wet291fypfv8xp3t",
      "01m378mnw0ar72atpebt25nrf3",
      "01m378pjdg6q4p44ez1jbzxktn",
      "01m378ra2rmft6h45j8v4p50v2",
      "01m378v5w8h7j7391gp7gh167a",
      "01m378w820av7zfyk2p3av3sft",
      "01m378wqp04mgrnwx8s1bg09zj",
      "01m378y2n0ypexnp9yecyhw3dw",
      "01m37943185zw6wh178t4wh6we",
      "01m3794318mjp8w2xt9g96jny5",
      "01m379440g7g7s4n9fw34mx5zq",
      "01m379440gwnqbjnqz421gb87r",
      "01m379440gqxcwgbgy4jqd6ajs",
      "01m379440gwqzngpgfwcfe2brd",
      "01m37944zrtqtae2w24qc8edav",
      "01m379asw8tsexg44tmt496v4d",
      "01m379bafgphwpr2y9tk3avhsf",
      "01m379bt3gmvhzcp56rbpd0b7h",
      "01m379c8r8vj4j16n75eq1srq9",
      "01m379dvh8sqcbk36qbqx5tsrw",
      "01m379exq06gcdc309t5ssx6d7",
      "01m379g0w005hcgh4t57rrc71n",
      "01m379htfrpeks92jga1616dr2",
      "01m379ja3rdpyr7r9mxvyby17f",
      "01m379k3g8sg8pjt3s0r78f001",
      "01m379kty8nr4pybxyb5pjd02w",
      "01m379my38cc76jnyf4j0jdcvs",
      "01m379n9t8r557va80s9f4yhjc",
      "01m379p830vkr8arnd8kby03rg",
      "01m379psngszp1pzh8k6mcmnc0",
      "01m37d9z70z8hsmy4ppgstahcw",
      "01m37dayf0fjdq2ym4zx1f4s9n",
      "01m37gxnbr1wwayj69mmq7t97h"
     ],
     "refs": [
      "[link removido] · [telefone]T10:51:42-03:00 · evento 01m378jndg811qyx0rwkajbke6",
      "[link removido] · [telefone]T10:52:16-03:00 · evento 01m378kpm0wet291fypfv8xp3t",
      "[link removido] · [telefone]T10:52:48-03:00 · evento 01m378mnw0ar72atpebt25nrf3",
      "[link removido] · [telefone]T10:53:50-03:00 · evento 01m378pjdg6q4p44ez1jbzxktn",
      "[link removido] · [telefone]T10:54:47-03:00 · evento 01m378ra2rmft6h45j8v4p50v2",
      "[link removido] · [telefone]T10:56:21-03:00 · evento 01m378v5w8h7j7391gp7gh167a",
      "[link removido] · [telefone]T10:56:56-03:00 · evento 01m378w820av7zfyk2p3av3sft",
      "[link removido] · [telefone]T10:57:12-03:00 · evento 01m378wqp04mgrnwx8s1bg09zj",
      "[link removido] · [telefone]T10:57:56-03:00 · evento 01m378y2n0ypexnp9yecyhw3dw",
      "[link removido] · [telefone]T11:01:13-03:00 · evento 01m37943185zw6wh178t4wh6we",
      "[link removido] · [telefone]T11:01:13-03:00 · evento 01m3794318mjp8w2xt9g96jny5",
      "[link removido] · [telefone]T11:01:14-03:00 · evento 01m379440g7g7s4n9fw34mx5zq",
      "[link removido] · [telefone]T11:01:14-03:00 · evento 01m379440gwnqbjnqz421gb87r",
      "[link removido] · [telefone]T11:01:14-03:00 · evento 01m379440gqxcwgbgy4jqd6ajs",
      "[link removido] · [telefone]T11:01:14-03:00 · evento 01m379440gwqzngpgfwcfe2brd",
      "[link removido] · [telefone]T11:01:15-03:00 · evento 01m37944zrtqtae2w24qc8edav",
      "[link removido] · [telefone]T11:04:53-03:00 · evento 01m379asw8tsexg44tmt496v4d",
      "[link removido] · [telefone]T11:05:10-03:00 · evento 01m379bafgphwpr2y9tk3avhsf",
      "[link removido] · [telefone]T11:05:26-03:00 · evento 01m379bt3gmvhzcp56rbpd0b7h",
      "[link removido] · [telefone]T11:05:41-03:00 · evento 01m379c8r8vj4j16n75eq1srq9",
      "[link removido] · [telefone]T11:06:33-03:00 · evento 01m379dvh8sqcbk36qbqx5tsrw",
      "[link removido] · [telefone]T11:07:08-03:00 · evento 01m379exq06gcdc309t5ssx6d7",
      "[link removido] · [telefone]T11:07:44-03:00 · evento 01m379g0w005hcgh4t57rrc71n",
      "[link removido] · [telefone]T11:08:43-03:00 · evento 01m379htfrpeks92jga1616dr2",
      "[link removido] · [telefone]T11:08:59-03:00 · evento 01m379ja3rdpyr7r9mxvyby17f",
      "[link removido] · [telefone]T11:09:25-03:00 · evento 01m379k3g8sg8pjt3s0r78f001",
      "[link removido] · [telefone]T11:09:49-03:00 · evento 01m379kty8nr4pybxyb5pjd02w",
      "[link removido] · [telefone]T11:10:25-03:00 · evento 01m379my38cc76jnyf4j0jdcvs",
      "[link removido] · [telefone]T11:10:37-03:00 · evento 01m379n9t8r557va80s9f4yhjc",
      "[link removido] · [telefone]T11:11:08-03:00 · evento 01m379p830vkr8arnd8kby03rg",
      "[link removido] · [telefone]T11:11:26-03:00 · evento 01m379psngszp1pzh8k6mcmnc0",
      "[link removido] · [telefone]T12:14:20-03:00 · evento 01m37d9z70z8hsmy4ppgstahcw",
      "[link removido] · [telefone]T12:14:52-03:00 · evento 01m37dayf0fjdq2ym4zx1f4s9n",
      "[link removido] · [telefone]T13:17:31-03:00 · evento 01m37gxnbr1wwayj69mmq7t97h"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:17:44-03:00",
     "answer_ref": "[link removido] · [telefone]T15:17:44-03:00 · evento 01m3aa6ggt0p149td42cdmye5v",
     "answer_action": "message",
     "wait_seconds": 93613.0,
     "open": false
    },
    {
     "start": "[telefone]T15:18:47-03:00",
     "last_lead_msg": "[telefone]T15:19:32-03:00",
     "msgs": [
      "01m3aa8dtrnkrp6xt0756j7219",
      "01m3aa8wfgf8rtd9ma97r6x33b",
      "01m3aa9ss00kbsde5vbpyrtnd0"
     ],
     "refs": [
      "[link removido] · [telefone]T15:18:47-03:00 · evento 01m3aa8dtrnkrp6xt0756j7219",
      "[link removido] · [telefone]T15:19:02-03:00 · evento 01m3aa8wfgf8rtd9ma97r6x33b",
      "[link removido] · [telefone]T15:19:32-03:00 · evento 01m3aa9ss00kbsde5vbpyrtnd0"
     ],
     "status": "aguardando_equipe",
     "open": true,
     "elapsed_to_cutoff_seconds": 372171.0
    }
   ],
   "followups": [
    {
     "ts": "[telefone]T10:22:25-03:00",
     "action": "message",
     "gap_hours": 15.46,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T15:17:44-03:00",
     "action": "message",
     "gap_hours": 26.0,
     "ref": "[removido]",
     "actor": "[pessoa]"
    }
   ],
   "chamadas": {
    "chamadas_localizadas": 1,
    "tentativas_saida": 1,
    "saida_atendidas": 1,
    "entrada": 0,
    "entrada_perdidas": 0,
    "duracao_total_s": 1669,
    "com_gravacao_link": 1,
    "gravacao_acessivel": 1,
    "transcritas": 1,
    "lista": [
     {
      "ts": "[telefone]T10:24:44-03:00",
      "direction": "out",
      "action": "call_answered",
      "actor": "[pessoa]",
      "duration": 1669,
      "status": 4,
      "link": true,
      "recording_access": "acessivel",
      "id": "51473ee4-a0ab-406c-9c8d-13364217a42d",
      "ref": "[removido]"
     }
    ]
   },
   "marcos": {
    "meeting_offered": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_accepted": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_scheduled": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_confirmed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_done": {
     "ocorreu": true,
     "primeira": "[telefone]T10:24:44-03:00",
     "evidencias": [
      {
       "ref": "[removido]",
       "conteudo": "[removido]",
       "doc": "ligação",
       "confirmado": true
      }
     ]
    },
    "meeting_noshow": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_reschedule": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "proposal_presented": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_sent": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_signed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "legal_handoff": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "contrato_enviado": false,
    "contrato_assinado_confirmado": false,
    "procuracao_enviado": false,
    "procuracao_assinado_confirmado": false
   },
   "status_espera": "aguardando_equipe",
   "ultimo_evento": "[telefone]T15:19:32-03:00",
   "rubrica": {
    "nota_normalizada": 55.0,
    "criterios_avaliados": 10,
    "cobertura": "10/10",
    "detalhe": {
     "c1": {
      "criterio": "Agilidade e continuidade da resposta",
      "nota": 1,
      "justificativa": "Transferência 22/09 18:54 (fora do horário comercial provável); 1ª ação humana 23/09 10:22 (15,5 h; pernoite). Após a ligação, o lead enviou ~30 mensagens (10:51–11:11) — provavelmente documentos — respondidas apenas pelo robô; nenhuma ação humana até 24/09 15:17, quando o lead foi desqualificado com 1 mensagem; as 3 respostas do lead (15:18–15:19) seguem sem retorno (103 h no corte).",
      "evidencias": [
       "[link removido] · 22/09 18:54 → 23/09 10:22",
       "[link removido] · 23/09 10:51–11:11 mensagens do lead; robô 11:02/11:11/11:12",
       "[link removido] · 24/09 15:17 → 15:19 sem retorno"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c2": {
      "criterio": "Retomada do contexto e personalização",
      "nota": 3,
      "justificativa": "Abertura da ligação explica por que ligou e cita o que o lead disse ao robô ('vi que o senhor teve o período pelo INSS'); pergunta aberta em seguida.",
      "evidencias": [
       "[link removido] · 23/09 10:24 transcrição 00:25–00:39"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c3": {
      "criterio": "Investigação da necessidade e uso pertinente do SPIN",
      "nota": 3,
      "justificativa": "Transcrição e resumo automático da ligação de 28 min: início na empresa, afastamento, INSS, exame de retorno, mudança de cidade, transferência, laudos — situação e problema bem explorados.",
      "evidencias": [
       "[link removido] · 23/09 10:53 nota (resumo automático)"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c4": {
      "criterio": "Qualificação adequada ao serviço",
      "nota": 3,
      "justificativa": "A ligação qualifica de fato: identifica que o INSS já tem advogada (03:29), checa insalubridade, horas extras e FGTS (20:13–21:15) e conclui que a tese trabalhista é frágil porque a mudança de estado foi decisão do lead (24:09–24:41). O critério, porém, não foi registrado no CRM e a decisão levou 28 min para emergir.",
      "evidencias": [
       "[link removido] · 23/09 10:24 transcrição 03:29–03:38, 20:13–21:15, 24:09–24:41"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c5": {
      "criterio": "Iniciativa e pertinência das ligações",
      "nota": 3,
      "justificativa": "Ligação 2 min após a 1ª mensagem humana, 28 min de duração.",
      "evidencias": [
       "[link removido] · 23/09 10:24 ligação 1669 s"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c6": {
      "criterio": "Clareza da apresentação de valor e do processo",
      "nota": 2,
      "justificativa": "Orienta o lead sobre o que fazer (justificar ausência com laudo; caminho pela empresa) e é transparente sobre a fragilidade da tese, mas não apresenta o que o escritório faria nem condições; encerra pedindo documentos sem prazo de retorno.",
      "evidencias": [
       "[link removido] · 23/09 10:24 transcrição 14:52–15:14, 24:09–24:41, 27:17–27:42"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c7": {
      "criterio": "Tratamento das dúvidas e objeções",
      "nota": 3,
      "justificativa": "Acolhe a indignação ('estou entendendo sua indignação') e devolve o fato objetivo (contrato era na Paraíba; transferência pedida depois da mudança) sem prometer.",
      "evidencias": [
       "[link removido] · 23/09 10:24 transcrição 24:09–24:41"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c8": {
      "criterio": "Condução para reunião ou próximo passo concreto",
      "nota": 2,
      "justificativa": "Próximo passo definido na ligação (lead envia laudos e e-mails até o fim do dia) e o lead enviou ~30 mensagens em 20 min; não houve acolhimento humano desse material.",
      "evidencias": [
       "[link removido] · 23/09 10:53 nota",
       "[link removido] · 23/09 10:51–11:11"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c9": {
      "criterio": "Follow-up, confirmação e acompanhamento até assinatura",
      "nota": 1,
      "justificativa": "Documentos recebidos sem confirmação; desqualificação por 1 mensagem 29 h depois; réplicas do lead sem resposta.",
      "evidencias": [
       "[link removido] · 24/09 15:17–15:19"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c10": {
      "criterio": "Organização e registros no CRM",
      "nota": 1,
      "justificativa": "Sem motivo de perda; etapa 'Desqualificado' sem nota; tarefa automática com prazo de 5 min às 18:54 (irreal); robô respondeu 13 vezes após a transferência; tag 'humano' correta.",
      "evidencias": [
       "[link removido] · 22/09 18:54 tarefa due 18:59",
       "[link removido] · 23/09 11:02–13:19 robô"
      ],
      "categoria_causa": "integração"
     }
    }
   },
   "timeline": [
    {
     "id": "01m35fnygm6wh1f5aab5bxsjb1",
     "lead_id": "80012252",
     "ts": "[telefone]T18:17:20-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35fnygm0s6a32rdawbtvk5s",
     "lead_id": "80012252",
     "ts": "[telefone]T18:17:20-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "Trabalhista generica",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35fnxr057yq1vdht5xc8cnm",
     "lead_id": "80012252",
     "ts": "[telefone]T18:17:20-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35fnzp2p45532qp1shcfhe8",
     "lead_id": "80012252",
     "ts": "[telefone]T18:17:21-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "agente",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35fnzktttjgwc30ekxx5h1t",
     "lead_id": "80012252",
     "ts": "[telefone]T18:17:21-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "responsible_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35fnzz4dej6phwnrs6x159z",
     "lead_id": "80012252",
     "ts": "[telefone]T18:17:22-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35fnzz37ck7n38krvmjhqk3",
     "lead_id": "80012252",
     "ts": "[telefone]T18:17:22-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "⭐️",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T18:17:22-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T18:17:22-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T18:17:22-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T18:17:22-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "sync_robo"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35fqcfapnqg14x77w26t2mz",
     "lead_id": "80012252",
     "ts": "[telefone]T18:18:07-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "stage_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845351,
      "to": 104845355
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35fr9xg1cx3sb86tb5akvxf",
     "lead_id": "80012252",
     "ts": "[telefone]T18:18:38-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35g8egrtwqyb4ga7wqpr175",
     "lead_id": "80012252",
     "ts": "[telefone]T18:27:27-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35g9km8bb2w06e1spnqznxj",
     "lead_id": "80012252",
     "ts": "[telefone]T18:28:05-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35g9rggbrny2gfag9wyyrp9",
     "lead_id": "80012252",
     "ts": "[telefone]T18:28:10-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35gbh50ewre1c6696c6zk32",
     "lead_id": "80012252",
     "ts": "[telefone]T18:29:08-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35gdhrdan3rn3w3zxxsr105",
     "lead_id": "80012252",
     "ts": "[telefone]T18:30:14-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "stage_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845355,
      "to": 104845359
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T18:30:15-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "sync_robo"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35gdpfraa5pwerkr66acdqg",
     "lead_id": "80012252",
     "ts": "[telefone]T18:30:19-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35ge7301z696qqt4h3gh86t",
     "lead_id": "80012252",
     "ts": "[telefone]T18:30:36-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35gecygbs1cgsq3743tacwj",
     "lead_id": "80012252",
     "ts": "[telefone]T18:30:42-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35gf89gn2h0hnvym1es479a",
     "lead_id": "80012252",
     "ts": "[telefone]T18:31:10-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35gfb78jkrccj0f74yj9bjb",
     "lead_id": "80012252",
     "ts": "[telefone]T18:31:13-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35gg1p05han3gmwph8b5zzg",
     "lead_id": "80012252",
     "ts": "[telefone]T18:31:36-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35gh9q8tqmvqj38yk6wd225",
     "lead_id": "80012252",
     "ts": "[telefone]T18:32:17-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35gj8000ytyf5kgwgvn9xq5",
     "lead_id": "80012252",
     "ts": "[telefone]T18:32:48-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35gjpmr8fxytxzw2hqqtmpb",
     "lead_id": "80012252",
     "ts": "[telefone]T18:33:03-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35gkf209x77b00rda9x0aja",
     "lead_id": "80012252",
     "ts": "[telefone]T18:33:28-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35gmk68xr3266gxcgfrxy0c",
     "lead_id": "80012252",
     "ts": "[telefone]T18:34:05-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35gms1rc9nxnwj8s35tg195",
     "lead_id": "80012252",
     "ts": "[telefone]T18:34:11-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35gpds8jcdafm4jafrrneeq",
     "lead_id": "80012252",
     "ts": "[telefone]T18:35:05-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35gqjwrxd8w0xd7y51t6by4",
     "lead_id": "80012252",
     "ts": "[telefone]T18:35:43-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35grty0k7vsdkw3e6kkv5g5",
     "lead_id": "80012252",
     "ts": "[telefone]T18:36:24-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35gs6n0b0499c6w7scc9drb",
     "lead_id": "80012252",
     "ts": "[telefone]T18:36:36-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35gthm0tnhkkhtp5b90hfdg",
     "lead_id": "80012252",
     "ts": "[telefone]T18:37:20-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35gvksr211fqrcwfn11p5qz",
     "lead_id": "80012252",
     "ts": "[telefone]T18:37:55-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35gwn08ez1ppj59jckeggfj",
     "lead_id": "80012252",
     "ts": "[telefone]T18:38:29-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35gx4m8vhms22f9m8t6yr56",
     "lead_id": "80012252",
     "ts": "[telefone]T18:38:45-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35gycngype6kaj7cht1m7jv",
     "lead_id": "80012252",
     "ts": "[telefone]T18:39:26-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35gyw9gf79e8b52k8b93f05",
     "lead_id": "80012252",
     "ts": "[telefone]T18:39:42-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35h04ar8ck3tpd159pyggp0",
     "lead_id": "80012252",
     "ts": "[telefone]T18:40:23-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35h37y8njk8qrqc4ke9rymp",
     "lead_id": "80012252",
     "ts": "[telefone]T18:42:05-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35h4nv0yyx13nsbss52vk2k",
     "lead_id": "80012252",
     "ts": "[telefone]T18:42:52-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35h5m3rg333xt5qpq82dknc",
     "lead_id": "80012252",
     "ts": "[telefone]T18:43:23-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35h6w501c3y9shjbv6wfhbr",
     "lead_id": "80012252",
     "ts": "[telefone]T18:44:04-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35h7jkr408mg1rsyz4ves04",
     "lead_id": "80012252",
     "ts": "[telefone]T18:44:27-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35h8qq8vgwdt4j2fmeeqdd8",
     "lead_id": "80012252",
     "ts": "[telefone]T18:45:05-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35hazzrqw4enshkyb2j2kqn",
     "lead_id": "80012252",
     "ts": "[telefone]T18:46:19-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35hcby02b2e4rdfmxrv2yzv",
     "lead_id": "80012252",
     "ts": "[telefone]T18:47:04-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35hcfv0429wesa42cfgdzzr",
     "lead_id": "80012252",
     "ts": "[telefone]T18:47:08-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35hexz0d11wkadtgde3xz2r",
     "lead_id": "80012252",
     "ts": "[telefone]T18:48:28-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35hgbvr5a5aqb7h9f3jrma5",
     "lead_id": "80012252",
     "ts": "[telefone]T18:49:15-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35hgtgg6xfs8ah05zpm97ba",
     "lead_id": "80012252",
     "ts": "[telefone]T18:49:30-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35hjd9gqv8jczhdb85s4d3v",
     "lead_id": "80012252",
     "ts": "[telefone]T18:50:22-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35hkbj8b607dqv6m8xakrzb",
     "lead_id": "80012252",
     "ts": "[telefone]T18:50:53-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T18:51:26-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T18:51:31-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35hmvdgfbt5v39c7ca3tfxm",
     "lead_id": "80012252",
     "ts": "[telefone]T18:51:42-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35hnzhryk3de0nddn4jztvf",
     "lead_id": "80012252",
     "ts": "[telefone]T18:52:19-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35hpxtgntwxv31j6705c3sh",
     "lead_id": "80012252",
     "ts": "[telefone]T18:52:50-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35hqdegtn6yd3gngcz4mwx7",
     "lead_id": "80012252",
     "ts": "[telefone]T18:53:06-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35hqt4ravczgq36z4z5tt98",
     "lead_id": "80012252",
     "ts": "[telefone]T18:53:19-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m35hsayznj799zw3457fzbny",
     "lead_id": "80012252",
     "ts": "[telefone]T18:54:08-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "stage_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845359,
      "to": 108794987
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "transfer-80012252",
     "lead_id": "80012252",
     "ts": "[telefone]T18:54:08-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "transfer",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35hsb2jdsg6gzjr3wnfsjs9",
     "lead_id": "80012252",
     "ts": "[telefone]T18:54:09-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "humano",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T18:54:09-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "sync_robo"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35hsc4wrv9qbzc0rrakw2kr",
     "lead_id": "80012252",
     "ts": "[telefone]T18:54:10-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "agente"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T18:54:11-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "system",
     "action": "task_created",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T18:59:11-03:00",
      "completed": true,
      "responsible": "[pessoa]",
      "result": "Em atendimento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35hspp8vdgqqgn37p8er1vn",
     "lead_id": "80012252",
     "ts": "[telefone]T18:54:21-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35hsqng17r4vn5j1ns6ew7p",
     "lead_id": "80012252",
     "ts": "[telefone]T18:54:22-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m35htrw00jw42ejjgpt3j4jk",
     "lead_id": "80012252",
     "ts": "[telefone]T18:54:56-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "tc[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T10:15:17-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_completed",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "result": "Em atendimento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m376x1qb2ar51kzy7gzf0wp0",
     "lead_id": "80012252",
     "ts": "[telefone]T10:22:25-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m376xn48xt00cvxh4vampt4t",
     "lead_id": "80012252",
     "ts": "[telefone]T10:22:45-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m37707dzmbmpeeaxbt80eeqh",
     "lead_id": "80012252",
     "ts": "[telefone]T10:24:09-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3770jp7ex8gj5z3xvscejd6",
     "lead_id": "80012252",
     "ts": "[telefone]T10:24:20-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3770vngrfkd8tejpcjse545",
     "lead_id": "80012252",
     "ts": "[telefone]T10:24:30-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "m-n[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T10:24:44-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "meeting_done",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "confirmed": true,
      "doc_type": "ligação"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T10:24:44-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_answered",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 1669,
      "link": "[removido]",
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "51473ee4-a0ab-406c-9c8d-13364217a42d",
      "call_status": 4,
      "call_result": "[removido]",
      "recording_access": "acessivel",
      "transcript": "[removido]",
      "transcript_segments": [
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]"
      ]
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m378jndg811qyx0rwkajbke6",
     "lead_id": "80012252",
     "ts": "[telefone]T10:51:42-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m378kpm0wet291fypfv8xp3t",
     "lead_id": "80012252",
     "ts": "[telefone]T10:52:16-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m378mnw0ar72atpebt25nrf3",
     "lead_id": "80012252",
     "ts": "[telefone]T10:52:48-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T10:53:21-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80012252",
     "ts": "[telefone]T10:53:21-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "resumo_automatico"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m378pjdg6q4p44ez1jbzxktn",
     "lead_id": "80012252",
     "ts": "[telefone]T10:53:50-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m378ra2rmft6h45j8v4p50v2",
     "lead_id": "80012252",
     "ts": "[telefone]T10:54:47-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m378v5w8h7j7391gp7gh167a",
     "lead_id": "80012252",
     "ts": "[telefone]T10:56:21-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m378w820av7zfyk2p3av3sft",
     "lead_id": "80012252",
     "ts": "[telefone]T10:56:56-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m378wqp04mgrnwx8s1bg09zj",
     "lead_id": "80012252",
     "ts": "[telefone]T10:57:12-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m378y2n0ypexnp9yecyhw3dw",
     "lead_id": "80012252",
     "ts": "[telefone]T10:57:56-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m37943185zw6wh178t4wh6we",
     "lead_id": "80012252",
     "ts": "[telefone]T11:01:13-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3794318mjp8w2xt9g96jny5",
     "lead_id": "80012252",
     "ts": "[telefone]T11:01:13-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379440g7g7s4n9fw34mx5zq",
     "lead_id": "80012252",
     "ts": "[telefone]T11:01:14-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379440gwnqbjnqz421gb87r",
     "lead_id": "80012252",
     "ts": "[telefone]T11:01:14-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379440gqxcwgbgy4jqd6ajs",
     "lead_id": "80012252",
     "ts": "[telefone]T11:01:14-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379440gwqzngpgfwcfe2brd",
     "lead_id": "80012252",
     "ts": "[telefone]T11:01:14-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m37944zrtqtae2w24qc8edav",
     "lead_id": "80012252",
     "ts": "[telefone]T11:01:15-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3795sq8hpc0wwkjggx51926",
     "lead_id": "80012252",
     "ts": "[telefone]T11:02:09-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m379asw8tsexg44tmt496v4d",
     "lead_id": "80012252",
     "ts": "[telefone]T11:04:53-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379bafgphwpr2y9tk3avhsf",
     "lead_id": "80012252",
     "ts": "[telefone]T11:05:10-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379bt3gmvhzcp56rbpd0b7h",
     "lead_id": "80012252",
     "ts": "[telefone]T11:05:26-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379c8r8vj4j16n75eq1srq9",
     "lead_id": "80012252",
     "ts": "[telefone]T11:05:41-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379dvh8sqcbk36qbqx5tsrw",
     "lead_id": "80012252",
     "ts": "[telefone]T11:06:33-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379exq06gcdc309t5ssx6d7",
     "lead_id": "80012252",
     "ts": "[telefone]T11:07:08-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379g0w005hcgh4t57rrc71n",
     "lead_id": "80012252",
     "ts": "[telefone]T11:07:44-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379htfrpeks92jga1616dr2",
     "lead_id": "80012252",
     "ts": "[telefone]T11:08:43-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379ja3rdpyr7r9mxvyby17f",
     "lead_id": "80012252",
     "ts": "[telefone]T11:08:59-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379k3g8sg8pjt3s0r78f001",
     "lead_id": "80012252",
     "ts": "[telefone]T11:09:25-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379kty8nr4pybxyb5pjd02w",
     "lead_id": "80012252",
     "ts": "[telefone]T11:09:49-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379my38cc76jnyf4j0jdcvs",
     "lead_id": "80012252",
     "ts": "[telefone]T11:10:25-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379n9t8r557va80s9f4yhjc",
     "lead_id": "80012252",
     "ts": "[telefone]T11:10:37-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379p830vkr8arnd8kby03rg",
     "lead_id": "80012252",
     "ts": "[telefone]T11:11:08-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379psngszp1pzh8k6mcmnc0",
     "lead_id": "80012252",
     "ts": "[telefone]T11:11:26-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m379qe5r28894kxsgcwjn6gc",
     "lead_id": "80012252",
     "ts": "[telefone]T11:11:47-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m379r1pr4cpjcj07mh1r0anp",
     "lead_id": "80012252",
     "ts": "[telefone]T11:12:07-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m37d89g819k4jg3mfbxnv99w",
     "lead_id": "80012252",
     "ts": "[telefone]T12:13:25-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m37d9z70z8hsmy4ppgstahcw",
     "lead_id": "80012252",
     "ts": "[telefone]T12:14:20-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m37dayf0fjdq2ym4zx1f4s9n",
     "lead_id": "80012252",
     "ts": "[telefone]T12:14:52-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m37dcp48q7dz3jqfb8krwhqh",
     "lead_id": "80012252",
     "ts": "[telefone]T12:15:49-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m37dd5r8tn1x1dth7fek9mkv",
     "lead_id": "80012252",
     "ts": "[telefone]T12:16:05-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m37dd7prj4mh1eh1cq186tzy",
     "lead_id": "80012252",
     "ts": "[telefone]T12:16:07-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m37gw8e8g65d7es91r0s2krs",
     "lead_id": "80012252",
     "ts": "[telefone]T13:16:45-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m37gwacrjc4jfz166fsqdz86",
     "lead_id": "80012252",
     "ts": "[telefone]T13:16:47-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m37gxnbr1wwayj69mmq7t97h",
     "lead_id": "80012252",
     "ts": "[telefone]T13:17:31-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m37h15ngqj8qpe4ea8gezpmj",
     "lead_id": "80012252",
     "ts": "[telefone]T13:19:26-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m37h19jgh1aajmxf1fz5hhb6",
     "lead_id": "80012252",
     "ts": "[telefone]T13:19:30-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aa6ggt0p149td42cdmye5v",
     "lead_id": "80012252",
     "ts": "[telefone]T15:17:44-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1071,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aa6tfqsq4wet7d4pa25xgx",
     "lead_id": "80012252",
     "ts": "[telefone]T15:17:54-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 108794987,
      "to": 111874647
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aa8dtrnkrp6xt0756j7219",
     "lead_id": "80012252",
     "ts": "[telefone]T15:18:47-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3aa8wfgf8rtd9ma97r6x33b",
     "lead_id": "80012252",
     "ts": "[telefone]T15:19:02-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3aa9ss00kbsde5vbpyrtnd0",
     "lead_id": "80012252",
     "ts": "[telefone]T15:19:32-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1071
     },
     "requires_reply": true,
     "agreed_return_at": null
    }
   ],
   "calls_analysis": [
    {
     "call_id": "51473ee4-a0ab-406c-9c8d-13364217a42d (23/09 10:24, 1669 s)",
     "transcript_source": "transcrição local (faster-whisper small) + resumo automático do CRM (notas 23/09 10:53)",
     "resumo": "27 min 49 s. Abertura retoma a conversa com o robô ('vi que o senhor teve o período pelo INSS'). Lead: frentista desde 05/11/2025, bursite/tendinite, INSS até fevereiro, empresa não marcou exame de retorno, 'limbo previdenciário', mudou-se para SP por conta própria, exame de retorno em SP com restrição, pediu transferência depois de já estar em SP; já tem advogada só contra o INSS. A atendente orienta (não ficar sem justificar a ausência; laudo), checa insalubridade (recebia 30%), horas extras (não), FGTS (ok), checa tempo de contribuição no INSS e, aos 24 min, confronta: 'em nenhum momento a empresa mandou você sair de lá... o contrato de trabalho era lá'. Fecha pedindo e-mails da empresa e laudo recente.",
     "trechos": [
      {
       "timestamp": "00:25–00:39",
       "trecho": "[removido]",
       "interpretacao": "Boa retomada de contexto e pergunta aberta.",
       "alternativa": "(manter)"
      },
      {
       "timestamp": "03:29–03:38",
       "trecho": "[removido]",
       "interpretacao": "Aos 3 min o lead informa que já tem advogada para o INSS; o possível objeto do escritório seria só a parte trabalhista.",
       "alternativa": "Sugestão reescrita: 'Então o INSS já está com a sua advogada. Vamos focar na empresa: o que exatamente o senhor quer que a empresa faça ou pague?'"
      },
      {
       "timestamp": "14:52–15:14",
       "trecho": "[removido]",
       "interpretacao": "Orientação útil e honesta ao lead, mesmo sem contratação.",
       "alternativa": "(manter)"
      },
      {
       "timestamp": "24:09–24:41",
       "trecho": "[removido]",
       "interpretacao": "Qualificação feita na ligação: a tese trabalhista é frágil porque a mudança foi decisão do lead. Isso explicaria a desqualificação do dia seguinte — que, porém, não foi registrada como motivo nem comunicada com fechamento.",
       "alternativa": "Sugestão reescrita: 'Seu [pessoa], vou ser transparente: como a mudança foi decisão sua, a empresa não tem obrigação de transferir. Se ela demitir ou não responder, aí muda. Vou registrar seu caso e te aviso amanhã se conseguimos ajudar em algo além do INSS.'"
      },
      {
       "timestamp": "27:17–27:42",
       "trecho": "[removido]",
       "interpretacao": "Próximo passo definido para o lead, sem prazo de retorno do escritório. Ele enviou ~30 mensagens em 20 min e não houve acolhimento humano; no dia seguinte foi desqualificado com 1 mensagem.",
       "alternativa": "Sugestão reescrita: 'Me manda o e-mail e o laudo. Eu analiso com o Dr. e te retorno até amanhã ao meio-dia dizendo se conseguimos assumir algo contra a empresa.'"
      }
     ],
     "limites": "Transcrição automática com trechos de baixa confiança e repetições; nomes incertos."
    }
   ],
   "acertos": [
    "Ligação imediata (2 min após a 1ª mensagem) e longa, com investigação ampla."
   ],
   "melhorias": [
    "Acolher documentos recebidos: confirmar recebimento e prazo de retorno (30 mensagens sem resposta humana).",
    "Desqualificar com motivo registrado e mensagem de saída elegante (roteiro etapa 06), respondendo às réplicas do lead.",
    "Transferências após o expediente: combinar a regra da 1ª ação no dia útil seguinte (ex.: até 9h30) e cumpri-la.",
    "Confirmar o recebimento dos documentos no mesmo dia e dar prazo de retorno."
   ],
   "evidencias": [
    "[link removido] · 22/09 18:54 transferência",
    "[link removido] · 23/09 10:24 ligação 1669 s",
    "[link removido] · 23/09 10:51–11:11 ~30 mensagens do lead → robô",
    "[link removido] · 24/09 15:17 Desqualificado sem motivo"
   ],
   "conduzir_melhor": [
    "Sugestão reescrita (desqualificação): 'Seu [pessoa], analisei o que o senhor me enviou. Pelo que temos, o caminho hoje é o pedido no INSS e não uma ação trabalhista, então não conseguimos seguir com o escritório neste momento. Se a empresa não responder à transferência ou houver demissão, me chame que reavaliamos.'"
   ],
   "proxima_acao": "Não executar: responder às 3 mensagens de 24/09, registrar o motivo de perda e, se cabível, encaminhar orientação previdenciária.",
   "limitacoes": [
    "Sem texto das ~30 mensagens (podem ser documentos); sem transcrição da ligação no corte."
   ],
   "confianca": "alta para tempos; média para conteúdo da ligação.",
   "observado_vs_sugerido": [
    {
     "ts": "[telefone]T15:17:00-03:00",
     "trecho": "[removido]",
     "interpretacao": "Encerramento sem motivo registrado e sem fechar a conversa.",
     "alternativa": "Sugestão reescrita acima (saída elegante com porta aberta) + motivo de perda no CRM.",
     "ref": "[removido]"
    }
   ],
   "nomes_citados": [
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]"
   ]
  },
  {
   "id": "80038784",
   "nome": "Caso 8",
   "url": "",
   "servico": "[TRABALHISTA] Reconhecimento de vínculo",
   "origem": "Mídia Paga / [Mídia] Meta Ads",
   "criado_em": "[telefone]T07:31:45-03:00",
   "atendentes": [
    "Atendente 1"
   ],
   "responsavel_atual": "[pessoa]",
   "etapa_atual": "atendimento humano",
   "etapa_max": "atendimento humano",
   "status": "open",
   "motivo_perda": null,
   "tags": [
    "humano",
    "⭐️",
    "Trabalhista generica"
   ],
   "legacy": false,
   "motivo_selecao": "Avançado: etapa 'atendimento humano', criado na janela de 15 d, mensagens + 2 ligações",
   "contexto_robo": "Atualização de etapa sincronizada  Etapa anterior: Em Atendimento Nova etapa: Atendimento Humano  A etapa também foi atualizada na Kommo.; Pré triagem de Reconhecimento de Vínculo feita ✅ · formulário/qualificação: Score: 94; [T] Vínculo: Carteira assinada; [T] Irregularidades: Horas extras não pagas; Status de Qualificação: Qualificado",
   "transfer": {
    "ts": "[telefone]T07:33:09-03:00",
    "confidence": "confirmado",
    "rule": "entrada na etapa 'atendimento humano'"
   },
   "indicadores": {
    "h_transf_primeira_tentativa": {
     "valor": 3.78,
     "definicao": "horas corridas da transferência até 1ª ação humana dirigida ao lead (mensagem ou tentativa de ligação)",
     "base": "transferência confirmado",
     "cobertura": "completa"
    },
    "h_transf_primeira_mensagem": {
     "valor": 3.78,
     "definicao": "horas até 1ª mensagem humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_transf_primeira_ligacao": {
     "valor": 3.87,
     "definicao": "horas até 1ª tentativa de ligação de saída",
     "base": "notas/eventos de chamada",
     "cobertura": "completa"
    },
    "h_transf_primeira_conversa": {
     "valor": 6.71,
     "definicao": "horas até 1ª conversa efetiva (resposta do lead a humano ou ligação atendida)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "episodios_espera": {
     "valor": 4,
     "definicao": "grupos de mensagens do lead que exigiam retorno",
     "base": "mensagens anotadas requires_reply",
     "cobertura": "completa"
    },
    "mediana_resposta_h": {
     "valor": 2.2,
     "definicao": "mediana do tempo corrido última msg do lead → 1ª ação humana, só episódios concluídos",
     "base": "4 episódios concluídos",
     "cobertura": "completa"
    },
    "maior_espera_concluida_h": {
     "valor": 19.17,
     "definicao": "maior espera concluída",
     "base": "4 episódios",
     "cobertura": "completa"
    },
    "espera_aberta_h": {
     "valor": "NA",
     "definicao": "tempo acumulado até o corte da pendência aberta (não somado às medianas)",
     "base": "episódio aberto",
     "cobertura": "completa"
    },
    "msgs_humanas": {
     "valor": 10,
     "definicao": "mensagens enviadas por humano (fragmentos contados individualmente)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_lead": {
     "valor": 5,
     "definicao": "mensagens recebidas do lead",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_robo": {
     "valor": 1,
     "definicao": "mensagens do robô (contexto)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "abordagens_followup": {
     "valor": 2,
     "definicao": "ações humanas de saída após ≥4 h sem resposta do lead; fragmentos ≤10 min = 1",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tentativas_ligacao_saida": {
     "valor": 2,
     "definicao": "ligações de saída por humano (atendidas ou não), deduplicadas",
     "base": "notas de chamada + API4com",
     "cobertura": "completa"
    },
    "ligacoes_saida_atendidas": {
     "valor": 1,
     "definicao": "ligações de saída com duração > 0 (atendida ≠ conversa comercial)",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "chamadas_entrada": {
     "valor": 0,
     "definicao": "ligações recebidas",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "dias_com_atuacao_humana": {
     "valor": 2,
     "definicao": "dias distintos com ação humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_criadas": {
     "valor": 1,
     "definicao": "tarefas criadas",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_concluidas": {
     "valor": 1,
     "definicao": "tarefas concluídas (não prova ligação)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_vencidas": {
     "valor": 0,
     "definicao": "tarefas com prazo anterior ao corte sem conclusão",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_ate_agendamento": {
     "valor": "NA",
     "definicao": "horas transferência → reunião agendada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_reuniao_realizada": {
     "valor": "NA",
     "definicao": "horas transferência → reunião realizada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_envio_documento": {
     "valor": "NA",
     "definicao": "horas transferência → 1º documento enviado",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_assinatura_confirmada": {
     "valor": "NA",
     "definicao": "horas transferência → assinatura comprovada",
     "base": "marcos",
     "cobertura": "completa"
    }
   },
   "episodios": [
    {
     "start": "[telefone]T07:37:37-03:00",
     "last_lead_msg": "[telefone]T07:37:37-03:00",
     "msgs": [
      "01m39fw0b8fnvnf8hg0fwjrt6j"
     ],
     "refs": [
      "[link removido] · [telefone]T07:37:37-03:00 · evento 01m39fw0b8fnvnf8hg0fwjrt6j"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T11:20:06-03:00",
     "answer_ref": "[link removido] · [telefone]T11:20:06-03:00 · evento 01m39wkd26yx2dfvnme8e41qf2",
     "answer_action": "message",
     "wait_seconds": 13349.0,
     "open": false
    },
    {
     "start": "[telefone]T14:15:39-03:00",
     "last_lead_msg": "[telefone]T14:15:39-03:00",
     "msgs": [
      "01m3a6mtkrtpkkac0z5xjd4vqq"
     ],
     "refs": [
      "[link removido] · [telefone]T14:15:39-03:00 · evento 01m3a6mtkrtpkkac0z5xjd4vqq"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T14:57:20-03:00",
     "answer_ref": "[link removido] · [telefone]T14:57:20-03:00 · evento 01m3a9159j14zwzk21737vh3kx",
     "answer_action": "message",
     "wait_seconds": 2501.0,
     "open": false
    },
    {
     "start": "[telefone]T14:59:29-03:00",
     "last_lead_msg": "[telefone]T14:59:39-03:00",
     "msgs": [
      "01m3a952z8gxkjrnfzsqh4115g",
      "01m3a95cqr48t5538wb0tvghyx"
     ],
     "refs": [
      "[link removido] · [telefone]T14:59:29-03:00 · evento 01m3a952z8gxkjrnfzsqh4115g",
      "[link removido] · [telefone]T14:59:39-03:00 · evento 01m3a95cqr48t5538wb0tvghyx"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:11:40-03:00",
     "answer_ref": "[link removido] · [telefone]T15:11:40-03:00 · evento 01m3a9vd42c1g5w7rqvphqe3w9",
     "answer_action": "message",
     "wait_seconds": 721.0,
     "open": false
    },
    {
     "start": "[telefone]T15:15:44-03:00",
     "last_lead_msg": "[telefone]T15:15:44-03:00",
     "msgs": [
      "01m3aa2v40s04zxf5kj93c2sfv"
     ],
     "refs": [
      "[link removido] · [telefone]T15:15:44-03:00 · evento 01m3aa2v40s04zxf5kj93c2sfv"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T10:25:45-03:00",
     "answer_ref": "[link removido] · [telefone]T10:25:45-03:00 · nota [telefone]",
     "answer_action": "call_answered",
     "wait_seconds": 69001.0,
     "open": false
    }
   ],
   "followups": [
    {
     "ts": "[telefone]T13:52:42-03:00",
     "action": "message",
     "gap_hours": 6.25,
     "ref": "[removido]",
     "actor": "[pessoa]"
    },
    {
     "ts": "[telefone]T10:25:45-03:00",
     "action": "call_answered",
     "gap_hours": 19.17,
     "ref": "[removido]",
     "actor": "[pessoa]"
    }
   ],
   "chamadas": {
    "chamadas_localizadas": 2,
    "tentativas_saida": 2,
    "saida_atendidas": 1,
    "entrada": 0,
    "entrada_perdidas": 0,
    "duracao_total_s": 165,
    "com_gravacao_link": 1,
    "gravacao_acessivel": 1,
    "transcritas": 1,
    "lista": [
     {
      "ts": "[telefone]T11:25:37-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "4644ebbf-b3db-4801-ab2c-f1bba88d34b4",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T10:25:45-03:00",
      "direction": "out",
      "action": "call_answered",
      "actor": "[pessoa]",
      "duration": 165,
      "status": 4,
      "link": true,
      "recording_access": "acessivel",
      "id": "e1abf0ca-9482-41eb-885b-c616e6fc2aa0",
      "ref": "[removido]"
     }
    ]
   },
   "marcos": {
    "meeting_offered": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_accepted": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_scheduled": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_confirmed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_done": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_noshow": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_reschedule": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "proposal_presented": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_sent": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_signed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "legal_handoff": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "contrato_enviado": false,
    "contrato_assinado_confirmado": false,
    "procuracao_enviado": false,
    "procuracao_assinado_confirmado": false
   },
   "status_espera": "nao_determinavel",
   "ultimo_evento": "[telefone]T10:29:46-03:00",
   "rubrica": {
    "nota_normalizada": 41.7,
    "criterios_avaliados": 9,
    "cobertura": "9/10",
    "detalhe": {
     "c1": {
      "criterio": "Agilidade e continuidade da resposta",
      "nota": 2,
      "justificativa": "Transferência 07:33 (etapa 'atendimento humano'); lead respondeu ao robô 07:37; 1ª ação humana 11:19–11:20 (3,8 h; possivelmente antes do expediente, não confirmado). Mensagem do lead às 15:15 só teve retorno na ligação de 25/09 10:25 (19 h).",
      "evidencias": [
       "[link removido] · 24/09 07:33 etapa/tag",
       "[link removido] · 24/09 11:20 mensagens",
       "[link removido] · 24/09 15:15 → 25/09 10:25"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c2": {
      "criterio": "Retomada do contexto e personalização",
      "nota": 1,
      "justificativa": "Na ligação a atendente diz que não vê o relatório do assistente ('não aparece esse relatório seu com o nosso assistente') e volta a perguntar função e situação, embora o CRM tenha 'carteira assinada', '>3 anos', 'horas extras não pagas', score 94.",
      "evidencias": [
       "[link removido] · 25/09 10:25 transcrição 00:29–02:11",
       "[link removido] · 24/09 07:31 campos [T] e nota de pré-triagem"
      ],
      "categoria_causa": "integração"
     },
     "c3": {
      "criterio": "Investigação da necessidade e uso pertinente do SPIN",
      "nota": 2,
      "justificativa": "Perguntas fechadas e curtas (função, pretende sair, cartão de ponto, FGTS); sem espaço para narrar; avaliação automática: Situação 5/10, Implicação 4/10.",
      "evidencias": [
       "[link removido] · 25/09 10:25 transcrição 01:09–01:52",
       "[link removido] · 25/09 10:29 nota (resumo automático)"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c4": {
      "criterio": "Qualificação adequada ao serviço",
      "nota": 2,
      "justificativa": "Toca em rescisão indireta, registro de horas e FGTS, mas não conclui enquadramento nem documentos; ligação termina sem qualificação.",
      "evidencias": [
       "[link removido] · 25/09 10:25 transcrição 01:26–01:52"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c5": {
      "criterio": "Iniciativa e pertinência das ligações",
      "nota": 3,
      "justificativa": "Tentativa de ligação 5 min após as primeiras mensagens (11:25, caixa postal) e ligação atendida no dia seguinte às 10:25. Boa iniciativa; faltou nova tentativa após a ligação inconclusiva.",
      "evidencias": [
       "[link removido] · 24/09 11:25",
       "[link removido] · 25/09 10:25 ligação 165 s"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c6": {
      "criterio": "Clareza da apresentação de valor e do processo",
      "nota": 1,
      "justificativa": "Explicação mínima de rescisão indireta ('precisa mostrar as falhas da empresa'); não apresenta o que o escritório faz, etapas ou condições.",
      "evidencias": [
       "[link removido] · 25/09 10:25 transcrição 01:26–01:36"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c7": {
      "criterio": "Tratamento das dúvidas e objeções",
      "nota": "NA",
      "justificativa": "Lead não levantou objeções; apenas estranhou não haver o relatório.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c8": {
      "criterio": "Condução para reunião ou próximo passo concreto",
      "nota": 1,
      "justificativa": "Ligação encerra com 'o cliente retorna a ligação depois' (resumo automático) sem horário definido; nenhuma ação humana depois de 25/09 10:29.",
      "evidencias": [
       "[link removido] · 25/09 10:25 transcrição 02:20–02:39",
       "[link removido] · 25/09 10:29 última mensagem humana"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c9": {
      "criterio": "Follow-up, confirmação e acompanhamento até assinatura",
      "nota": 1,
      "justificativa": "Sem follow-up entre 25/09 10:29 e o corte (3,5 dias) apesar de a ligação ter ficado inconclusiva.",
      "evidencias": [
       "[link removido] · 25/09 10:29 → corte 28/09 22:42"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c10": {
      "criterio": "Organização e registros no CRM",
      "nota": 2,
      "justificativa": "Tarefa concluída e ligações registradas com gravação; sem nota humana; contexto do robô existe no CRM e não foi usado; sem tarefa de retorno.",
      "evidencias": [
       "[link removido] · 24/09 11:19 tarefa concluída"
      ],
      "categoria_causa": "registro"
     }
    }
   },
   "timeline": [
    {
     "id": "01m39fh98zf3sqwehzvmhc5qgm",
     "lead_id": "80038784",
     "ts": "[telefone]T07:31:45-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "Trabalhista generica",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39fh98zp3pfzwe43qhhkcex",
     "lead_id": "80038784",
     "ts": "[telefone]T07:31:45-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39fh8k8yjmb89qz3r7d2zd2",
     "lead_id": "80038784",
     "ts": "[telefone]T07:31:45-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39fhagjyw77808eyxcbz28p",
     "lead_id": "80038784",
     "ts": "[telefone]T07:31:46-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "agente",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39fhadap50p2cy03f8gcepx",
     "lead_id": "80038784",
     "ts": "[telefone]T07:31:46-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "responsible_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39fhar7czm1jz77hnaw42qa",
     "lead_id": "80038784",
     "ts": "[telefone]T07:31:47-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39fhar25v3c1m4tkcg1kzm8",
     "lead_id": "80038784",
     "ts": "[telefone]T07:31:47-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "⭐️",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80038784",
     "ts": "[telefone]T07:31:47-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80038784",
     "ts": "[telefone]T07:31:47-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80038784",
     "ts": "[telefone]T07:31:47-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "sync_robo"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39fkc9q7jcg1ktf8k5459f1",
     "lead_id": "80038784",
     "ts": "[telefone]T07:32:54-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "stage_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845351,
      "to": 104845355
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39fkvjfpcga19vwzkspfb1e",
     "lead_id": "80038784",
     "ts": "[telefone]T07:33:09-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "agente"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39fkv2nf6qxqzng93y9jyfy",
     "lead_id": "80038784",
     "ts": "[telefone]T07:33:09-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "humano",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39fkv23d22c7mkdwr75k4me",
     "lead_id": "80038784",
     "ts": "[telefone]T07:33:09-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "stage_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845355,
      "to": 108794987
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "transfer-80038784",
     "lead_id": "80038784",
     "ts": "[telefone]T07:33:09-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "transfer",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80038784",
     "ts": "[telefone]T07:33:11-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "sync_robo"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "80038784",
     "ts": "[telefone]T07:33:11-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "system",
     "action": "task_created",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T07:38:11-03:00",
      "completed": true,
      "responsible": "[pessoa]",
      "result": "Em atendimento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39fm7ag7wzbmsdrv1r06zgd",
     "lead_id": "80038784",
     "ts": "[telefone]T07:33:22-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1081,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80038784",
     "ts": "[telefone]T07:33:29-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39fw0b8fnvnf8hg0fwjrt6j",
     "lead_id": "80038784",
     "ts": "[telefone]T07:37:37-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1081
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "tc[telefone]",
     "lead_id": "80038784",
     "ts": "[telefone]T11:19:59-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "human",
     "action": "task_completed",
     "actor_id": null,
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "result": "Em atendimento"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39wkd26yx2dfvnme8e41qf2",
     "lead_id": "80038784",
     "ts": "[telefone]T11:20:06-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1081,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39wkrgmtf6a13xdw832n18j",
     "lead_id": "80038784",
     "ts": "[telefone]T11:20:18-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1081,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39wvtm7vp7b8c1jykc1qqgq",
     "lead_id": "80038784",
     "ts": "[telefone]T11:24:42-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1081,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80038784",
     "ts": "[telefone]T11:25:37-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "4644ebbf-b3db-4801-ab2c-f1bba88d34b4",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39x047bbqxbtrbx8vsqw85a",
     "lead_id": "80038784",
     "ts": "[telefone]T11:27:03-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1081,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m39x08kdr51bev7jz96wps8e",
     "lead_id": "80038784",
     "ts": "[telefone]T11:27:08-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1081,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3a5attv7h7hjppb3qe4j6cs",
     "lead_id": "80038784",
     "ts": "[telefone]T13:52:42-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1081,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3a6mtkrtpkkac0z5xjd4vqq",
     "lead_id": "80038784",
     "ts": "[telefone]T14:15:39-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1081
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a9159j14zwzk21737vh3kx",
     "lead_id": "80038784",
     "ts": "[telefone]T14:57:20-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1081,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3a91rpt30b694e603cf3nvq",
     "lead_id": "80038784",
     "ts": "[telefone]T14:57:40-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1081,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3a952z8gxkjrnfzsqh4115g",
     "lead_id": "80038784",
     "ts": "[telefone]T14:59:29-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1081
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a95cqr48t5538wb0tvghyx",
     "lead_id": "80038784",
     "ts": "[telefone]T14:59:39-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1081
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3a9vd42c1g5w7rqvphqe3w9",
     "lead_id": "80038784",
     "ts": "[telefone]T15:11:40-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1081,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aa2v40s04zxf5kj93c2sfv",
     "lead_id": "80038784",
     "ts": "[telefone]T15:15:44-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1081
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80038784",
     "ts": "[telefone]T10:25:45-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_answered",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 165,
      "link": "[removido]",
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "e1abf0ca-9482-41eb-885b-c616e6fc2aa0",
      "call_status": 4,
      "call_result": "[removido]",
      "recording_access": "acessivel",
      "transcript": "[removido]",
      "transcript_segments": [
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]",
       "[removido]"
      ]
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3cc3ak4zv6d177bnq8psvj9",
     "lead_id": "80038784",
     "ts": "[telefone]T10:29:25-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1081,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80038784",
     "ts": "[telefone]T10:29:46-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "resumo_automatico"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80038784",
     "ts": "[telefone]T10:29:46-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "resumo_automatico"
     },
     "requires_reply": null,
     "agreed_return_at": null
    }
   ],
   "calls_analysis": [
    {
     "call_id": "e1abf0ca-9482-41eb-885b-c616e6fc2aa0",
     "transcript_source": "transcrição local (faster-whisper small; primeiros 30 s com baixa confiança) + resumo automático (notas de 25/09 10:29)",
     "resumo": "165 s. Abertura confusa; pergunta função e se pretende sair; explica que rescisão indireta exige provar falhas; pergunta sobre ponto e FGTS; admite não ver o relatório do assistente; sugere que o lead entrou em contato fora do horário; encerra sem próximo passo datado.",
     "trechos": [
      {
       "timestamp": "00:27–00:43",
       "trecho": "[removido]",
       "interpretacao": "Reinicia a investigação do zero apesar de o CRM ter carteira assinada, mais de 3 anos e horas extras não pagas (campos [T] e nota de pré-triagem).",
       "alternativa": "Sugestão reescrita: 'Vi aqui que o senhor está há mais de 3 anos, com carteira assinada, e que as horas extras não estão sendo pagas. Me conta como é o seu horário hoje e como a empresa registra o ponto.'"
      },
      {
       "timestamp": "02:01–02:11",
       "trecho": "[removido]",
       "interpretacao": "Expõe uma falha interna ao lead e transfere a dúvida para ele; o resumo do agente existe no CRM (nota de 07:31).",
       "alternativa": "Sugestão reescrita: 'Eu tenho aqui o resumo do que você conversou com nosso assistente; só quero confirmar dois pontos com você.'"
      },
      {
       "timestamp": "02:20–02:39",
       "trecho": "[removido]",
       "interpretacao": "Encerra sem compromisso; o resumo automático registra 'cliente retorna a ligação depois'. Nenhum contato humano posterior.",
       "alternativa": "Sugestão reescrita: 'Pra eu te orientar direito, preciso de 10 minutos com calma. Hoje às 14h ou amanhã às 9h, qual fica melhor pro senhor? Eu te ligo deste número.'"
      }
     ],
     "limites": "Transcrição de baixa confiança no início; tom de voz não avaliado (o resumo automático comenta tom, mas não é verificável aqui)."
    }
   ],
   "acertos": [
    "Tentativa de ligação 5 minutos após o primeiro contato humano e ligação atendida no dia seguinte.",
    "Respostas em menos de 1 h durante a tarde de 24/09."
   ],
   "melhorias": [
    "Abrir a ligação com o que o robô e o formulário já colheram (score 94, carteira assinada, horas extras); não pedir ao lead para repetir.",
    "Nunca encerrar ligação inconclusiva sem horário: oferecer duas opções e criar tarefa.",
    "Retomar em até 1 dia útil após ligação inconclusiva; aqui não houve nenhuma ação em 3,5 dias.",
    "Ler o resumo e os campos do lead no CRM antes de ligar (a nota do assistente estava no lead)."
   ],
   "evidencias": [
    "[link removido] · 24/09 07:31 nota de pré-triagem e campos [T]",
    "[link removido] · 25/09 10:25 ligação 165 s (transcrição local)",
    "[link removido] · 25/09 10:29 última ação humana"
   ],
   "conduzir_melhor": [
    "Sugestão reescrita (abertura): 'Bom dia! Aqui é a Dra. [pessoa], do escritório Gabriel Habib. Vi que você falou com nosso assistente sobre horas extras não pagas, com carteira assinada há mais de 3 anos. Está podendo falar 10 minutos agora?'",
    "Sugestão reescrita (fechamento): 'Vou te mandar por aqui o que preciso ver: prints do ponto ou escala e os 3 últimos holerites. Amanhã às 9h eu te ligo pra gente decidir o caminho.'"
   ],
   "proxima_acao": "Não executar: mensagem propondo dois horários de ligação e pedindo escala/holerites; tarefa com data; registrar nota da ligação de 25/09.",
   "limitacoes": [
    "Texto das mensagens indisponível; parte da condução pode ter ocorrido por texto entre 11:20 e 15:11 de 24/09.",
    "Início da transcrição com baixa confiança."
   ],
   "confianca": "alta para tempos e ligações; média para qualidade da ligação.",
   "observado_vs_sugerido": [
    {
     "ts": "[telefone]T10:25:00-03:00",
     "trecho": "[removido]",
     "interpretacao": "Falha de retomada de contexto exposta ao lead; o resumo existia no CRM.",
     "alternativa": "Sugestão reescrita: 'Tenho aqui o resumo do que você conversou com nosso assistente; vou confirmar só dois pontos.'",
     "ref": "[removido]"
    }
   ],
   "nomes_citados": [
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]"
   ]
  },
  {
   "id": "80064014",
   "nome": "Caso 9",
   "url": "",
   "servico": "não informado no CRM",
   "origem": "Orgânico",
   "criado_em": "[telefone]T15:16:39-03:00",
   "atendentes": [
    "Atendente 1"
   ],
   "responsavel_atual": "[pessoa]",
   "etapa_atual": "Negociação",
   "etapa_max": "Negociação",
   "status": "open",
   "motivo_perda": null,
   "tags": [
    "humano"
   ],
   "legacy": false,
   "motivo_selecao": "Avançado: Negociação, criado na janela de 15 d, condução por texto sem ligação",
   "contexto_robo": "sem notas de sincronização do robô",
   "transfer": {
    "ts": "[telefone]T15:17:05-03:00",
    "confidence": "confirmado",
    "rule": "tag 'humano' adicionada"
   },
   "indicadores": {
    "h_transf_primeira_tentativa": {
     "valor": 0.01,
     "definicao": "horas corridas da transferência até 1ª ação humana dirigida ao lead (mensagem ou tentativa de ligação)",
     "base": "transferência confirmado",
     "cobertura": "completa"
    },
    "h_transf_primeira_mensagem": {
     "valor": 0.01,
     "definicao": "horas até 1ª mensagem humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_transf_primeira_ligacao": {
     "valor": "NA",
     "definicao": "horas até 1ª tentativa de ligação de saída",
     "base": "notas/eventos de chamada",
     "cobertura": "não ocorreu"
    },
    "h_transf_primeira_conversa": {
     "valor": 0.1,
     "definicao": "horas até 1ª conversa efetiva (resposta do lead a humano ou ligação atendida)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "episodios_espera": {
     "valor": 6,
     "definicao": "grupos de mensagens do lead que exigiam retorno",
     "base": "mensagens anotadas requires_reply",
     "cobertura": "completa"
    },
    "mediana_resposta_h": {
     "valor": 0.05,
     "definicao": "mediana do tempo corrido última msg do lead → 1ª ação humana, só episódios concluídos",
     "base": "5 episódios concluídos",
     "cobertura": "completa"
    },
    "maior_espera_concluida_h": {
     "valor": 0.27,
     "definicao": "maior espera concluída",
     "base": "5 episódios",
     "cobertura": "completa"
    },
    "espera_aberta_h": {
     "valor": 86.17,
     "definicao": "tempo acumulado até o corte da pendência aberta (não somado às medianas)",
     "base": "episódio aberto",
     "cobertura": "completa"
    },
    "msgs_humanas": {
     "valor": 17,
     "definicao": "mensagens enviadas por humano (fragmentos contados individualmente)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_lead": {
     "valor": 10,
     "definicao": "mensagens recebidas do lead",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_robo": {
     "valor": 3,
     "definicao": "mensagens do robô (contexto)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "abordagens_followup": {
     "valor": 0,
     "definicao": "ações humanas de saída após ≥4 h sem resposta do lead; fragmentos ≤10 min = 1",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tentativas_ligacao_saida": {
     "valor": 0,
     "definicao": "ligações de saída por humano (atendidas ou não), deduplicadas",
     "base": "notas de chamada + API4com",
     "cobertura": "completa"
    },
    "ligacoes_saida_atendidas": {
     "valor": 0,
     "definicao": "ligações de saída com duração > 0 (atendida ≠ conversa comercial)",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "chamadas_entrada": {
     "valor": 0,
     "definicao": "ligações recebidas",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "dias_com_atuacao_humana": {
     "valor": 1,
     "definicao": "dias distintos com ação humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_criadas": {
     "valor": 1,
     "definicao": "tarefas criadas",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_concluidas": {
     "valor": 0,
     "definicao": "tarefas concluídas (não prova ligação)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_vencidas": {
     "valor": 1,
     "definicao": "tarefas com prazo anterior ao corte sem conclusão",
     "base": "eventos",
     "cobertura": "completa"
    },
    "h_ate_agendamento": {
     "valor": "NA",
     "definicao": "horas transferência → reunião agendada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_reuniao_realizada": {
     "valor": "NA",
     "definicao": "horas transferência → reunião realizada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_envio_documento": {
     "valor": "NA",
     "definicao": "horas transferência → 1º documento enviado",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_assinatura_confirmada": {
     "valor": "NA",
     "definicao": "horas transferência → assinatura comprovada",
     "base": "marcos",
     "cobertura": "completa"
    }
   },
   "episodios": [
    {
     "start": "[telefone]T15:23:06-03:00",
     "last_lead_msg": "[telefone]T15:23:16-03:00",
     "msgs": [
      "01m3aagarg0hkzqeb3tmvnb8y3",
      "01m3aagmh0zwd7p1087q4324pr"
     ],
     "refs": [
      "[link removido] · [telefone]T15:23:06-03:00 · evento 01m3aagarg0hkzqeb3tmvnb8y3",
      "[link removido] · [telefone]T15:23:16-03:00 · evento 01m3aagmh0zwd7p1087q4324pr"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:26:31-03:00",
     "answer_ref": "[link removido] · [telefone]T15:26:31-03:00 · evento 01m3aapk9gskj20a1jp8jwgngp",
     "answer_action": "message",
     "wait_seconds": 195.0,
     "open": false
    },
    {
     "start": "[telefone]T15:27:33-03:00",
     "last_lead_msg": "[telefone]T15:28:08-03:00",
     "msgs": [
      "01m3aarfg8tn9zvt11523t18qf",
      "01m3aashp08a70v9xr6pdbhm93"
     ],
     "refs": [
      "[link removido] · [telefone]T15:27:33-03:00 · evento 01m3aarfg8tn9zvt11523t18qf",
      "[link removido] · [telefone]T15:28:08-03:00 · evento 01m3aashp08a70v9xr6pdbhm93"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:28:19-03:00",
     "answer_ref": "[link removido] · [telefone]T15:28:19-03:00 · evento 01m3aaswtrnehqhznk7asrt39q",
     "answer_action": "message",
     "wait_seconds": 11.0,
     "open": false
    },
    {
     "start": "[telefone]T15:31:24-03:00",
     "last_lead_msg": "[telefone]T15:31:24-03:00",
     "msgs": [
      "01m3aazh30dgmzjm7772nvmsyc"
     ],
     "refs": [
      "[link removido] · [telefone]T15:31:24-03:00 · evento 01m3aazh30dgmzjm7772nvmsyc"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:34:24-03:00",
     "answer_ref": "[link removido] · [telefone]T15:34:24-03:00 · evento 01m3ab511becjbt95dsa3dkr9j",
     "answer_action": "message",
     "wait_seconds": 180.0,
     "open": false
    },
    {
     "start": "[telefone]T15:40:33-03:00",
     "last_lead_msg": "[telefone]T15:40:33-03:00",
     "msgs": [
      "01m3abg978bkygrtj42atdj748"
     ],
     "refs": [
      "[link removido] · [telefone]T15:40:33-03:00 · evento 01m3abg978bkygrtj42atdj748"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T15:56:30-03:00",
     "answer_ref": "[link removido] · [telefone]T15:56:30-03:00 · evento 01m3acdfyafzj970x7synemt5g",
     "answer_action": "message",
     "wait_seconds": 957.0,
     "open": false
    },
    {
     "start": "[telefone]T16:59:28-03:00",
     "last_lead_msg": "[telefone]T17:34:40-03:00",
     "msgs": [
      "01m3ag0s80hy7sp8gkswb8nmtq",
      "01m3aj17r0s9edrx7k4fvdcg4j"
     ],
     "refs": [
      "[link removido] · [telefone]T16:59:28-03:00 · evento 01m3ag0s80hy7sp8gkswb8nmtq",
      "[link removido] · [telefone]T17:34:40-03:00 · evento 01m3aj17r0s9edrx7k4fvdcg4j"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T17:34:44-03:00",
     "answer_ref": "[link removido] · [telefone]T17:34:44-03:00 · evento 01m3aj1bxc5zjh9r0cjn760bkb",
     "answer_action": "message",
     "wait_seconds": 4.0,
     "open": false
    },
    {
     "start": "[telefone]T08:31:06-03:00",
     "last_lead_msg": "[telefone]T08:32:02-03:00",
     "msgs": [
      "01m3c5an4gx1gb0e16xp7cnpv4",
      "01m3c5cbtg25tbr7sdptd0e4k1"
     ],
     "refs": [
      "[link removido] · [telefone]T08:31:06-03:00 · evento 01m3c5an4gx1gb0e16xp7cnpv4",
      "[link removido] · [telefone]T08:32:02-03:00 · evento 01m3c5cbtg25tbr7sdptd0e4k1"
     ],
     "status": "aguardando_equipe",
     "open": true,
     "elapsed_to_cutoff_seconds": 310221.0
    }
   ],
   "followups": [],
   "chamadas": {
    "chamadas_localizadas": 0,
    "tentativas_saida": 0,
    "saida_atendidas": 0,
    "entrada": 0,
    "entrada_perdidas": 0,
    "duracao_total_s": 0,
    "com_gravacao_link": 0,
    "gravacao_acessivel": 0,
    "transcritas": 0,
    "lista": []
   },
   "marcos": {
    "meeting_offered": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_accepted": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_scheduled": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_confirmed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_done": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_noshow": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_reschedule": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "proposal_presented": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_sent": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_signed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "legal_handoff": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "contrato_enviado": false,
    "contrato_assinado_confirmado": false,
    "procuracao_enviado": false,
    "procuracao_assinado_confirmado": false
   },
   "status_espera": "aguardando_equipe",
   "ultimo_evento": "[telefone]T08:32:02-03:00",
   "rubrica": {
    "nota_normalizada": 37.5,
    "criterios_avaliados": 4,
    "cobertura": "4/10",
    "detalhe": {
     "c1": {
      "criterio": "Agilidade e continuidade da resposta",
      "nota": 2,
      "justificativa": "Lead orgânico criado e atendido por humano em 1 min; 17 mensagens humanas e respostas em minutos em 24/09. Em 25/09 08:31–08:32 o lead escreveu, o robô respondeu 3 vezes e nenhum humano respondeu até o corte (86 h, com fim de semana).",
      "evidencias": [
       "[link removido] · 24/09 15:17–17:53",
       "[link removido] · 25/09 08:31 → sem retorno humano"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c2": {
      "criterio": "Retomada do contexto e personalização",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c3": {
      "criterio": "Investigação da necessidade e uso pertinente do SPIN",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c4": {
      "criterio": "Qualificação adequada ao serviço",
      "nota": "DI",
      "justificativa": "Sem texto; serviço não informado.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c5": {
      "criterio": "Iniciativa e pertinência das ligações",
      "nota": 2,
      "justificativa": "Nenhuma tentativa de ligação em lead movido direto para Negociação; sem evidência de recusa.",
      "evidencias": [
       "[link removido] · 24/09 15:17 etapa Negociação"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c6": {
      "criterio": "Clareza da apresentação de valor e do processo",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c7": {
      "criterio": "Tratamento das dúvidas e objeções",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c8": {
      "criterio": "Condução para reunião ou próximo passo concreto",
      "nota": "DI",
      "justificativa": "Etapa Negociação atribuída no 1º minuto; o que foi proposto não é verificável.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c9": {
      "criterio": "Follow-up, confirmação e acompanhamento até assinatura",
      "nota": 1,
      "justificativa": "Pendência aberta desde 25/09 08:32 (86 h no corte); tarefa de 15:22 não concluída.",
      "evidencias": [
       "[link removido] · 25/09 08:32",
       "[link removido] · 24/09 15:17 tarefa vencida"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c10": {
      "criterio": "Organização e registros no CRM",
      "nota": 1,
      "justificativa": "Salto Novo Lead → Negociação em 1 min; tarefa vencida; sem notas; serviço vazio; robô ativo em lead humano.",
      "evidencias": [
       "[link removido] · 24/09 15:17",
       "[link removido] · 25/09 08:31 robô ×3"
      ],
      "categoria_causa": "registro"
     }
    }
   },
   "timeline": [
    {
     "id": "01m3aa4gtrz3w3x6cdr41xcypn",
     "lead_id": "80064014",
     "ts": "[telefone]T15:16:39-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aa4kd62j59xshjfxjenp9z",
     "lead_id": "80064014",
     "ts": "[telefone]T15:16:41-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "responsible_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aa59xryrm7qehxfv1swrj4",
     "lead_id": "80064014",
     "ts": "[telefone]T15:17:04-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845351,
      "to": 104845499
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aa5akaqgdphzav5060x6ay",
     "lead_id": "80064014",
     "ts": "[telefone]T15:17:05-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "humano",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "transfer-80064014",
     "lead_id": "80064014",
     "ts": "[telefone]T15:17:05-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "transfer",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "t[telefone]",
     "lead_id": "80064014",
     "ts": "[telefone]T15:17:07-03:00",
     "channel": "task",
     "direction": "internal",
     "actor_type": "system",
     "action": "task_created",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "due": "[telefone]T15:22:06-03:00",
      "completed": false,
      "responsible": "[pessoa]",
      "result": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aa6gr5wnsgb40628agsv5z",
     "lead_id": "80064014",
     "ts": "[telefone]T15:17:44-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aa7cttmywegq2njva7m0qc",
     "lead_id": "80064014",
     "ts": "[telefone]T15:18:13-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aa8p62nvzfnk2dt7phwn72",
     "lead_id": "80064014",
     "ts": "[telefone]T15:18:55-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aa9ek8h2wd8wa0f71knzea",
     "lead_id": "80064014",
     "ts": "[telefone]T15:19:20-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aagarg0hkzqeb3tmvnb8y3",
     "lead_id": "80064014",
     "ts": "[telefone]T15:23:06-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1083
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3aagmh0zwd7p1087q4324pr",
     "lead_id": "80064014",
     "ts": "[telefone]T15:23:16-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1083
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3aapk9gskj20a1jp8jwgngp",
     "lead_id": "80064014",
     "ts": "[telefone]T15:26:31-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aaqa4axyyp8h58vgwwcf8k",
     "lead_id": "80064014",
     "ts": "[telefone]T15:26:54-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aarfg8tn9zvt11523t18qf",
     "lead_id": "80064014",
     "ts": "[telefone]T15:27:33-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1083
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3aashp08a70v9xr6pdbhm93",
     "lead_id": "80064014",
     "ts": "[telefone]T15:28:08-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1083
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3aaswtrnehqhznk7asrt39q",
     "lead_id": "80064014",
     "ts": "[telefone]T15:28:19-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aatqar60wr6ebfqjgzzyxk",
     "lead_id": "80064014",
     "ts": "[telefone]T15:28:46-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aax79c59tsmxnbhgcwccbz",
     "lead_id": "80064014",
     "ts": "[telefone]T15:30:08-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aazh30dgmzjm7772nvmsyc",
     "lead_id": "80064014",
     "ts": "[telefone]T15:31:24-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1083
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3ab511becjbt95dsa3dkr9j",
     "lead_id": "80064014",
     "ts": "[telefone]T15:34:24-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3ab8yyq4gtez6mq5rrgvssq",
     "lead_id": "80064014",
     "ts": "[telefone]T15:36:33-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3abg978bkygrtj42atdj748",
     "lead_id": "80064014",
     "ts": "[telefone]T15:40:33-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1083
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3acdfyafzj970x7synemt5g",
     "lead_id": "80064014",
     "ts": "[telefone]T15:56:30-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3afp1hj1h86g6mpxy9e59a3",
     "lead_id": "80064014",
     "ts": "[telefone]T16:53:36-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3ag0ch6rgqa7b1bdexpabph",
     "lead_id": "80064014",
     "ts": "[telefone]T16:59:14-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3ag0s80hy7sp8gkswb8nmtq",
     "lead_id": "80064014",
     "ts": "[telefone]T16:59:28-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1083
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3aj17r0s9edrx7k4fvdcg4j",
     "lead_id": "80064014",
     "ts": "[telefone]T17:34:40-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1083
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3aj1bxc5zjh9r0cjn760bkb",
     "lead_id": "80064014",
     "ts": "[telefone]T17:34:44-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3aj2bm0kacqd5h3evye0ym5",
     "lead_id": "80064014",
     "ts": "[telefone]T17:35:16-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3ak3ejrgvgz0td168maqywn",
     "lead_id": "80064014",
     "ts": "[telefone]T17:53:21-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222315",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3c5an4gx1gb0e16xp7cnpv4",
     "lead_id": "80064014",
     "ts": "[telefone]T08:31:06-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1083
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3c5ap3rybr13sm1sxrecgzt",
     "lead_id": "80064014",
     "ts": "[telefone]T08:31:07-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3c5bkd8c1q6zntc2mspxy62",
     "lead_id": "80064014",
     "ts": "[telefone]T08:31:37-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3c5bnbrcnsf03jtpbdx9wbq",
     "lead_id": "80064014",
     "ts": "[telefone]T08:31:39-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1083,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3c5cbtg25tbr7sdptd0e4k1",
     "lead_id": "80064014",
     "ts": "[telefone]T08:32:02-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1083
     },
     "requires_reply": true,
     "agreed_return_at": null
    }
   ],
   "calls_analysis": [],
   "acertos": [
    "Atendimento humano imediato e intenso no 1º dia (17 mensagens, respostas em minutos)."
   ],
   "melhorias": [
    "Responder à pendência de 25/09 — lead em Negociação esperando há 3,5 dias.",
    "Registrar o que foi negociado (nota) e criar tarefa datada; concluir a tarefa automática ou removê-la."
   ],
   "evidencias": [
    "[link removido] · 24/09 15:17–17:53",
    "[link removido] · 25/09 08:31–08:32 lead → robô ×3"
   ],
   "conduzir_melhor": [
    "Sugestão reescrita (25/09 manhã): 'Bom dia! Vi sua mensagem. Posso te ligar às 11h pra fecharmos os detalhes? Leva 10 minutos.'"
   ],
   "proxima_acao": "Não executar: responder ao lead, oferecer ligação e registrar nota da negociação.",
   "limitacoes": [
    "Sem texto; caso avaliado apenas por tempos e registros."
   ],
   "confianca": "alta para tempos; baixa para condução.",
   "observado_vs_sugerido": [],
   "nomes_citados": [
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]"
   ]
  },
  {
   "id": "80105650",
   "nome": "Caso 10",
   "url": "",
   "servico": "[TRABALHISTA] Reconhecimento de vínculo",
   "origem": "Mídia Paga / [Mídia] Meta Ads",
   "criado_em": "[telefone]T13:31:48-03:00",
   "atendentes": [
    "Atendente 1"
   ],
   "responsavel_atual": "[pessoa]",
   "etapa_atual": "Desqualificado",
   "etapa_max": "Desqualificado",
   "status": "open",
   "motivo_perda": null,
   "tags": [
    "agente",
    "⭐️",
    "Trabalhista generica"
   ],
   "legacy": false,
   "motivo_selecao": "Travado/perdido: Desqualificado após atuação humana e 2 ligações, criado na janela de 15 d",
   "contexto_robo": "Pré triagem de Reconhecimento de Vínculo feita ✅ · formulário/qualificação: Score: 100; [T] Vínculo: Carteira assinada; [T] Irregularidades: Horas extras não pagas; Status de Qualificação: Qualificado",
   "transfer": {
    "ts": null,
    "confidence": "nao_identificavel",
    "rule": null
   },
   "indicadores": {
    "h_transf_primeira_tentativa": {
     "valor": "DI",
     "definicao": "tempo corrido desde a transferência",
     "base": "transferência não identificável",
     "cobertura": "indisponível"
    },
    "h_transf_primeira_mensagem": {
     "valor": "DI",
     "definicao": "tempo corrido desde a transferência",
     "base": "transferência não identificável",
     "cobertura": "indisponível"
    },
    "h_transf_primeira_ligacao": {
     "valor": "DI",
     "definicao": "tempo corrido desde a transferência",
     "base": "transferência não identificável",
     "cobertura": "indisponível"
    },
    "h_transf_primeira_conversa": {
     "valor": "DI",
     "definicao": "tempo corrido desde a transferência",
     "base": "transferência não identificável",
     "cobertura": "indisponível"
    },
    "episodios_espera": {
     "valor": 4,
     "definicao": "grupos de mensagens do lead que exigiam retorno",
     "base": "mensagens anotadas requires_reply",
     "cobertura": "completa"
    },
    "mediana_resposta_h": {
     "valor": 2.91,
     "definicao": "mediana do tempo corrido última msg do lead → 1ª ação humana, só episódios concluídos",
     "base": "3 episódios concluídos",
     "cobertura": "completa"
    },
    "maior_espera_concluida_h": {
     "valor": 20.11,
     "definicao": "maior espera concluída",
     "base": "3 episódios",
     "cobertura": "completa"
    },
    "espera_aberta_h": {
     "valor": 7.75,
     "definicao": "tempo acumulado até o corte da pendência aberta (não somado às medianas)",
     "base": "episódio aberto",
     "cobertura": "completa"
    },
    "msgs_humanas": {
     "valor": 8,
     "definicao": "mensagens enviadas por humano (fragmentos contados individualmente)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_lead": {
     "valor": 13,
     "definicao": "mensagens recebidas do lead",
     "base": "eventos",
     "cobertura": "completa"
    },
    "msgs_robo": {
     "valor": 11,
     "definicao": "mensagens do robô (contexto)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "abordagens_followup": {
     "valor": 1,
     "definicao": "ações humanas de saída após ≥4 h sem resposta do lead; fragmentos ≤10 min = 1",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tentativas_ligacao_saida": {
     "valor": 2,
     "definicao": "ligações de saída por humano (atendidas ou não), deduplicadas",
     "base": "notas de chamada + API4com",
     "cobertura": "completa"
    },
    "ligacoes_saida_atendidas": {
     "valor": 0,
     "definicao": "ligações de saída com duração > 0 (atendida ≠ conversa comercial)",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "chamadas_entrada": {
     "valor": 0,
     "definicao": "ligações recebidas",
     "base": "notas de chamada",
     "cobertura": "completa"
    },
    "dias_com_atuacao_humana": {
     "valor": 1,
     "definicao": "dias distintos com ação humana",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_criadas": {
     "valor": 0,
     "definicao": "tarefas criadas",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_concluidas": {
     "valor": 0,
     "definicao": "tarefas concluídas (não prova ligação)",
     "base": "eventos",
     "cobertura": "completa"
    },
    "tarefas_vencidas": {
     "valor": 0,
     "definicao": "tarefas com prazo anterior ao corte sem conclusão",
     "base": "eventos",
     "cobertura": "não aplicável"
    },
    "h_ate_agendamento": {
     "valor": "DI",
     "definicao": "horas transferência → reunião agendada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_reuniao_realizada": {
     "valor": "DI",
     "definicao": "horas transferência → reunião realizada",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_envio_documento": {
     "valor": "DI",
     "definicao": "horas transferência → 1º documento enviado",
     "base": "marcos",
     "cobertura": "completa"
    },
    "h_ate_assinatura_confirmada": {
     "valor": "DI",
     "definicao": "horas transferência → assinatura comprovada",
     "base": "marcos",
     "cobertura": "completa"
    }
   },
   "episodios": [
    {
     "start": "[telefone]T13:34:30-03:00",
     "last_lead_msg": "[telefone]T14:35:26-03:00",
     "msgs": [
      "01m3hvfmfghk1kervv4mvyhde8",
      "01m3hvm9wrrez6pfsqxc7p1vg5",
      "01m3hyv1zgw53m34k83vmv2nqs",
      "01m3hyx1erv6j0x5qndswssp79",
      "01m3hyz6sgmybtt1v9s7dhzbtt"
     ],
     "refs": [
      "[link removido] · [telefone]T13:34:30-03:00 · evento 01m3hvfmfghk1kervv4mvyhde8",
      "[link removido] · [telefone]T13:37:03-03:00 · evento 01m3hvm9wrrez6pfsqxc7p1vg5",
      "[link removido] · [telefone]T14:33:10-03:00 · evento 01m3hyv1zgw53m34k83vmv2nqs",
      "[link removido] · [telefone]T14:34:15-03:00 · evento 01m3hyx1erv6j0x5qndswssp79",
      "[link removido] · [telefone]T14:35:26-03:00 · evento 01m3hyz6sgmybtt1v9s7dhzbtt"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T10:41:52-03:00",
     "answer_ref": "[link removido] · [telefone]T10:41:52-03:00 · evento 01m3m408rw5regbtvdh05s1g9x",
     "answer_action": "message",
     "wait_seconds": 72386.0,
     "open": false
    },
    {
     "start": "[telefone]T11:23:20-03:00",
     "last_lead_msg": "[telefone]T11:25:31-03:00",
     "msgs": [
      "01m3m6c5y0kqccdztkp6m06eny",
      "01m3m6f8j8g32s43tafbnhq25e",
      "01m3m6g5vr838hf5dvcn8vbrz0"
     ],
     "refs": [
      "[link removido] · [telefone]T11:23:20-03:00 · evento 01m3m6c5y0kqccdztkp6m06eny",
      "[link removido] · [telefone]T11:25:01-03:00 · evento 01m3m6f8j8g32s43tafbnhq25e",
      "[link removido] · [telefone]T11:25:31-03:00 · evento 01m3m6g5vr838hf5dvcn8vbrz0"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T14:20:14-03:00",
     "answer_ref": "[link removido] · [telefone]T14:20:14-03:00 · nota [telefone]",
     "answer_action": "call_attempt",
     "wait_seconds": 10483.0,
     "open": false
    },
    {
     "start": "[telefone]T14:30:42-03:00",
     "last_lead_msg": "[telefone]T14:32:10-03:00",
     "msgs": [
      "01m3mh38ege03w7r85kek7s9gr",
      "01m3mh42t8ae3yaw54swm4rkpt",
      "01m3mh4v7gt3g178376z9j06te",
      "01m3mh5ycg7fbf97vqpa7f0s8a"
     ],
     "refs": [
      "[link removido] · [telefone]T14:30:42-03:00 · evento 01m3mh38ege03w7r85kek7s9gr",
      "[link removido] · [telefone]T14:31:09-03:00 · evento 01m3mh42t8ae3yaw54swm4rkpt",
      "[link removido] · [telefone]T14:31:34-03:00 · evento 01m3mh4v7gt3g178376z9j06te",
      "[link removido] · [telefone]T14:32:10-03:00 · evento 01m3mh5ycg7fbf97vqpa7f0s8a"
     ],
     "status": "encerrado",
     "answered_at": "[telefone]T14:37:12-03:00",
     "answer_ref": "[link removido] · [telefone]T14:37:12-03:00 · evento 01m3mhf5zz5833dmpkd6py0kqs",
     "answer_action": "message",
     "wait_seconds": 302.0,
     "open": false
    },
    {
     "start": "[telefone]T14:57:40-03:00",
     "last_lead_msg": "[telefone]T14:57:40-03:00",
     "msgs": [
      "01m3mjmmh0p8xb297124h7k3mg"
     ],
     "refs": [
      "[link removido] · [telefone]T14:57:40-03:00 · evento 01m3mjmmh0p8xb297124h7k3mg"
     ],
     "status": "aguardando_equipe",
     "open": true,
     "elapsed_to_cutoff_seconds": 27883.0
    }
   ],
   "followups": [
    {
     "ts": "[telefone]T10:41:52-03:00",
     "action": "message",
     "gap_hours": 20.11,
     "ref": "[removido]",
     "actor": "[pessoa]"
    }
   ],
   "chamadas": {
    "chamadas_localizadas": 2,
    "tentativas_saida": 2,
    "saida_atendidas": 0,
    "entrada": 0,
    "entrada_perdidas": 0,
    "duracao_total_s": 0,
    "com_gravacao_link": 0,
    "gravacao_acessivel": 0,
    "transcritas": 0,
    "lista": [
     {
      "ts": "[telefone]T10:45:23-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "fefc6356-fbcc-4c24-9fa9-67a6f50b114c",
      "ref": "[removido]"
     },
     {
      "ts": "[telefone]T14:20:14-03:00",
      "direction": "out",
      "action": "call_attempt",
      "actor": "[pessoa]",
      "duration": 0,
      "status": 6,
      "link": false,
      "recording_access": "sem_link",
      "id": "c84db94e-5e[telefone]f-c9a9fb4e3337",
      "ref": "[removido]"
     }
    ]
   },
   "marcos": {
    "meeting_offered": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_accepted": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_scheduled": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_confirmed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_done": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_noshow": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "meeting_reschedule": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "proposal_presented": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_sent": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "document_signed": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "legal_handoff": {
     "ocorreu": false,
     "primeira": null,
     "evidencias": []
    },
    "contrato_enviado": false,
    "contrato_assinado_confirmado": false,
    "procuracao_enviado": false,
    "procuracao_assinado_confirmado": false
   },
   "status_espera": "aguardando_equipe",
   "ultimo_evento": "[telefone]T15:00:23-03:00",
   "rubrica": {
    "nota_normalizada": 50.0,
    "criterios_avaliados": 3,
    "cobertura": "3/10",
    "detalhe": {
     "c1": {
      "criterio": "Agilidade e continuidade da resposta",
      "nota": 3,
      "justificativa": "Lead de sábado (27/09 13:31) atendido pelo robô; humano entrou domingo 10:41 (19 h; fim de semana). Mensagens do lead às 11:23–11:25 tiveram só resposta do robô; humano voltou 14:20 (3 h). Depois, respostas em 5–15 min. Última mensagem do lead (14:57) seguida de desqualificação às 15:00 sem resposta identificável (texto indisponível).",
      "evidencias": [
       "[link removido] · 28/09 10:41",
       "[link removido] · 28/09 11:23 → robô 11:23; humano 14:20",
       "[link removido] · 28/09 14:57 → 15:00 Desqualificado"
      ],
      "categoria_causa": "processo/distribuição"
     },
     "c2": {
      "criterio": "Retomada do contexto e personalização",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c3": {
      "criterio": "Investigação da necessidade e uso pertinente do SPIN",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c4": {
      "criterio": "Qualificação adequada ao serviço",
      "nota": "DI",
      "justificativa": "Sem texto; robô marcou score 100 e 'horas extras não pagas'; desqualificado em 1,5 h de conversa humana sem motivo registrado.",
      "evidencias": [
       "[link removido] · 27/09 13:31 campos [T]",
       "[link removido] · 28/09 15:00"
      ],
      "categoria_causa": "registro"
     },
     "c5": {
      "criterio": "Iniciativa e pertinência das ligações",
      "nota": 2,
      "justificativa": "Duas ligações 'canceladas' (10:45 e 14:20) — encerradas antes de tocar/atender; não constituem tentativa efetiva; sem nova tentativa.",
      "evidencias": [
       "[link removido] · 28/09 10:45 e 14:20 notas de chamada 'Cancelada'"
      ],
      "categoria_causa": "habilidade comercial"
     },
     "c6": {
      "criterio": "Clareza da apresentação de valor e do processo",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c7": {
      "criterio": "Tratamento das dúvidas e objeções",
      "nota": "DI",
      "justificativa": "Sem texto.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c8": {
      "criterio": "Condução para reunião ou próximo passo concreto",
      "nota": "NA",
      "justificativa": "Desqualificado antes de qualquer etapa de condução.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c9": {
      "criterio": "Follow-up, confirmação e acompanhamento até assinatura",
      "nota": "NA",
      "justificativa": "Nada agendado/enviado.",
      "evidencias": [],
      "categoria_causa": null
     },
     "c10": {
      "criterio": "Organização e registros no CRM",
      "nota": 1,
      "justificativa": "Sem motivo de perda; tag 'agente' mantida em lead atendido por humano; robô respondeu enquanto a humana atendia; desqualificação 3 min após a última mensagem do lead sem nota.",
      "evidencias": [
       "[link removido] · 28/09 11:23–12:25 robô",
       "[link removido] · 28/09 15:00"
      ],
      "categoria_causa": "registro"
     }
    }
   },
   "timeline": [
    {
     "id": "01m3hvaptsqm8ga2w58me3nxpx",
     "lead_id": "80105650",
     "ts": "[telefone]T13:31:48-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hvaptsxweevk75w65vphgz",
     "lead_id": "80105650",
     "ts": "[telefone]T13:31:48-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "Trabalhista generica",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hvap90p2mqz87pmcr5b2x2",
     "lead_id": "80105650",
     "ts": "[telefone]T13:31:48-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hvar4z71bt3w4nmj3e9stg",
     "lead_id": "80105650",
     "ts": "[telefone]T13:31:49-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "⭐️",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hvar4zd7ervg463enaq21n",
     "lead_id": "80105650",
     "ts": "[telefone]T13:31:49-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "other",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "[MP] Meta Ads"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hvar3ba91g05szksgd43yr",
     "lead_id": "80105650",
     "ts": "[telefone]T13:31:49-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "responsible_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hvar2j5gkkfxan44hhrwpj",
     "lead_id": "80105650",
     "ts": "[telefone]T13:31:49-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "tag_added",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "tag": "agente",
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hvar26p1g0pp16qzdkz9an",
     "lead_id": "80105650",
     "ts": "[telefone]T13:31:49-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "responsible_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {},
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80105650",
     "ts": "[telefone]T13:31:49-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80105650",
     "ts": "[telefone]T13:31:49-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80105650",
     "ts": "[telefone]T13:31:49-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "sync_robo"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hvbyveky865p0pwjcpcrbs",
     "lead_id": "80105650",
     "ts": "[telefone]T13:32:29-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "system",
     "action": "stage_change",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845351,
      "to": 104845355
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hvd0g072z6mvsr6gg9ep47",
     "lead_id": "80105650",
     "ts": "[telefone]T13:33:04-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80105650",
     "ts": "[telefone]T13:33:10-03:00",
     "channel": "note",
     "direction": "internal",
     "actor_type": "system",
     "action": "note",
     "actor_id": "0",
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "kind": "nota"
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hvfmfghk1kervv4mvyhde8",
     "lead_id": "80105650",
     "ts": "[telefone]T13:34:30-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1095
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3hvgmprdye1vykct7mwz9bt",
     "lead_id": "80105650",
     "ts": "[telefone]T13:35:03-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hvm9wrrez6pfsqxc7p1vg5",
     "lead_id": "80105650",
     "ts": "[telefone]T13:37:03-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1095
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3hvn768ag7nf35s0pdefa1y",
     "lead_id": "80105650",
     "ts": "[telefone]T13:37:33-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hyhr48c213qp6wytbx0d9b",
     "lead_id": "80105650",
     "ts": "[telefone]T14:28:05-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hyv1zgw53m34k83vmv2nqs",
     "lead_id": "80105650",
     "ts": "[telefone]T14:33:10-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1095
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3hyw26r45bypx6bf7xdbngv",
     "lead_id": "80105650",
     "ts": "[telefone]T14:33:43-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hyx1erv6j0x5qndswssp79",
     "lead_id": "80105650",
     "ts": "[telefone]T14:34:15-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1095
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3hyxvtgk1nv7m2vcwen2jbe",
     "lead_id": "80105650",
     "ts": "[telefone]T14:34:42-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3hyz6sgmybtt1v9s7dhzbtt",
     "lead_id": "80105650",
     "ts": "[telefone]T14:35:26-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1095
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3hz033r1c86em2c06r2ajfe",
     "lead_id": "80105650",
     "ts": "[telefone]T14:35:55-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3j2fbn8sn7zke1ea9qgjm7j",
     "lead_id": "80105650",
     "ts": "[telefone]T15:36:41-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3m408rw5regbtvdh05s1g9x",
     "lead_id": "80105650",
     "ts": "[telefone]T10:41:52-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3m40f10fn740m54f68z8b33",
     "lead_id": "80105650",
     "ts": "[telefone]T10:41:58-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3m412g7m9qmnez4ve08qsm9",
     "lead_id": "80105650",
     "ts": "[telefone]T10:42:18-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80105650",
     "ts": "[telefone]T10:45:23-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "fefc6356-fbcc-4c24-9fa9-67a6f50b114c",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3m6c5y0kqccdztkp6m06eny",
     "lead_id": "80105650",
     "ts": "[telefone]T11:23:20-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1095
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3m6db1g944hcet6tb17qwxr",
     "lead_id": "80105650",
     "ts": "[telefone]T11:23:58-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3m6f8j8g32s43tafbnhq25e",
     "lead_id": "80105650",
     "ts": "[telefone]T11:25:01-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1095
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3m6g5vr838hf5dvcn8vbrz0",
     "lead_id": "80105650",
     "ts": "[telefone]T11:25:31-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1095
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3m6g8sgkd9gppp8afj28fd0",
     "lead_id": "80105650",
     "ts": "[telefone]T11:25:34-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3m9yc7g3bm0aejfn8f8pz81",
     "lead_id": "80105650",
     "ts": "[telefone]T12:25:42-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "robot",
     "action": "message",
     "actor_id": "0",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "n[telefone]",
     "lead_id": "80105650",
     "ts": "[telefone]T14:20:14-03:00",
     "channel": "call",
     "direction": "out",
     "actor_type": "human",
     "action": "call_attempt",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "duration": 0,
      "link": null,
      "phone": "[removido]",
      "source": "api4com-integration",
      "uniq": "c84db94e-5e[telefone]f-c9a9fb4e3337",
      "call_status": 6,
      "call_result": "[removido]",
      "recording_access": "sem_link",
      "transcript": null,
      "transcript_segments": null
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3mghrnj3rhct5rrj376mr1g",
     "lead_id": "80105650",
     "ts": "[telefone]T14:21:08-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3mgjp6ge07tjj24c05rfen7",
     "lead_id": "80105650",
     "ts": "[telefone]T14:21:39-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3mgkf3qdfyt24t9yk4r0557",
     "lead_id": "80105650",
     "ts": "[telefone]T14:22:04-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3mgm48evt37d2kcc6d2q2s9",
     "lead_id": "80105650",
     "ts": "[telefone]T14:22:26-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3mh38ege03w7r85kek7s9gr",
     "lead_id": "80105650",
     "ts": "[telefone]T14:30:42-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1095
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3mh42t8ae3yaw54swm4rkpt",
     "lead_id": "80105650",
     "ts": "[telefone]T14:31:09-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1095
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3mh4v7gt3g178376z9j06te",
     "lead_id": "80105650",
     "ts": "[telefone]T14:31:34-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1095
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3mh5ycg7fbf97vqpa7f0s8a",
     "lead_id": "80105650",
     "ts": "[telefone]T14:32:10-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1095
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3mhf5zz5833dmpkd6py0kqs",
     "lead_id": "80105650",
     "ts": "[telefone]T14:37:12-03:00",
     "channel": "whatsapp",
     "direction": "out",
     "actor_type": "human",
     "action": "message",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "talk_id": 1095,
      "lote": false
     },
     "requires_reply": null,
     "agreed_return_at": null
    },
    {
     "id": "01m3mjmmh0p8xb297124h7k3mg",
     "lead_id": "80105650",
     "ts": "[telefone]T14:57:40-03:00",
     "channel": "whatsapp",
     "direction": "in",
     "actor_type": "lead",
     "action": "message",
     "actor_id": null,
     "actor_name": null,
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "assumido": true,
      "talk_id": 1095
     },
     "requires_reply": true,
     "agreed_return_at": null
    },
    {
     "id": "01m3mjsm07y6zbgegyx221c7xw",
     "lead_id": "80105650",
     "ts": "[telefone]T15:00:23-03:00",
     "channel": "system",
     "direction": "internal",
     "actor_type": "human",
     "action": "stage_change",
     "actor_id": "15222339",
     "actor_name": "[removido]",
     "content": "[removido]",
     "ts_precision": "s",
     "source": "kommo_api",
     "ref": "[removido]",
     "meta": {
      "from": 104845355,
      "to": 111874647
     },
     "requires_reply": null,
     "agreed_return_at": null
    }
   ],
   "calls_analysis": [
    {
     "call_id": "28/09 10:45 e 14:20 (canceladas)",
     "transcript_source": "sem áudio",
     "resumo": "Ligações encerradas antes de completar ('Cancelada'); não houve conversa.",
     "trechos": [],
     "limites": "status 6 sem duração"
    }
   ],
   "acertos": [
    "Atuação humana no domingo com respostas rápidas na tarde."
   ],
   "melhorias": [
    "Registrar motivo de perda e enviar mensagem de saída ao desqualificar (roteiro etapa 06).",
    "Se a ligação é cancelada antes de tocar, registrar o porquê ou tentar de novo; 2 'canceladas' não são tentativas reais."
   ],
   "evidencias": [
    "[link removido] · 28/09 10:41–15:00"
   ],
   "conduzir_melhor": [
    "Sugestão reescrita (saída): 'Obrigada por compartilhar sua situação. Pelo que temos hoje, o caminho jurídico não é o mais indicado. Se aparecer algo novo (comprovantes, mensagens, testemunhas), me chame que reavaliamos.'"
   ],
   "proxima_acao": "Não executar: registrar motivo de perda; responder à mensagem de 14:57 com a saída elegante.",
   "limitacoes": [
    "Sem texto; a mensagem das 14:57 pode ser um encerramento pelo próprio lead."
   ],
   "confianca": "média",
   "observado_vs_sugerido": [],
   "nomes_citados": [
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]",
    "[pessoa]"
   ]
  }
 ],
 "consolidado": {
  "n_casos": 10,
  "indicadores": {
   "abordagens_followup": {
    "n_com_dado": 10,
    "n_na": 0,
    "n_indisponivel": 0,
    "mediana": 2.0,
    "min": 0,
    "max": 5,
    "soma": 22,
    "denominador": "10 de 10 casos",
    "definicao": "ações humanas de saída após ≥4 h sem resposta do lead; fragmentos ≤10 min = 1"
   },
   "chamadas_entrada": {
    "n_com_dado": 10,
    "n_na": 0,
    "n_indisponivel": 0,
    "mediana": 0.0,
    "min": 0,
    "max": 0,
    "soma": 0,
    "denominador": "10 de 10 casos",
    "definicao": "ligações recebidas"
   },
   "dias_com_atuacao_humana": {
    "n_com_dado": 10,
    "n_na": 0,
    "n_indisponivel": 0,
    "mediana": 3.0,
    "min": 1,
    "max": 9,
    "soma": 37,
    "denominador": "10 de 10 casos",
    "definicao": "dias distintos com ação humana"
   },
   "episodios_espera": {
    "n_com_dado": 10,
    "n_na": 0,
    "n_indisponivel": 0,
    "mediana": 5.5,
    "min": 0,
    "max": 22,
    "soma": 77,
    "denominador": "10 de 10 casos",
    "definicao": "grupos de mensagens do lead que exigiam retorno"
   },
   "espera_aberta_h": {
    "n_com_dado": 4,
    "n_na": 6,
    "n_indisponivel": 0,
    "mediana": 93.65,
    "min": 7.75,
    "max": 103.38,
    "soma": null,
    "denominador": "4 de 10 casos",
    "definicao": "tempo acumulado até o corte da pendência aberta (não somado às medianas)"
   },
   "h_ate_agendamento": {
    "n_com_dado": 1,
    "n_na": 8,
    "n_indisponivel": 1,
    "mediana": 0.0,
    "min": 0.0,
    "max": 0.0,
    "soma": null,
    "denominador": "1 de 10 casos",
    "definicao": "horas transferência → reunião agendada"
   },
   "h_ate_assinatura_confirmada": {
    "n_com_dado": 0,
    "n_na": 9,
    "n_indisponivel": 1,
    "mediana": null,
    "min": null,
    "max": null,
    "soma": null,
    "denominador": "0 de 10 casos",
    "definicao": "horas transferência → assinatura comprovada"
   },
   "h_ate_envio_documento": {
    "n_com_dado": 1,
    "n_na": 8,
    "n_indisponivel": 1,
    "mediana": 4.25,
    "min": 4.25,
    "max": 4.25,
    "soma": null,
    "denominador": "1 de 10 casos",
    "definicao": "horas transferência → 1º documento enviado"
   },
   "h_ate_reuniao_realizada": {
    "n_com_dado": 5,
    "n_na": 4,
    "n_indisponivel": 1,
    "mediana": 15.51,
    "min": 2.57,
    "max": 2617.42,
    "soma": null,
    "denominador": "5 de 10 casos",
    "definicao": "horas transferência → reunião realizada"
   },
   "h_transf_primeira_conversa": {
    "n_com_dado": 9,
    "n_na": 0,
    "n_indisponivel": 1,
    "mediana": 0.27,
    "min": 0.1,
    "max": 2425.9,
    "soma": null,
    "denominador": "9 de 10 casos",
    "definicao": "horas até 1ª conversa efetiva (resposta do lead a humano ou ligação atendida)"
   },
   "h_transf_primeira_ligacao": {
    "n_com_dado": 6,
    "n_na": 3,
    "n_indisponivel": 1,
    "mediana": 261.7,
    "min": 0.18,
    "max": 700.59,
    "soma": null,
    "denominador": "6 de 10 casos",
    "definicao": "horas até 1ª tentativa de ligação de saída"
   },
   "h_transf_primeira_mensagem": {
    "n_com_dado": 9,
    "n_na": 0,
    "n_indisponivel": 1,
    "mediana": 2.0,
    "min": 0.01,
    "max": 2425.83,
    "soma": null,
    "denominador": "9 de 10 casos",
    "definicao": "horas até 1ª mensagem humana"
   },
   "h_transf_primeira_tentativa": {
    "n_com_dado": 9,
    "n_na": 0,
    "n_indisponivel": 1,
    "mediana": 1.66,
    "min": 0.01,
    "max": 700.59,
    "soma": null,
    "denominador": "9 de 10 casos",
    "definicao": "horas corridas da transferência até 1ª ação humana dirigida ao lead (mensagem ou tentativa de ligação)"
   },
   "ligacoes_saida_atendidas": {
    "n_com_dado": 10,
    "n_na": 0,
    "n_indisponivel": 0,
    "mediana": 0.0,
    "min": 0,
    "max": 3,
    "soma": 8,
    "denominador": "10 de 10 casos",
    "definicao": "ligações de saída com duração > 0 (atendida ≠ conversa comercial)"
   },
   "maior_espera_concluida_h": {
    "n_com_dado": 9,
    "n_na": 1,
    "n_indisponivel": 0,
    "mediana": 26.0,
    "min": 0.03,
    "max": 503.82,
    "soma": null,
    "denominador": "9 de 10 casos",
    "definicao": "maior espera concluída"
   },
   "mediana_resposta_h": {
    "n_com_dado": 9,
    "n_na": 1,
    "n_indisponivel": 0,
    "mediana": 0.06,
    "min": 0.02,
    "max": 7.74,
    "soma": null,
    "denominador": "9 de 10 casos",
    "definicao": "mediana do tempo corrido última msg do lead → 1ª ação humana, só episódios concluídos"
   },
   "msgs_humanas": {
    "n_com_dado": 10,
    "n_na": 0,
    "n_indisponivel": 0,
    "mediana": 15.0,
    "min": 4,
    "max": 46,
    "soma": 194,
    "denominador": "10 de 10 casos",
    "definicao": "mensagens enviadas por humano (fragmentos contados individualmente)"
   },
   "msgs_lead": {
    "n_com_dado": 10,
    "n_na": 0,
    "n_indisponivel": 0,
    "mediana": 17.5,
    "min": 0,
    "max": 64,
    "soma": 239,
    "denominador": "10 de 10 casos",
    "definicao": "mensagens recebidas do lead"
   },
   "msgs_robo": {
    "n_com_dado": 10,
    "n_na": 0,
    "n_indisponivel": 0,
    "mediana": 2.5,
    "min": 0,
    "max": 36,
    "soma": 69,
    "denominador": "10 de 10 casos",
    "definicao": "mensagens do robô (contexto)"
   },
   "tarefas_concluidas": {
    "n_com_dado": 10,
    "n_na": 0,
    "n_indisponivel": 0,
    "mediana": 1.0,
    "min": 0,
    "max": 3,
    "soma": 12,
    "denominador": "10 de 10 casos",
    "definicao": "tarefas concluídas (não prova ligação)"
   },
   "tarefas_criadas": {
    "n_com_dado": 10,
    "n_na": 0,
    "n_indisponivel": 0,
    "mediana": 1.0,
    "min": 0,
    "max": 3,
    "soma": 15,
    "denominador": "10 de 10 casos",
    "definicao": "tarefas criadas"
   },
   "tarefas_vencidas": {
    "n_com_dado": 10,
    "n_na": 0,
    "n_indisponivel": 0,
    "mediana": 0.0,
    "min": 0,
    "max": 1,
    "soma": 3,
    "denominador": "10 de 10 casos",
    "definicao": "tarefas com prazo anterior ao corte sem conclusão"
   },
   "tentativas_ligacao_saida": {
    "n_com_dado": 10,
    "n_na": 0,
    "n_indisponivel": 0,
    "mediana": 1.0,
    "min": 0,
    "max": 11,
    "soma": 24,
    "denominador": "10 de 10 casos",
    "definicao": "ligações de saída por humano (atendidas ou não), deduplicadas"
   }
  },
  "status_espera": {
   "aguardando_lead": 3,
   "nao_determinavel": 2,
   "aguardando_equipe": 4,
   "encerrado": 1
  },
  "transferencia": {
   "confirmado": 5,
   "inferido": 4,
   "nao_identificavel": 1
  }
 },
 "criterios": [
  {
   "id": "c1",
   "label": "Agilidade e continuidade da resposta"
  },
  {
   "id": "c2",
   "label": "Retomada do contexto e personalização"
  },
  {
   "id": "c3",
   "label": "Investigação da necessidade e uso pertinente do SPIN"
  },
  {
   "id": "c4",
   "label": "Qualificação adequada ao serviço"
  },
  {
   "id": "c5",
   "label": "Iniciativa e pertinência das ligações"
  },
  {
   "id": "c6",
   "label": "Clareza da apresentação de valor e do processo"
  },
  {
   "id": "c7",
   "label": "Tratamento das dúvidas e objeções"
  },
  {
   "id": "c8",
   "label": "Condução para reunião ou próximo passo concreto"
  },
  {
   "id": "c9",
   "label": "Follow-up, confirmação e acompanhamento até assinatura"
  },
  {
   "id": "c10",
   "label": "Organização e registros no CRM"
  }
 ],
 "padroes": [
  {
   "comportamento": "Lead fica sem resposta humana por dias após escrever (pendência aberta no corte ou lacuna > 3 dias)",
   "frequencia": "4 de 10 casos com pendência aberta no corte (86 h a 103 h); 8 de 10 com ao menos uma lacuna > 3 dias entre mensagem do lead e ação humana",
   "evidencias": [
    "[link removido] · 25/09 08:32 → corte (86 h, Negociação)",
    "[link removido] · 24/09 15:19 → corte (103 h)",
    "[link removido] · 24/09 17:35 → corte (101 h, pós-ativação)",
    "[link removido] · 04/09 14:26 → 25/09 (21 dias)",
    "[link removido] · 04/09 → 17/09 (13 dias)"
   ],
   "impacto": "Leads em Negociação/Análise esfriam; documentos enviados não são conferidos; clientes ativados percebem abandono.",
   "mudanca": "Rotina diária de 'fila de leads com última mensagem do lead sem resposta humana' (incluindo pós-ativação e pós-desqualificação) com meta proposta a validar; cadência do Playbook aplicada em Negociação.",
   "acompanhamento": "Indicador: nº de leads com última mensagem do lead sem ação humana > 24 h (base: 4 de 10 na amostra). Responsável: gestor comercial.",
   "causa": "processo/distribuição"
  },
  {
   "comportamento": "Próximo passo sem prazo/horário ou sem tarefa após ligação ou reunião",
   "frequencia": "3 de 5 ligações/reuniões avaliáveis (79877820, 80038784, 79533290 reunião OK com tarefa; 77456896 prazos sem tarefa; 80012252 docs sem acolhimento)",
   "evidencias": [
    "[link removido] · 17/09 12:33–12:52 transcrição",
    "[link removido] · 25/09 10:25 transcrição 02:20–02:39",
    "[link removido] · 25/09 11:52 resumo: 'até amanhã' e 'segunda' sem tarefa"
   ],
   "impacto": "Bola fica com o lead; 1ª cobrança vem dias depois (4 dias em 79877820; nunca em 80038784).",
   "mudanca": "Fechar toda ligação com data/hora do próximo contato e criar tarefa no CRM antes de desligar.",
   "acompanhamento": "Indicador: % de ligações atendidas > 60 s seguidas de tarefa com prazo em até 1 h (base: 1 de 5).",
   "causa": "habilidade comercial"
  },
  {
   "comportamento": "Retomada de contexto: humano reinicia a investigação sem usar o que o robô/formulário colheu",
   "frequencia": "1 de 2 ligações avaliáveis com abertura audível (80038784 negativa; 79877820 positiva)",
   "evidencias": [
    "[link removido] · 25/09 transcrição 00:29–02:11 'não aparece esse relatório'",
    "[link removido] · 17/09 transcrição 00:13–00:28"
   ],
   "impacto": "Lead repete a história; percepção de desorganização.",
   "mudanca": "Abertura padrão de 3 linhas citando serviço, situação e o que já foi dito ao assistente; checar se o resumo do agente aparece no lead (integração).",
   "acompanhamento": "Amostra mensal de 5 ligações: abertura cita contexto? (base: 1 de 2).",
   "causa": "habilidade comercial"
  },
  {
   "comportamento": "Registro incompleto no CRM: sem motivo de perda, tarefas vencidas, etapas que não refletem a realidade, serviço vazio, ligação no usuário de integração",
   "frequencia": "Motivo de perda ausente: 2 de 2 desqualificados; tarefas vencidas: 3 de 10; serviço não informado: 4 de 10; etapa avançada sem contato comprovado: 2 de [telefone], 80064014)",
   "evidencias": [
    "[link removido] · 24/09 15:17",
    "[link removido] · 28/09 15:00",
    "[link removido] · 15/09 15:45 chamada created_by 10348307",
    "[link removido] · 08/06 10:49–12:07"
   ],
   "impacto": "Sem motivo de perda não há aprendizado; sem tarefa não há cadência; a etapa não reflete a realidade.",
   "mudanca": "Motivo de perda obrigatório na etapa Desqualificado; nota curta após cada ligação; preencher 'Serviço' na triagem; concluir/limpar tarefas automáticas.",
   "acompanhamento": "Indicadores: % desqualificados com motivo (base 0 de 2); tarefas vencidas > 2 dias (base 3 de 10).",
   "causa": "registro"
  },
  {
   "comportamento": "Transferência fora do expediente gera tarefa de 5 min impossível e 1ª ação só no dia seguinte",
   "frequencia": "2 de [telefone] às 18:54 → 15,5 h; 80038784 às 07:33 → 3,8 h)",
   "evidencias": [
    "[link removido] · 22/09 18:54 tarefa due 18:59 → concluída 23/09 10:15",
    "[link removido] · 24/09 07:33 → 11:19"
   ],
   "impacto": "Lead que acabou de falar com o robô fica sem expectativa; a tarefa vencida vira ruído.",
   "mudanca": "Mensagem automática de expectativa fora do expediente ('nossa equipe fala com você a partir das 9h') e prazo da tarefa calculado no horário útil. Proposta para validação, expediente não confirmado.",
   "acompanhamento": "Tempo transferência → 1ª ação humana em horário útil (base: mediana 1,7 h; extremos 15,5 h e 700 h por registro).",
   "causa": "processo/distribuição"
  }
 ],
 "boas_praticas": [
  "Ligar primeiro e retornar no horário que o lead pediu, avisando antes por mensagem (79877820, 17/09).",
  "Pergunta de fechamento explícita ao fim da ligação: 'podemos dar seguimento? ficou alguma dúvida?' (79877820).",
  "Tarefa com resultado descrevendo o combinado: 'Reunião realizada. Enviar documentos para contratação…' (79533290, 24/09).",
  "Nota de caso com datas e fatos (79358770, 04/09).",
  "Persistir por ligação quando o lead não escreve (77456896: 3 atendidas em 10 tentativas)."
 ],
 "casos_discussao": [
  {
   "caso": "79877820",
   "motivo": "Acerto (ligação em 11 min, investigação ampla) e oportunidade (fechar com prazo; implicação)."
  },
  {
   "caso": "80038784",
   "motivo": "Retomada de contexto falhou na ligação; encerramento sem próximo passo; sem follow-up em 3,5 dias."
  },
  {
   "caso": "80012252",
   "motivo": "Ligação longa seguida de 30 mensagens do lead sem retorno humano; desqualificação sem motivo."
  },
  {
   "caso": "79763954",
   "motivo": "Jornada completa em 5 h; discutir o pós-ativação (5 mensagens sem resposta por 13 dias)."
  },
  {
   "caso": "79533290",
   "motivo": "13 dias sem cadência em Negociação; reunião realizada 20 dias depois; o que mudou?"
  }
 ],
 "prioridades": [
  {
   "titulo": "Zerar a fila de leads sem resposta humana",
   "descricao": "Rotina diária (manhã e tarde) sobre leads cuja última mensagem é do lead, incluindo pós-ativação e pós-desqualificação.",
   "frequencia": "4 de 10 pendentes no corte; 8 de 10 com lacuna > 3 dias"
  },
  {
   "titulo": "Toda ligação/reunião termina com data, hora e tarefa",
   "descricao": "Script de fechamento + tarefa antes de desligar; cobrança em D+1 se o combinado não chegar.",
   "frequencia": "3 de 5 avaliáveis sem prazo/tarefa"
  },
  {
   "titulo": "Registro mínimo: motivo de perda, serviço, nota após ligação",
   "descricao": "Motivo obrigatório ao desqualificar; campo Serviço na triagem; nota curta com o combinado após cada ligação.",
   "frequencia": "0 de 2 desqualificados com motivo; 4 de 10 sem serviço"
  },
  {
   "titulo": "Abertura com contexto do robô",
   "descricao": "3 linhas padrão citando serviço e situação já informados; checar exibição do resumo do agente.",
   "frequencia": "1 de 2 ligações avaliáveis"
  }
 ],
 "plano_7d": [
  "Dia 1: listar todos os leads do funil Manual com última mensagem do lead sem ação humana; responder ou registrar motivo (gestor comercial + SDRs).",
  "Dia 2: definir quem responde às filas de pós-ativação e de documentos recebidos, e em que prazo (gestor comercial).",
  "Dia 3: adotar o script de fechamento de ligação (data + hora + tarefa) e o script de abertura com contexto; simular em dupla (SDRs).",
  "Dia 3: motivo de perda obrigatório ao desqualificar e nota curta após cada ligação (atendentes + responsável CRM).",
  "Dia 5: revisar os 10 casos do painel e executar as 'próximas ações recomendadas' que ainda fizerem sentido (SDRs).",
  "Dia 7: check-in de 20 min com os indicadores abaixo (gestor comercial)."
 ],
 "indicadores_30d": [
  {
   "indicador": "Leads com última mensagem do lead sem ação humana > 24 h (contagem no funil)",
   "linha_base": "4 de 10 na amostra (86–103 h)",
   "responsavel": "Gestor comercial",
   "criterio": "0 pendências > 24 h em dias úteis (proposta para validação)"
  },
  {
   "indicador": "Ligações atendidas > 60 s seguidas de tarefa com prazo em ≤ 1 h",
   "linha_base": "1 de 5",
   "responsavel": "SDRs",
   "criterio": "≥ 4 de 5 (proposta)"
  },
  {
   "indicador": "Desqualificados com motivo de perda registrado",
   "linha_base": "0 de 2",
   "responsavel": "SDRs / responsável CRM",
   "criterio": "100%"
  },
  {
   "indicador": "Tempo transferência → 1ª ação humana em horário útil (mediana)",
   "linha_base": "≈ 1,7 h (n = 7 com transferência identificável e registro confiável)",
   "responsavel": "SDRs",
   "criterio": "manter ≤ 1 h como proposta (Playbook sugere 10 min para 1ª tentativa); expediente a confirmar"
  },
  {
   "indicador": "Ligações cuja abertura cita o contexto já informado (amostra mensal de 5 gravações)",
   "linha_base": "2 de 3 aberturas audíveis",
   "responsavel": "Gestor comercial",
   "criterio": "5 de 5"
  }
 ],
 "propostas_meta": [
  "Proposta: 1ª ação humana em até 1 h após a transferência em horário útil (Playbook FlowSales cita 10 min para 1ª tentativa; não confirmado como regra do cliente).",
  "Proposta: nenhuma mensagem do lead sem resposta humana por mais de 24 h em dias úteis, inclusive pós-ativação.",
  "Proposta: toda ligação atendida > 60 s gera tarefa com data em até 1 h.",
  "Proposta: cadência em Negociação conforme Playbook (1 h, 6 h, 24 h, 48 h, 4 d, 7 d) — hoje não observada."
 ],
 "acertos_gerais": [
  "Velocidade quando o lead chega em horário útil: em 6 de 8 casos com transferência identificável a 1ª ação humana veio em até 4 h (mediana ≈ 1,7 h); 3 casos em menos de 15 min.",
  "Ligação usada como canal de decisão nos casos que avançaram: 5 de 10 casos tiveram ligação atendida > 60 s; os dois ganhos com ligação/reunião longa fecharam no mesmo dia (79763954) ou com reunião registrada (79533290).",
  "Investigação ampla nas ligações longas analisadas (79877820, 77456896, 79763954): tempo de casa, função, jornada, pagamento, documentos.",
  "Registros úteis existem: notas de caso (79358770), tarefas com resultado (79533290, 79490552), ligações gravadas via API4com (10 com link, 5 acessíveis e transcritas localmente)."
 ],
 "treinamento": {
  "blocos": [
   {
    "titulo": "1. Diagnóstico e indicadores",
    "tempo": "10 min",
    "objetivo": "Ler os indicadores com definição e cobertura; entender que 'espera aberta' é lead esperando a gente, não lead frio.",
    "casos": [
     "Visão executiva",
     "Comparativo ordenado por 'Espera'"
    ],
    "perguntas": [
     "O que o lead estava esperando de nós em [telefone]/09) e [telefone]/09)?",
     "Quantas dessas esperas a gente sabia que existiam?"
    ],
    "exercicio": "Cada SDR aponta no painel um lead seu com espera aberta e diz qual seria a próxima mensagem.",
    "esperado": "Reconhecer a fila de pendências como rotina diária."
   },
   {
    "titulo": "2. Casos reais: acertos e oportunidades",
    "tempo": "20 min",
    "objetivo": "Comparar 79877820 (ligação em 11 min, investigação ampla, mas sem prazo no fechamento) com 80038784 (contexto perdido, ligação sem próximo passo) e 79763954 (jornada de 5 h).",
    "casos": [
     "79877820 — transcrição 00:13–00:28 e 12:33–12:52",
     "80038784 — transcrição 00:29–02:39",
     "79763954 — linha do tempo 15/09",
     "80012252 — 23/09 10:51–11:11"
    ],
    "perguntas": [
     "Na ligação da [pessoa] com a [pessoa], em que momento faltou a implicação?",
     "O que a atendente já sabia sobre o [pessoa]/‘senhor’ antes de ligar? Onde isso estava no CRM?",
     "Depois dos 30 envios do [pessoa], qual mensagem de 1 linha mudaria a percepção dele?"
    ],
    "exercicio": "Ler em voz alta o fechamento 12:33–12:52 e reescrever com prazo e horário.",
    "esperado": "Identificar o ponto exato de retomada e de fechamento datado."
   },
   {
    "titulo": "3. Simulações",
    "tempo": "15 min",
    "objetivo": "Praticar abertura com contexto, convite à ligação, fechamento com data/hora e acolhimento de documentos.",
    "casos": [
     "Gatilhos: 80038784 (abertura), 79533290 (D+1 sem resposta), 77456896 (pós-ligação com compromissos), 80012252 (documentos recebidos)"
    ],
    "perguntas": [
     "Como você abriria a ligação sabendo score 94, carteira assinada, horas extras?",
     "Como pede um horário quando o lead diz 'depois eu entro em contato'?"
    ],
    "exercicio": "Duplas SDR × lead, 3 min por rodada, feedback pela rubrica (critérios 2, 5, 8, 9).",
    "esperado": "Abertura em 3 linhas com contexto; ≤ 2 perguntas por envio; próximo passo com data/hora e tarefa.",
    "exemplos": [
     "Sugestão reescrita — abertura: 'Vi que você falou com nosso assistente sobre horas extras não pagas, com carteira assinada há mais de 3 anos. Está podendo falar 10 minutos agora?'",
     "Sugestão reescrita — fechamento: 'Vou te mandar a lista agora. Consegue enviar até as 18h? Amanhã às 10h eu te chamo aqui pra conferir.'",
     "Sugestão reescrita — documentos recebidos: 'Recebi tudo, obrigado. Vou analisar e te retorno até amanhã 12h.'",
     "Sugestão reescrita — saída elegante: 'Pelo que temos hoje, o caminho jurídico não é o mais indicado. Se aparecer algo novo, me chame que reavaliamos.'"
    ]
   },
   {
    "titulo": "4. Checklist e compromissos operacionais",
    "tempo": "10 min",
    "objetivo": "Fechar um checklist mínimo por atendimento e os ajustes de integração/registro.",
    "casos": [
     "Diagnóstico → padrões de continuidade e de registro"
    ],
    "perguntas": [
     "Quem responde ao cliente depois da ativação?",
     "Quem confirma o recebimento de documentos e em quanto tempo?"
    ],
    "exercicio": "Escrever juntos o checklist: (1) abrir com contexto; (2) ligar no 1º contato em horário útil; (3) próximo passo com data/hora + tarefa; (4) confirmar recebimento de documentos; (5) motivo de perda + mensagem de saída; (6) nota curta após ligação.",
    "esperado": "Acordo sobre o checklist e sobre quem responde a cada fila."
   },
   {
    "titulo": "5. Plano de ação e revisão",
    "tempo": "5 min",
    "objetivo": "Confirmar prioridades, ações de 7 dias e indicadores de 30 dias com responsáveis por função.",
    "casos": [
     "Diagnóstico → plano de melhoria"
    ],
    "perguntas": [
     "Qual indicador cada um acompanha?"
    ],
    "exercicio": "—",
    "esperado": "Linha de base e critério de evolução aceitos como proposta para validação."
   }
  ]
 },
 "bloqueios": [
  "Sessão remota sem navegador conectado (Claude in Chrome / navegador embutido indisponíveis).",
  "Kommo responde 401 sem sessão autenticada; nenhum token de API configurado e nenhum conector Kommo/API4com autorizado.",
  "PDF de referência não anexado; usada a versão Google Doc de mesmo título (lida integralmente).",
  "Conversa anterior 'Aprofundar Gabriel Habib (robô e Kommo)' e pasta local não acessíveis nesta sessão."
 ],
 "anonimizado": true
};
