import {
  Dialog,
  DialogContent,
  DialogClose,
  Button,
  Input,
} from "@cyanium/ui";

export function ComposedDialog() {
  return (
    <Dialog open onOpenChange={() => undefined}>
      <DialogContent>
        <div className="space-y-4 p-5">
          <div className="space-y-1">
            <h2 className="font-display text-lg font-semibold tracking-tight text-text-strong">
              Invite a teammate
            </h2>
            <p className="text-sm leading-5 text-text-sub">
              They'll get access to the Finance workspace.
            </p>
          </div>
          <Input
            label="Email address"
            type="email"
            placeholder="teammate@acme.com"
          />
          <div className="flex gap-3 [&>*]:flex-1">
            <DialogClose asChild>
              <Button variant="stroke" intent="neutral">
                Cancel
              </Button>
            </DialogClose>
            <Button>Send invite</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
