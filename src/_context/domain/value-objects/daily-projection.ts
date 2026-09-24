import { DateString } from "./local-date";
import { Money } from "./money";
import { FinancialEntryOccurrences } from "./occurence";

export interface DailyBalanceProjection {
  date: DateString;
  income: Money;
  outflow: Money;
  netChanges: Money;
  projectedBalance: Money;
  occurences: FinancialEntryOccurrences;
}
