export interface DocSection {
  type: "paragraph" | "heading" | "code" | "list" | "link";
  content?: string;
  level?: "h2" | "h3";
  items?: string[];
  href?: string;
  label?: string;
}

export interface DocPage {
  slug: string;
  title: string;
  description: string;
  sections: DocSection[];
}

export const docPages: DocPage[] = [
  {
    slug: "getting-started",
    title: "Getting started",
    description: "Install packages, import styles, and run the example app.",
    sections: [
      {
        type: "paragraph",
        content:
          "Cyanium ships as workspace packages: tokens for CSS variables, UI for primitives, and kits for product-ready layouts. Pick npm packages or copy via the shadcn registry.",
      },
      { type: "heading", level: "h2", content: "Install" },
      {
        type: "code",
        content: "pnpm add @cyanium/ui @cyanium/tokens @cyanium/kits",
      },
      { type: "heading", level: "h2", content: "Import styles" },
      {
        type: "paragraph",
        content: "Add token and component styles once in your app entry or global CSS:",
      },
      {
        type: "code",
        content: `@import "@cyanium/tokens/css";
@import "@cyanium/ui/styles.css";
@import "@cyanium/kits/styles.css";`,
      },
      { type: "heading", level: "h2", content: "Use a component" },
      {
        type: "code",
        content: `import { Button, ToasterProvider } from "@cyanium/ui";

export function App() {
  return (
    <ToasterProvider>
      <Button intent="primary">Get started</Button>
    </ToasterProvider>
  );
}`,
      },
      { type: "heading", level: "h2", content: "Local development" },
      {
        type: "list",
        items: [
          "pnpm example — this Vite app with gallery, docs, and kit demos",
          "pnpm storybook — component stories in apps/docs",
          "pnpm check:css — token drift checks",
          "pnpm check:registry — shadcn registry validation",
        ],
      },
    ],
  },
  {
    slug: "tokens",
    title: "Design tokens",
    description: "Semantic CSS variables that power every layer.",
    sections: [
      {
        type: "paragraph",
        content:
          "@cyanium/tokens defines semantic variables consumed by Tailwind v4 utilities. Components never hardcode hex values — they reference tokens like bg-bg-white and text-text-strong.",
      },
      { type: "heading", level: "h2", content: "Surface tokens" },
      {
        type: "list",
        items: [
          "bg-bg-white — primary surface",
          "bg-bg-weak — recessed panels and sidebars",
          "bg-bg-strong — inverted / terminal surfaces",
          "border-stroke-soft — default keylines",
        ],
      },
      { type: "heading", level: "h2", content: "Text tokens" },
      {
        type: "list",
        items: [
          "text-text-strong — headings and primary copy",
          "text-text-sub — body and descriptions",
          "text-text-soft — captions and meta",
          "text-primary — links and emphasis",
        ],
      },
      { type: "heading", level: "h2", content: "Intent colors" },
      {
        type: "list",
        items: [
          "primary — brand actions",
          "success / destructive / warning — status semantics",
          "Brand orange and blue scales for kit accents",
        ],
      },
      { type: "heading", level: "h2", content: "Typography" },
      {
        type: "paragraph",
        content:
          "font-display for marketing headings, default sans for UI. Mono via font-mono for code and stats. Radius and spacing use --radius-* and standard Tailwind spacing.",
      },
    ],
  },
  {
    slug: "components",
    title: "Components",
    description: "36+ Radix-backed primitives with Cyanium styling.",
    sections: [
      {
        type: "paragraph",
        content:
          "All primitives live in @cyanium/ui. Each export is a composed component — not a raw Radix re-export — with CVA variants and token classes baked in.",
      },
      { type: "heading", level: "h2", content: "Component gallery" },
      {
        type: "paragraph",
        content: "Browse live previews, import lines, and usage notes in the in-app gallery:",
      },
      {
        type: "link",
        label: "Open component gallery",
        href: "#/gallery",
      },
      { type: "heading", level: "h2", content: "Categories" },
      {
        type: "list",
        items: [
          "Atoms — Button, Badge, Tag, Avatar, Switch, Kbd, Skeleton",
          "Forms — Input, Select, Textarea, Slider, Checkbox",
          "Feedback — Alert, Banner, ProgressBar, EmptyState",
          "Overlays — Modal, Dropdown, Tooltip",
          "Data — Card, Tabs, DataTable, Accordion, Pagination",
        ],
      },
      { type: "heading", level: "h2", content: "Registry" },
      {
        type: "paragraph",
        content:
          "Copy individual components into your repo with the shadcn CLI. See the Registry page for the exact command and CI drift checks.",
      },
    ],
  },
  {
    slug: "kits",
    title: "Product kits",
    description: "Finance, Landing, and AI — wired with explicit props.",
    sections: [
      {
        type: "paragraph",
        content:
          "Kits are full product surfaces in @cyanium/kits. Each kit exports a *App component and a *Demo wrapper, plus fixture builders for integration wiring.",
      },
      { type: "heading", level: "h2", content: "Available kits" },
      {
        type: "list",
        items: [
          "Finance — dashboard with cards, budget chart, transactions",
          "Landing — marketing hero, pricing, FAQ, testimonials",
          "AI Chat — sidebar, thread, model picker, composer",
        ],
      },
      { type: "heading", level: "h2", content: "Demo vs Integration" },
      {
        type: "paragraph",
        content:
          "In this example app, toggle Demo vs Integration in the chrome bar. Demo mounts *Demo wrappers with baked-in state. Integration passes build*AppProps() from @cyanium/kits/fixtures.",
      },
      { type: "heading", level: "h2", content: "Fixture builders" },
      {
        type: "code",
        content: `import { FinanceApp } from "@cyanium/kits/finance";
import { buildFinanceAppProps } from "@cyanium/kits/fixtures";

<FinanceApp {...buildFinanceAppProps()} />`,
      },
      { type: "heading", level: "h2", content: "Live demos" },
      {
        type: "link",
        label: "Finance kit demo",
        href: "#/kits/finance",
      },
      {
        type: "link",
        label: "Landing kit demo",
        href: "#/kits/landing",
      },
      {
        type: "link",
        label: "AI Chat kit demo",
        href: "#/kits/ai",
      },
    ],
  },
  {
    slug: "registry",
    title: "shadcn registry",
    description: "Copy UI primitives into your own repo.",
    sections: [
      {
        type: "paragraph",
        content:
          "The Cyanium registry follows the shadcn/ui format. Components land in your src/ with tokens and dependencies resolved by the CLI.",
      },
      { type: "heading", level: "h2", content: "Add from registry" },
      {
        type: "code",
        content: "npx shadcn@latest add ./registry/cyanium.json",
      },
      { type: "heading", level: "h2", content: "What you get" },
      {
        type: "list",
        items: [
          "Source files copied into your components directory",
          "@cyanium/tokens as a dependency for CSS variables",
          "Radix primitives and lucide-react icons",
        ],
      },
      { type: "heading", level: "h2", content: "CI drift checks" },
      {
        type: "paragraph",
        content:
          "Run pnpm check:registry in the monorepo to verify registry JSON matches package exports. Kits stay npm-only — the registry covers primitives.",
      },
    ],
  },
  {
    slug: "development",
    title: "Development",
    description: "Scripts and workflows for contributors.",
    sections: [
      { type: "heading", level: "h2", content: "Monorepo scripts" },
      {
        type: "list",
        items: [
          "pnpm storybook — Storybook in apps/docs",
          "pnpm example — this example app (gallery + docs + kits)",
          "pnpm check:css — validates token usage",
          "pnpm check:registry — registry drift detection",
          "pnpm build — turbo build across packages",
        ],
      },
      { type: "heading", level: "h2", content: "Package layout" },
      {
        type: "list",
        items: [
          "packages/tokens — CSS variables + Tailwind theme",
          "packages/ui — component primitives",
          "packages/kits — product kits and patterns",
          "apps/example — marketing site + gallery + docs",
          "apps/docs — Storybook",
        ],
      },
      { type: "heading", level: "h2", content: "Adding a component" },
      {
        type: "paragraph",
        content:
          "Implement in packages/ui, export from index.ts, add a Storybook story, and optionally add a gallery entry in apps/example/src/gallery/catalog.ts.",
      },
    ],
  },
];

export const defaultDocSlug = "getting-started";

export function getDocPage(slug: string | undefined): DocPage {
  if (slug) {
    const found = docPages.find((p) => p.slug === slug);
    if (found) return found;
  }
  return docPages.find((p) => p.slug === defaultDocSlug)!;
}
