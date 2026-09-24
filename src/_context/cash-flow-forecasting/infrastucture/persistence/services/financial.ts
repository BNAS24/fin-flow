import { FinancialPlan } from "@/_context/cash-flow-forecasting/domain/entities/financial-plan";
import {
  FinancialPlanRepositoryCreateArgs,
  FinancialPlanRepositoryUpdateArgs,
} from "@/_context/cash-flow-forecasting/infrastucture/persistence/repositories/financial-plan-repository";
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
  // Sanatize input

  // Find financial plan
  const financialPlan = window.localStorage.getItem(id);
 
  if (!financialPlan) return null;

  return JSON.parse(financialPlan) as FinancialPlan;
};

// Update financial plan object specified by id
export const updateFinancialPlan = ({
  id,
  updates,
}: FinancialPlanRepositoryUpdateArgs): UpdateResult<FinancialPlan> => {
  // Sanatize input

  const financialPlan = window.localStorage.getItem(id);

  if (!financialPlan) return null;

  const parsedData: FinancialPlan = JSON.parse(financialPlan);

  // Merge the new partial updates into the existing object
  const updatedData = { ...parsedData, ...updates };

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
  input,
}: FinancialPlanRepositoryCreateArgs): CreateResult<FinancialPlan> => {
  // Sanatize input and id
  // Actually create
  const sanitizedInput = input;

  // Create id if missing
  const financialPlanId = id ? id : createId();

  // Transform object as a string for local storage
  const inputStringified = JSON.stringify(sanitizedInput);

  // Update date object persisted in local storage
  window.localStorage.setItem(financialPlanId, inputStringified);

  return sanitizedInput;
};

// Delete financial account
// Should not be ever be used. It's here for extremelt irregular cases
export const deleteFinancialPlan = (id: string): DeleteResult<FinancialPlan> =>
  id ? null : id;
