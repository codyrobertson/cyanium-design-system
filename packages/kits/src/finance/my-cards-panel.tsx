import * as React from "react";
import { CreditCard, EyeOff, History, MoreHorizontal, Plus, SlidersHorizontal } from "lucide-react";
import { Button, Panel, SegmentedControl, cn } from "@cyanium/ui";
import { TransactionRow } from "../patterns";

export interface CreditCardDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  balance: string;
  active?: boolean;
}

export function CreditCardDisplay({ label, balance, active = true, className, ...props }: CreditCardDisplayProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-bg-white p-[18px] shadow-card shadow-[inset_0_0_0_1px_var(--stroke-soft-200)]", className)} {...props}>
      <div className="absolute -right-10 -top-5 size-[180px] rounded-full bg-[radial-gradient(circle,var(--bg-weak-50),transparent_70%)] opacity-70" />
      <div className="relative z-10 flex items-center gap-2.5">
        <div className="inline-flex size-8 items-center justify-center rounded-[9px] bg-[var(--brand-orange)] shadow-[0_0_0_1.5px_var(--brand-orange-ring)]">
          <span className="size-4 rounded-sm bg-white" />
        </div>
        {active ? (
          <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium text-text-sub shadow-[inset_0_0_0_1px_var(--stroke-soft-200)]">
            <span className="size-1.5 rounded-full bg-success" /> Active
          </span>
        ) : null}
      </div>
      <div className="relative z-10 mt-4 text-sm text-text-sub">{label}</div>
      <div className="relative z-10 mt-1 font-display text-2xl font-semibold tracking-tight text-text-strong tabular-nums">{balance}</div>
    </div>
  );
}

export interface CardDetail { label: string; value: string }

export interface RecentTransaction {
  icon: React.ReactNode;
  iconBg?: string;
  name: string;
  subtitle: string;
  amount: string;
  positive?: boolean;
}

export interface MyCardsPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  card: { label: string; balance: string; active?: boolean };
  details: CardDetail[];
  recentTransactions: RecentTransaction[];
  virtualCount?: number;
  physicalCount?: number;
}

export function MyCardsPanel({ card, details, recentTransactions, virtualCount = 2, physicalCount = 0, className, ...props }: MyCardsPanelProps) {
  const [tab, setTab] = React.useState("virtual");
  return (
    <Panel title="My Cards" icon={<CreditCard className="size-5" />} action={<Button size="small" intent="neutral" variant="stroke" leadingIcon={<Plus className="size-4" />}>Add Card</Button>} className={className} {...props}>
      <SegmentedControl className="mt-4 flex w-full" value={tab} onChange={setTab} items={[{ value: "virtual", label: `Virtual (${virtualCount})` }, { value: "physical", label: physicalCount ? `Physical (${physicalCount})` : "Physical" }]} />
      <CreditCardDisplay className="mt-4" {...card} />
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        {details.map((d) => (
          <div key={d.label} className="flex flex-col gap-0.5">
            <span className="text-xs text-text-soft">{d.label}</span>
            <b className="font-medium text-text-strong tabular-nums">{d.value}</b>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <Button size="small" intent="neutral" variant="stroke" leadingIcon={<EyeOff className="size-4" />}>Unhide</Button>
        <Button size="small" intent="neutral" variant="stroke" leadingIcon={<SlidersHorizontal className="size-4" />}>Adjust Limit</Button>
        <Button size="small" intent="neutral" variant="stroke" iconOnly aria-label="More"><MoreHorizontal className="size-4" /></Button>
      </div>
      <div className="mt-5 text-xs font-semibold uppercase tracking-wide text-text-soft">Recent Transactions</div>
      {recentTransactions.map((tx) => (
        <TransactionRow key={tx.name + tx.amount} {...tx} />
      ))}
      <Button intent="neutral" variant="stroke" leadingIcon={<History className="size-4" />} className="mt-2 w-full">See All Transactions</Button>
    </Panel>
  );
}
