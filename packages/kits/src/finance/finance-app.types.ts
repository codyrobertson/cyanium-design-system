import type { AppSidebarProps, AppTopbarProps } from "../patterns";
import type { MyCardsPanelProps } from "./my-cards-panel";
import type { ExchangePanelProps, SpendingSummaryProps } from "./spending-exchange";
import type { TransactionRow } from "./transactions-panel";
import type { BudgetOverviewProps } from "./budget-overview";

export interface FinanceAppProps {
  initialRoute?: string;
  sidebar: Omit<AppSidebarProps, "activeId" | "onNavigate"> & {
    searchPlaceholder: string;
    otherGroupLabel: string;
  };
  topbar: AppTopbarProps;
  cards: MyCardsPanelProps;
  budget: BudgetOverviewProps;
  spending: SpendingSummaryProps;
  exchange: ExchangePanelProps;
  transactions: TransactionRow[];
  transactionTotalCount: number;
}
