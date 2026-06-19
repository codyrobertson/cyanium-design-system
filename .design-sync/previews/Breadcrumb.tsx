import { Breadcrumb } from "@cyanium/ui";
import { ChevronRight } from "lucide-react";

export function Default() {
  return (
    <Breadcrumb
      items={[
        { label: "Home", href: "#" },
        { label: "Finance", href: "#" },
        { label: "Transactions" },
      ]}
    />
  );
}

export function DeepPath() {
  return (
    <Breadcrumb
      items={[
        { label: "Workspace", href: "#" },
        { label: "Projects", href: "#" },
        { label: "Acme Redesign", href: "#" },
        { label: "Settings" },
      ]}
    />
  );
}

export function CustomSeparator() {
  return (
    <Breadcrumb
      separator={<ChevronRight className="size-4 text-text-soft" />}
      items={[
        { label: "Dashboard", href: "#" },
        { label: "Billing", href: "#" },
        { label: "Invoices" },
      ]}
    />
  );
}
