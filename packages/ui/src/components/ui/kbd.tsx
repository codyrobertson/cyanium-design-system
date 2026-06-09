"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { insetBorder } from "../../lib/surface";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {}

export function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded px-1.5",
        "font-mono text-[11px] font-medium text-text-soft",
        insetBorder,
        "bg-bg-weak",
        className,
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
