"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogPortal = DialogPrimitive.Portal;

export const DialogOverlay = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-[var(--overlay-overlay-gray)] backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)} {...props} />
  ),
);
DialogOverlay.displayName = "DialogOverlay";

export const DialogContent = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content ref={ref} className={cn("fixed left-1/2 top-1/2 z-50 w-full max-w-[440px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[20px] bg-bg-white font-sans shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className)} {...props}>
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  ),
);
DialogContent.displayName = "DialogContent";

const iconColorClass = { blue: "bg-info-lighter text-info", green: "bg-success-lighter text-success", red: "bg-error-lighter text-destructive", orange: "bg-warning-lighter text-warning" } as const;

export interface ModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  iconColor?: keyof typeof iconColorClass;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Modal({ open, onOpenChange, title, description, icon, iconColor = "blue", children, footer, className }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={className}>
        {(title || icon) && (
          <div className="flex items-start gap-3 px-5 pt-5">
            {icon ? <span className={cn("inline-flex size-10 shrink-0 items-center justify-center rounded-full text-xl", iconColorClass[iconColor])}>{icon}</span> : null}
            <div className="min-w-0 flex-1 pt-0.5">
              {title ? <DialogPrimitive.Title className="font-display text-lg font-semibold tracking-tight text-text-strong">{title}</DialogPrimitive.Title> : null}
              {description ? <DialogPrimitive.Description className="mt-1 text-sm leading-5 text-text-sub">{description}</DialogPrimitive.Description> : null}
            </div>
            <DialogClose className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg text-icon-soft hover:bg-bg-weak hover:text-text-strong"><X className="size-5" /><span className="sr-only">Close</span></DialogClose>
          </div>
        )}
        {children ? <div className="px-5 py-4 text-sm leading-5 text-text-sub">{children}</div> : null}
        {footer ? <div className="flex gap-3 px-5 pb-5 [&>*]:flex-1">{footer}</div> : null}
      </DialogContent>
    </Dialog>
  );
}
