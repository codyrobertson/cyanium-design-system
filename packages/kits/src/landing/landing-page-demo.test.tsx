import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LandingPageDemo } from "./landing-page-demo";

describe("LandingPageDemo", () => {
  it("renders landing hero from fixtures", () => {
    render(<LandingPageDemo />);
    expect(screen.getByText("Helm")).toBeInTheDocument();
    expect(screen.getByText(/Ship product UI your team actually wants to use/)).toBeInTheDocument();
  });
});
