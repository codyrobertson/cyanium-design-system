import {
  MarketingShell,
  Button,
  Badge,
  Eyebrow,
  SectionHead,
  FeatureCard,
} from "@cyanium/ui";
import { ArrowRight, Sparkles, Zap, ShieldCheck, BarChart3 } from "lucide-react";

/**
 * MarketingShell — the full-bleed marketing page wrapper (`min-h-screen`,
 * white background). Takes an optional `nav` slot rendered above `children`.
 * Composed here into a realistic product marketing page: sticky nav, hero,
 * and a feature grid built from DS primitives.
 */

function Nav() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-stroke-soft bg-bg-white/90 px-6 py-4 backdrop-blur-md">
      <span className="inline-flex items-center gap-2 font-display text-lg font-semibold text-text-strong">
        <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary text-white">
          <Sparkles className="size-4" />
        </span>
        Northwind
      </span>
      <nav className="hidden items-center gap-8 text-sm font-medium text-text-sub md:flex">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#docs">Docs</a>
        <a href="#company">Company</a>
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="ghost" intent="neutral" size="small">
          Sign in
        </Button>
        <Button size="small" trailingIcon={<ArrowRight className="size-4" />}>
          Get started
        </Button>
      </div>
    </header>
  );
}

export const Page = () => (
  <MarketingShell nav={<Nav />}>
    <section className="mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
      <Eyebrow>New in 2026</Eyebrow>
      <h1 className="mt-6 font-display text-title-h1 font-medium tracking-tight text-text-strong md:text-[56px] md:leading-[1.1]">
        Ship analytics your whole team trusts
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-paragraph-lg text-text-sub">
        Northwind turns raw events into governed metrics in minutes — no warehouse
        migration, no dbt rewrite, no waiting on the data team.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button size="medium" trailingIcon={<ArrowRight className="size-5" />}>
          Start free trial
        </Button>
        <Button size="medium" variant="stroke" intent="neutral">
          Book a demo
        </Button>
      </div>
    </section>

    <section id="features" className="border-t border-stroke-soft bg-bg-weak py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="Platform"
          title="Everything you need to model and trust your metrics"
          subtitle="A semantic layer, governance, and dashboards in one place."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Zap className="size-5" />}
            title="Instant pipelines"
            description="Connect a source and get governed tables in under five minutes."
          />
          <FeatureCard
            icon={<BarChart3 className="size-5" />}
            title="Semantic layer"
            description="Define a metric once and reuse it across every report and API."
          />
          <FeatureCard
            icon={<ShieldCheck className="size-5" />}
            title="Row-level security"
            description="SOC 2 Type II controls with per-team and per-row access policies."
          />
          <FeatureCard
            icon={<Sparkles className="size-5" />}
            title="AI explanations"
            description="Ask why a number moved and get a sourced, auditable answer."
          />
        </div>
      </div>
    </section>

    <section className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-20 text-center">
      <Badge color="orange" variant="lighter" size="medium">
        Trusted by 4,000+ data teams
      </Badge>
      <h2 className="font-display text-title-h2 font-medium tracking-tight text-text-strong">
        Start in minutes, scale to billions of rows
      </h2>
      <Button size="medium" trailingIcon={<ArrowRight className="size-5" />}>
        Create your workspace
      </Button>
    </section>

    <footer className="border-t border-stroke-soft py-8 text-center text-sm text-text-sub">
      &copy; 2026 Northwind Labs, Inc. All rights reserved.
    </footer>
  </MarketingShell>
);
