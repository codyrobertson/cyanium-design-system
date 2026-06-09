"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../../lib/utils";

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  size?: "small" | "medium";
}

export const Switch = React.forwardRef<React.ComponentRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, size = "medium", disabled, ...props }, ref) => (
    <SwitchPrimitive.Root ref={ref} disabled={disabled} className={cn("peer relative inline-flex shrink-0 cursor-pointer items-center rounded-full bg-bg-soft shadow-[inset_0_1px_1px_rgba(27,28,29,0.06)] transition-colors duration-slow data-[state=checked]:bg-primary focus-visible:shadow-focus-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-bg-weak", size === "medium" && "h-5 w-9", size === "small" && "h-4 w-7", className)} {...props}>
      <SwitchPrimitive.Thumb className={cn("pointer-events-none block rounded-full bg-[var(--static-static-white)] shadow-toggle transition-transform duration-slow data-[state=unchecked]:translate-x-0.5 disabled:bg-bg-soft disabled:shadow-none", size === "medium" && "size-4 data-[state=checked]:translate-x-[18px]", size === "small" && "size-3 data-[state=checked]:translate-x-[14px]")} />
    </SwitchPrimitive.Root>
  ),
);
Switch.displayName = "Switch";
