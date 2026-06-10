export const REPO_URL = "https://github.com/codyrobertson/cyanium-design-system";
export const RELEASE_URL = "https://github.com/codyrobertson/cyanium-design-system/releases/tag/v0.1.0";

export const siteStats = [
  { num: "36", label: "Primitives" },
  { num: "24", label: "Gallery" },
  { num: "3", label: "Kits" },
  { num: "6", label: "Doc pages" },
] as const;

export const systemFeatures = [
  {
    title: "@cyanium/tokens",
    description: "Semantic CSS variables and Tailwind v4 theme — color, type, motion, elevation.",
  },
  {
    title: "@cyanium/ui",
    description: "Radix primitives with inset surfaces, CVA variants, and shadcn-style composition.",
  },
  {
    title: "@cyanium/kits",
    description: "Finance, landing, and AI layouts with explicit props and fixture builders.",
  },
  {
    title: "Registry + CI",
    description: "shadcn copy path with drift checks and CSS coverage guards in CI.",
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
    description: "Sidebar shell, cards, budget chart, spending, transactions.",
  },
  {
    id: "ai" as const,
    label: "AI Chat",
    tag: "Assistant",
    description: "Thread sidebar, bubbles, model picker, composer.",
  },
  {
    id: "landing" as const,
    label: "Landing",
    tag: "Marketing",
    description: "Hero, features, pricing, FAQ — all prop-driven.",
  },
] as const;

export const siteFaq = [
  {
    value: "1",
    question: "What ships in the repo?",
    answer: "Tokens, UI primitives, three product kits, gallery, docs, Storybook, fixture builders, and a shadcn registry with CI checks.",
  },
  {
    value: "2",
    question: "How do live demos work?",
    answer: "Open a kit from the home page. Toggle Demo vs Integration in the bottom bar to compare wrapper demos with build*AppProps() wiring.",
  },
  {
    value: "3",
    question: "Can I copy components only?",
    answer: "Yes — use the shadcn registry for primitives. Kits stay npm packages and depend on patterns and fixtures.",
  },
] as const;
