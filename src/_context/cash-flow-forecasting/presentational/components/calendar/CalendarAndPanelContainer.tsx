"use client";
import { FinancialFlowCalendar } from "@/_context/cash-flow-forecasting/presentational/components/calendar/Calendar";
import { SelectedDayPanel } from "@/_context/cash-flow-forecasting/presentational/components/calendar/SelectedDayPanel";
import {
  FinancialDecisionsMockData,
  FinancialGoalsMockData,
  LineChartMockDataset,
} from "@/_shared/presentational/data/test/core/mock-data";
import {
  createBalanceByDate,
  createDecisionAndGoalMarkers,
  createMarkersByDate,
  mergeMarkersByDate,
} from "@/_shared/lib/helpers/calendar";
import { Card } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useMemo, useState } from "react";

export const CalendarAndPanelContainer = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  const markersByDate = useMemo(
    () =>
      mergeMarkersByDate(
        createMarkersByDate(LineChartMockDataset),
        createDecisionAndGoalMarkers(
          FinancialDecisionsMockData,
          FinancialGoalsMockData,
        ),
      ),
    [],
  );

  const balanceByDate = useMemo(
    () => createBalanceByDate(LineChartMockDataset),
    [],
  );

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          gridColumn: "1 / span 7",
          borderRadius: 3,
          p: 2,
        }}
      >
        <FinancialFlowCalendar
          selectedDate={selectedDate}
          onSelectedDateChange={setSelectedDate}
          markersByDate={markersByDate}
        />
      </Card>

      <Card
        variant="outlined"
        sx={{
          gridColumn: "8 / span 5",
          borderRadius: 3,
          p: 2,
        }}
      >
        <SelectedDayPanel
          selectedDate={selectedDate}
          balanceByDate={balanceByDate}
          markersByDate={markersByDate}
        />
      </Card>
    </>
  );
};
