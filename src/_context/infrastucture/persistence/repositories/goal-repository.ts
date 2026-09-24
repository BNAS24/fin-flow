import { FinancialGoal } from "@/_context/domain/entities/goal";

export interface FinancialGoalRepository {
  findById: (id: string) => Promise<FinancialGoal | null>;
  create: (input: FinancialGoal) => Promise<void>;
  delete: (id: string) => Promise<void>;
}