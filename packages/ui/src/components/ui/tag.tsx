"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";
import { insetBorder } from "../../lib/surface";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode;
  gray?: boolean;
  onRemove?: () => void;
}

export function Tag({ className, icon, gray = false, onRemove, children, ...props }: TagProps) {
  return (
    <span className={cn("inline-flex h-7 items-center gap-1.5 rounded-lg px-2 text-sm font-medium", gray ? cn("bg-bg-weak text-text-sub", insetBorder) : "bg-primary-lighter text-primary", className)} {...props}>
      {icon ? <span className="inline-flex size-4 items-center justify-center">{icon}</span> : null}
      {children}
      {onRemove ? (
        <button type="button" aria-label="Remove" onClick={onRemove} className="inline-flex size-4 items-center justify-center rounded opacity-70 hover:opacity-100">
          <X className="size-3" />
        </button>
      ) : null}
    </span>
  );
}
