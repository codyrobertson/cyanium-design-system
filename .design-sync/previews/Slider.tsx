import { Slider, Label } from "@cyanium/ui";

export function Default() {
  return (
    <div className="flex w-80 flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label>Monthly budget</Label>
        <span className="text-sm text-text-sub">$2,400</span>
      </div>
      <Slider defaultValue={[60]} max={100} step={1} />
    </div>
  );
}

export function Range() {
  return (
    <div className="flex w-80 flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label>Price range</Label>
        <span className="text-sm text-text-sub">$25 – $75</span>
      </div>
      <Slider defaultValue={[25, 75]} max={100} step={5} minStepsBetweenThumbs={1} />
    </div>
  );
}

export function Disabled() {
  return (
    <div className="flex w-80 flex-col gap-3">
      <Label>Locked allocation</Label>
      <Slider defaultValue={[40]} max={100} step={1} disabled />
    </div>
  );
}
