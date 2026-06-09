import { describe, expect, it } from "vitest";
import { buildAiChatAppProps, buildFinanceAppProps, buildLandingPageProps } from "./builders";

describe("fixture builders", () => {
  it("buildFinanceAppProps returns required keys", () => {
    const props = buildFinanceAppProps();
    expect(props.sidebar.brandName).toBe("Apex");
    expect(props.transactions.length).toBeGreaterThan(0);
    expect(props.transactionTotalCount).toBe(248);
  });

  it("buildFinanceAppProps accepts overrides", () => {
    const props = buildFinanceAppProps({ initialRoute: "transaction" });
    expect(props.initialRoute).toBe("transaction");
  });

  it("buildAiChatAppProps returns models and messages", () => {
    const props = buildAiChatAppProps();
    expect(props.models).toContain("GPT-4o");
    expect(props.initialMessages).toHaveLength(2);
    expect(props.copy.composerPlaceholder).toBeTruthy();
    expect(props.sidebar.searchPlaceholder).toBeTruthy();
  });

  it("buildLandingPageProps includes gallery and nav", () => {
    const props = buildLandingPageProps();
    expect(props.gallery.length).toBeGreaterThan(0);
    expect(props.brandName).toBe("Helm");
    expect(props.nav.links.length).toBeGreaterThan(0);
    expect(props.sections.features.title).toBeTruthy();
    expect(props.footerText).toBeTruthy();
  });
});
