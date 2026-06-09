"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../../lib/utils";
import { insetBorder } from "../../lib/surface";

export const TooltipProvider = TooltipPrimitive.Provider;

export interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  variant?: "dark" | "light";
  className?: string;
}

export function Tooltip({ children, content, side = "top", variant = "dark", className }: TooltipProps) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content side={side} sideOffset={6} className={cn("z-50 max-w-xs rounded-lg px-2.5 py-1.5 text-xs leading-4 shadow-sm animate-in fade-in-0 zoom-in-95", variant === "dark" ? "bg-bg-strong text-text-white" : cn("bg-bg-white text-text-strong", insetBorder), className)}>
          {content}
          <TooltipPrimitive.Arrow className={cn(variant === "dark" ? "fill-bg-strong" : "fill-bg-white")} />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
