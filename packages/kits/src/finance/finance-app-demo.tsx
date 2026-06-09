"use client";

import { FinanceApp } from "./finance-app";
import { buildFinanceAppProps } from "../fixtures/builders";

export function FinanceAppDemo() {
  return <FinanceApp {...buildFinanceAppProps()} />;
}
