import { Box, Card, CardContent, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { BalanceByDate, DateString, MarkersByDate } from "@/_types/util/core";

interface SelectedDayPanelProps {
  selectedDate: Dayjs | null;
  balanceByDate: BalanceByDate;
  markersByDate: MarkersByDate;
}

export const SelectedDayPanel = ({
  selectedDate,
  balanceByDate,
  markersByDate,
}: SelectedDayPanelProps) => {
  if (!selectedDate) return null;

  const dateKey = selectedDate.format("YYYY-MM-DD") as DateString;
  const projection = balanceByDate[dateKey];
  const markers = markersByDate[dateKey] ?? [];

  return (
    <Card
      variant="outlined"
      sx={{ mt: 2 }}
    >
      <CardContent>
        <Typography variant="h6">
          {selectedDate.format("dddd, MMMM D, YYYY")}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Projected balance
        </Typography>

        <Typography
          variant="h5"
          color={projection?.isDeficit ? "error.main" : "text.primary"}
        >
          {projection
            ? `$${(projection.projectedBalanceCents / 100).toLocaleString()}`
            : "No projection available"}
        </Typography>

        <Box sx={{ mt: 2 }}>
          {markers.length === 0 ? (
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Nothing scheduled on this day.
            </Typography>
          ) : (
            markers.map((marker) => (
              <Typography
                key={marker.id}
                variant="body2"
              >
                {marker.kind}
              </Typography>
            ))
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
