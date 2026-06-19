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

const SERIES = [
  { key: "income", label: "Income", color: "var(--blue-500)" },
  { key: "expenses", label: "Expenses", color: "var(--sky-400)" },
  { key: "scheduled", label: "Scheduled", color: "var(--purple-500)" },
] as const;

export function BudgetOverview({
  periodLabel,
  stats,
  chartMonths,
  chartData,
  maxScale,
  className,
  ...props
}: BudgetOverviewProps) {
  // Grouped bars compare the three series per month, so the axis is scaled to
  // the largest single value (not their sum) and rounded up to a clean tick.
  const dataMax = Math.max(1, ...chartData.flatMap((d) => [d.income, d.expenses, d.scheduled]));
  const axisMax = maxScale ?? Math.max(3, Math.ceil(dataMax / 3) * 3);
  const ticks = [axisMax, (axisMax * 2) / 3, axisMax / 3, 0];
  const fmt = (n: number) => `${Number.isInteger(n) ? n : n.toFixed(1)}k`;

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
        {SERIES.map((s) => (
          <Legend key={s.key} color={s.color} label={s.label} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <StatCard icon={<ArrowDownLeft className="size-4" />} label="Income" value={stats.income.value} delta={stats.income.delta} deltaColor="green" />
        <StatCard icon={<ArrowUpRight className="size-4" />} label="Expenses" value={stats.expenses.value} delta={stats.expenses.delta} deltaColor="red" />
        <StatCard icon={<CalendarClock className="size-4" />} label="Scheduled" value={stats.scheduled.value} delta={stats.scheduled.delta} deltaColor="gray" />
      </div>
      <div className="mt-6 flex h-60 gap-3">
        <div className="flex flex-col justify-between pb-6 text-right font-mono text-[11px] tabular-nums text-text-soft">
          {ticks.map((t) => (
            <span key={t}>{fmt(t)}</span>
          ))}
        </div>
        <div className="relative flex flex-1 items-end gap-1.5">
          {/* gridlines aligned to the axis ticks */}
          <div className="pointer-events-none absolute inset-x-0 bottom-6 top-0 flex flex-col justify-between">
            {ticks.map((t) => (
              <div key={t} className="h-px w-full bg-stroke-soft/70" />
            ))}
          </div>
          {chartData.map((d, i) => (
            <div key={chartMonths[i] ?? i} className="group relative flex h-full flex-1 flex-col items-center gap-2">
              <div className="flex h-[calc(100%_-_24px)] w-full items-end justify-center gap-[3px]">
                {SERIES.map((s) => (
                  <div
                    key={s.key}
                    className="w-1.5 rounded-t-[3px] transition-[height]"
                    style={{ height: `${(d[s.key] / axisMax) * 100}%`, background: s.color }}
                  />
                ))}
              </div>
              <span className="text-xs text-text-soft">{chartMonths[i]}</span>
            </div>
          ))}
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
