import * as React from "react";
import { ArrowLeftRight, ArrowRight, ChevronDown, Info, PieChart, RefreshCw } from "lucide-react";
import { Button, Panel, cn, insetBorder } from "@cyanium/ui";

export interface SpendingCategory { icon: React.ReactNode; label: string; value: string }

export interface SpendingSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  periodLabel: string;
  total: string;
  categories: SpendingCategory[];
  limitNote: React.ReactNode;
}

export function SpendingSummary({ periodLabel, total, categories, limitNote, className, ...props }: SpendingSummaryProps) {
  return (
    <Panel title="Spending Summary" icon={<PieChart className="size-5" />} action={<Button size="small" intent="neutral" variant="stroke" trailingIcon={<ChevronDown className="size-4" />}>{periodLabel}</Button>} className={className} {...props}>
      <div className="mt-4 flex justify-center">
        <div className="relative flex h-[120px] w-[240px] items-end justify-center overflow-hidden rounded-t-full bg-[var(--blue-500)] shadow-[inset_0_6px_16px_rgba(255,255,255,0.25)]">
          <div className="pb-1.5 text-center text-white">
            <div className="text-[11px] font-semibold tracking-widest opacity-85">SPEND</div>
            <div className="font-display text-[26px] font-semibold tracking-tight">{total}</div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {categories.map((c) => (
          <div key={c.label} className={cn("rounded-xl px-1.5 py-3.5 text-center", insetBorder)}>
            <span className="mx-auto mb-2 inline-flex size-8 items-center justify-center rounded-full bg-bg-weak text-icon-sub">{c.icon}</span>
            <div className="text-xs text-text-sub">{c.label}</div>
            <div className="mt-0.5 text-[15px] font-semibold tabular-nums text-text-strong">{c.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 rounded-[10px] bg-bg-weak px-3.5 py-2.5 text-sm text-text-sub">
        <span>{limitNote}</span>
        <Info className="size-4 shrink-0 text-icon-soft" />
      </div>
    </Panel>
  );
}

export interface ExchangeLine { label: string; value: string }

export interface ExchangePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  fromCurrency: string;
  toCurrency: string;
  amount: string;
  available: string;
  rate: string;
  lines: ExchangeLine[];
  onExchange?: () => void;
}

export function ExchangePanel({ fromCurrency, toCurrency, amount, available, rate, lines, onExchange, className, ...props }: ExchangePanelProps) {
  return (
    <Panel title="Exchange" icon={<RefreshCw className="size-5" />} action={<Button size="small" intent="neutral" variant="stroke" trailingIcon={<ArrowRight className="size-4" />}>Currencies</Button>} className={className} {...props}>
      <div className="mt-4 flex items-center gap-2">
        <CurrencyButton flag="us">{fromCurrency}</CurrencyButton>
        <button type="button" className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-bg-strong text-white" aria-label="Swap currencies"><ArrowLeftRight className="size-4" /></button>
        <CurrencyButton flag="eu">{toCurrency}</CurrencyButton>
      </div>
      <div className="mt-5 text-center font-display text-4xl font-semibold tracking-tight text-text-strong tabular-nums">{amount}</div>
      <div className="mt-0.5 text-center text-sm text-text-sub">{available}</div>
      <div className="mt-4 rounded-[10px] bg-bg-weak py-2.5 text-center text-sm font-medium text-text-sub">{rate}</div>
      <div className="mt-3.5 flex flex-col gap-2.5 text-sm text-text-sub">
        {lines.map((l) => (
          <div key={l.label} className="flex items-center justify-between"><span>{l.label}</span><b className="font-semibold tabular-nums text-text-strong">{l.value}</b></div>
        ))}
      </div>
      <Button intent="primary" leadingIcon={<RefreshCw className="size-4" />} className="mt-3.5 w-full" onClick={onExchange}>Exchange</Button>
    </Panel>
  );
}

function CurrencyButton({ flag, children }: { flag: "us" | "eu"; children: React.ReactNode }) {
  return (
    <button type="button" className="flex h-11 flex-1 items-center gap-2 rounded-[10px] bg-bg-white px-3 text-sm font-semibold text-text-strong shadow-button">
      <span className={cn("size-5 shrink-0 rounded-full", flag === "us" && "bg-[linear-gradient(180deg,#b22234_0_20%,#fff_20%_40%,#b22234_40%_60%,#fff_60%_80%,#b22234_80%)] shadow-[inset_8px_-8px_0_-4px_#3c3b6e]", flag === "eu" && "bg-[#034ea2] shadow-[inset_0_0_0_2px_#ffcc00]")} />
      {children}
      <ChevronDown className="ml-auto size-4 text-icon-soft" />
    </button>
  );
}

export function SpendingExchangeRow(props: React.HTMLAttributes<HTMLDivElement> & { spending: SpendingSummaryProps; exchange: ExchangePanelProps }) {
  const { spending, exchange, className, ...rest } = props;
  return (
    <div className={cn("grid grid-cols-1 gap-6 lg:grid-cols-2", className)} {...rest}>
      <SpendingSummary {...spending} />
      <ExchangePanel {...exchange} />
    </div>
  );
}
