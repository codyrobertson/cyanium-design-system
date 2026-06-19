import { Dropdown, Button } from "@cyanium/ui";
import {
  MoreHorizontal,
  Pencil,
  Copy,
  Trash2,
  ChevronDown,
} from "lucide-react";

export function RowActions() {
  return (
    <div className="flex w-80 justify-end">
      <Dropdown
        align="end"
        trigger={
          <Button variant="stroke" intent="neutral" iconOnly aria-label="Row actions">
            <MoreHorizontal className="size-5" />
          </Button>
        }
        items={[
          { label: "Edit", icon: <Pencil className="size-4" />, onClick: () => undefined },
          { label: "Duplicate", icon: <Copy className="size-4" />, shortcut: "⌘D", onClick: () => undefined },
          { type: "separator" },
          { label: "Delete", icon: <Trash2 className="size-4" />, danger: true, onClick: () => undefined },
        ]}
      />
    </div>
  );
}

export function LabeledMenu() {
  return (
    <div className="flex w-80">
      <Dropdown
        label="Sort by"
        trigger={
          <Button variant="stroke" intent="neutral" trailingIcon={<ChevronDown className="size-4" />}>
            Most recent
          </Button>
        }
        items={[
          { label: "Most recent", onClick: () => undefined },
          { label: "Oldest first", onClick: () => undefined },
          { label: "Amount: high to low", onClick: () => undefined },
          { label: "Amount: low to high", onClick: () => undefined },
        ]}
      />
    </div>
  );
}
