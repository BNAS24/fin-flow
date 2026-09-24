import { DateString } from "./local-date";

export type ForecastHorizon = 30 | 60 | 90;

export interface ForecastWindow {
  startDate: DateString;
  horizon: ForecastHorizon;
  endDate: DateString;
}
