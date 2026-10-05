import { FinancialPlan } from "@/_context/cash-flow-forecasting/domain/entities/financial-plan";
import {
  FinancialPlanRepositoryCreateArgs,
  FinancialPlanRepositoryUpdateArgs,
} from "@/_context/cash-flow-forecasting/infrastructure/persistence/repositories/client/financial-plan";
import { createId } from "@/_shared/lib/helpers/createId";
import {
  CreateResult,
  DeleteResult,
  QueryResult,
  UpdateResult,
} from "@/_shared/lib/types/api/crud-response";

// Retriece financial plan object
export const findFinancialPlanById = (
  id: string, // The financial plan's record id
): QueryResult<FinancialPlan> => {
  // Find financial plan
  const financialPlan = window.localStorage.getItem(id);
 
  if (!financialPlan) return null;

  return JSON.parse(financialPlan) as FinancialPlan;
};

// Update financial plan object specified by id
export const updateFinancialPlan = ({
  id,
 update,
}: FinancialPlanRepositoryUpdateArgs): UpdateResult<FinancialPlan> => {
  const financialPlan = window.localStorage.getItem(id);

  if (!financialPlan) return null;

  const parsedData: FinancialPlan = JSON.parse(financialPlan);

  // Merge the new partial updates into the existing object
  const updatedData = { ...parsedData, ...update };

  // Transform object as a string for local storage
  const updateDataStringified = JSON.stringify(updatedData);

  // Update date object persisted in local storage
  window.localStorage.setItem(id, updateDataStringified);

  return updatedData;
};

// Create financial plan object
// Should only be used once for each browser or accoun
export const createFinancialPlan = ({
  id,
  financialPlan,
}: FinancialPlanRepositoryCreateArgs): CreateResult<FinancialPlan> => {
  // Create id if missing
  const financialPlanId = id ? id : createId();

  // Transform object as a string for local storage
  const inputStringified = JSON.stringify(financialPlan);

  // Update date object persisted in local storage
  window.localStorage.setItem(financialPlanId, inputStringified);

  return financialPlan;
};

// Delete financial account
// Should not be ever be used. It's here for extremelt irregular cases
export const deleteFinancialPlan = (id: string): DeleteResult<FinancialPlan> =>
  id ? null : id;
