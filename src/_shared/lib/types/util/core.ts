import { DatasetElementType } from "@mui/x-charts/internals";
import { PickerDayProps } from "@mui/x-date-pickers/PickerDay";

// Domain: Application-wide configuration (persisted)
export type HorizonDays = 30 | 60 | 90;

export interface AppConfig {
  startingBalance: number; // User's current cash balance
  safetyBuffer: number; // Minimum acceptable balance floor
  horizonDays: HorizonDays; // Forecast window length
}

export interface DisplayPreferences {
  systemTheme: "light" | "dark";
}

// Decisions
export type FinancialEntryType = "income" | "expense" | "savings" | "investment";

export type FrequencyType =
  | "one-time"
  | "daily"
  | "weekly"
  | "bi-weekly"
  | "monthly"
  | "yearly";

export type Reliability = "low" | "medium" | "high";

export type SeverityLevel = "low" | "medium" | "high";

export interface FinancialEntry {
  id: string;
  type: FinancialEntryType;
  amount: number; // in cents
  tag?: string[];
  frequency: FrequencyType;
  initialEventDate: string;
  reliability?: Reliability;
  severity?: SeverityLevel;
  createdAt: string;
  updatedAt: string;
}

export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  savedAmount: number;
  deadline?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FinancialDecision {
  id: string;
  name: string;
  amount: number;
  date: string;
  note?: string;
  riskLevel: string;
  createdAt: string;
  updatedAt: string;
  committed: boolean;
}

export type FinancialEntries = FinancialEntry[];
export type FinancialGoals = FinancialGoal[];
export type FinancialDecisions = FinancialDecision[];

export interface FinancialEntryOccurrence {
  entryId: FinancialEntry["id"];
  entryType: FinancialEntryType;
  date: DateString;
  amount: number; // positive integer cents
  tag?: FinancialEntry["tag"];
}

export type FinancialEntryOccurrences = FinancialEntryOccurrence[];

/**
 * Directly consumable by an MUI LineChart through `dataset`.
 */
export interface ProjectedBalanceChartDatum extends DatasetElementType<unknown> {
  date: DateString;
  projectedBalanceCents: number;
  // Helpful for custom tooltips and future chart series.
  incomeCents: number;
  outflowCents: number;
  netChangeCents: number;
  isDeficit: boolean;
  isBelowSafetyBuffer: boolean;
}

/**
 * UI-ready chart model.
 *
 * `dataset` is derived from BalanceProjection.days rather than being
 * independently stored state.
 */
export interface ProjectedBalanceLineChartData {
  dataset: ProjectedBalanceChartDatum[];
  series: [
    {
      id: "projected-balance";
      dataKey: "projectedBalanceCents";
      label: "Projected balance";
    },
  ];
  xAxis: [
    {
      id: "projection-date";
      dataKey: "date";
      scaleType: "point";
    },
  ];
}


// Projections
export interface DailyBalanceProjection {
  date: DateString;
  incomeCents: number;
  outflowCents: number;
  netChangesCents: number;
  projectedBalanceCents: number;
  occurences: FinancialEntryOccurrences;
}

export interface BalanceProjection {
  startDate: DateString;
  horizonDays: HorizonDays;
  openingBalanceCents: number;
  days: DailyBalanceProjection[];
}

// Calendar
type TwoDigits = `${number}${number}`;
type FourDigits = `${number}${number}${number}${number}`;

/**
 * Represents a date formatted as YYYY-MM-DD.
 *
 * @example
 * const date: DateString = "2026-08-25";
 */
export type DateString = `${FourDigits}-${TwoDigits}-${TwoDigits}`; //YYYY-MM-DD

export interface DayProjectionSummary {
  projectedBalanceCents: number;
  incomeCents: number;
  outflowCents: number;
  netChangeCents: number;
  isDeficit: boolean;
  isBelowSafetyBuffer: boolean;
}

export const CALENDAR_MARKER_KINDS = [
  "income",
  "expense",
  "decision",
  "goal",
] as const;

export type CalendarMarkerKind = (typeof CALENDAR_MARKER_KINDS)[number];

export type CalendarMarker = {
  id: string;
  kind: CalendarMarkerKind;
};

export type CalendarDateKey = string;

export type MarkersByDate = Record<string, CalendarMarker[]>;
export type BalanceByDate = Record<string, DayProjectionSummary>;

export type CalendarDayProps = PickerDayProps & {
  markersByDate: MarkersByDate;
};

export type DateCalendarProps = {
  markersByDate: MarkersByDate;
};
