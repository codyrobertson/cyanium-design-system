"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { Label } from "./label";

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  hint?: React.ReactNode;
  error?: boolean;
}

export function Field({ label, htmlFor, required, hint, error, className, children, ...props }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5 font-sans", className)} {...props}>
      {label ? <Label htmlFor={htmlFor} required={required}>{label}</Label> : null}
      {children}
      {hint ? <p className={cn("text-xs leading-4 text-text-sub", error && "text-destructive")}>{hint}</p> : null}
    </div>
  );
}
