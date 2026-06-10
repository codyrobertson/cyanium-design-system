export const REPO_URL = "https://github.com/codyrobertson/cyanium-design-system";
export const RELEASE_URL = "https://github.com/codyrobertson/cyanium-design-system/releases/tag/v0.1.0";

export const siteStats = [
  { num: "36", label: "primitives" },
  { num: "24", label: "gallery entries" },
  { num: "3", label: "product kits" },
  { num: "6", label: "doc pages" },
] as const;

export const manifest = [
  {
    index: "01",
    title: "Tokens first",
    body: "Semantic CSS variables and a Tailwind v4 theme — one source of truth for color, type, motion, and elevation.",
  },
  {
    index: "02",
    title: "Primitives that compose",
    body: "Radix behavior, shadcn patterns, CVA variants. Copy via registry or install the package.",
  },
  {
    index: "03",
    title: "Kits with contracts",
    body: "Finance, landing, and AI surfaces ship with explicit props and fixture builders — no mystery globals.",
  },
  {
    index: "04",
    title: "Proof in the repo",
    body: "Gallery, docs, Storybook, and CI checks for registry drift and CSS coverage. You see what ships.",
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
    index: "01",
    tag: "Dashboard",
    description: "Cards, budget chart, spending breakdown, transaction table.",
    tone: "orange",
  },
  {
    id: "ai" as const,
    label: "AI Chat",
    index: "02",
    tag: "Assistant",
    description: "Sidebar threads, message bubbles, model picker, composer.",
    tone: "indigo",
  },
  {
    id: "landing" as const,
    label: "Landing",
    index: "03",
    tag: "Marketing",
    description: "Hero, pricing tiers, FAQ, testimonials — all prop-driven.",
    tone: "cyan",
  },
] as const;

export const siteFaq = [
  {
    value: "1",
    question: "What ships in the box?",
    answer: "Tokens, UI primitives, three product kits, an in-app gallery and docs, Storybook, fixture builders, and a shadcn registry with CI drift checks.",
  },
  {
    value: "2",
    question: "How do live demos work?",
    answer: "Pick a kit — it mounts in this app. Toggle Demo vs Integration to compare wrapper demos with build*AppProps() wiring.",
  },
  {
    value: "3",
    question: "Can I copy components only?",
    answer: "Yes. Use the shadcn registry for primitives. Kits stay npm packages — they depend on patterns and fixtures.",
  },
] as const;
