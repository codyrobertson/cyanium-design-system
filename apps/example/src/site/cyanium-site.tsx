import { useState } from "react";
import { ArrowRight, Github } from "lucide-react";
import {
  Badge,
  Button,
  FaqList,
  Input,
  Tag,
  cn,
} from "@cyanium/ui";
import {
  REPO_URL,
  RELEASE_URL,
  installTabs,
  liveKits,
  manifest,
  siteFaq,
  siteStats,
  type InstallTabId,
} from "./content";
import { CopyBlock } from "./copy-block";
import type { KitView } from "./navigation";
import "./site.css";

export type { KitView };

export interface CyaniumSiteProps {
  onExploreKit: (kit: KitView) => void;
  onOpenGallery: () => void;
  onOpenDocs: () => void;
}

function SiteLogo() {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="site-logo-mark relative inline-flex size-9 shrink-0 items-center justify-center rounded-lg">
        <span className="relative z-10 size-2.5 rounded-[2px] bg-white/95" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold tracking-tight text-[var(--site-ink)]">
          Cyanium
        </span>
        <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--site-ink-faint)]">
          Design System
        </span>
      </span>
    </span>
  );
}

function KitPreview({ kit }: { kit: (typeof liveKits)[number] }) {
  if (kit.id === "finance") {
    return (
      <div className="site-kit-preview site-kit-preview-finance">
        <div className="rounded-lg border border-stroke-soft bg-bg-white p-2 shadow-sm">
          <div className="h-2 w-10 rounded bg-bg-soft" />
          <div className="mt-2 font-mono text-lg font-medium text-text-strong">$12.4k</div>
          <div className="mt-1 text-[10px] text-text-soft">Monthly spend</div>
        </div>
        <div className="flex flex-col justify-end gap-1.5">
          <div className="flex h-10 items-end gap-1">
            {[32, 58, 44, 72, 51, 68].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-[var(--kit-accent)] opacity-80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="h-2 w-full rounded bg-bg-soft" />
          <div className="h-2 w-2/3 rounded bg-bg-weak" />
        </div>
      </div>
    );
  }

  if (kit.id === "ai") {
    return (
      <div className="site-kit-preview site-kit-preview-ai">
        <div className="ml-auto max-w-[78%] rounded-2xl rounded-tr-md bg-bg-strong px-3 py-2 text-[11px] text-white">
          Summarize last quarter&apos;s spend
        </div>
        <div className="max-w-[88%] rounded-2xl rounded-tl-md border border-stroke-soft bg-bg-white px-3 py-2 text-[11px] text-text-strong shadow-sm">
          Total spend was $37,240 across 142 transactions…
        </div>
        <div className="mt-1 h-8 rounded-full border border-stroke-soft bg-bg-white shadow-sm" />
      </div>
    );
  }

  return (
    <div className="site-kit-preview site-kit-preview-landing">
      <div className="h-1.5 w-14 rounded-full bg-[var(--kit-accent)]/30" />
      <div className="h-3 w-3/4 rounded bg-text-strong/10" />
      <div className="h-2 w-1/2 rounded bg-text-soft/20" />
      <div className="mt-2 flex gap-2">
        <div className="h-6 w-16 rounded-md bg-[var(--kit-accent)]" />
        <div className="h-6 w-16 rounded-md border border-stroke-soft bg-bg-white" />
      </div>
    </div>
  );
}

export function CyaniumSite({ onExploreKit, onOpenGallery, onOpenDocs }: CyaniumSiteProps) {
  const [installTab, setInstallTab] = useState<InstallTabId>("npm");
  const activeInstall = installTabs.find((t) => t.id === installTab) ?? installTabs[0];

  return (
    <div className="site-root min-h-screen">
      <header className="site-header sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <SiteLogo />
          <nav className="flex items-center gap-1 sm:gap-2">
            <Button
              size="small"
              variant="ghost"
              intent="neutral"
              className="hidden sm:inline-flex"
              onClick={onOpenGallery}
            >
              Components
            </Button>
            <Button
              size="small"
              variant="ghost"
              intent="neutral"
              className="hidden sm:inline-flex"
              onClick={onOpenDocs}
            >
              Docs
            </Button>
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
              intent="primary"
              onClick={() => document.getElementById("kits")?.scrollIntoView({ behavior: "smooth" })}
            >
              Live demos
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pb-24 md:pt-20">
          <div className="site-reveal site-section-label mb-8">Open source · MIT · v0.1.0</div>

          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
            <div>
              <h1 className="site-reveal site-reveal-delay-1 site-serif max-w-[14ch] text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.95] text-[var(--site-ink)]">
                The interface layer you <em>wire once</em>.
              </h1>
              <p className="site-reveal site-reveal-delay-2 mt-7 max-w-md text-[16px] leading-[1.65] text-[var(--site-ink-muted)]">
                Tokens, Radix primitives, product kits, and an in-app gallery — built for teams
                who ship surfaces, not screenshot collections.
              </p>
              <div className="site-reveal site-reveal-delay-3 mt-10 flex flex-wrap gap-3">
                <Button
                  size="medium"
                  intent="primary"
                  trailingIcon={<ArrowRight className="size-4" />}
                  onClick={onOpenGallery}
                >
                  Browse components
                </Button>
                <Button
                  size="medium"
                  variant="stroke"
                  intent="neutral"
                  onClick={() => document.getElementById("install")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Install
                </Button>
                <Button
                  size="medium"
                  variant="ghost"
                  intent="neutral"
                  onClick={onOpenDocs}
                >
                  Read docs
                </Button>
              </div>
            </div>

            <div className="site-reveal site-reveal-delay-2 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-2">
              {siteStats.map((s) => (
                <div key={s.label} className="site-stat">
                  <div className="site-stat-num">{s.num}</div>
                  <div className="mt-1.5 text-xs text-[var(--site-ink-faint)]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="site-reveal site-reveal-delay-3 site-hero-rule mt-14 md:mt-20" />

          {/* Specimen — real components, not a fake window */}
          <div className="site-reveal site-reveal-delay-4 site-specimen mt-10 overflow-hidden rounded-xl">
            <div className="site-specimen-bar flex items-center justify-between px-4 py-2.5">
              <span className="font-mono text-[11px] text-[var(--site-ink-faint)]">@cyanium/ui</span>
              <span className="font-mono text-[11px] text-[var(--site-ink-faint)]">specimen</span>
            </div>
            <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button size="small" intent="primary">Primary</Button>
                  <Button size="small" variant="stroke" intent="neutral">Neutral</Button>
                  <Button size="small" variant="lighter" intent="error">Destructive</Button>
                </div>
                <Input label="Work email" placeholder="you@team.com" className="max-w-sm" />
              </div>
              <div className="flex flex-wrap items-center gap-2 md:max-w-xs md:justify-end">
                <Badge color="green" variant="lighter" dot>Accessible</Badge>
                <Badge color="blue" variant="lighter">Radix</Badge>
                <Tag>Tailwind v4</Tag>
                <Tag gray>CVA</Tag>
              </div>
            </div>
          </div>
        </section>

        {/* Manifest */}
        <section id="features" className="border-y border-[var(--site-rule)] bg-white/60">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="site-section-label">Manifest</p>
                <h2 className="site-serif mt-3 text-3xl text-[var(--site-ink)] md:text-4xl">
                  What you get
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-[var(--site-ink-muted)]">
                Four layers, one repo. No hand-wavy &ldquo;design language&rdquo; PDF — working code
                with checks that keep it honest.
              </p>
            </div>
            <div>
              {manifest.map((item) => (
                <article key={item.index} className="site-manifest-row">
                  <span className="site-manifest-index">{item.index}</span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-[var(--site-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--site-ink-muted)]">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Kits */}
        <section id="kits" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="site-section-label">Product kits</p>
              <h2 className="site-serif mt-3 text-3xl text-[var(--site-ink)] md:text-4xl">
                Full surfaces, live in this app
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--site-ink-muted)]">
              Demo mode uses wrappers. Integration mode wires{" "}
              <code className="rounded bg-bg-weak px-1 py-0.5 font-mono text-xs">build*AppProps()</code>{" "}
              from fixtures.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {liveKits.map((kit) => (
              <button
                key={kit.id}
                type="button"
                onClick={() => onExploreKit(kit.id)}
                className={cn(
                  "site-kit-card site-kit-tone-" + kit.tone,
                  "group overflow-hidden rounded-xl",
                )}
              >
                <div className="site-kit-accent-bar" />
                <div className="flex items-start justify-between gap-3 p-5 pb-3">
                  <div>
                    <span className="site-kit-index">{kit.index}</span>
                    <h3 className="mt-2 font-display text-xl font-medium text-text-strong group-hover:text-primary">
                      {kit.label}
                    </h3>
                  </div>
                  <Tag className="shrink-0">{kit.tag}</Tag>
                </div>
                <p className="px-5 pb-4 text-sm leading-relaxed text-text-sub">{kit.description}</p>
                <KitPreview kit={kit} />
                <div className="flex items-center gap-1.5 border-t border-stroke-soft px-5 py-3.5 text-sm font-medium text-primary">
                  Open demo
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Install */}
        <section id="install" className="border-t border-[var(--site-rule)] bg-white/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="site-section-label">Get started</p>
              <h2 className="site-serif mt-3 text-3xl text-[var(--site-ink)]">
                Three ways in
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--site-ink-muted)]">
                Install packages, copy from the registry, or clone the monorepo and run Storybook
                locally.
              </p>
              <div className="mt-8 flex flex-col gap-1">
                {installTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setInstallTab(tab.id)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors",
                      installTab === tab.id
                        ? "bg-[var(--site-cyan-soft)] text-[var(--site-ink)]"
                        : "text-[var(--site-ink-muted)] hover:bg-bg-weak hover:text-[var(--site-ink)]",
                    )}
                  >
                    {tab.label}
                    {installTab === tab.id ? (
                      <ArrowRight className="size-4 text-[var(--site-cyan)]" />
                    ) : null}
                  </button>
                ))}
              </div>
              <p className="mt-6 text-xs text-[var(--site-ink-faint)]">
                Local:{" "}
                <code className="font-mono">pnpm storybook</code>
                {" · "}
                <code className="font-mono">pnpm example</code>
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <CopyBlock command={activeInstall.command} variant="light" />
              <button
                type="button"
                onClick={() => window.open(RELEASE_URL, "_blank", "noopener")}
                className="mt-4 self-start text-sm text-[var(--site-cyan)] hover:underline"
              >
                v0.1.0 release notes →
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-[var(--site-rule)]">
          <div className="mx-auto max-w-2xl px-6 py-16 md:py-20">
            <h2 className="site-serif text-2xl text-[var(--site-ink)] md:text-3xl">Questions</h2>
            <div className="mt-8">
              <FaqList items={[...siteFaq]} />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-[var(--site-ink-muted)]">
            <a
              href={REPO_URL}
              className="font-medium text-[var(--site-ink)] hover:text-[var(--site-cyan)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              codyrobertson/cyanium-design-system
            </a>
            <span className="mx-2 text-[var(--site-ink-faint)]">·</span>
            Built with its own components
          </p>
        </div>
      </footer>
    </div>
  );
}
