import { FinanceApp } from "@cyanium/kits/finance";
import { buildFinanceAppProps } from "@cyanium/kits/fixtures";

/**
 * FinanceApp — full banking dashboard shell: sidebar nav, topbar, balance
 * cards, budget overview chart, transactions, my-cards, and spending/exchange.
 * Rendered with production fixture data via buildFinanceAppProps().
 */
export const Dashboard = () => <FinanceApp {...buildFinanceAppProps()} />;
