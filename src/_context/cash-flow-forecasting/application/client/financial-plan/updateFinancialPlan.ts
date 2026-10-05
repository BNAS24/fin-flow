import { FinancialPlan } from "@/_context/cash-flow-forecasting/domain/entities/financial-plan";
import {
  financialPlanRepository,
  FinancialPlanRepositoryUpdateArgs,
} from "@/_context/cash-flow-forecasting/infrastructure/persistence/repositories/client/financial-plan";

export const updateFinancialPlan = (
  input: FinancialPlanRepositoryUpdateArgs,
): FinancialPlan => {
  // Validate input

  // Persist update
  const updatedFinancialPlan = financialPlanRepository.update({
    id: input.id,
    update: input.update,
  });

  if (updatedFinancialPlan === null) throw Error("Something went wrong with updating Financial Plan");

  return updatedFinancialPlan; 
};
