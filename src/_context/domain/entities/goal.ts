import { Money } from "../value-objects/money";

export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: Money;
  savedAmount: Money;
  deadline?: string;
  createdAt: string;
  updatedAt: string;
}

export type FinancialGoals = FinancialGoal[];
