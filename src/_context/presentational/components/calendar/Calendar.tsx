"use client";
import { PickerDayProps } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import { MarkersByDate } from "@/_shared/lib/types/util/core";
import { CalendarDay } from "@/_context/presentational/components/calendar/CalendarDay";

interface FinancialFlowCalendarProps {
  selectedDate: Dayjs | null;
  onSelectedDateChange: (date: Dayjs | null) => void;
  markersByDate: MarkersByDate;
}

export const FinancialFlowCalendar = ({
  selectedDate,
  onSelectedDateChange,
  markersByDate,
}: FinancialFlowCalendarProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={selectedDate}
        onChange={onSelectedDateChange}
        fixedWeekNumber={6}
        showDaysOutsideCurrentMonth
        slots={{
          day: CalendarDay,
        }}
        slotProps={{
          day: {
            markersByDate,
          } as unknown as PickerDayProps,
        }}
        views={["day", "month", "year"]}
      />
    </LocalizationProvider>
  );
};
