# Authoring guide for design-sync preview subagents

You are authoring Claude Design preview cards for the **Cyanium** React design system.
This DS is being synced to claude.ai/design, where a design agent will build real UIs
from this exact compiled bundle. A faithful, on-brand preview proves the component
arrived intact and teaches the agent how to use it.

## Read first
1. `.design-sync/NOTES.md` — shape, build, CSS, fonts, kits, API notes. **Read it fully.**
2. The Storybook stories are the canonical composition source — real DS API, exact props:
   `apps/docs/src/stories/{atoms,button,input,molecules,organisms,organisms-new,foundations,kits,integration}.stories.tsx`.
   Find your component's real usage there and PORT it (props + JSX). Don't invent when a story exists.
3. Each component's prop contract: `ds-bundle/components/general/<Name>/<Name>.d.ts` (sanity-check ported props against it).

## What you write
For each assigned component, write `.design-sync/previews/<Name>.tsx`:
- Real JSX importing components from `'@cyanium/ui'` and icons from `'lucide-react'`.
- **Named exports become card cells** (each export = one graded story). No default export. NO marker comment on line 1 — owned files are markerless.
- Budget **2–5 cells**: one canonical use + the primary variant axis swept + key states (disabled/error/loading/open) + realistic composition for compounds.
- **Realistic content** (real labels, names, amounts) — never foo/bar/test. These are browsed by humans and imitated by the agent.
- Compose context-required leaves inside their parent (e.g. a control inside its group/field).
- Layout glue: use DS Tailwind utilities (`flex`, `gap-3`, `w-80`, `space-y-4`, `text-text-sub`, `text-text-strong`, `bg-bg-weak`, `border-stroke-soft`, `size-5`). They resolve from the shipped CSS.
- Kit data/sub-components: `@cyanium/kits/fixtures` and `@cyanium/kits/patterns` (see NOTES.md).

## Build + capture (your ONLY build commands — scoped to YOUR components)
```
node .ds-sync/lib/preview-rebuild.mjs --config .design-sync/config.json --node-modules apps/docs/node_modules --out ./ds-bundle --components <YourName1,YourName2,...>
node .ds-sync/package-capture.mjs --out ./ds-bundle --components <YourName1,YourName2,...>
```
If a preview fails to compile, the build/capture log says why (unresolved import, bad prop). Fix the `.tsx`.

## Grade (absolute rubric — no reference render exists)
Read each `ds-bundle/_screenshots/review/general__<Name>.png` (full-res), judge every cell:
- **Styled**: DS tokens/fonts visibly applied — not browser-default, not unstyled boxes.
- **Complete**: composition renders whole — no missing children, collapsed layout, or ⚠ cells.
- **Plausible**: a DS author would recognize it — realistic content, sane spacing, variant axis actually varying.
Write `.design-sync/.cache/review/<Name>.grade.json`:
`{"cells":{"<CellLabel>":{"verdict":"good"|"needs-work","note":"…"}}}` (keys = exact cell labels the capture log prints).
`needs-work` → fix the `.tsx`, rebuild, recapture, regrade. Iterate (max 3) until every cell is `good`. If truly blocked, grade honestly with a note and record the blocker.

## HARD RULES (violating these corrupts other agents' work)
- Edit ONLY your assigned `.design-sync/previews/<Name>.tsx`, your `.design-sync/.cache/review/<Name>.grade.json`, and `.design-sync/learnings/<BATCH_ID>.md`.
- NEVER edit `.design-sync/config.json`, `.design-sync/NOTES.md`, `.ds-sync/`, or another component's files.
- NEVER run `package-build.mjs` or `package-validate.mjs` or an unscoped `package-capture.mjs` — they rewrite shared state and race other agents. Only the two scoped commands above.
- Never write a grade for a sheet you didn't Read this iteration.
- **Overlay components** (Dialog/Modal/Dropdown/DropdownMenu/Tooltip) often need `cfg.overrides.<Name>.cardMode: "single"` and **wide** ones (DataTable, kit apps, MarketingShell) need `"column"` — that's a CONFIG edit you may NOT make. Render the open/full state in your `.tsx` anyway (e.g. controlled `open` state, or compose the trigger+content), grade what renders, and RECORD the needed override in your learnings file for the orchestrator. Never neutralize an open state just to make it fit.
- If the SAME root cause hits 2+ of your components, or any config-level cause (provider/css/font/import), STOP on those and record it `[GENERAL]` in your learnings file — don't work around it per-component.

## Learnings
Append to `.design-sync/learnings/<BATCH_ID>.md` — one bullet per discovery:
`<Component>: <symptom> → <cause> → <fix>`, prefixed `[GENERAL]` if it applies beyond that component, and `[CONFIG]` for overrides the orchestrator must apply.

## Final report
Per component: good / needs-work / blocked + one-line reason. Then any `[GENERAL]`/`[CONFIG]` items verbatim.
