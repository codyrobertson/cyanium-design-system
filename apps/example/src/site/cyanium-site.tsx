import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ExternalLink,
  Github,
  Layers,
  Menu,
  Package,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import {
  Wordmark,
  StatItem,
  ProductFrame,
  PricingTier,
} from "@cyanium/kits/landing";
import {
  Badge,
  Button,
  Eyebrow,
  FaqList,
  FeatureCard,
  MarketingShell,
  Panel,
  SectionHead,
  Input,
  Tag,
} from "@cyanium/ui";
import {
  REPO_URL,
  RELEASE_URL,
  installPaths,
  liveKits,
  siteFaq,
  siteFeatures,
  siteStats,
} from "./content";

export type KitView = "finance" | "landing" | "ai";

export interface CyaniumSiteProps {
  onExploreKit: (kit: KitView) => void;
}

const featureIcons = [Sparkles, Zap, Layers, Package] as const;

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#kits", label: "Live kits" },
  { href: "#install", label: "Install" },
  { href: "#faq", label: "FAQ" },
] as const;

export function CyaniumSite({ onExploreKit }: CyaniumSiteProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <MarketingShell>
      <header className="sticky top-0 z-20 border-b border-stroke-soft bg-bg-white/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4">
          <Wordmark name="Cyanium" />
          <nav className="hidden items-center gap-8 text-sm font-medium text-text-sub md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-text-strong">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              intent="neutral"
              size="small"
              className="md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
            <Button
              variant="ghost"
              intent="neutral"
              size="small"
              leadingIcon={<Github className="size-4" />}
              onClick={() => window.open(REPO_URL, "_blank", "noopener")}
            >
              <span className="hidden sm:inline">GitHub</span>
            </Button>
            <Button
              size="small"
              trailingIcon={<ExternalLink className="size-4" />}
              onClick={() => window.open(RELEASE_URL, "_blank", "noopener")}
            >
              v0.1.0
            </Button>
          </div>
        </div>
        {menuOpen ? (
          <nav className="border-t border-stroke-soft px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-3 text-sm font-medium text-text-sub">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    className="w-full text-left hover:text-text-strong"
                    onClick={() => scrollTo(link.href)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="w-full text-left hover:text-text-strong"
                  onClick={() => {
                    window.open(REPO_URL, "_blank", "noopener");
                    setMenuOpen(false);
                  }}
                >
                  GitHub
                </button>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
        <Eyebrow>Cyanium × Radix × shadcn</Eyebrow>
        <h1 className="mt-6 font-display text-title-h1 font-medium tracking-tight text-text-strong md:text-[56px] md:leading-[1.1]">
          A design system you can ship, not just screenshot
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-paragraph-lg text-text-sub">
          Cyanium is an open-source monorepo with tokens, 36 UI primitives, and three production kits —
          wired with fixture builders, Storybook, and a shadcn registry.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="medium"
            trailingIcon={<ArrowRight className="size-5" />}
            onClick={() => document.getElementById("kits")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore live kits
          </Button>
          <Button
            size="medium"
            variant="stroke"
            intent="neutral"
            leadingIcon={<Github className="size-5" />}
            onClick={() => window.open(REPO_URL, "_blank", "noopener")}
          >
            View source
          </Button>
        </div>

        <ProductFrame className="mt-12 text-left" url="cyanium.dev">
          <div className="grid gap-4 md:grid-cols-2">
            <Panel title="Primitives" icon={<Sparkles className="size-5" />}>
              <div className="flex flex-wrap gap-2">
                <Button size="small" intent="primary">Primary</Button>
                <Button size="small" variant="stroke" intent="neutral">Stroke</Button>
                <Badge color="green" variant="lighter">Accessible</Badge>
                <Tag>Radix</Tag>
              </div>
            </Panel>
            <Panel title="Compose" icon={<BarChart3 className="size-5" />}>
              <Input label="Email" placeholder="you@company.com" className="mb-3" />
              <Button size="small" className="w-full">Save changes</Button>
            </Panel>
          </div>
        </ProductFrame>
      </section>

      <section className="border-y border-stroke-soft bg-bg-weak py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {siteStats.map((s) => (
            <StatItem key={s.label} num={s.num} label={s.label} />
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHead
          eyebrow="Packages"
          title="Four layers, one system"
          subtitle="Tokens feed primitives. Primitives compose kits. Fixtures wire demos without hiding the production API."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {siteFeatures.map((f, i) => {
            const Icon = featureIcons[i] ?? Sparkles;
            return (
              <FeatureCard
                key={f.title}
                icon={<Icon className="size-5" />}
                title={f.title}
                description={f.description}
              />
            );
          })}
        </div>
      </section>

      <section id="kits" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHead
          eyebrow="Live preview"
          title="Click a kit — it runs in this app"
          subtitle="Each template uses build*AppProps() from @cyanium/kits/fixtures. Toggle Demo vs Integration in the corner."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {liveKits.map((kit) => (
            <button
              key={kit.id}
              type="button"
              onClick={() => onExploreKit(kit.id)}
              className="group text-left transition-transform hover:-translate-y-0.5"
            >
              <ProductFrame url={kit.url}>
                <div className="flex min-h-[160px] flex-col justify-between gap-4 p-2">
                  <div>
                    <div className="text-sm font-semibold text-text-strong group-hover:text-primary">
                      {kit.label}
                    </div>
                    <p className="mt-2 text-sm text-text-sub">{kit.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Open live demo <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </ProductFrame>
            </button>
          ))}
        </div>
      </section>

      <section id="install" className="bg-bg-weak py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead eyebrow="Install" title="Three ways to adopt" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {installPaths.map((tier) => (
              <div key={tier.name} className="flex flex-col gap-4">
                <PricingTier
                  name={tier.name}
                  description={tier.description}
                  price={tier.price}
                  cta={tier.cta}
                  featured={"featured" in tier ? tier.featured : false}
                  badge={"badge" in tier ? tier.badge : undefined}
                  features={[...tier.features]}
                />
                <pre className="overflow-x-auto rounded-xl bg-bg-strong p-4 text-xs leading-relaxed text-white">
                  <code>{tier.command}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHead
          eyebrow="Docs"
          title="Storybook + example app"
          subtitle="pnpm storybook for component docs. pnpm example serves this landing page and live kit previews."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Panel title="Storybook" icon={<BookOpen className="size-5" />}>
            <p className="mb-4 text-sm text-text-sub">
              Atoms, molecules, organisms, kits, and integration stories with production wiring examples.
            </p>
            <code className="block rounded-lg bg-bg-weak px-3 py-2 text-sm text-text-strong">pnpm storybook</code>
          </Panel>
          <Panel title="This example" icon={<Zap className="size-5" />}>
            <p className="mb-4 text-sm text-text-sub">
              You are viewing the Vite example app — proof that tokens, UI, and kits render together.
            </p>
            <code className="block rounded-lg bg-bg-weak px-3 py-2 text-sm text-text-strong">pnpm example</code>
          </Panel>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-2xl px-6 py-20">
        <SectionHead eyebrow="FAQ" title="Common questions" />
        <div className="mt-10">
          <FaqList items={[...siteFaq]} />
        </div>
      </section>

      <footer className="border-t border-stroke-soft py-8 text-center text-sm text-text-sub">
        <p>
          Built with Cyanium ·{" "}
          <a href={REPO_URL} className="font-medium text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            codyrobertson/cyanium-design-system
          </a>
          {" · "}
          <a href={RELEASE_URL} className="hover:text-text-strong" target="_blank" rel="noopener noreferrer">
            Release v0.1.0
          </a>
        </p>
      </footer>
    </MarketingShell>
  );
}
