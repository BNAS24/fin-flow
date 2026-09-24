import { DayProjectionSummary } from "@/_context/domain/value-objects/projection-summary";
import { PickerDayProps } from "@mui/x-date-pickers/PickerDay";

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
