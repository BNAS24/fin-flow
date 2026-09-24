import { DateString } from "./local-date";
import { Money } from "./money";

export interface DeficitDay {
    date: DateString;
    projectedBalance: Money;
    shortfallAmount: Money;
}