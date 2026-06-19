import { SearchField } from "@cyanium/ui";

export function Default() {
  return (
    <div className="w-80">
      <SearchField placeholder="Search transactions…" />
    </div>
  );
}

export function WithLabel() {
  return (
    <div className="w-80">
      <SearchField label="Find a customer" placeholder="Name or email…" shortcut="⌘K" />
    </div>
  );
}

export function Sizes() {
  return (
    <div className="flex w-80 flex-col gap-3">
      <SearchField inputSize="small" placeholder="Small" shortcut="" />
      <SearchField inputSize="medium" placeholder="Medium" shortcut="" />
      <SearchField inputSize="large" placeholder="Large" shortcut="" />
    </div>
  );
}
