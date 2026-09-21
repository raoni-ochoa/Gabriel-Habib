# Acesso, escopo e bloqueios — verificação de 21/09/2026

Corte registrado: **2026-09-21 17:05 (America/Sao_Paulo)** — início da execução.
Ambiente: sessão remota do Claude Code (contêiner em nuvem), repositório `raoni-ochoa/Gabriel-Habib`, branch `claude/kommo-human-service-audit-7ljggg`.

## 1. O que foi verificado (fatos)

| Item | Resultado | Como foi verificado |
|---|---|---|
| Chrome conectado ao Claude Code | **Indisponível nesta sessão.** Nenhuma ferramenta `mcp__claude-in-chrome__*`, `mcp__Claude_Browser__*` ou `mcp__remote-devices__*` está presente, nem o ativador `enable__mcp__remote-devices__Claude_Browser`. | Busca no catálogo de ferramentas da sessão pelos três prefixos (duas consultas, zero resultados). |
| Navegador embutido / Playwright local | Existe Chromium no contêiner, mas **sem sessão autenticada** no Kommo e sem permissão para extrair cookies/tokens do usuário. | `GET https://gabrielhabibadv.kommo.com/leads/pipeline/13587595/?skip_filter=Y` → HTTP **401** sem sessão. |
| Conector Kommo / API4com | **Não existe** conector Kommo nem API4com entre os conectores instalados. | `ListConnectors`: Advogalia (incompleto), Fathom, Gmail, Google Calendar, Google Drive, HDA, Pipedrive (reconectar), Railway. |
| Token de API Kommo no ambiente | **Ausente.** | Variáveis de ambiente inspecionadas (`KOMMO*`, `API4COM*`, `AMOCRM*`): nenhuma. |
| PDF "Trabalhista - Reconhecimento de Vínculo.pdf" anexado | **Não chegou como anexo** ao contêiner (nenhum PDF no sistema de arquivos além dos de exemplo). | `find / -iname "*Vínculo*"`, `/home/user/user-data`, `/mnt`. |
| Mesma referência no Google Drive autorizado | **Encontrada e lida integralmente**: Google Doc "Trabalhista - Reconhecimento de Vínculo" (id `1S53kCHh5QvvL3y1ZSCxx_DxruN3Svs2jJrEKcs2Mf00`, modificado em 04/03/2026, aberto pelo usuário em 21/09/2026 19:41 UTC). | Conector Google Drive (leitura). Veja `docs/REFERENCIA_ROTEIRO.md`. |
| Conversa anterior "Aprofundar Gabriel Habib (robô e Kommo)" | **Não acessível.** Esta sessão não tem acesso a outras conversas do Claude nem à pasta local do computador do usuário. | Não existe ferramenta de leitura de histórico de conversas; busca restrita no Drive por "Aprofundar"/"auditoria"+"Habib" não retornou arquivos dessa conversa. |
| Material de apoio adicional no Drive | "Playbook FlowSales - Gabriel Habib" (Google Doc, modificado 27/05/2026) com estrutura de funil e metas. | Conector Google Drive. Usado apenas como **orientação de material** (categoria 2), não como regra confirmada. |

Nenhum dado do CRM foi coletado nesta sessão. Nenhuma alteração foi feita em qualquer sistema.

## 2. Bloqueio indispensável

Para executar a coleta (mapa do funil, triagem de candidatos, 10 atendimentos, chamadas e gravações) é necessária **uma** das opções abaixo. Escolha a menos invasiva possível:

**Opção A — sessão local com navegador (recomendada, sem token):**
Abra este mesmo repositório/branch em uma sessão do Claude Code no seu computador (desktop ou CLI) com a extensão *Claude in Chrome* ativa e o Kommo autenticado na conta `raoni@letsevolve.com.br`. A coleta segue por navegação somente leitura, conforme `coleta/navegador/README.md`. Nada precisa ser configurado no Kommo.

**Opção B — token de longa duração da API Kommo (somente se A não for possível):**
Um administrador da conta gera, em *Configurações → Integrações → (integração privada) → Chaves e escopos → Gerar token de longa duração*, um token com **validade curta (1 dia)**. Observação documentada pela Kommo: o token herda os direitos do administrador; não há escopo somente-leitura. O coletor `coleta/kommo_api/collect.py` só executa métodos `GET`. O token deve ser informado apenas como variável de ambiente `KOMMO_TOKEN` (nunca em arquivo versionado).
Limitação conhecida da API v4 (documentação oficial, consultada em 21/09/2026): o endpoint de eventos registra `incoming_chat_message`/`outgoing_chat_message` com autor e horário, mas **o texto das mensagens de chat não é exposto pela API REST v4**; o histórico textual exige a Chats API (amojo) com credencial de canal, que não está autorizada. Portanto, mesmo com token, a análise de conteúdo das conversas de WhatsApp precisa de navegação (Opção A) ou de exportação da conversa pela interface.

**Gravações (API4com):** verificação só é possível após o acesso ao CRM. As notas de chamada (`call_in`/`call_out`) trazem `duration`, `link`, `phone`, `source`, `uniq`. O acesso ao `link` será testado caso a caso; links que exigirem sessão ou expirarem serão informados como tal.

## 3. O que foi construído sem acesso ao CRM

Tudo que não depende de dados reais: metodologia, rubrica com sinais observáveis, esquema de eventos, coletor (API) e roteiro de coleta por navegador, normalizador, motor de métricas com testes, painel portátil com estado vazio honesto, modelos do dossiê e do treinamento. Veja `STATUS.md`.
