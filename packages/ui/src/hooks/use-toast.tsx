"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import { insetBorder } from "../lib/surface";

const ToastProvider = ToastPrimitive.Provider;

export interface ToastMessage {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "success" | "error";
}

interface ToastContextValue {
  toasts: ToastMessage[];
  toast: (msg: Omit<ToastMessage, "id">) => void;
  dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function ToasterProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

  const toast = React.useCallback((msg: Omit<ToastMessage, "id">) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { ...msg, id }]);
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      <ToastProvider swipeDirection="right">
        {children}
        {toasts.map((t) => (
          <ToastPrimitive.Root
            key={t.id}
            open
            onOpenChange={(open) => !open && dismiss(t.id)}
            className={cn(
              "pointer-events-auto relative flex w-full max-w-sm items-start gap-3 rounded-xl bg-bg-white p-4 shadow-md",
              insetBorder,
              t.variant === "success" && "border-l-4 border-l-success",
              t.variant === "error" && "border-l-4 border-l-destructive",
            )}
          >
            <div className="flex-1">
              {t.title ? <ToastPrimitive.Title className="text-sm font-medium text-text-strong">{t.title}</ToastPrimitive.Title> : null}
              {t.description ? <ToastPrimitive.Description className="mt-1 text-sm text-text-sub">{t.description}</ToastPrimitive.Description> : null}
            </div>
            <ToastPrimitive.Close className="text-icon-soft hover:text-text-strong">
              <X className="size-4" />
            </ToastPrimitive.Close>
          </ToastPrimitive.Root>
        ))}
        <ToastPrimitive.Viewport className="fixed bottom-4 right-4 z-[100] flex max-h-screen w-full max-w-sm flex-col gap-2 outline-none" />
      </ToastProvider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToasterProvider");
  return ctx;
}
