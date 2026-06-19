import { Separator } from "@cyanium/ui";

export function Horizontal() {
  return (
    <div className="w-80 space-y-3 text-sm text-text-sub">
      <div className="text-text-strong">Account</div>
      <Separator />
      <div>Manage your profile, billing, and notifications.</div>
    </div>
  );
}

export function Vertical() {
  return (
    <div className="flex items-center gap-4 text-sm text-text-sub">
      <span>Overview</span>
      <Separator className="h-8 w-px" orientation="vertical" />
      <span>Activity</span>
      <Separator className="h-8 w-px" orientation="vertical" />
      <span>Settings</span>
    </div>
  );
}
