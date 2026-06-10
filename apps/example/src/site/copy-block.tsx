import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

export interface CopyBlockProps {
  command: string;
  variant?: "dark" | "light";
}

export function CopyBlock({ command, variant = "dark" }: CopyBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const isDark = variant === "dark";

  return (
    <div
      className={
        isDark
          ? "relative overflow-hidden rounded-xl border border-stroke-soft bg-bg-strong"
          : "relative overflow-hidden rounded-xl border border-stroke-soft bg-bg-weak"
      }
    >
      <div
        className={
          isDark
            ? "flex items-center justify-between border-b border-white/10 px-4 py-2"
            : "flex items-center justify-between border-b border-stroke-soft bg-bg-white px-4 py-2"
        }
      >
        <span
          className={
            isDark
              ? "inline-flex items-center gap-2 text-xs font-medium text-white/60"
              : "inline-flex items-center gap-2 text-xs font-medium text-text-soft"
          }
        >
          <Terminal className="size-3.5" /> terminal
        </span>
        <button
          type="button"
          onClick={copy}
          className={
            isDark
              ? "inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              : "inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-text-sub transition-colors hover:bg-bg-weak hover:text-text-strong"
          }
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre
        className={
          isDark
            ? "overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-white/90"
            : "overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-text-strong"
        }
      >
        <code>{command}</code>
      </pre>
    </div>
  );
}
