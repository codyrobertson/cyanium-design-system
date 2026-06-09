"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../../lib/utils";
import { RadioControl } from "./radio-control";

export const RadioGroup = React.forwardRef<React.ComponentRef<typeof RadioGroupPrimitive.Root>, React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>(
  ({ className, ...props }, ref) => <RadioGroupPrimitive.Root ref={ref} className={cn("grid gap-2", className)} {...props} />,
);
RadioGroup.displayName = "RadioGroup";

export interface RadioProps extends React.ComponentPropsWithoutRef<typeof RadioControl> {
  label?: React.ReactNode;
}

export const Radio = React.forwardRef<React.ComponentRef<typeof RadioControl>, RadioProps>(
  ({ className, label, disabled, ...props }, ref) => {
    const item = <RadioControl ref={ref} disabled={disabled} className={className} {...props} />;
    if (label == null) return item;
    return (
      <label className={cn("inline-flex cursor-pointer items-center gap-2", disabled && "cursor-not-allowed")}>
        {item}
        <span className={cn("text-sm leading-5 text-text-strong", disabled && "text-text-disabled")}>{label}</span>
      </label>
    );
  },
);
Radio.displayName = "Radio";
