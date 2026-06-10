import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Github,
  Layers,
  Package,
  Sparkles,
} from "lucide-react";
import {
  Avatar,
  Badge,
  BrandMark,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Eyebrow,
  FaqList,
  FeatureCard,
  Input,
  MarketingShell,
  SectionHead,
  Switch,
  Tabs,
  Tag,
  cn,
} from "@cyanium/ui";
import { StatItem } from "@cyanium/kits/landing";
import {
  REPO_URL,
  RELEASE_URL,
  installTabs,
  liveKits,
  siteFaq,
  siteStats,
  systemFeatures,
  type InstallTabId,
} from "./content";
import { CopyBlock } from "./copy-block";
import type { KitView } from "./navigation";

export type { KitView };

export interface CyaniumSiteProps {
  onExploreKit: (kit: KitView) => void;
  onOpenGallery: () => void;
  onOpenDocs: () => void;
}

const featureIcons = [Package, Layers, Boxes, Sparkles] as const;

function CyaniumWordmark() {
  return (
    <span className="inline-flex items-center gap-2.5 font-display text-lg font-semibold text-text-strong">
      <BrandMark size={32} />
      Cyanium
    </span>
  );
}

function HeroShowcase() {
  const [alertsOn, setAlertsOn] = useState(true);

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-bg-weak p-6 shadow-[inset_0_0_0_1px_var(--stroke-soft-200)] md:p-8">
      <div className="flex items-center gap-3">
        <Avatar name="Alex Morgan" color="blue" size={48} status="online" />
        <div className="min-w-0 flex-1">
          <div className="font-display text-lg font-medium text-text-strong">Component preview</div>
          <div className="text-sm text-text-sub">Built from @cyanium/ui</div>
        </div>
        <Badge color="green" variant="lighter" dot>
          Active
        </Badge>
      </div>

      <Tabs
        variant="line"
        defaultValue="overview"
        items={[
          { value: "overview", label: "Overview", badge: 3 },
          { value: "kits", label: "Kits" },
        ]}
      />

      <Card raised padding="lg">
        <CardHeader>
          <CardTitle>Weekly limit</CardTitle>
          <CardDescription>Surfaces, inputs, and controls from the same token layer.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <label className="flex items-center gap-2 text-sm text-text-strong">
            <Switch checked={alertsOn} onCheckedChange={setAlertsOn} />
            Limit alerts
          </label>
          <Checkbox label="Email me" defaultChecked />
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2">
        <Button size="small" intent="primary">
          Primary
        </Button>
        <Button size="small" variant="stroke" intent="neutral">
          Neutral
        </Button>
        <Tag gray>Radix</Tag>
        <Tag>Tailwind v4</Tag>
      </div>

      <Input label="Work email" placeholder="you@team.com" />
    </div>
  );
}

export function CyaniumSite({ onExploreKit, onOpenGallery, onOpenDocs }: CyaniumSiteProps) {
  const [installTab, setInstallTab] = useState<InstallTabId>("npm");
  const activeInstall = installTabs.find((t) => t.id === installTab) ?? installTabs[0];

  return (
    <MarketingShell
      nav={
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-stroke-soft bg-bg-white/90 px-6 py-4 backdrop-blur-md">
          <CyaniumWordmark />
          <nav className="hidden items-center gap-6 text-sm font-medium text-text-sub md:flex">
            <button type="button" className="hover:text-text-strong" onClick={onOpenGallery}>
              Components
            </button>
            <button type="button" className="hover:text-text-strong" onClick={onOpenDocs}>
              Docs
            </button>
            <button
              type="button"
              className="hover:text-text-strong"
              onClick={() => document.getElementById("kits")?.scrollIntoView({ behavior: "smooth" })}
            >
              Kits
            </button>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              size="small"
              variant="ghost"
              intent="neutral"
              leadingIcon={<Github className="size-4" />}
              onClick={() => window.open(REPO_URL, "_blank", "noopener")}
            >
              <span className="hidden sm:inline">GitHub</span>
            </Button>
            <Button
              size="small"
              trailingIcon={<ArrowRight className="size-4" />}
              onClick={() => document.getElementById("install")?.scrollIntoView({ behavior: "smooth" })}
            >
              Install
            </Button>
          </div>
        </header>
      }
    >
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Open source · MIT · v0.1.0</Eyebrow>
            <h1 className="mt-6 font-display text-title-h1 font-medium tracking-tight text-text-strong md:text-[52px] md:leading-[1.08]">
              Production UI for React teams
            </h1>
            <p className="mt-4 max-w-lg text-paragraph-lg text-text-sub">
              Tokens, primitives, product kits, gallery, and docs — one monorepo you can install,
              copy, or clone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="medium" trailingIcon={<ArrowRight className="size-5" />} onClick={onOpenGallery}>
                Browse gallery
              </Button>
              <Button size="medium" variant="stroke" intent="neutral" onClick={onOpenDocs}>
                Read docs
              </Button>
            </div>
          </div>
          <HeroShowcase />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-stroke-soft bg-bg-weak py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {siteStats.map((s) => (
            <StatItem key={s.label} num={s.num} label={s.label} />
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHead
          align="left"
          eyebrow="Monorepo"
          title="Four packages, one system"
          subtitle="Every layer uses the same semantic tokens and inset surface language."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {systemFeatures.map((feature, i) => {
            const Icon = featureIcons[i] ?? Package;
            return (
              <FeatureCard
                key={feature.title}
                icon={<Icon className="size-5" />}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </section>

      {/* Kits */}
      <section id="kits" className="bg-bg-weak py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            align="left"
            eyebrow="Product kits"
            title="Full surfaces, live in this app"
            subtitle="Demo mode uses wrappers. Integration mode wires build*AppProps() from fixtures."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {liveKits.map((kit) => (
              <Card
                key={kit.id}
                raised
                padding="none"
                className="group flex cursor-pointer flex-col overflow-hidden transition-shadow hover:shadow-regular-md"
                onClick={() => onExploreKit(kit.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onExploreKit(kit.id);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className="border-b border-stroke-soft bg-bg-weak px-5 py-4">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle>{kit.label}</CardTitle>
                    <Tag>{kit.tag}</Tag>
                  </div>
                  <CardDescription className="mt-1.5">{kit.description}</CardDescription>
                </div>
                <div className="flex min-h-[120px] flex-1 items-center justify-center bg-[repeating-linear-gradient(45deg,var(--bg-soft-200)_0_8px,var(--bg-weak-50)_8px_16px)] p-6">
                  <BarChart3 className="size-8 text-icon-soft opacity-60" aria-hidden />
                </div>
                <CardFooter className="border-t border-stroke-soft px-5 py-3">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Open demo
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Install */}
      <section id="install" className="mx-auto max-w-3xl px-6 py-20">
        <SectionHead align="left" eyebrow="Get started" title="Pick your install path" />
        <div className="mt-8 flex gap-1 rounded-lg bg-bg-weak p-1">
          {installTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setInstallTab(tab.id)}
              className={cn(
                "flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                installTab === tab.id
                  ? "bg-bg-white text-text-strong shadow-sm"
                  : "text-text-sub hover:text-text-strong",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <CopyBlock command={activeInstall.command} variant="light" />
        </div>
        <p className="mt-4 text-center text-sm text-text-soft">
          Local: <code className="font-mono text-text-sub">pnpm storybook</code>
          {" · "}
          <code className="font-mono text-text-sub">pnpm example</code>
          {" · "}
          <button
            type="button"
            className="text-primary hover:underline"
            onClick={() => window.open(RELEASE_URL, "_blank", "noopener")}
          >
            v0.1.0 notes
          </button>
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-stroke-soft bg-bg-weak py-20">
        <div className="mx-auto max-w-2xl px-6">
          <SectionHead align="left" eyebrow="FAQ" title="Common questions" />
          <div className="mt-10">
            <FaqList items={[...siteFaq]} />
          </div>
        </div>
      </section>

      <footer className="border-t border-stroke-soft py-8 text-center text-sm text-text-sub">
        <a
          href={REPO_URL}
          className="font-medium text-text-strong hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          codyrobertson/cyanium-design-system
        </a>
        <span className="mx-2 text-text-soft">·</span>
        Built with @cyanium/ui
      </footer>
    </MarketingShell>
  );
}
