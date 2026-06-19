# Cyanium design system — how to build with it

Cyanium is a token-driven React design system. Compose UIs from these real components; don't reinvent primitives or hand-roll styles when a component exists.

## Imports
- Components: `import { Button, Card, Input, Badge, ... } from "@cyanium/ui"`.
- App templates (kits): `import { FinanceApp, LandingPage, AiChatApp } from "@cyanium/kits"` (sub-paths `@cyanium/kits/{finance,landing,ai}`); realistic data/sub-components live in `@cyanium/kits/fixtures` and `@cyanium/kits/patterns`.
- Icons: `lucide-react` (e.g. `<Bell className="size-5" />`).

## Tokens & theming
- Style with the system's semantic Tailwind utilities, never raw hex: text `text-text-strong` / `text-text-sub`, surfaces `bg-bg-white` / `bg-bg-weak`, borders `border-stroke-soft`. White surface is `bg-bg-white` (not `bg-bg-white-0`).
- Color scales are CSS variables: `var(--blue-500)`, `var(--red-200)`, etc. (shades 50–900 across blue/orange/red/green/yellow/purple/sky/pink/teal).
- The type scale is intentionally **restrained** — heading levels differ modestly. That's the brand voice; don't inflate sizes.
- Primary intent renders **blue** (default theme); the Cyanium brand mark is orange. Both are correct.

## Component conventions (high-signal)
- `Button`: `intent` primary|neutral|error × `variant` filled|stroke|lighter|ghost × `size` xsmall|small|medium|large; `leadingIcon`/`trailingIcon`/`iconOnly` (iconOnly needs `aria-label`).
- `Input`: `label`, `placeholder`, `hint`, `error`, `leadingIcon`/`trailingIcon`. `Field` wraps a bare `InputControl`, not `Input`.
- `Card` is compound: `Card` (`raised`, `padding`) + `CardHeader`/`CardTitle`/`CardDescription`/`CardContent`/`CardFooter`.
- `Badge`: `color` + `variant` filled|light|lighter|stroke, optional `dot`/`icon`.
- `Modal`/`Dialog` are controlled overlays — pass `open` to show; `DialogContent` brings its own Portal+Overlay (don't nest them).
- `Dropdown`/`DropdownMenu`/`Tooltip` open on interaction (hover/click); render a trigger and let the surface open at runtime.
- Data-driven: `Tabs`/`SegmentedControl` take `items`; `Breadcrumb`/`Pagination` take `items`/`total`+`page`; `Select` `options` are `{value,label,disabled?}`; `Accordion` requires `type` (`single`+`collapsible` or `multiple`).
- Self-contained (no wrapping `Card`): `FeatureCard`, `EmptyState`, `SectionHead`. Vertical `Separator` needs an explicit height class.

## Composition
- Prefer kits (`FinanceApp`, `LandingPage`, `AiChatApp`, `MarketingShell`) as starting scaffolds for full screens, then swap in real content via fixtures.
- Use real, plausible content (names, amounts, copy) — never placeholder lorem.
