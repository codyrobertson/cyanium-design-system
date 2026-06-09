"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";
import { insetBorder } from "../../lib/surface";
import { Button } from "./button";

const colorMap = {
  blue: { light: "bg-info-lighter text-text-strong", filled: "bg-info text-white" },
  green: { light: "bg-success-lighter text-text-strong", filled: "bg-success text-white" },
  red: { light: "bg-error-lighter text-text-strong", filled: "bg-destructive text-white" },
  orange: { light: "bg-warning-lighter text-text-strong", filled: "bg-warning text-white" },
  gray: { light: cn("bg-bg-weak text-text-strong", insetBorder), filled: "bg-bg-strong text-text-white" },
} as const;

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: keyof typeof colorMap;
  variant?: "light" | "filled";
  icon?: React.ReactNode;
  action?: React.ReactNode;
  onAction?: () => void;
  onClose?: () => void;
}

export function Banner({ color = "blue", variant = "light", icon, action, onAction, onClose, className, children, ...props }: BannerProps) {
  return (
    <div className={cn("flex items-center gap-3 rounded-xl px-4 py-3 font-sans text-sm", colorMap[color][variant], className)} {...props}>
      {icon ? <span className="inline-flex size-5 shrink-0 items-center justify-center">{icon}</span> : null}
      <div className="min-w-0 flex-1 leading-5">{children}</div>
      {action || onAction ? <Button variant="ghost" intent="neutral" size="small" onClick={onAction} className="shrink-0">{action ?? "Action"}</Button> : null}
      {onClose ? <button type="button" aria-label="Dismiss" onClick={onClose} className="inline-flex size-5 shrink-0 items-center justify-center opacity-70 hover:opacity-100"><X className="size-4" /></button> : null}
    </div>
  );
}
