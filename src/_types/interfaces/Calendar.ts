type EntryType = "income" | "expense" | "savings" | "investment";

export type CalendarOccurrence = {
  id: string;
  entryId: string;
  date: string; // "YYYY-MM-DD"
  name: string;
  amount: number; // Stored as a positive value
  type: EntryType;
};

export type DailyProjection = {
  date: string; // "YYYY-MM-DD"
  income: number;
  outflow: number;
  net: number;
  endOfDayBalance: number;
};
