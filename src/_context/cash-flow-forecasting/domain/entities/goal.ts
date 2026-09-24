import { Money } from "../value-objects/money";

export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: Money["amount"];
  savedAmount: Money["amount"];
  deadline?: string;
  createdAt: string;
  updatedAt: string;
}

export type FinancialGoals = FinancialGoal[];
