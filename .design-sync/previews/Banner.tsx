import { Banner, Button } from "@cyanium/ui";
import { Sparkles, Megaphone, AlertTriangle } from "lucide-react";

export function Default() {
  return (
    <div className="w-[560px]">
      <Banner color="blue" icon={<Sparkles className="size-4" />}>
        New features are available in this release.
      </Banner>
    </div>
  );
}

export function Colors() {
  return (
    <div className="w-[560px] space-y-3">
      <Banner color="blue" icon={<Sparkles className="size-4" />}>
        Workspace analytics just got a refresh.
      </Banner>
      <Banner color="green" icon={<Megaphone className="size-4" />}>
        All systems operational — 99.99% uptime this month.
      </Banner>
      <Banner color="orange" icon={<AlertTriangle className="size-4" />}>
        Scheduled maintenance this Saturday from 2–4am UTC.
      </Banner>
      <Banner color="red" icon={<AlertTriangle className="size-4" />}>
        Your plan is over its monthly request quota.
      </Banner>
    </div>
  );
}

export function WithAction() {
  return (
    <div className="w-[560px] space-y-3">
      <Banner
        color="blue"
        variant="light"
        icon={<Sparkles className="size-4" />}
        action={<Button size="xsmall" intent="primary">Upgrade</Button>}
        onClose={() => undefined}
      >
        You're on the Starter plan. Upgrade to unlock unlimited seats.
      </Banner>
    </div>
  );
}
