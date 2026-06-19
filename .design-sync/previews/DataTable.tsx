import { useState } from "react";
import { DataTable, Badge, RowActions } from "@cyanium/ui";

type Txn = {
  id: string;
  merchant: string;
  category: string;
  date: string;
  status: "Completed" | "Pending" | "Failed";
  amount: string;
};

const transactions: Txn[] = [
  { id: "1", merchant: "Netflix", category: "Entertainment", date: "Jun 14", status: "Completed", amount: "-$15.99" },
  { id: "2", merchant: "Acme Payroll", category: "Income", date: "Jun 13", status: "Completed", amount: "+$5,200.00" },
  { id: "3", merchant: "Whole Foods", category: "Groceries", date: "Jun 12", status: "Pending", amount: "-$86.42" },
  { id: "4", merchant: "Delta Air Lines", category: "Travel", date: "Jun 10", status: "Failed", amount: "-$412.30" },
  { id: "5", merchant: "Spotify", category: "Entertainment", date: "Jun 09", status: "Completed", amount: "-$11.99" },
];

const statusColor: Record<Txn["status"], "green" | "yellow" | "red"> = {
  Completed: "green",
  Pending: "yellow",
  Failed: "red",
};

const columns = [
  { id: "merchant", header: "Merchant", cell: (r: Txn) => <span className="font-medium text-text-strong">{r.merchant}</span> },
  { id: "category", header: "Category", cell: (r: Txn) => r.category },
  { id: "date", header: "Date", cell: (r: Txn) => r.date },
  { id: "status", header: "Status", cell: (r: Txn) => <Badge color={statusColor[r.status]} variant="light">{r.status}</Badge> },
  { id: "amount", header: "Amount", cell: (r: Txn) => r.amount, className: "text-right font-semibold text-text-strong" },
  { id: "actions", header: "", cell: () => <RowActions />, className: "text-right" },
];

export function Default() {
  return (
    <div className="w-[760px]">
      <DataTable columns={columns} data={transactions} getRowId={(r) => r.id} />
    </div>
  );
}

export function Selectable() {
  const [selected, setSelected] = useState(new Set<string>(["2", "5"]));
  return (
    <div className="w-[760px]">
      <DataTable
        columns={columns}
        data={transactions}
        getRowId={(r) => r.id}
        selectable
        selectedIds={selected}
        onSelectionChange={setSelected}
        footer={<span>{selected.size} of {transactions.length} selected</span>}
      />
    </div>
  );
}

export function Empty() {
  return (
    <div className="w-[760px]">
      <DataTable
        columns={columns}
        data={[]}
        getRowId={(r) => r.id}
        emptyTitle="No transactions yet"
        emptyDescription="Transactions will appear here once your account is funded."
      />
    </div>
  );
}
