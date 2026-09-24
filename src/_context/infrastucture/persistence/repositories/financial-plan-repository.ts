import { FinancialPlan } from "@/_context/domain/entities/financial-plan";
import { createFinancialPlan, deleteFinancialPlan, findFinancialPlanById, updateFinancialPlan } from "../services/financial";
import { CreateResult, DeleteResult, QueryResult, UpdateResult } from "@/_shared/lib/types/api/crud-response";

export interface FinancialPlanRepositoryUpdateArgs {
  id: string; // The financial plan's record id
  updates: Partial<FinancialPlan> // Update object
}

export interface FinancialPlanRepositoryCreateArgs {
  id?: string;
  input: FinancialPlan;
}

export interface FinancialPlanRepository {
  findById: (id: string) => QueryResult<FinancialPlan>;
  create?: (args: FinancialPlanRepositoryCreateArgs) => CreateResult<FinancialPlan>;
  update: (args: FinancialPlanRepositoryUpdateArgs) => UpdateResult<FinancialPlan>;
  delete?: (id: string) => DeleteResult<FinancialPlan>;
}

export const financialPlan: FinancialPlanRepository = {
  findById: findFinancialPlanById,
  update: updateFinancialPlan,
  create: createFinancialPlan,
  delete: deleteFinancialPlan
};
