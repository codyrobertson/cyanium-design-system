import type { ReactNode } from "react";
import { Github } from "lucide-react";
import { Button, cn } from "@cyanium/ui";
import { REPO_URL } from "./content";
import { navigateTo, type AppView } from "./navigation";
import "./site.css";

export interface SiteShellProps {
  active: "gallery" | "docs";
  sidebar: ReactNode;
  children: ReactNode;
}

function SiteLogo({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2.5 font-display text-[15px] font-semibold tracking-tight text-text-strong transition-colors hover:text-primary"
    >
      <span className="relative inline-flex size-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-[var(--blue-400)] to-[var(--blue-600)] shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_8px_20px_-6px_rgba(59,130,246,0.55)]">
        <span className="size-3 rounded-[3px] bg-white/90" />
      </span>
      Cyanium
    </button>
  );
}

const topNav: { id: AppView | "gallery" | "docs"; label: string; hash: string }[] = [
  { id: "gallery", label: "Components", hash: "#/gallery" },
  { id: "docs", label: "Docs", hash: "#/docs" },
  { id: "home", label: "Kits", hash: "#/" },
];

export function SiteShell({ active, sidebar, children }: SiteShellProps) {
  return (
    <div className="site-root flex min-h-screen flex-col bg-bg-white">
      <header className="sticky top-0 z-40 border-b border-stroke-soft bg-bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <SiteLogo onClick={() => navigateTo({ view: "home" })} />
          <nav className="hidden items-center gap-1 sm:flex">
            {topNav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  if (item.id === "home") navigateTo({ view: "home" });
                  else if (item.id === "gallery") navigateTo({ view: "gallery" });
                  else navigateTo({ view: "docs" });
                }}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                  item.id === active
                    ? "bg-bg-weak text-text-strong"
                    : "text-text-sub hover:bg-bg-weak hover:text-text-strong",
                )}
              >
                {item.label}
              </button>
            ))}
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
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-0 px-4 sm:px-6">
        <aside className="hidden w-56 shrink-0 border-r border-stroke-soft py-6 pr-4 md:block lg:w-64 lg:pr-6">
          {sidebar}
        </aside>
        <main className="min-w-0 flex-1 py-6 pl-0 md:pl-6 lg:pl-8">{children}</main>
      </div>
    </div>
  );
}

export function SidebarSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-6">
      <p className="mb-2 px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-soft">{title}</p>
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  );
}

export function SidebarLink({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-lg px-2 py-1.5 text-left text-sm transition-colors",
        active
          ? "bg-primary-lighter font-medium text-primary"
          : "text-text-sub hover:bg-bg-weak hover:text-text-strong",
      )}
    >
      {children}
    </button>
  );
}
