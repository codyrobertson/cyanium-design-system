"use client";

import { Badge, type BadgeProps } from "@cyanium/ui";

export function StatusBadge({ status }: { status: "completed" | "pending" | "failed" }) {
  const map: Record<string, { color: BadgeProps["color"]; label: string }> = {
    completed: { color: "green", label: "Completed" },
    pending: { color: "orange", label: "Pending" },
    failed: { color: "red", label: "Failed" },
  };
  const { color, label } = map[status];
  return <Badge color={color} variant="lighter" size="small" dot>{label}</Badge>;
}
