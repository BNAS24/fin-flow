import { Money } from "../value-objects/money";

export interface FinancialDecision {
  id: string;
  name: string;
  amount: Money;
  date: string;
  note?: string;
  riskLevel: string;
  createdAt: string;
  updatedAt: string;
  committed: boolean;
}

export type FinancialDecisions = FinancialDecision[];
