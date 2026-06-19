import { EmptyState, Button } from "@cyanium/ui";
import { Inbox, Receipt } from "lucide-react";

export function Default() {
  return (
    <div className="w-[480px]">
      <EmptyState
        title="No transactions"
        description="When you make transactions they will show up here."
      />
    </div>
  );
}

export function WithIconAndAction() {
  return (
    <div className="w-[480px]">
      <EmptyState
        icon={<Receipt className="size-6" />}
        title="No invoices yet"
        description="Create your first invoice to start tracking payments."
        action={<Button intent="primary">New invoice</Button>}
      />
    </div>
  );
}

export function ActionLabel() {
  return (
    <div className="w-[480px]">
      <EmptyState
        icon={<Inbox className="size-6" />}
        title="Your inbox is empty"
        description="New messages from your team will land here."
        actionLabel="Refresh"
        onAction={() => undefined}
      />
    </div>
  );
}
