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