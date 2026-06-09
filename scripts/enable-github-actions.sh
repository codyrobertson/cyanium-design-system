#!/usr/bin/env bash
set -euo pipefail

# GitHub OAuth tokens need the `workflow` scope to push Action YAML.
# Run once: gh auth refresh -h github.com -s workflow

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$ROOT/.github/workflows"
cp "$ROOT/.github/_workflows/"*.yml "$ROOT/.github/workflows/"

echo "Workflows copied to .github/workflows/"
echo "Commit and push:"
echo "  git add .github/workflows && git commit -m 'ci: enable GitHub Actions workflows' && git push"
