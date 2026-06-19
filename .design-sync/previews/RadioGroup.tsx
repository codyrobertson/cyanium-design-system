import { RadioGroup, RadioControl, Label } from "@cyanium/ui";

export function Default() {
  return (
    <div className="flex w-80 flex-col gap-3">
      <Label>Billing period</Label>
      <RadioGroup defaultValue="monthly" className="flex flex-col gap-3">
        <label className="flex items-center gap-3 text-sm text-text-strong">
          <RadioControl value="monthly" /> Monthly — $29/mo
        </label>
        <label className="flex items-center gap-3 text-sm text-text-strong">
          <RadioControl value="annual" /> Annual — $290/yr
        </label>
        <label className="flex items-center gap-3 text-sm text-text-strong">
          <RadioControl value="lifetime" /> Lifetime — $999
        </label>
      </RadioGroup>
    </div>
  );
}

export function Horizontal() {
  return (
    <div className="flex w-96 flex-col gap-3">
      <Label>Shipping speed</Label>
      <RadioGroup defaultValue="standard" orientation="horizontal" className="flex gap-6">
        <label className="flex items-center gap-2 text-sm text-text-strong">
          <RadioControl value="standard" /> Standard
        </label>
        <label className="flex items-center gap-2 text-sm text-text-strong">
          <RadioControl value="express" /> Express
        </label>
        <label className="flex items-center gap-2 text-sm text-text-strong">
          <RadioControl value="overnight" /> Overnight
        </label>
      </RadioGroup>
    </div>
  );
}

export function Disabled() {
  return (
    <div className="flex w-80 flex-col gap-3">
      <Label>Payout method</Label>
      <RadioGroup defaultValue="bank" disabled className="flex flex-col gap-3">
        <label className="flex items-center gap-3 text-sm text-text-sub">
          <RadioControl value="bank" /> Bank transfer
        </label>
        <label className="flex items-center gap-3 text-sm text-text-sub">
          <RadioControl value="paypal" /> PayPal
        </label>
      </RadioGroup>
    </div>
  );
}
