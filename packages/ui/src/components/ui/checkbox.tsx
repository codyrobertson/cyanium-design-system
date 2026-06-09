"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cn } from "../../lib/utils";
import { insetBorder, insetBorderHover, disabledInsetBorder } from "../../lib/surface";

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: React.ReactNode;
  indeterminate?: boolean;
}

const CheckboxControl = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  Omit<CheckboxProps, "label">
>(({ className, indeterminate, checked, disabled, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    disabled={disabled}
    checked={indeterminate ? "indeterminate" : checked}
    className={cn(
      "inline-flex size-5 shrink-0 items-center justify-center rounded-md bg-bg-white text-primary-foreground transition-[background,box-shadow] duration-normal",
      insetBorder,
      insetBorderHover,
      "data-[state=checked]:bg-primary data-[state=checked]:shadow-none data-[state=indeterminate]:bg-primary data-[state=indeterminate]:shadow-none",
      "focus-visible:shadow-focus-primary focus-visible:outline-none",
      "disabled:bg-bg-weak disabled:text-text-disabled",
      disabledInsetBorder,
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center">
      {indeterminate ? <Minus className="size-3.5" strokeWidth={2.5} /> : <Check className="size-3.5" strokeWidth={2.5} />}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
CheckboxControl.displayName = "CheckboxControl";

export const Checkbox = React.forwardRef<React.ComponentRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, label, indeterminate, disabled, ...props }, ref) => {
    const control = <CheckboxControl ref={ref} indeterminate={indeterminate} disabled={disabled} className={className} {...props} />;
    if (label == null) return control;
    return (
      <label className={cn("inline-flex cursor-pointer items-center gap-2", disabled && "cursor-not-allowed")}>
        {control}
        <span className={cn("text-sm leading-5 text-text-strong", disabled && "text-text-disabled")}>{label}</span>
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";

export { CheckboxControl, CheckboxControl as CheckboxShell };
