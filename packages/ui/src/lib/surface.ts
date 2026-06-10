import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

/** Card / panel surfaces */
export const surfaceVariants = cva("overflow-hidden rounded-2xl bg-bg-white", {
  variants: {
    border: {
      inset: "shadow-[inset_0_0_0_1px_var(--stroke-soft-200)]",
      none: "",
    },
    shadow: {
      none: "",
      sm: "shadow-sm",
      md: "shadow-regular-md",
      card: "shadow-card",
    },
    padding: {
      none: "",
      sm: "p-3",
      md: "p-4",
      lg: "p-5",
    },
  },
  defaultVariants: {
    border: "inset",
    shadow: "none",
    padding: "md",
  },
});

export type SurfaceVariants = VariantProps<typeof surfaceVariants>;

export function surfaceClass(props?: SurfaceVariants & { className?: string }) {
  const { className, ...variants } = props ?? {};
  return surfaceVariants({ ...variants, className });
}

/** Shared inset keyline — use instead of raw arbitrary shadows */
export const insetBorder = "shadow-[inset_0_0_0_1px_var(--stroke-soft-200)]";
export const insetBorderHover = "hover:shadow-[inset_0_0_0_1px_var(--stroke-sub-300)]";
export const insetBorderSub = "shadow-[inset_0_0_0_1px_var(--stroke-sub-300)]";
export const insetBorderPrimary = "shadow-[inset_0_0_0_1px_var(--primary-base)]";
export const insetBorderError = "shadow-[inset_0_0_0_1px_var(--state-error-base)]";
export const insetBorderErrorLight = "shadow-[inset_0_0_0_1px_var(--state-error-light)]";
export const insetBorderTransparent = "shadow-[inset_0_0_0_1px_transparent]";
export const insetBorderDisabled = "shadow-[inset_0_0_0_1px_var(--stroke-soft-200)]";
export const disabledInsetBorder = "disabled:shadow-[inset_0_0_0_1px_var(--stroke-soft-200)]";
export const insetFocusPrimary = "focus-within:shadow-[inset_0_0_0_1px_var(--primary-base),var(--shadow-focus-primary)]";
export const insetFocusPrimaryDirect = "focus:shadow-[inset_0_0_0_1px_var(--primary-base),var(--shadow-focus-primary)]";
export const insetFocusError = "focus-within:shadow-[inset_0_0_0_1px_var(--state-error-base),var(--shadow-focus-error)]";
export const insetHighlightPrimary = "shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.12)]";
export const insetPrimaryFocusVisible = "focus-visible:shadow-[inset_0_0_0_1px_var(--primary-base),var(--shadow-focus-primary)]";
export const insetPrimaryHover = "hover:shadow-[inset_0_0_0_1px_var(--primary-base)]";
export const insetErrorHover = "hover:shadow-[inset_0_0_0_1px_var(--state-error-base)]";

/** Leading/trailing slots for text fields and selects */
export const controlIconLeading = "inline-flex shrink-0 items-center text-icon-soft [&_svg]:size-5";
export const controlIconTrailing = "inline-flex shrink-0 items-center text-icon-soft [&_svg]:size-5";

export const inputSurfaceVariants = cva(
  cn(
    "flex w-full items-center gap-2.5 rounded-lg bg-bg-white transition-[box-shadow,background] duration-normal",
    insetBorder,
    insetBorderHover,
    insetFocusPrimary,
  ),
  {
    variants: {
      size: {
        small: "h-9 px-2.5 rounded-md",
        medium: "h-10 px-3",
        large: "h-12 px-4",
      },
      error: {
        true: cn(insetBorderError, insetFocusError),
        false: "",
      },
      disabled: {
        true: "pointer-events-none bg-bg-weak text-text-disabled",
        false: "",
      },
    },
    defaultVariants: { size: "medium", error: false, disabled: false },
  },
);

export const textareaSurfaceVariants = cva(
  cn(
    "w-full resize-y rounded-lg bg-bg-white p-3 font-sans text-sm leading-5 text-text-strong outline-none transition-[box-shadow] duration-normal placeholder:text-text-soft",
    insetBorder,
    insetBorderHover,
    "focus:shadow-[inset_0_0_0_1px_var(--primary-base),var(--shadow-focus-primary)]",
  ),
  {
    variants: {
      error: {
        true: cn(insetBorderError, "focus:shadow-[inset_0_0_0_1px_var(--state-error-base),var(--shadow-focus-error)]"),
        false: "",
      },
      disabled: {
        true: "pointer-events-none bg-bg-weak text-text-disabled",
        false: "",
      },
    },
    defaultVariants: { error: false, disabled: false },
  },
);

export const popoverSurface = cn("rounded-xl bg-bg-white p-1.5 shadow-md", insetBorder);
