# Cyanium Design System

Production-grade React design system ported from **AlignUI**, built on **Radix UI + Tailwind v4 + CVA** in the shadcn/ui composition style.

## Packages

| Package | Description |
|---------|-------------|
| `@cyanium/tokens` | AlignUI CSS variables + Tailwind `@theme` bridge |
| `@cyanium/ui` | shadcn-style **primitives only** (`components/ui/*`) |
| `@cyanium/kits` | Product templates — finance, landing, AI |
| `@cyanium/kits/patterns` | Dashboard chrome, stat cards, nav items (not primitives) |
| `@cyanium/kits/fixtures` | Demo copy and sample data — never imported by `@cyanium/ui` |
| `@cyanium/docs` | Storybook |

## Install paths

### npm package

```bash
pnpm add @cyanium/ui @cyanium/tokens @cyanium/kits
```

```tsx
import "@cyanium/ui/styles.css";
import { Button, Input, DataTable } from "@cyanium/ui";
import { AppSidebar, DashboardShell } from "@cyanium/kits/patterns";
import { FinanceApp } from "@cyanium/kits/finance";
import { financeBrand, sampleTransactions } from "@cyanium/kits/fixtures";
```

### shadcn registry (copy into your app)

```bash
pnpm build:registry          # regenerate manifest from source
pnpm check:registry          # CI guard — fails if JSON is stale
npx shadcn@latest add ./registry/cyanium.json
```

Registry includes `styles`, `utils`, `surface`, `use-toast`, and all UI primitives. Kits remain npm-only.

## Production API (not demos)

Kit apps require explicit props. Use fixtures as a starting point, not runtime defaults:

```tsx
import { FinanceApp } from "@cyanium/kits/finance";
import { buildFinanceAppProps } from "@cyanium/kits/fixtures";

<FinanceApp {...buildFinanceAppProps()} />
```

For quick previews, use `*Demo` wrappers. For production wiring, use builders from fixtures:

```tsx
import { FinanceApp } from "@cyanium/kits/finance";
import { buildFinanceAppProps } from "@cyanium/kits/fixtures";

<FinanceApp {...buildFinanceAppProps()} />

// Override any prop:
<FinanceApp {...buildFinanceAppProps({ initialRoute: "transaction" })} />
```

Also available: `buildAiChatAppProps()`, `buildLandingPageProps()`.

Storybook: **Kits/Integration** (builders + override example) · **Kits/Demos** (`*Demo` wrappers).

## Structure

```
packages/ui/src/components/ui/   # primitives (Button, Input, Dialog, DataTable, …)
packages/ui/src/lib/surface.ts   # surfaceVariants, insetBorder, input surfaces
packages/kits/src/patterns/      # AppSidebar, StatCard, NavItem, StatusBadge, …
packages/kits/src/finance/       # FinanceApp (+ FinanceAppDemo)
packages/kits/src/landing/       # LandingPage (+ LandingPageDemo)
packages/kits/src/ai/            # AiChatApp (+ AiChatAppDemo)
packages/kits/src/fixtures/      # demo data
```

## Development

```bash
pnpm install && pnpm build
pnpm storybook          # http://localhost:6006
pnpm example            # http://localhost:5173
pnpm typecheck && pnpm lint && pnpm test
pnpm build:registry     # refresh registry/cyanium.json
pnpm check:registry     # verify committed registry matches source
```

## Releases

Published packages: `@cyanium/tokens`, `@cyanium/ui`, `@cyanium/kits`.

**GitHub:** [Releases](https://github.com/codyrobertson/cyanium-design-system/releases) · **npm:** scoped under `@cyanium`.

### Maintainer setup (one-time)

1. Create the [`@cyanium` npm organization](https://www.npmjs.com/org/create) (required for scoped publishes).
2. Add repo secret `NPM_TOKEN` — an npm automation token with publish access to `@cyanium`.
3. Enable GitHub Actions (OAuth needs `workflow` scope):
   ```bash
   gh auth refresh -h github.com -s workflow
   bash scripts/enable-github-actions.sh
   git add .github/workflows && git commit -m "ci: enable GitHub Actions" && git push
   ```
4. Merge changes via PR; when you land changesets on `main`, the Release workflow opens a **Version packages** PR or publishes when that PR merges.

### Shipping a change

```bash
pnpm changeset          # describe the change; pick affected packages
git add .changeset && git commit -m "chore: add changeset"
# merge PR → Release workflow handles version bump + npm publish + GitHub release
```

## Compose primitives

```tsx
import { Field, Input, Button, Panel } from "@cyanium/ui";

<Panel title="Account">
  <Input label="Email" required placeholder="you@company.com" />
  <Button intent="primary">Save</Button>
</Panel>
```

Legacy shell aliases: `InputShell`, `CheckboxShell`, `TextareaShell` (exported from merged input/checkbox/textarea files).
