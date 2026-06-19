import { Panel, Button, Badge } from "@cyanium/ui";
import { Activity, CreditCard } from "lucide-react";

export function Default() {
  return (
    <div className="w-[420px]">
      <Panel
        title="Recent activity"
        icon={<Activity className="size-5" />}
        action={<Button variant="ghost" size="xsmall">View all</Button>}
      >
        <ul className="space-y-3 text-sm">
          <li className="flex items-center justify-between">
            <span className="text-text-strong">Signed in from San Francisco</span>
            <span className="text-text-soft">2m ago</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-text-strong">Exported transactions report</span>
            <span className="text-text-soft">1h ago</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-text-strong">Updated payout method</span>
            <span className="text-text-soft">Yesterday</span>
          </li>
        </ul>
      </Panel>
    </div>
  );
}

export function WithStatus() {
  return (
    <div className="w-[420px]">
      <Panel
        title="Payment method"
        icon={<CreditCard className="size-5" />}
        action={<Badge color="green" variant="light">Verified</Badge>}
      >
        <div className="flex items-center justify-between rounded-lg bg-bg-weak p-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-text-strong">Visa ending 4242</span>
            <span className="text-xs text-text-sub">Expires 08 / 27</span>
          </div>
          <Button variant="stroke" size="small">Replace</Button>
        </div>
      </Panel>
    </div>
  );
}
