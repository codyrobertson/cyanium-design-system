"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { insetBorder } from "../../lib/surface";

export interface SegmentedControlItem { value: string; label: React.ReactNode; icon?: React.ReactNode; disabled?: boolean; }

export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items?: SegmentedControlItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function SegmentedControl({ items = [], value, defaultValue, onChange, className, ...props }: SegmentedControlProps) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const current = value ?? internal;
  const select = (next: string) => { if (value === undefined) setInternal(next); onChange?.(next); };

  return (
    <div role="tablist" className={cn("inline-flex gap-1 rounded-lg bg-bg-weak p-1", insetBorder, className)} {...props}>
      {items.map((item) => {
        const active = current === item.value;
        return (
          <button key={item.value} type="button" role="tab" aria-selected={active} disabled={item.disabled} onClick={() => select(item.value)} className={cn("inline-flex h-8 items-center gap-2 rounded-md px-3.5 text-sm font-medium text-text-sub transition-[background,color,box-shadow] duration-normal hover:text-text-strong disabled:pointer-events-none disabled:text-text-disabled", active && "bg-bg-white text-text-strong shadow-button")}>
            {item.icon ? <span className="inline-flex size-5 items-center justify-center">{item.icon}</span> : null}
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
