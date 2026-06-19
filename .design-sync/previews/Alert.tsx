import { Alert } from "@cyanium/ui";

export function Statuses() {
  return (
    <div className="w-[480px] space-y-3">
      <Alert status="info" title="Heads up">
        You can adjust your spending limit anytime from settings.
      </Alert>
      <Alert status="success" title="Payment received">
        Your invoice for May has been paid in full.
      </Alert>
      <Alert status="warning" title="Trial ending soon">
        Your free trial expires in 3 days. Add a payment method to continue.
      </Alert>
      <Alert status="error" title="Card declined">
        We couldn't charge your card. Update your billing details to retry.
      </Alert>
    </div>
  );
}

export function Variants() {
  return (
    <div className="w-[480px] space-y-3">
      <Alert variant="filled" status="info" title="Filled">
        High-emphasis surface for critical messages.
      </Alert>
      <Alert variant="light" status="success" title="Light">
        Tinted background with matching accent.
      </Alert>
      <Alert variant="stroke" status="warning" title="Stroke">
        Outlined treatment for quieter callouts.
      </Alert>
    </div>
  );
}

export function Dismissible() {
  return (
    <div className="w-[480px]">
      <Alert status="info" title="New region available" onClose={() => undefined}>
        Deployments in eu-central-1 are now generally available.
      </Alert>
    </div>
  );
}
