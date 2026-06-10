import { Button, cn } from "@cyanium/ui";

type KitView = "finance" | "landing" | "ai";
type Mode = "demo" | "integration";

export interface DemoChromeProps {
  view: KitView;
  mode: Mode;
  onHome: () => void;
  onView: (view: KitView) => void;
  onMode: (mode: Mode) => void;
}

const views: { id: KitView; label: string }[] = [
  { id: "finance", label: "Finance" },
  { id: "landing", label: "Landing" },
  { id: "ai", label: "AI" },
];

export function DemoChrome({ view, mode, onHome, onView, onMode }: DemoChromeProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-3 pb-4">
      <div
        className={cn(
          "pointer-events-auto flex max-w-3xl flex-wrap items-center gap-2 rounded-2xl border border-stroke-soft bg-bg-white/95 p-2 shadow-md backdrop-blur-md",
          "shadow-[inset_0_0_0_1px_var(--stroke-soft-200)]",
        )}
      >
        <Button size="small" variant="ghost" intent="neutral" onClick={onHome}>
          ← Home
        </Button>
        <div className="mx-1 hidden h-6 w-px bg-stroke-soft sm:block" />
        <div className="flex gap-1 rounded-lg bg-bg-weak p-0.5">
          {views.map((v) => (
            <Button
              key={v.id}
              size="small"
              variant={view === v.id ? "filled" : "ghost"}
              intent={view === v.id ? "primary" : "neutral"}
              onClick={() => onView(v.id)}
            >
              {v.label}
            </Button>
          ))}
        </div>
        <div className="flex gap-1 rounded-lg bg-bg-weak p-0.5">
          <Button
            size="small"
            variant={mode === "demo" ? "filled" : "ghost"}
            intent={mode === "demo" ? "primary" : "neutral"}
            onClick={() => onMode("demo")}
          >
            Demo
          </Button>
          <Button
            size="small"
            variant={mode === "integration" ? "filled" : "ghost"}
            intent={mode === "integration" ? "primary" : "neutral"}
            onClick={() => onMode("integration")}
          >
            Integration
          </Button>
        </div>
      </div>
    </div>
  );
}
