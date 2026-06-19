import { RowActions } from "@cyanium/ui";

export function Default() {
  return (
    <div className="flex w-80 items-center justify-between rounded-lg border border-stroke-soft bg-bg-white px-4 py-3">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-text-strong">Invoice #1042</span>
        <span className="text-xs text-text-sub">Due Jun 30 · $2,400.00</span>
      </div>
      <RowActions />
    </div>
  );
}

export function InList() {
  const rows = [
    { name: "Maya Chen", role: "Owner" },
    { name: "Devon Park", role: "Editor" },
    { name: "Sora Ito", role: "Viewer" },
  ];
  return (
    <div className="w-80 divide-y divide-stroke-soft rounded-lg border border-stroke-soft">
      {rows.map((r) => (
        <div key={r.name} className="flex items-center justify-between px-4 py-3">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-text-strong">{r.name}</span>
            <span className="text-xs text-text-sub">{r.role}</span>
          </div>
          <RowActions />
        </div>
      ))}
    </div>
  );
}
