import { FeatureCard } from "@cyanium/ui";
import { ShieldCheck, Sparkles, Zap } from "lucide-react";

export function Default() {
  return (
    <div className="w-80">
      <FeatureCard
        icon={<Sparkles className="size-5" />}
        title="Token-first"
        description="Semantic CSS variables across every layer of the system."
        link="Learn more"
      />
    </div>
  );
}

export function WithoutLink() {
  return (
    <div className="w-80">
      <FeatureCard
        icon={<ShieldCheck className="size-5" />}
        title="Secure by default"
        description="SSO, audit logs, and role-based access ship in every plan."
      />
    </div>
  );
}

export function Grid() {
  return (
    <div className="grid w-[680px] grid-cols-2 gap-4">
      <FeatureCard
        icon={<Zap className="size-5" />}
        title="Fast"
        description="Sub-100ms interactions tuned for dense dashboards."
        link="See benchmarks"
      />
      <FeatureCard
        icon={<Sparkles className="size-5" />}
        title="Composable"
        description="Drop-in primitives that snap together cleanly."
        link="Browse components"
      />
    </div>
  );
}
