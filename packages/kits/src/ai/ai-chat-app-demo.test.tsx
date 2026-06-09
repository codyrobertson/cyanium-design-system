import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { AiChatAppDemo } from "./ai-chat-app-demo";

describe("AiChatAppDemo", () => {
  it("renders chat shell with fixture title", () => {
    render(<AiChatAppDemo />);
    expect(screen.getByRole("heading", { name: "User research analysis" })).toBeInTheDocument();
    expect(screen.getByText("James Brown")).toBeInTheDocument();
  });
});
