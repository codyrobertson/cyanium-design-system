export const REPO_URL = "https://github.com/codyrobertson/cyanium-design-system";
export const RELEASE_URL = "https://github.com/codyrobertson/cyanium-design-system/releases/tag/v0.1.0";

export const siteStats = [
  { num: "36", label: "primitives" },
  { num: "3", label: "kits" },
  { num: "0.1.0", label: "release" },
] as const;

export const packages = [
  {
    name: "@cyanium/tokens",
    blurb: "CSS variables + Tailwind v4 theme",
  },
  {
    name: "@cyanium/ui",
    blurb: "Radix primitives, shadcn composition",
  },
  {
    name: "@cyanium/kits",
    blurb: "Finance, landing, AI — explicit props",
  },
  {
    name: "registry",
    blurb: "Copy UI into your repo via shadcn CLI",
  },
] as const;

export const installTabs = [
  {
    id: "npm",
    label: "Packages",
    command: "pnpm add @cyanium/ui @cyanium/tokens @cyanium/kits",
  },
  {
    id: "registry",
    label: "Registry",
    command: "npx shadcn@latest add ./registry/cyanium.json",
  },
  {
    id: "clone",
    label: "Monorepo",
    command: "git clone https://github.com/codyrobertson/cyanium-design-system.git",
  },
] as const;

export type InstallTabId = (typeof installTabs)[number]["id"];

export const liveKits = [
  {
    id: "finance" as const,
    label: "Finance",
    tag: "Dashboard",
    description: "Cards, budget chart, spending, transactions.",
    accent: "from-[#fff7ed] to-[#ffedd5]",
    bar: "bg-[var(--brand-orange)]",
  },
  {
    id: "ai" as const,
    label: "AI Chat",
    tag: "Assistant",
    description: "Sidebar, thread, model picker, composer.",
    accent: "from-[#eef2ff] to-[#e0e7ff]",
    bar: "bg-[var(--blue-500)]",
  },
  {
    id: "landing" as const,
    label: "Landing",
    tag: "Marketing",
    description: "Hero, pricing, FAQ, testimonials.",
    accent: "from-[#ecfeff] to-[#cffafe]",
    bar: "bg-[var(--sky-500,#0ea5e9)]",
  },
];

export const siteFaq = [
  {
    value: "1",
    question: "What ships in the box?",
    answer: "Tokens, UI primitives, three product kits, Storybook, fixture builders, and a shadcn registry with CI drift checks.",
  },
  {
    value: "2",
    question: "How do live demos work?",
    answer: "Click a kit below — it mounts in this app. Toggle Demo vs Integration to compare *Demo wrappers with build*AppProps() wiring.",
  },
  {
    value: "3",
    question: "Can I copy components only?",
    answer: "Yes. Use the shadcn registry for primitives. Kits stay npm packages — they depend on patterns and fixtures.",
  },
] as const;
