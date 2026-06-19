import { Textarea } from "@cyanium/ui";

export function Default() {
  return (
    <div className="w-96">
      <Textarea
        label="Notes"
        hint="Add any context for your teammates."
        defaultValue="Reconciled the September statement; flagged two duplicate charges for review."
      />
    </div>
  );
}

export function WithCounter() {
  return (
    <div className="w-96">
      <Textarea
        label="Bio"
        showCounter
        maxLength={160}
        defaultValue="Operations lead focused on calm, utilitarian internal tooling."
      />
    </div>
  );
}

export function ErrorState() {
  return (
    <div className="w-96">
      <Textarea
        label="Cancellation reason"
        error
        showCounter
        maxLength={200}
        hint="Please tell us why you're leaving."
      />
    </div>
  );
}
