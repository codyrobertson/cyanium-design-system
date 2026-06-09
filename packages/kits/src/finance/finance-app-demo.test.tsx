import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FinanceAppDemo } from "./finance-app-demo";

describe("FinanceAppDemo", () => {
  it("renders finance dashboard shell", () => {
    render(<FinanceAppDemo />);
    expect(screen.getByText("Apex")).toBeInTheDocument();
    expect(screen.getByText(/Welcome back to Apex/)).toBeInTheDocument();
  });
});
