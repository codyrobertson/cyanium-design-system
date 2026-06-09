"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../../lib/utils";
import { insetBorder, insetBorderHover, disabledInsetBorder } from "../../lib/surface";

export interface RadioControlProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {}

export const RadioControl = React.forwardRef<React.ComponentRef<typeof RadioGroupPrimitive.Item>, RadioControlProps>(
  ({ className, disabled, ...props }, ref) => (
    <RadioGroupPrimitive.Item ref={ref} disabled={disabled} className={cn("inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-bg-white transition-[background,box-shadow] duration-normal focus-visible:shadow-focus-primary focus-visible:outline-none disabled:bg-bg-weak", insetBorder, insetBorderHover, disabledInsetBorder, className)} {...props}>
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <span className="size-2.5 rounded-full bg-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  ),
);
RadioControl.displayName = "RadioControl";
