"use client";

import * as React from "react";
import { Badge, Icon, Subheading, cn, insetBorder } from "@cyanium/ui";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  label: string;
  value: string;
  delta?: string;
  deltaColor?: React.ComponentProps<typeof Badge>["color"];
}

export function StatCard({ icon, label, value, delta, deltaColor = "gray", className, ...props }: StatCardProps) {
  return (
    <div className={cn("flex items-center gap-2.5 rounded-xl p-3", insetBorder, className)} {...props}>
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-bg-weak text-icon-sub">{icon}</span>
      <div className="min-w-0">
        <Subheading size="2xs" className="text-text-soft">{label}</Subheading>
        <div className="mt-0.5 flex items-center gap-2">
          <span className="font-display text-[17px] font-semibold tracking-tight text-text-strong">{value}</span>
          {delta ? <Badge color={deltaColor} variant="lighter" size="small">{delta}</Badge> : null}
        </div>
      </div>
    </div>
  );
}

export interface NavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: React.ReactNode;
}

export function NavItem({ icon, label, active, badge, className, ...props }: NavItemProps) {
  return (
    <button type="button" className={cn("flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm font-medium text-text-sub transition-colors hover:bg-bg-weak hover:text-text-strong", active && "bg-bg-weak text-text-strong", className)} {...props}>
      <Icon size="md">{icon}</Icon>
      <span className="flex-1">{label}</span>
      {badge}
    </button>
  );
}

export interface TransactionRowProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  iconBg?: string;
  name: string;
  subtitle: string;
  amount: string;
  positive?: boolean;
}

export function TransactionRow({ icon, iconBg = "var(--bg-weak-50)", name, subtitle, amount, positive, className, ...props }: TransactionRowProps) {
  return (
    <div className={cn("flex items-center gap-3 py-2.5", className)} {...props}>
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full" style={{ background: iconBg }}>{icon}</span>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-text-strong">{name}</div>
        <div className="text-xs text-text-sub">{subtitle}</div>
      </div>
      <div className={cn("text-sm font-medium tabular-nums", positive ? "text-success" : "text-text-strong")}>{amount}</div>
    </div>
  );
}
