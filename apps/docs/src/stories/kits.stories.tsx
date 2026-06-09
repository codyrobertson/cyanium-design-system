import type { Meta, StoryObj } from "@storybook/react-vite";
import { FinanceAppDemo } from "@cyanium/kits/finance";
import { LandingPageDemo } from "@cyanium/kits/landing";
import { AiChatAppDemo } from "@cyanium/kits/ai";
import { TransactionsPanel } from "@cyanium/kits/finance";
import { SpendingExchangeRow } from "@cyanium/kits/finance";
import { financeExchange, financeSpending, sampleTransactions } from "@cyanium/kits/fixtures";

const meta = {
  title: "Kits/Demos",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

/** Quick previews wired from fixtures — use Integration stories for production API examples. */
export const Finance: StoryObj = { render: () => <FinanceAppDemo /> };
export const FinanceTransactions: StoryObj = { render: () => <div className="min-h-screen bg-bg-weak p-6"><TransactionsPanel rows={sampleTransactions} totalCount={248} /></div> };
export const SpendingExchange: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-bg-weak p-6">
      <SpendingExchangeRow spending={financeSpending} exchange={financeExchange} />
    </div>
  ),
};
export const Landing: StoryObj = { render: () => <LandingPageDemo /> };
export const AiChat: StoryObj = { render: () => <AiChatAppDemo /> };
