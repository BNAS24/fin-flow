"use client";
import { Card, CardContent } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { chartsTooltipClasses } from "@mui/x-charts";
import { LineChart, lineClasses } from "@mui/x-charts/LineChart";
import { LineChartMockDataset } from "@/_shared/presentational/data/test/core/mock-data";
import { formatCentsAsCurrency } from "@/_shared/lib/helpers/currency";
import { formatProjectionDate } from "@/_shared/lib/helpers/date-and-time";
import { Title } from "@/_shared/presentational/components/utility/Title";

const LINE_CHART_AREA_COLOR = "007652";
const LINE_CHART_CURVATURE = "monotoneX";

const X_AXIS_TICK_SPACING = 100;

const PALETTE_LIGHT_MODE_ERROR_MAIN = "#D73337";
const PALETTE_DARK_MODE_ERROR_MAIN = "#E64343";

const projectedBalances = LineChartMockDataset.map(
  ({ projectedBalance }) => projectedBalance,
);

const Y_AXIS_COLOR_MAP_MIN = Math.min(0, ...projectedBalances);
const Y_AXIS_COLOR_MAP_MAX = Math.max(0, ...projectedBalances);

export default function ProjectedBalanceChartV2() {
  const { mode } = useColorScheme();

  return (
    <Card
      variant="outlined"
      sx={{
        gridColumn: "1 / span 12",
        p: 2,
      }}
    >
      <CardContent>
        {/*Title*/}
        <Title
          title="Projected balance"
          titleProps={{
            variant: "h5",
            sx: {
              color: "secondary.contrastText",
            },
          }}
          subText="Rolling 30-day forecast from today"
          subTextProps={{
            variant: "body1",
            sx: {
              color: "text.secondary",
              mb: 2,
            },
          }}
        />

        {/*Line chart component */}
        <LineChart
          height={320}
          hideLegend
          dataset={LineChartMockDataset}
          series={[
            {
              id: "projected-balance",
              dataKey: "projectedBalance",
              label: "Projected balance:",
              curve: LINE_CHART_CURVATURE,
              area: true,
              showMark: false,
              valueFormatter: formatCentsAsCurrency,
            },
          ]}
          xAxis={[
            {
              id: "projection-date",
              dataKey: "date",
              scaleType: "point",
              tickSpacing: X_AXIS_TICK_SPACING,
              disableTicks: true,
              valueFormatter: formatProjectionDate,
            },
          ]}
          yAxis={[
            {
              id: "projected-balance-cents",
              colorMap: {
                type: "continuous",
                min: Y_AXIS_COLOR_MAP_MIN,
                max: Y_AXIS_COLOR_MAP_MAX,
                color: [
                  `#${LINE_CHART_AREA_COLOR}00`,
                  `#${LINE_CHART_AREA_COLOR}70`,
                ],
              },
              valueFormatter: formatCentsAsCurrency,
              tickNumber: 5,
              disableTicks: true,
              disableLine: true,
            },
          ]}
          grid={{ horizontal: true }}
          sx={{
            // Keep the fill; eliminate its closed-outline stroke.
            [`& .${lineClasses.area}`]: {
              stroke: "none",
            },
            // Adds top line of the line chart area
            [`& .${lineClasses.line}`]: {
              stroke: mode === "light" ? "#007652" : "#47BE8B",
              strokeWidth: 2,
            },
            // Adds a red dashed arary to the x-Axis line
            "& .MuiChartsAxis-directionX .MuiChartsAxis-line": {
              stroke:
                mode === "light"
                  ? PALETTE_LIGHT_MODE_ERROR_MAIN
                  : PALETTE_DARK_MODE_ERROR_MAIN,
              strokeDasharray: "4 4",
              strokeWidth: 2,
            },
            // Removes tools tips data identify mark
            [`& .${chartsTooltipClasses.mark}`]: {
              display: "none",
            },
            "& .MuiChartsGrid-horizontalLine": {
              stroke: "divider",
              strokeDasharray: "4 4",
              strokeWidth: 1,
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
