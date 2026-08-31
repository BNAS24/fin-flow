import { Badge, Box } from "@mui/material";
import { PickerDay, PickerDayProps } from "@mui/x-date-pickers";
import { CALENDAR_MARKER_KINDS, DateString, MarkersByDate } from "@/_types/util/core";
import { markerColorByKind } from "../../_helpers/calendar";

interface ICalendarDay extends PickerDayProps {
  markersByDate?: MarkersByDate;
}

export const CalendarDay = ({
  day,
  outsideCurrentMonth,
  markersByDate,
  ...pickerDayProps
}: ICalendarDay) => {
  const dateKey = day.format("YYYY-MM-DD") as DateString;

  const markers = outsideCurrentMonth
    ? []
    : (markersByDate?.[dateKey] ?? []);

  const visibleKinds = CALENDAR_MARKER_KINDS.filter((kind) =>
    markers.some((marker) => marker.kind === kind),
  );

  const markerCount = markers.length;
  
  return (
    <Badge
      overlap="circular"
      badgeContent={markerCount > 1 ? markerCount : undefined}
      color="primary"
      invisible={markerCount <= 1}
      sx={{
        "& .MuiBadge-badge": {
          minWidth: 16,
          height: 16,
          px: 0.5,
          fontSize: "0.625rem",
          fontWeight: 700,
          right: 1,
          top: 4,
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <PickerDay
          {...pickerDayProps}
          day={day}
          outsideCurrentMonth={outsideCurrentMonth}
        />

        {visibleKinds.length > 0 && (
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              left: "50%",
              bottom: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.375,
              transform: "translateX(-50%)",
              pointerEvents: "none",
            }}
          >
            {visibleKinds.map((kind) => (
              <Box
                key={kind}
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  bgcolor: markerColorByKind[kind],
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Badge>
  );
};
