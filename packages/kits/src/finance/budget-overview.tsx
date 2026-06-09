import * as React from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  CalendarClock,
  ChevronDown,
} from "lucide-react";
import {
  Button,
  Panel,
} from "@cyanium/ui";
import { StatCard } from "../patterns";

export type BudgetChartPoint = { income: number; expenses: number; scheduled: number };

export interface BudgetOverviewProps extends React.HTMLAttributes<HTMLDivElement> {
  periodLabel: string;
  stats: {
    income: { value: string; delta: string };
    expenses: { value: string; delta: string };
    scheduled: { value: string; delta: string };
  };
  chartMonths: string[];
  chartData: BudgetChartPoint[];
  maxScale?: number;
}

export function BudgetOverview({
  periodLabel,
  stats,
  chartMonths,
  chartData,
  maxScale = 20,
  className,
  ...props
}: BudgetOverviewProps) {
  return (
    <Panel
      title="Budget Overview"
      icon={<CalendarClock className="size-5" />}
      action={
        <Button variant="stroke" intent="neutral" size="small" trailingIcon={<ChevronDown className="size-4" />}>
          {periodLabel}
        </Button>
      }
      className={className}
      {...props}
    >
      <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-text-sub">
        <Legend color="var(--blue-500)" label="Income" />
        <Legend color="var(--sky-400)" label="Expenses" />
        <Legend color="var(--purple-500)" label="Scheduled" />
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <StatCard icon={<ArrowDownLeft className="size-4" />} label="Income" value={stats.income.value} delta={stats.income.delta} deltaColor="green" />
        <StatCard icon={<ArrowUpRight className="size-4" />} label="Expenses" value={stats.expenses.value} delta={stats.expenses.delta} deltaColor="red" />
        <StatCard icon={<CalendarClock className="size-4" />} label="Scheduled" value={stats.scheduled.value} delta={stats.scheduled.delta} deltaColor="gray" />
      </div>
      <div className="mt-6 flex h-60 gap-3">
        <div className="flex flex-col justify-between pb-6 font-mono text-[11px] text-text-soft">
          <span>{maxScale}k</span><span>{maxScale * 0.75}k</span><span>{maxScale * 0.5}k</span><span>0</span>
        </div>
        <div className="flex flex-1 items-end gap-2.5">
          {chartData.map((d, i) => {
            const { income, expenses, scheduled } = d;
            const rest = maxScale - income - expenses - scheduled;
            return (
              <div key={chartMonths[i] ?? i} className="flex h-full flex-1 flex-col items-center gap-2">
                <div className="flex h-[calc(100%-24px)] w-full max-w-[38px] flex-col overflow-hidden rounded-md">
                  <div className="bg-bg-weak" style={{ height: `${(rest / maxScale) * 100}%` }} />
                  <div className="bg-[var(--blue-500)]" style={{ height: `${(income / maxScale) * 100}%` }} />
                  <div className="bg-[var(--sky-400)]" style={{ height: `${(expenses / maxScale) * 100}%` }} />
                  <div className="bg-[var(--purple-500)]" style={{ height: `${(scheduled / maxScale) * 100}%` }} />
                </div>
                <span className="text-xs text-text-soft">{chartMonths[i]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="size-2 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}
