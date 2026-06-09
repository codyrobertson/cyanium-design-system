"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@cyanium/ui";
import type { AiChatAppProps } from "../ai/ai-chat-app";
import type { FinanceAppProps } from "../finance/finance-app.types";
import type { LandingPageProps } from "../landing/landing-page";
import {
  aiCopy,
  aiDefaultModel,
  aiInitialMessages,
  aiInitialTitle,
  aiModels,
  aiSidebarBase,
} from "./ai";
import {
  budgetChartData,
  budgetChartMonths,
  budgetStats,
  financeBrand,
  financeCards,
  financeExchange,
  financeMainNav,
  financeOtherNav,
  financeSidebarChrome,
  financeSpending,
  financeTopbar,
  financeUser,
  sampleTransactions,
} from "./finance";
import { landingPageContent } from "./landing";

export const financeTransactionTotalCount = 248;

export const financeBudget = {
  stats: budgetStats,
  chartMonths: budgetChartMonths,
  chartData: budgetChartData,
  periodLabel: "Last Year",
} satisfies FinanceAppProps["budget"];

/** Production-shaped props for FinanceApp — use in apps, integration stories, and tests. */
export function buildFinanceAppProps(overrides: Partial<FinanceAppProps> = {}): FinanceAppProps {
  return {
    sidebar: {
      brandName: financeBrand.name,
      brandSubtitle: financeBrand.subtitle,
      mainItems: financeMainNav,
      otherItems: financeOtherNav,
      user: financeUser,
      searchPlaceholder: financeSidebarChrome.searchPlaceholder,
      otherGroupLabel: financeSidebarChrome.otherGroupLabel,
    },
    topbar: {
      title: financeTopbar.title,
      subtitle: financeTopbar.subtitle,
      showAvatar: true,
      avatarName: financeTopbar.avatarName,
      action: (
        <Button intent="primary" trailingIcon={<ArrowUpRight className="size-5" />}>
          Create Request
        </Button>
      ),
    },
    initialRoute: "dashboard",
    cards: financeCards,
    budget: financeBudget,
    spending: financeSpending,
    exchange: financeExchange,
    transactions: sampleTransactions,
    transactionTotalCount: financeTransactionTotalCount,
    ...overrides,
  };
}

/** Production-shaped props for AiChatApp. */
export function buildAiChatAppProps(overrides: Partial<AiChatAppProps> = {}): AiChatAppProps {
  return {
    sidebar: aiSidebarBase,
    copy: aiCopy,
    initialTitle: aiInitialTitle,
    initialMessages: aiInitialMessages,
    models: [...aiModels],
    defaultModel: aiDefaultModel,
    ...overrides,
  };
}

/** Production-shaped props for LandingPage. */
export function buildLandingPageProps(overrides: Partial<LandingPageProps> = {}): LandingPageProps {
  return { ...landingPageContent, ...overrides };
}
