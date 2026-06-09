"use client";

import * as React from "react";
import { AppSidebar, AppTopbar, DashboardShell } from "../patterns";
import { BudgetOverview } from "./budget-overview";
import { MyCardsPanel } from "./my-cards-panel";
import { SpendingExchangeRow } from "./spending-exchange";
import { TransactionsPanel } from "./transactions-panel";
import type { FinanceAppProps } from "./finance-app.types";

export function FinanceApp({
  initialRoute = "dashboard",
  sidebar,
  topbar,
  cards,
  budget,
  spending,
  exchange,
  transactions,
  transactionTotalCount,
}: FinanceAppProps) {
  const [route, setRoute] = React.useState(initialRoute);

  return (
    <DashboardShell
      sidebar={<AppSidebar {...sidebar} activeId={route} onNavigate={setRoute} />}
      topbar={<AppTopbar {...topbar} />}
    >
      {route === "transaction" ? (
        <TransactionsPanel rows={transactions} totalCount={transactionTotalCount} />
      ) : (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[380px_1fr]">
          <MyCardsPanel {...cards} />
          <div className="flex flex-col gap-6">
            <BudgetOverview {...budget} />
            <SpendingExchangeRow spending={spending} exchange={exchange} />
          </div>
        </div>
      )}
    </DashboardShell>
  );
}

export type { FinanceAppProps } from "./finance-app.types";
