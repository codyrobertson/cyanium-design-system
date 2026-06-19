import { Field, InputControl } from "@cyanium/ui";

export function Default() {
  return (
    <div className="w-80">
      <Field label="Workspace name" hint="This appears in your team's URL.">
        <InputControl placeholder="acme-inc" />
      </Field>
    </div>
  );
}

export function Required() {
  return (
    <div className="w-80">
      <Field label="Email address" required hint="We'll send a verification link.">
        <InputControl placeholder="you@company.com" />
      </Field>
    </div>
  );
}

export function ErrorState() {
  return (
    <div className="w-80">
      <Field label="API key" error hint="This key is no longer valid.">
        <InputControl error defaultValue="sk_live_4eC39Hq" />
      </Field>
    </div>
  );
}
