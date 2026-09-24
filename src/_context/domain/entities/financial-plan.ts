import { ForecastHorizon } from "../value-objects/forecast";
import { Money } from "../value-objects/money";

export interface FinancialPlan {
  startingBalance: Money; // User's current cash balance
  safetyBuffer: Money; // Minimum acceptable balance floor
  horizonDays: ForecastHorizon; // Forecast window length
}