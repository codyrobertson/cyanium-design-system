import { Button } from "@cyanium/ui";
import { Plus, Search, ArrowRight } from "lucide-react";

export function Intents() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button intent="primary">Create request</Button>
      <Button intent="neutral" variant="stroke">Cancel</Button>
      <Button intent="error" variant="filled">Delete</Button>
    </div>
  );
}

export function Variants() {
  return (
    <div className="flex flex-col gap-3">
      {(["primary", "neutral", "error"] as const).map((intent) => (
        <div key={intent} className="flex flex-wrap gap-2">
          {(["filled", "stroke", "lighter", "ghost"] as const).map((variant) => (
            <Button key={variant} intent={intent} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}

export function WithIcons() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button intent="primary" leadingIcon={<Plus className="size-5" />}>Add card</Button>
      <Button intent="neutral" variant="stroke" trailingIcon={<ArrowRight className="size-5" />}>Continue</Button>
      <Button iconOnly intent="neutral" variant="stroke" aria-label="Search"><Search className="size-5" /></Button>
    </div>
  );
}

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xsmall">Extra small</Button>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  );
}
