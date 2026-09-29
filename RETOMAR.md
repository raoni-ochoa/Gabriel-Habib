# Como retomar a auditoria no seu computador (2 passos)

## Passo 1 — abrir a pasta no app Claude Code (desktop)
- Aba **Code** → **Project folder**. Se a pasta `Gabriel-Habib` ainda não existe, abra o terminal integrado (`Ctrl+\`` no Windows/Linux, `Cmd+\`` no Mac) e cole:

```bash
git clone https://github.com/raoni-ochoa/Gabriel-Habib.git && cd Gabriel-Habib && git checkout claude/kommo-human-service-audit-7ljggg
```

- Selecione a pasta `Gabriel-Habib`. No seletor de branch, escolha `claude/kommo-human-service-audit-7ljggg` (se o comando acima já fez o checkout, ela já estará selecionada).
- Digite `/chrome` e confira: Status Enabled, Extension Installed. A aba do Kommo deve estar aberta e logada.

## Passo 2 — mandar uma única mensagem
```
Retome a auditoria conforme o CLAUDE.md deste repositório.
```

O Claude local lê o CLAUDE.md automaticamente, encontra tudo pronto e segue: mapeamento do funil, seleção dos 10 casos, coleta, análise, dossiês, treinamento e painel, com commit na mesma branch.

Alternativa pelo terminal (sem o app): `bash retomar.sh` nesta pasta, ou, se ainda não clonou, o comando do Passo 1 seguido de `claude --chrome`.
