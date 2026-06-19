import { Label, InputControl, Checkbox } from "@cyanium/ui";

export function Default() {
  return (
    <div className="flex w-80 flex-col gap-1.5">
      <Label htmlFor="full-name">Full name</Label>
      <InputControl id="full-name" placeholder="Jane Cooper" />
    </div>
  );
}

export function Required() {
  return (
    <div className="flex w-80 flex-col gap-1.5">
      <Label htmlFor="work-email" required>Work email</Label>
      <InputControl id="work-email" type="email" placeholder="jane@company.com" />
    </div>
  );
}

export function WithControl() {
  return (
    <div className="flex w-80 items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">I agree to the terms of service</Label>
    </div>
  );
}
