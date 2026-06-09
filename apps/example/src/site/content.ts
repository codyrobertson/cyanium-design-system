export const REPO_URL = "https://github.com/codyrobertson/cyanium-design-system";
export const RELEASE_URL = "https://github.com/codyrobertson/cyanium-design-system/releases/tag/v0.1.0";

export const siteStats = [
  { num: "36", label: "UI primitives" },
  { num: "3", label: "Product kits" },
  { num: "v0.1.0", label: "Latest release" },
  { num: "MIT", label: "Open source" },
] as const;

export const siteFeatures = [
  {
    title: "@cyanium/tokens",
    description: "Semantic CSS variables, typography, shadows, and a Tailwind v4 theme bridge.",
  },
  {
    title: "@cyanium/ui",
    description: "shadcn-style Radix primitives — Button, Input, Dialog, DataTable, and 30+ more.",
  },
  {
    title: "@cyanium/kits",
    description: "Finance dashboard, marketing landing, and AI chat templates with explicit props.",
  },
  {
    title: "shadcn registry",
    description: "Copy components into your app via registry/cyanium.json with CI drift guard.",
  },
] as const;

export const installPaths = [
  {
    name: "npm packages",
    description: "Install published scoped packages",
    price: "pnpm",
    cta: "Install",
    featured: true,
    badge: "Recommended",
    features: [
      { label: "@cyanium/tokens" },
      { label: "@cyanium/ui" },
      { label: "@cyanium/kits" },
      { label: "Requires @cyanium npm org", muted: true },
    ],
    command: "pnpm add @cyanium/ui @cyanium/tokens @cyanium/kits",
  },
  {
    name: "shadcn registry",
    description: "Copy primitives into your codebase",
    price: "npx",
    cta: "Add components",
    features: [
      { label: "UI primitives only" },
      { label: "Own the source" },
      { label: "Tailwind + Radix" },
      { label: "Kits stay npm-only", muted: true },
    ],
    command: "npx shadcn@latest add ./registry/cyanium.json",
  },
  {
    name: "Clone monorepo",
    description: "Full dev environment with Storybook",
    price: "git",
    cta: "View repo",
    features: [
      { label: "Storybook docs" },
      { label: "Example app (this page)" },
      { label: "Turbo + pnpm workspace" },
      { label: "CI + changesets" },
    ],
    command: "git clone https://github.com/codyrobertson/cyanium-design-system.git",
  },
] as const;

export const liveKits = [
  {
    id: "finance" as const,
    label: "Finance dashboard",
    url: "cyanium.dev/finance",
    description: "Apex banking shell with cards, budget chart, spending, and transactions.",
  },
  {
    id: "ai" as const,
    label: "AI chat",
    url: "cyanium.dev/chat",
    description: "Sidebar, message thread, model picker, and composer — all prop-driven.",
  },
  {
    id: "landing" as const,
    label: "Landing kit",
    url: "cyanium.dev/landing",
    description: "Marketing page template with hero, pricing, FAQ, and testimonials.",
  },
];

export const siteFaq = [
  {
    value: "1",
    question: "What is Cyanium?",
    answer: "A production design system with semantic tokens, shadcn/Radix UI primitives, and product kits in a pnpm monorepo.",
  },
  {
    value: "2",
    question: "How do I try the kits live?",
    answer: "Use the Live kits section on this page or run pnpm example from the repo. Each kit has Demo and Integration modes.",
  },
  {
    value: "3",
    question: "Is this the same as copying shadcn components?",
    answer: "Similar composition model, styled with Cyanium tokens and extended with patterns, fixtures, and full product templates.",
  },
  {
    value: "4",
    question: "Where is the source?",
    answer: "github.com/codyrobertson/cyanium-design-system — MIT licensed, with Storybook and an example Vite app.",
  },
] as const;
