import { SegmentedControl } from "@cyanium/ui";
import { LayoutGrid, List } from "lucide-react";

export function Default() {
  return (
    <div className="w-96">
      <SegmentedControl
        defaultValue="virtual"
        items={[
          { value: "virtual", label: "Virtual (2)" },
          { value: "physical", label: "Physical" },
        ]}
      />
    </div>
  );
}

export function ThreeOptions() {
  return (
    <div className="w-96">
      <SegmentedControl
        defaultValue="month"
        items={[
          { value: "week", label: "Week" },
          { value: "month", label: "Month" },
          { value: "year", label: "Year" },
        ]}
      />
    </div>
  );
}

export function WithIcons() {
  return (
    <div className="w-72">
      <SegmentedControl
        defaultValue="grid"
        items={[
          { value: "grid", label: "Grid", icon: <LayoutGrid className="size-4" /> },
          { value: "list", label: "List", icon: <List className="size-4" /> },
        ]}
      />
    </div>
  );
}
