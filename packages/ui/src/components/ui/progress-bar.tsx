"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../lib/utils";

export interface ProgressBarProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  variant?: "linear" | "circular";
  color?: "blue" | "green" | "red" | "orange" | "gray";
  label?: React.ReactNode;
  showValue?: boolean;
  size?: number;
  thickness?: number;
}

const colorClass = { blue: "bg-primary", green: "bg-success", red: "bg-destructive", orange: "bg-warning", gray: "bg-bg-strong" } as const;

export function ProgressBar({ value = 0, max = 100, variant = "linear", color = "blue", label, showValue = false, size = 64, thickness = 6, className, ...props }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, ((value ?? 0) / max) * 100));
  if (variant === "circular") {
    const radius = (size - thickness) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (pct / 100) * circumference;
    const strokeVar = color === "blue" ? "var(--primary-base)" : color === "gray" ? "var(--bg-strong-950)" : `var(--state-${color === "red" ? "error" : color === "orange" ? "warning" : "success"}-base)`;
    return (
      <div className={cn("inline-flex flex-col items-center gap-2", className)}>
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="-rotate-90">
            <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--bg-soft-200)" strokeWidth={thickness} />
            <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={strokeVar} strokeWidth={thickness} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} className="transition-[stroke-dashoffset] duration-slow" />
          </svg>
          {showValue ? <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-text-strong">{Math.round(pct)}%</span> : null}
        </div>
        {label ? <span className="text-sm text-text-sub">{label}</span> : null}
      </div>
    );
  }
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-sm">
          {label ? <span className="text-text-sub">{label}</span> : <span />}
          {showValue ? <span className="font-medium text-text-strong">{Math.round(pct)}%</span> : null}
        </div>
      )}
      <ProgressPrimitive.Root value={value} max={max} className="relative h-1.5 w-full overflow-hidden rounded-full bg-bg-soft" {...props}>
        <ProgressPrimitive.Indicator className={cn("h-full transition-all duration-slow", colorClass[color])} style={{ width: `${pct}%` }} />
      </ProgressPrimitive.Root>
    </div>
  );
}
