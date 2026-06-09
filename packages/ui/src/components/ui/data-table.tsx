"use client";

import * as React from "react";
import { MoreHorizontal } from "lucide-react";
import { cn } from "../../lib/utils";
import { surfaceClass } from "../../lib/surface";
import { Checkbox } from "./checkbox";
import { Pagination } from "./pagination";
import { EmptyState } from "./empty-state";

export interface DataTableColumn<T> {
  id: string;
  header: React.ReactNode;
  cell: (row: T) => React.ReactNode;
  className?: string;
  headerClassName?: string;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  getRowId: (row: T) => string;
  selectable?: boolean;
  selectedIds?: Set<string>;
  onSelectionChange?: (ids: Set<string>) => void;
  emptyTitle?: string;
  emptyDescription?: string;
  footer?: React.ReactNode;
  pagination?: { total: number; page: number; onChange: (page: number) => void };
  className?: string;
}

export function DataTable<T>({
  columns,
  data,
  getRowId,
  selectable,
  selectedIds,
  onSelectionChange,
  emptyTitle = "No results",
  emptyDescription = "Try adjusting your filters.",
  footer,
  pagination,
  className,
}: DataTableProps<T>) {
  const allSelected = data.length > 0 && data.every((row) => selectedIds?.has(getRowId(row)));

  const toggleAll = () => {
    if (!onSelectionChange) return;
    if (allSelected) onSelectionChange(new Set());
    else onSelectionChange(new Set(data.map(getRowId)));
  };

  const toggleRow = (id: string) => {
    if (!onSelectionChange || !selectedIds) return;
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onSelectionChange(next);
  };

  if (data.length === 0) {
    return <EmptyState title={emptyTitle} description={emptyDescription} className={className} />;
  }

  return (
    <div className={surfaceClass({ border: "inset", padding: "none", className })}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse font-sans">
          <thead>
            <tr className="bg-bg-weak">
              {selectable ? (
                <th className="w-9 px-4 py-3.5">
                  <Checkbox checked={allSelected} onCheckedChange={toggleAll} aria-label="Select all" />
                </th>
              ) : null}
              {columns.map((col) => (
                <th key={col.id} className={cn("px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-text-soft", col.headerClassName)}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const id = getRowId(row);
              return (
                <tr key={id} className="border-t border-stroke-soft transition-colors hover:bg-bg-weak">
                  {selectable ? (
                    <td className="px-4 py-3.5">
                      <Checkbox checked={selectedIds?.has(id)} onCheckedChange={() => toggleRow(id)} aria-label="Select row" />
                    </td>
                  ) : null}
                  {columns.map((col) => (
                    <td key={col.id} className={cn("px-4 py-3.5 text-sm text-text-sub", col.className)}>
                      {col.cell(row)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {(footer || pagination) && (
        <div className="flex items-center justify-between gap-4 border-t border-stroke-soft px-4 py-3.5 text-sm text-text-sub">
          {footer}
          {pagination ? <Pagination total={pagination.total} page={pagination.page} onChange={pagination.onChange} /> : null}
        </div>
      )}
    </div>
  );
}

export function RowActions({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} className="inline-flex size-7 items-center justify-center rounded-md text-icon-soft hover:bg-bg-soft hover:text-text-strong" aria-label="Row actions">
      <MoreHorizontal className="size-4" />
    </button>
  );
}
