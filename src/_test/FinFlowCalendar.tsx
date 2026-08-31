"use client";

import { useMemo, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getMonthGridDates = (
  visibleMonth: Temporal.PlainYearMonth,
): Temporal.PlainDate[] => {
  const firstDayOfMonth = visibleMonth.toPlainDate({ day: 1 });
  const daysFromSunday = firstDayOfMonth.dayOfWeek % 7;

  return Array.from({ length: 42 }, (_, index) =>
    firstDayOfMonth.subtract({ days: daysFromSunday }).add({ days: index }),
  );
};

const formatMonthYear = (month: Temporal.PlainYearMonth) =>
  month.toLocaleString("en-US", {
    calendar: month.calendarId,
    month: "long",
    year: "numeric",
  });

export function FinFlowCalendar() {
  const [today] = useState(() => Temporal.Now.plainDateISO());
  const [visibleMonth, setVisibleMonth] = useState(() =>
    today.toPlainYearMonth(),
  );
  const [selectedDate, setSelectedDate] = useState(() => today);

  const days = useMemo(() => getMonthGridDates(visibleMonth), [visibleMonth]);

  const changeMonth = (months: number) => {
    setVisibleMonth((current) => current.add({ months }));
  };

  const showToday = () => {
    setVisibleMonth(today.toPlainYearMonth());
    setSelectedDate(today);
  };

  return (
    <Paper
      component="section"
      variant="outlined"
      aria-labelledby="calendar-heading"
      sx={{ width: 1, overflow: "hidden", borderRadius: 3 }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          alignItems: { sm: "center" },
          justifyContent: "space-between",
          p: 2,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Box>
          <Typography
            id="calendar-heading"
            component="h2"
            variant="h5"
          >
            Calendar
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {formatMonthYear(visibleMonth)}
          </Typography>
        </Box>

        <ButtonGroup
          size="small"
          variant="outlined"
          aria-label="Calendar navigation"
        >
          <Tooltip title="Previous month">
            <IconButton
              aria-label="Show previous month"
              onClick={() => changeMonth(-1)}
            >
              <ChevronLeftIcon />
            </IconButton>
          </Tooltip>

          <Button
            variant="text"
            onClick={showToday}
          >
            Today
          </Button>

          <Tooltip title="Next month">
            <IconButton
              aria-label="Show next month"
              onClick={() => changeMonth(1)}
            >
              <ChevronRightIcon />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
      </Stack>

      <Box
        role="grid"
        aria-label={`${formatMonthYear(visibleMonth)} calendar`}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
        }}
      >
        {WEEKDAYS.map((weekday) => (
          <Box
            key={weekday}
            role="columnheader"
            sx={{
              py: 1,
              px: 0.5,
              textAlign: "center",
              bgcolor: "action.hover",
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
            >
              {weekday}
            </Typography>
          </Box>
        ))}

        {days.map((date) => {
          const isCurrentMonth =
            date.year === visibleMonth.year &&
            date.month === visibleMonth.month;

          const isToday = date.equals(today);
          const isSelected = date.equals(selectedDate);

          return (
            <Button
              key={date.toString()}
              role="gridcell"
              variant="text"
              onClick={() => setSelectedDate(date)}
              aria-current={isToday ? "date" : undefined}
              sx={[
                {
                  minWidth: 0,
                  minHeight: { xs: 52, sm: 96, md: 112 },
                  p: 1,
                  borderRadius: 0,
                  borderRight: 1,
                  borderBottom: 1,
                  borderColor: "divider",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  textAlign: "left",
                  color: isCurrentMonth ? "text.primary" : "text.disabled",
                  "&:focus-visible": {
                    outline: "3px solid",
                    outlineColor: "primary.main",
                    outlineOffset: -3,
                    zIndex: 1,
                  },
                },
                isSelected && {
                  bgcolor: "action.selected",
                  "&:hover": { bgcolor: "action.selected" },
                },
                !isSelected && {
                  "&:hover": { bgcolor: "action.hover" },
                },
              ]}
            >
              <Box
                component="span"
                sx={[
                  {
                    display: "grid",
                    placeItems: "center",
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                  },
                  isToday && {
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                  },
                  isSelected &&
                    !isToday && {
                      outline: "1px solid",
                      outlineColor: "primary.main",
                    },
                ]}
              >
                <Typography
                  component="span"
                  variant="body2"
                >
                  {date.day}
                </Typography>
              </Box>
            </Button>
          );
        })}
      </Box>
    </Paper>
  );
}
