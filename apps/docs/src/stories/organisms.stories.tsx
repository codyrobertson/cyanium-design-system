import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Breadcrumb,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Dropdown,
  Modal,
  Pagination,
  Panel,
  SegmentedControl,
  Tabs,
  Button,
} from "@cyanium/ui";
import { AppSidebar, AppTopbar } from "@cyanium/kits/patterns";
import { BudgetOverview, MyCardsPanel, CreditCardDisplay } from "@cyanium/kits/finance";
import {
  budgetChartData,
  budgetChartMonths,
  budgetStats,
  financeBrand,
  financeCards,
  financeMainNav,
  financeOtherNav,
  financeTopbar,
  financeUser,
} from "@cyanium/kits/fixtures";
import { useState } from "react";
import { CreditCard, Info, MoreHorizontal, Plus } from "lucide-react";

const meta = {
  title: "Organisms",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const CardAndPanel: StoryObj = {
  render: () => (
    <div className="grid w-[720px] grid-cols-2 gap-4">
      <Card raised padding="lg">
        <CardHeader>
          <CardTitle>Card surface</CardTitle>
          <CardDescription>White fill + keyline + soft radius.</CardDescription>
        </CardHeader>
        <CardContent className="pt-2 text-sm text-text-sub">Composable card primitives.</CardContent>
      </Card>
      <Panel title="Panel" icon={<CreditCard className="size-5" />} action={<Button size="small" variant="stroke" intent="neutral">Action</Button>}>
        Panel wraps Card with a standard header row.
      </Panel>
    </div>
  ),
};

export const Navigation: StoryObj = {
  render: () => (
    <div className="w-[640px] space-y-6">
      <Tabs variant="line" defaultValue="overview" items={[{ value: "overview", label: "Overview", badge: 3 }, { value: "cards", label: "My Cards" }]} />
      <SegmentedControl defaultValue="virtual" items={[{ value: "virtual", label: "Virtual (2)" }, { value: "physical", label: "Physical" }]} />
      <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "Finance", href: "#" }, { label: "Transactions" }]} />
      <Pagination total={12} page={3} />
    </div>
  ),
};

export const Overlays: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="flex gap-3">
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Dropdown trigger={<Button variant="stroke" intent="neutral" iconOnly aria-label="Menu"><MoreHorizontal className="size-5" /></Button>} items={[{ label: "Edit", onClick: () => undefined }, { type: "separator" }, { label: "Delete", danger: true, onClick: () => undefined }]} />
        <Modal open={open} onOpenChange={setOpen} title="Adjust Limit" description="Set a new weekly spending cap." icon={<Info className="size-5" />} footer={<><Button variant="stroke" intent="neutral" onClick={() => setOpen(false)}>Cancel</Button><Button onClick={() => setOpen(false)}>Save</Button></>}>
          Changes take effect immediately.
        </Modal>
      </div>
    );
  },
};

export const FinanceOrganisms: StoryObj = {
  render: () => (
    <div className="grid w-full max-w-5xl grid-cols-1 gap-6 xl:grid-cols-[380px_1fr]">
      <MyCardsPanel {...financeCards} />
      <BudgetOverview periodLabel="Last Year" stats={budgetStats} chartMonths={budgetChartMonths} chartData={budgetChartData} />
    </div>
  ),
  parameters: { layout: "padded" },
};

export const AppChrome: StoryObj = {
  render: () => (
    <div className="flex h-[520px] overflow-hidden rounded-xl border border-stroke-soft">
      <AppSidebar
        className="relative h-full"
        brandName={financeBrand.name}
        brandSubtitle={financeBrand.subtitle}
        mainItems={financeMainNav}
        otherItems={financeOtherNav}
        user={financeUser}
        activeId="dashboard"
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <AppTopbar
          title={financeTopbar.title}
          subtitle={financeTopbar.subtitle}
          showAvatar
          avatarName={financeTopbar.avatarName}
          action={<Button intent="primary" leadingIcon={<Plus className="size-4" />}>Create Request</Button>}
        />
        <div className="flex-1 bg-bg-weak p-6"><CreditCardDisplay label="Savings Card" balance="$16,058.94" /></div>
      </div>
    </div>
  ),
  parameters: { layout: "fullscreen" },
};
