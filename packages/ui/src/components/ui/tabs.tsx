"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../lib/utils";
import { insetBorder } from "../../lib/surface";

export interface TabItem { value: string; label: React.ReactNode; icon?: React.ReactNode; badge?: React.ReactNode; }

export interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  items?: TabItem[];
  variant?: "line" | "pill";
}

export const TabsList = TabsPrimitive.List;
export const TabsTrigger = TabsPrimitive.Trigger;
export const TabsContent = TabsPrimitive.Content;

export function Tabs({ items = [], variant = "line", value, defaultValue, onValueChange, className, children, ...props }: TabsProps & { children?: React.ReactNode }) {
  return (
    <TabsPrimitive.Root value={value} defaultValue={defaultValue ?? items[0]?.value} onValueChange={onValueChange} className={cn("font-sans", className)} {...props}>
      {items.length > 0 ? (
        <TabsPrimitive.List className={cn("flex gap-1", variant === "line" && "gap-6 border-b border-stroke-soft", variant === "pill" && cn("inline-flex gap-1 rounded-lg bg-bg-weak p-1", insetBorder))}>
          {items.map((item) => (
            <TabsPrimitive.Trigger key={item.value} value={item.value} className={cn("relative inline-flex items-center gap-2 border-none bg-transparent text-sm font-medium text-text-sub transition-colors duration-normal hover:text-text-strong focus-visible:outline-none", variant === "line" && ["h-10 px-0.5", "after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:rounded-t after:bg-primary after:opacity-0 after:transition-opacity", "data-[state=active]:text-text-strong data-[state=active]:after:opacity-100"], variant === "pill" && ["h-8 rounded-md px-3.5", "data-[state=active]:bg-bg-white data-[state=active]:text-text-strong data-[state=active]:shadow-button"])}>
              {item.icon ? <span className="inline-flex size-5 items-center justify-center">{item.icon}</span> : null}
              {item.label}
              {item.badge != null ? <span className="rounded-full bg-bg-weak px-1.5 py-px text-[11px] font-medium text-text-sub data-[state=active]:bg-primary-lighter data-[state=active]:text-primary">{item.badge}</span> : null}
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
      ) : null}
      {children}
    </TabsPrimitive.Root>
  );
}
