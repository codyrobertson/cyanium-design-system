import { Checkbox } from "@cyanium/ui";

export function Default() {
  return (
    <div className="w-80">
      <Checkbox label="Remember me on this device" defaultChecked />
    </div>
  );
}

export function States() {
  return (
    <div className="flex w-80 flex-col gap-4">
      <Checkbox label="Email me product updates" defaultChecked />
      <Checkbox label="Subscribe to the weekly digest" />
      <Checkbox label="Select all transactions" indeterminate defaultChecked="indeterminate" />
    </div>
  );
}

export function TermsList() {
  return (
    <div className="flex w-80 flex-col gap-3 rounded-xl border border-stroke-soft bg-bg-weak p-4">
      <span className="text-sm font-medium text-text-strong">Account preferences</span>
      <Checkbox label="Enable two-factor authentication" defaultChecked />
      <Checkbox label="Share anonymized usage data" />
      <Checkbox label="Accept the updated Terms of Service" required />
    </div>
  );
}
