import {
    FinancialEntry
} from "@/_context/cash-flow-forecasting/domain/entities/entry";

export interface FinancialEntryRepository {
  findById: (id: string) => Promise<FinancialEntry | null>;
  create: (input: FinancialEntry) => Promise<void>;
  delete: (id: string) => Promise<void>;
}