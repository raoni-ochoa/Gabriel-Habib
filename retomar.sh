#!/usr/bin/env bash
# Abre a sessão local do Claude Code nesta pasta, na branch da auditoria, com o Chrome conectado.
set -e
cd "$(dirname "$0")"
git fetch origin claude/kommo-human-service-audit-7ljggg
git checkout claude/kommo-human-service-audit-7ljggg
git pull --ff-only origin claude/kommo-human-service-audit-7ljggg
echo "Pasta pronta. Ao abrir, digite /chrome para confirmar a extensão e envie: Retome a auditoria conforme o CLAUDE.md deste repositório."
exec claude --chrome
