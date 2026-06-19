import { Select } from "@cyanium/ui";
import { Globe } from "lucide-react";

const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
];

export function Default() {
  return (
    <div className="w-80">
      <Select label="Country" placeholder="Select a country…" options={countries} />
    </div>
  );
}

export function WithValueAndIcon() {
  return (
    <div className="w-80">
      <Select
        label="Region"
        defaultValue="us"
        leadingIcon={<Globe className="size-5" />}
        hint="Used for tax and currency."
        options={countries}
      />
    </div>
  );
}

export function ErrorState() {
  return (
    <div className="w-80">
      <Select
        label="Currency"
        placeholder="Choose currency…"
        error
        hint="A currency is required to continue."
        options={[
          { value: "usd", label: "USD — US Dollar" },
          { value: "eur", label: "EUR — Euro" },
          { value: "gbp", label: "GBP — British Pound" },
        ]}
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div className="w-80">
      <Select label="Plan" defaultValue="pro" disabled options={[{ value: "pro", label: "Pro (managed by admin)" }]} />
    </div>
  );
}
