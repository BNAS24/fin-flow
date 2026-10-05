import { FinancialDecision } from "@/_context/cash-flow-forecasting/domain/entities/decision";

export interface FinancialDecisionRepository {
  findById: (id: string) => Promise<FinancialDecision | null>;
  create: (input: FinancialDecision) => Promise<void>;
  delete: (id: string) => Promise<void>;
}