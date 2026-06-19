import { Input } from "@cyanium/ui";
import { Mail, Search } from "lucide-react";

export function Default() {
  return (
    <div className="w-80">
      <Input label="Email" placeholder="you@company.com" hint="This is a hint text to help user." />
    </div>
  );
}

export function WithIcons() {
  return (
    <div className="w-80">
      <Input
        label="Search"
        placeholder="Search transactions…"
        leadingIcon={<Search className="size-5" />}
        trailingIcon={<Mail className="size-5" />}
      />
    </div>
  );
}

export function ErrorState() {
  return (
    <div className="w-80">
      <Input label="Password" type="password" error defaultValue="hunter2" hint="Must be at least 8 characters." />
    </div>
  );
}

export function Disabled() {
  return (
    <div className="w-80">
      <Input label="Workspace" defaultValue="acme-inc" disabled hint="Contact an admin to change this." />
    </div>
  );
}
