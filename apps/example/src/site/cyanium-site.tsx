import { useState } from "react";
import {
  ArrowRight,
  Copy,
  Github,
  Check,
  Terminal,
} from "lucide-react";
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
  packages,
  siteFaq,
  siteStats,
  type InstallTabId,
} from "./content";
import "./site.css";

export type KitView = "finance" | "landing" | "ai";

export interface CyaniumSiteProps {
  onExploreKit: (kit: KitView) => void;
}

function SiteLogo() {
  return (
    <span className="inline-flex items-center gap-2.5 font-display text-[15px] font-semibold tracking-tight text-white">
      <span className="relative inline-flex size-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-[var(--blue-400)] to-[var(--blue-600)] shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_8px_20px_-6px_rgba(59,130,246,0.55)]">
        <span className="size-3 rounded-[3px] bg-white/90" />
      </span>
      Cyanium
    </span>
  );
}

function KitThumb({ kit }: { kit: (typeof liveKits)[number] }) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl bg-gradient-to-br p-4", kit.accent)}>
      <div className={cn("absolute left-0 top-0 h-1 w-full", kit.bar)} />
      <div className="mt-2 space-y-2">
        {kit.id === "finance" ? (
          <>
            <div className="flex gap-2">
              <div className="h-16 w-24 rounded-lg bg-white/80 shadow-sm" />
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="h-3 w-3/4 rounded bg-white/70" />
                <div className="h-3 w-1/2 rounded bg-white/50" />
                <div className="mt-auto flex h-8 items-end gap-1">
                  {[40, 65, 45, 80, 55].map((h, i) => (
                    <div key={i} className="w-2 rounded-sm bg-[var(--brand-orange)]/70" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : null}
        {kit.id === "ai" ? (
          <div className="space-y-2 px-1">
            <div className="ml-auto h-6 w-[70%] rounded-xl rounded-tr-sm bg-[var(--blue-500)]/15" />
            <div className="h-10 w-[85%] rounded-xl rounded-tl-sm bg-white/80" />
            <div className="mx-auto h-8 w-full rounded-full bg-white/60" />
          </div>
        ) : null}
        {kit.id === "landing" ? (
          <div className="space-y-2 px-2 py-1 text-center">
            <div className="mx-auto h-2 w-12 rounded-full bg-white/50" />
            <div className="mx-auto h-4 w-3/4 rounded bg-white/70" />
            <div className="mx-auto h-2 w-1/2 rounded bg-white/40" />
            <div className="mx-auto mt-2 h-6 w-20 rounded-md bg-[var(--blue-500)]/80" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function CopyBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-stroke-soft bg-bg-strong">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-white/60">
          <Terminal className="size-3.5" /> terminal
        </span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="site-code overflow-x-auto p-4 text-[13px] leading-relaxed text-white/90">
        <code>{command}</code>
      </pre>
    </div>
  );
}

export function CyaniumSite({ onExploreKit }: CyaniumSiteProps) {
  const [installTab, setInstallTab] = useState<InstallTabId>("npm");
  const activeInstall = installTabs.find((t) => t.id === installTab) ?? installTabs[0];

  return (
    <div className="site-root min-h-screen bg-bg-white">
      {/* Hero */}
      <div className="site-hero-bg relative overflow-hidden">
        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <SiteLogo />
          <div className="flex items-center gap-2">
            <Button
              size="small"
              variant="ghost"
              intent="neutral"
              className="text-white/80 hover:bg-white/10 hover:text-white"
              leadingIcon={<Github className="size-4" />}
              onClick={() => window.open(REPO_URL, "_blank", "noopener")}
            >
              <span className="hidden sm:inline">Source</span>
            </Button>
            <Button
              size="small"
              className="bg-white text-[var(--site-ink)] hover:bg-white/90"
              onClick={() => document.getElementById("kits")?.scrollIntoView({ behavior: "smooth" })}
            >
              Live demos
            </Button>
          </div>
        </header>

        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pb-28 pt-8 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-16 md:pb-32 md:pt-4">
          <div>
            <div className="site-reveal mb-5 flex flex-wrap gap-2">
              {siteStats.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                >
                  <span className="font-mono text-white">{s.num}</span>
                  {s.label}
                </span>
              ))}
              <Badge color="green" variant="lighter" size="small" className="border border-white/10">
                MIT
              </Badge>
            </div>
            <h1 className="site-reveal site-reveal-delay-1 max-w-xl font-display text-[2.35rem] font-medium leading-[1.08] tracking-tight text-white md:text-[3.25rem]">
              Design system.
              <br />
              <span className="text-white/55">Not a component dump.</span>
            </h1>
            <p className="site-reveal site-reveal-delay-2 mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
              Tokens, Radix primitives, and three product kits — wired with fixture builders,
              Storybook, and a registry you can actually CI-check.
            </p>
            <div className="site-reveal site-reveal-delay-3 mt-8 flex flex-wrap gap-3">
              <Button
                size="medium"
                className="bg-white text-[var(--site-ink)] hover:bg-white/90"
                trailingIcon={<ArrowRight className="size-4" />}
                onClick={() => document.getElementById("install")?.scrollIntoView({ behavior: "smooth" })}
              >
                Install
              </Button>
              <Button
                size="medium"
                variant="stroke"
                intent="neutral"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
                onClick={() => window.open(RELEASE_URL, "_blank", "noopener")}
              >
                v0.1.0 release notes
              </Button>
            </div>
          </div>

          <div className="site-demo-float site-reveal site-reveal-delay-2 relative">
            <div className="absolute -inset-8 rounded-[32px] bg-[var(--blue-500)]/20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-white shadow-[0_32px_64px_-24px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2 border-b border-stroke-soft bg-bg-weak px-4 py-3">
                <span className="size-2 rounded-full bg-[#ff5f57]" />
                <span className="size-2 rounded-full bg-[#febc2e]" />
                <span className="size-2 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-xs text-text-soft">@cyanium/ui</span>
              </div>
              <div className="space-y-4 p-5">
                <div className="flex flex-wrap gap-2">
                  <Button size="small" intent="primary">Primary</Button>
                  <Button size="small" variant="stroke" intent="neutral">Neutral</Button>
                  <Tag>Radix</Tag>
                </div>
                <Input label="Work email" placeholder="you@team.com" />
                <div className="flex gap-2">
                  <Badge color="green" variant="lighter">a11y</Badge>
                  <Badge color="blue" variant="lighter">CVA</Badge>
                  <Badge color="gray" variant="lighter">Tailwind v4</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-hero-fade absolute inset-x-0 bottom-0 h-24" aria-hidden />
      </div>

      {/* Packages strip */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-text-soft">Monorepo packages</p>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-stroke-soft bg-stroke-soft md:grid-cols-2">
          {packages.map((pkg) => (
            <div key={pkg.name} className="flex flex-col gap-1 bg-bg-white p-6 md:p-8">
              <code className="font-mono text-sm font-medium text-primary">{pkg.name}</code>
              <p className="text-sm text-text-sub">{pkg.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live kits — bento */}
      <section id="kits" className="border-y border-stroke-soft bg-bg-weak py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-soft">Live in this app</p>
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-text-strong md:text-4xl">
                Three kits. Click to mount.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-text-sub">
              Demo mode uses *Demo wrappers. Integration mode uses{" "}
              <code className="rounded bg-bg-white px-1 py-0.5 font-mono text-xs">build*AppProps()</code>.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {liveKits.map((kit, i) => (
              <button
                key={kit.id}
                type="button"
                onClick={() => onExploreKit(kit.id)}
                className={cn(
                  "site-kit-thumb group flex flex-col overflow-hidden rounded-2xl border border-stroke-soft bg-bg-white text-left",
                  i === 0 && "md:col-span-2 md:row-span-2",
                )}
              >
                <div className={cn("p-5", i === 0 ? "pb-3" : "pb-2")}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-lg font-medium text-text-strong group-hover:text-primary">
                      {kit.label}
                    </span>
                    <Tag className="shrink-0">{kit.tag}</Tag>
                  </div>
                  <p className="mt-1.5 text-sm text-text-sub">{kit.description}</p>
                </div>
                <div className={cn("mt-auto px-5", i === 0 ? "pb-5" : "pb-4")}>
                  <KitThumb kit={kit} />
                </div>
                <div className="flex items-center gap-1 border-t border-stroke-soft px-5 py-3 text-sm font-medium text-primary">
                  Open demo
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Install */}
      <section id="install" className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-soft">Get started</p>
        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-text-strong">
          Pick your install path
        </h2>
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
          <CopyBlock command={activeInstall.command} />
        </div>
        <p className="mt-4 text-center text-sm text-text-soft">
          Local dev:{" "}
          <code className="font-mono text-text-sub">pnpm storybook</code>
          {" · "}
          <code className="font-mono text-text-sub">pnpm example</code>
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-stroke-soft bg-bg-weak py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-2xl font-medium text-text-strong">FAQ</h2>
          <div className="mt-8">
            <FaqList items={[...siteFaq]} />
          </div>
        </div>
      </section>

      <footer className="border-t border-stroke-soft py-10 text-center">
        <p className="text-sm text-text-sub">
          <a
            href={REPO_URL}
            className="font-medium text-text-strong hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            codyrobertson/cyanium-design-system
          </a>
          <span className="mx-2 text-text-soft">·</span>
          Built with its own components
        </p>
      </footer>
    </div>
  );
}
