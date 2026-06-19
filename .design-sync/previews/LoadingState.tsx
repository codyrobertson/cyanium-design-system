import { LoadingState } from "@cyanium/ui";

export function Default() {
  return (
    <div className="w-80">
      <LoadingState />
    </div>
  );
}

export function CompactRows() {
  return (
    <div className="w-80">
      <LoadingState rows={2} />
    </div>
  );
}

export function ManyRows() {
  return (
    <div className="w-80">
      <LoadingState rows={6} />
    </div>
  );
}
