import {
    FinancialEntry
} from "@/_context/domain/entities/entry";

export interface FinancialEntryRepository {
  findById: (id: string) => Promise<FinancialEntry | null>;
  create: (input: FinancialEntry) => Promise<void>;
  delete: (id: string) => Promise<void>;
}