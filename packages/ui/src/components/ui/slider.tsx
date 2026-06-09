"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../../lib/utils";

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {}

export const Slider = React.forwardRef<React.ComponentRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, disabled, ...props }, ref) => (
    <SliderPrimitive.Root ref={ref} disabled={disabled} className={cn("relative flex w-full touch-none select-none items-center", disabled && "opacity-60", className)} {...props}>
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-bg-soft">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block size-4 rounded-full border-2 border-primary bg-bg-white shadow-toggle transition-colors focus-visible:shadow-focus-primary focus-visible:outline-none disabled:pointer-events-none" />
    </SliderPrimitive.Root>
  ),
);
Slider.displayName = "Slider";
