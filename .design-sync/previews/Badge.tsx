import { Badge } from "@cyanium/ui";
import { Check, Star } from "lucide-react";

export function Default() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge color="green" dot>Active</Badge>
      <Badge color="blue" variant="filled">Pro</Badge>
      <Badge color="orange" variant="light">Beta</Badge>
      <Badge color="gray">Draft</Badge>
    </div>
  );
}

export function Colors() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {(["gray", "blue", "green", "orange", "red", "yellow", "purple", "sky", "pink", "teal"] as const).map(
        (color) => (
          <Badge key={color} color={color} variant="light">
            {color}
          </Badge>
        ),
      )}
    </div>
  );
}

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge color="blue" variant="filled">Filled</Badge>
      <Badge color="blue" variant="light">Light</Badge>
      <Badge color="blue" variant="lighter">Lighter</Badge>
      <Badge color="blue" variant="stroke">Stroke</Badge>
    </div>
  );
}

export function WithIconAndDot() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge color="green" dot size="medium">Live</Badge>
      <Badge color="purple" icon={<Star className="size-3" />}>Featured</Badge>
      <Badge color="green" variant="light" icon={<Check className="size-3" />}>Verified</Badge>
      <Badge color="gray" size="small">v0.1.0</Badge>
    </div>
  );
}
