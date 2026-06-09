import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable, FaqList, ToasterProvider, useToast, Button, Tabs, TabsContent, EmptyState } from "@cyanium/ui";
import { StatusBadge } from "@cyanium/kits/patterns";
import { useState } from "react";

const meta = { title: "Organisms/New" } satisfies Meta;
export default meta;

export const AccordionDemo: StoryObj = {
  render: () => (
    <FaqList items={[
      { value: "a", question: "What is Cyanium?", answer: "An AlignUI-based design system for React." },
      { value: "b", question: "Radix or native?", answer: "Radix primitives with AlignUI tokens." },
    ]} />
  ),
};

export const DataTableDemo: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState(new Set<string>());
    const data = [
      { id: "1", name: "Netflix", status: "completed" as const, amount: "-$15.99" },
      { id: "2", name: "Salary", status: "pending" as const, amount: "+$5200" },
    ];
    return (
      <DataTable
        columns={[
          { id: "name", header: "Name", cell: (r) => r.name },
          { id: "status", header: "Status", cell: (r) => <StatusBadge status={r.status} /> },
          { id: "amount", header: "Amount", cell: (r) => r.amount, className: "text-right font-semibold" },
        ]}
        data={data}
        getRowId={(r) => r.id}
        selectable
        selectedIds={selected}
        onSelectionChange={setSelected}
      />
    );
  },
};

export const TabsWithContent: StoryObj = {
  render: () => (
    <Tabs defaultValue="one" items={[{ value: "one", label: "One" }, { value: "two", label: "Two" }]}>
      <TabsContent value="one" className="pt-4 text-sm text-text-sub">Panel one content</TabsContent>
      <TabsContent value="two" className="pt-4 text-sm text-text-sub">Panel two content</TabsContent>
    </Tabs>
  ),
};

export const Empty: StoryObj = {
  render: () => <EmptyState title="No transactions" description="When you make transactions they will show up here." />,
};

function ToastDemoInner() {
  const { toast } = useToast();
  return <Button onClick={() => toast({ title: "Saved", description: "Your changes were saved.", variant: "success" })}>Show toast</Button>;
}

export const ToastDemo: StoryObj = {
  render: () => (
    <ToasterProvider>
      <ToastDemoInner />
    </ToasterProvider>
  ),
};
