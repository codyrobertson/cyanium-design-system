import { Switch } from "@cyanium/ui";

export function Default() {
  return (
    <div className="flex w-80 items-center justify-between">
      <span className="text-sm text-text-strong">Push notifications</span>
      <Switch defaultChecked />
    </div>
  );
}

export function Sizes() {
  return (
    <div className="flex w-80 items-center gap-6">
      <Switch size="small" defaultChecked />
      <Switch size="medium" defaultChecked />
      <Switch size="medium" />
    </div>
  );
}

export function SettingsList() {
  return (
    <div className="flex w-96 flex-col divide-y divide-stroke-soft rounded-xl border border-stroke-soft">
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-text-strong">Two-factor authentication</span>
          <span className="text-xs text-text-sub">Require a code at every sign-in.</span>
        </div>
        <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-text-strong">Weekly summary email</span>
          <span className="text-xs text-text-sub">Sent every Monday morning.</span>
        </div>
        <Switch />
      </div>
    </div>
  );
}
