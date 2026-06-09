import * as React from "react";
import {
  ArrowLeftRight,
  Banknote,
  CreditCard,
  FileText,
  Headphones,
  History,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import type { SidebarNavItem } from "../patterns";
import type { TransactionRow } from "../finance/transactions-panel";
import type { MyCardsPanelProps } from "../finance/my-cards-panel";
import type { ExchangePanelProps, SpendingCategory, SpendingSummaryProps } from "../finance/spending-exchange";
import { MoreHorizontal, ShoppingBag, Zap } from "lucide-react";

export const financeSidebarChrome = {
  searchPlaceholder: "Search transactions…",
  otherGroupLabel: "Others",
} as const;

export const financeBrand = {
  name: "Apex",
  subtitle: "Finance & Banking",
};

export const financeUser = {
  name: "Sophia Williams",
  email: "sophia@cyanium.dev",
  avatarColor: "orange" as const,
};

export const financeTopbar = {
  title: "Arthur Taylor",
  subtitle: "Welcome back to Apex 👋",
  avatarName: "Arthur Taylor",
};

export const financeMainNav: SidebarNavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="size-5" /> },
  { id: "cards", label: "My Cards", icon: <CreditCard className="size-5" /> },
  { id: "transfer", label: "Transfer", icon: <ArrowLeftRight className="size-5" /> },
  { id: "transaction", label: "Transaction", icon: <History className="size-5" /> },
  { id: "payments", label: "Payments", icon: <FileText className="size-5" /> },
  { id: "exchange", label: "Exchange", icon: <Banknote className="size-5" /> },
];

export const financeOtherNav: SidebarNavItem[] = [
  { id: "settings", label: "Settings", icon: <Settings className="size-5" /> },
  { id: "support", label: "Support", icon: <Headphones className="size-5" /> },
];

export const budgetChartMonths = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

import type { BudgetChartPoint } from "../finance/budget-overview";

export const budgetChartData: BudgetChartPoint[] = [
  { income: 11, expenses: 3, scheduled: 1.5 },
  { income: 12, expenses: 3.2, scheduled: 1.6 },
  { income: 10.5, expenses: 2.8, scheduled: 1.4 },
  { income: 13, expenses: 3.4, scheduled: 1.7 },
  { income: 11.5, expenses: 3, scheduled: 1.5 },
  { income: 12.5, expenses: 3.3, scheduled: 1.6 },
  { income: 10, expenses: 2.6, scheduled: 1.3 },
  { income: 13.5, expenses: 3.6, scheduled: 1.8 },
  { income: 12, expenses: 3.1, scheduled: 1.5 },
  { income: 14, expenses: 3.8, scheduled: 1.9 },
  { income: 11.8, expenses: 3, scheduled: 1.5 },
  { income: 13.2, expenses: 3.5, scheduled: 1.7 },
];

export const budgetStats = {
  income: { value: "$96,000.00", delta: "+5%" },
  expenses: { value: "$24,000.00", delta: "-3%" },
  scheduled: { value: "$14,000.00", delta: "0%" },
};

export const sampleTransactions: TransactionRow[] = [
  { id: "1", icon: "🎬", iconBg: "var(--state-error-lighter)", name: "Netflix Subscription", category: "Entertainment", date: "Sep 18, 2024", status: "completed", amount: "-$15.99" },
  { id: "2", icon: "🏠", iconBg: "var(--state-information-lighter)", name: "Rental Income", category: "Income", date: "Sep 17, 2024", status: "completed", amount: "+$800.00", positive: true },
  { id: "3", icon: "🛒", iconBg: "var(--bg-weak-50)", name: "Grocery Shopping", category: "Shopping", date: "Sep 16, 2024", status: "completed", amount: "-$84.14" },
  { id: "4", icon: "⚡", iconBg: "var(--state-feature-lighter)", name: "Electricity Bill", category: "Utilities", date: "Sep 15, 2024", status: "pending", amount: "-$120.40" },
  { id: "5", icon: "💼", iconBg: "var(--state-success-lighter)", name: "Salary Deposit", category: "Income", date: "Sep 14, 2024", status: "completed", amount: "+$5,200.00", positive: true },
  { id: "6", icon: "✈️", iconBg: "var(--state-away-lighter)", name: "Flight Booking", category: "Travel", date: "Sep 12, 2024", status: "failed", amount: "-$430.00" },
  { id: "7", icon: "☕", iconBg: "var(--bg-weak-50)", name: "Coffee & Co.", category: "Food", date: "Sep 11, 2024", status: "completed", amount: "-$8.75" },
];

export const defaultSpendingCategories: SpendingCategory[] = [
  { icon: <ShoppingBag className="size-4" />, label: "Shopping", value: "$900.00" },
  { icon: <Zap className="size-4 text-[var(--pink-500)]" />, label: "Utilities", value: "$600.00" },
  { icon: <MoreHorizontal className="size-4" />, label: "Others", value: "$200.00" },
];

export const financeCards: MyCardsPanelProps = {
  card: { label: "Savings Card", balance: "$16,058.94", active: true },
  details: [
    { label: "Card Number", value: "•••• •••• •••• 1234" },
    { label: "Expiry Date", value: "06/27" },
    { label: "CVC", value: "•••" },
    { label: "Spending Limit", value: "$12,000.00" },
  ],
  recentTransactions: [
    { icon: <span>🎬</span>, iconBg: "var(--state-error-lighter)", name: "Netflix Cashback", subtitle: "Cashback of September, 2023", amount: "$36.24", positive: true },
    { icon: <span>🏠</span>, iconBg: "var(--state-information-lighter)", name: "Rental Income", subtitle: "Rental payment from Mr. Dud.", amount: "$800.00", positive: true },
  ],
};

export const financeSpending: SpendingSummaryProps = {
  periodLabel: "Last Week",
  total: "$1,800.00",
  categories: defaultSpendingCategories,
  limitNote: <>Your weekly spending limit is <b className="text-text-strong">$2,000</b>.</>,
};

export const financeExchange: ExchangePanelProps = {
  fromCurrency: "USD",
  toCurrency: "EUR",
  amount: "$100.00",
  available: "Available : $16,058.94",
  rate: "1 USD = 0.94 EUR",
  lines: [
    { label: "Tax (2%)", value: "$2.00" },
    { label: "Exchange fee (1%)", value: "$1.00" },
    { label: "Total amount", value: "€90.70" },
  ],
};
