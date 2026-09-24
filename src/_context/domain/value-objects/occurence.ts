import { FinancialEntry, FinancialEntryType } from "../entities/entry";
import { DateString } from "./local-date";
import { Money } from "./money";

export interface FinancialEntryOccurrence {
  entryId: FinancialEntry["id"];
  entryType: FinancialEntryType;
  date: DateString;
  amount: Money; // positive integer cents
  tag?: FinancialEntry["tag"];
}

export type FinancialEntryOccurrences = FinancialEntryOccurrence[];
