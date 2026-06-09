"use client";

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";
import { Badge } from "./badge";
import { EmptyState } from "./empty-state";
import { cn } from "../../lib/utils";
import { surfaceVariants } from "../../lib/surface";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("a", "c")).toBe("a c");
  });
});

describe("surfaceVariants", () => {
  it("applies inset border by default", () => {
    expect(surfaceVariants()).toContain("rounded-2xl");
  });
});

describe("Button", () => {
  it("renders label", () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });
});

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge color="green">Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });
});

describe("EmptyState", () => {
  it("renders title and description", () => {
    render(<EmptyState title="No data" description="Try again later" />);
    expect(screen.getByText("No data")).toBeInTheDocument();
    expect(screen.getByText("Try again later")).toBeInTheDocument();
  });
});
