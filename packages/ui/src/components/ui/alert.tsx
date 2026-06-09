"use client";

import * as React from "react";
import { AlertCircle, CheckCircle2, Info, X, XCircle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { insetBorder } from "../../lib/surface";

const alertVariants = cva("flex gap-2.5 rounded-xl p-3 font-sans", {
  variants: {
    status: { info: "", success: "", warning: "", error: "" },
    variant: { filled: "text-white", light: "text-text-strong", stroke: cn("bg-bg-white text-text-strong shadow-sm", insetBorder) },
  },
  compoundVariants: [
    { status: "info", variant: "filled", className: "bg-info" },
    { status: "success", variant: "filled", className: "bg-success" },
    { status: "warning", variant: "filled", className: "bg-warning" },
    { status: "error", variant: "filled", className: "bg-destructive" },
    { status: "info", variant: "light", className: "bg-info-lighter [&_.cn-alert-icon]:text-info" },
    { status: "success", variant: "light", className: "bg-success-lighter [&_.cn-alert-icon]:text-success" },
    { status: "warning", variant: "light", className: "bg-warning-lighter [&_.cn-alert-icon]:text-warning" },
    { status: "error", variant: "light", className: "bg-error-lighter [&_.cn-alert-icon]:text-destructive" },
    { status: "info", variant: "stroke", className: "[&_.cn-alert-icon]:text-info" },
    { status: "success", variant: "stroke", className: "[&_.cn-alert-icon]:text-success" },
    { status: "warning", variant: "stroke", className: "[&_.cn-alert-icon]:text-warning" },
    { status: "error", variant: "stroke", className: "[&_.cn-alert-icon]:text-destructive" },
  ],
  defaultVariants: { status: "info", variant: "light" },
});

const defaultIcons = { info: Info, success: CheckCircle2, warning: AlertCircle, error: XCircle } as const;

export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">, VariantProps<typeof alertVariants> {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: () => void;
}

export function Alert({ status = "info", variant = "light", title, children, icon, onClose, className, ...props }: AlertProps) {
  const Icon = defaultIcons[status ?? "info"];
  return (
    <div role="alert" className={cn(alertVariants({ status, variant, className }))} {...props}>
      <span className="cn-alert-icon inline-flex size-5 shrink-0 items-center justify-center pt-px">{icon ?? <Icon className="size-5" />}</span>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5 pt-px">
        {title ? <div className="text-sm font-medium leading-5">{title}</div> : null}
        {children ? <div className={cn("text-sm leading-5", variant === "filled" ? "opacity-90" : "text-text-sub")}>{children}</div> : null}
      </div>
      {onClose ? <button type="button" aria-label="Dismiss" onClick={onClose} className="inline-flex size-5 shrink-0 items-center justify-center opacity-70 hover:opacity-100"><X className="size-4" /></button> : null}
    </div>
  );
}
export { alertVariants };
