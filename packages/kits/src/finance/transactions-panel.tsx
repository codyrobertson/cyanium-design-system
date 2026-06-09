import * as React from "react";
import { Download, Filter } from "lucide-react";
import { Badge, Button, DataTable, RowActions, SearchField, type DataTableColumn, cn } from "@cyanium/ui";
import { StatusBadge } from "../patterns";

export interface TransactionRow {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  name: string;
  category: string;
  date: string;
  status: "completed" | "pending" | "failed";
  amount: string;
  positive?: boolean;
}

export interface TransactionsPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  rows: TransactionRow[];
  totalCount?: number;
  page?: number;
  onPageChange?: (page: number) => void;
}

export function TransactionsPanel({ rows, totalCount, page = 1, onPageChange, className, ...props }: TransactionsPanelProps) {
  const [selected, setSelected] = React.useState<Set<string>>(new Set());
  const total = totalCount ?? rows.length;

  const columns: DataTableColumn<TransactionRow>[] = [
    {
      id: "name",
      header: "Transaction",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <span className="inline-flex size-9 items-center justify-center rounded-full text-base" style={{ background: row.iconBg }}>{row.icon}</span>
          <span className="font-medium text-text-strong">{row.name}</span>
        </div>
      ),
    },
    { id: "category", header: "Category", cell: (row) => <Badge color="gray" variant="stroke" size="small">{row.category}</Badge> },
    { id: "date", header: "Date", cell: (row) => row.date },
    { id: "status", header: "Status", cell: (row) => <StatusBadge status={row.status} /> },
    { id: "amount", header: "Amount", headerClassName: "text-right", className: "text-right font-semibold tabular-nums text-text-strong", cell: (row) => <span className={row.positive ? "text-success" : undefined}>{row.amount}</span> },
    { id: "actions", header: "", headerClassName: "w-10", className: "text-right", cell: () => <RowActions /> },
  ];

  return (
    <div className={cn("flex flex-col gap-4 px-8 py-6", className)} {...props}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="w-full max-w-xs"><SearchField placeholder="Search transactions…" /></div>
        <div className="flex gap-2">
          <Button size="small" intent="neutral" variant="stroke" leadingIcon={<Filter className="size-4" />}>Filter</Button>
          <Button size="small" intent="neutral" variant="stroke" leadingIcon={<Download className="size-4" />}>Export</Button>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={rows}
        getRowId={(r) => r.id}
        selectable
        selectedIds={selected}
        onSelectionChange={setSelected}
        pagination={onPageChange ? { total: Math.ceil(total / rows.length) || 1, page, onChange: onPageChange } : undefined}
        footer={<span className="text-text-sub">Showing {rows.length} of {total} transactions</span>}
      />
    </div>
  );
}
