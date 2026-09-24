import { Money } from "../value-objects/money";

export type Reliability = "low" | "medium" | "high";

export type SeverityLevel = "low" | "medium" | "high";

export type FinancialEntryType =
  | "income"
  | "expense"
  | "savings"
  | "investment";

export type FrequencyType =
  | "one-time"
  | "daily"
  | "weekly"
  | "bi-weekly"
  | "monthly"
  | "yearly";

export interface FinancialEntry {
  id: string;
  type: FinancialEntryType;
  amount: Money; // in cents
  tag?: string[];
  frequency: FrequencyType;
  initialEventDate: string;
  reliability?: Reliability;
  severity?: SeverityLevel;
  createdAt: string;
  updatedAt: string;
}

export type FinancialEntries = FinancialEntry[];
