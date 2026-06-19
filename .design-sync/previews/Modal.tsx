import { Modal, Button } from "@cyanium/ui";
import { Info, Trash2 } from "lucide-react";

export function ConfirmDialog() {
  return (
    <Modal
      open
      onOpenChange={() => undefined}
      title="Adjust weekly limit"
      description="Set a new spending cap for this card. Changes take effect immediately."
      icon={<Info className="size-5" />}
      footer={
        <>
          <Button variant="stroke" intent="neutral">
            Cancel
          </Button>
          <Button>Save changes</Button>
        </>
      }
    >
      Your new limit will apply to all purchases made after saving.
    </Modal>
  );
}

export function DestructiveDialog() {
  return (
    <Modal
      open
      onOpenChange={() => undefined}
      iconColor="red"
      title="Delete this card?"
      description="This action can't be undone. Pending transactions will still settle."
      icon={<Trash2 className="size-5" />}
      footer={
        <>
          <Button variant="stroke" intent="neutral">
            Keep card
          </Button>
          <Button intent="error">Delete card</Button>
        </>
      }
    >
      Card ending in 4291 will be permanently removed from your account.
    </Modal>
  );
}
