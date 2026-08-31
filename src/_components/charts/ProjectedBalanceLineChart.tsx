"use client";
import { Card, CardContent } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { chartsTooltipClasses } from "@mui/x-charts";
import { LineChart, lineClasses } from "@mui/x-charts/LineChart";
import { Title } from "@/_components/utility/Title";

// These value WILL be dynamic and based on real time
export const DATES = [
  "Aug 6",
  "Aug 9",
  "Aug 12",
  "Aug 15",
  "Aug 18",
  "Aug 21",
  "Aug 23",
  "Aug 24",
  "Aug 27",
  "Aug 30",
  "Sep 2",
  "Sep 5",
];

// These value WILL be dynamic and based on real time
const BALANCES = [
  2450, 4200, 4150, 3800, 3700, 3650, 5762, 5750, 5720, 5750, 4200, 4050,
];

const LINE_CHART_AREA_COLOR = "007652";
const LINE_CHART_CURVATURE = "monotoneX";

const Y_AXIS_COLOR_MAP_MAX = 6000;
const Y_AXIS_TICK_SPACING = 100;

const X_AXIS_TICK_SPACING = 100;

const PALETTE_LIGHT_MODE_ERROR_MAIN = "#D73337";
const PALETTE_DARK_MODE_ERROR_MAIN = "#E64343";

const SERIES_VALUE_FORMATTER = (value: number | null) =>
  value === null ? "" : `$${value.toLocaleString()}`;

export default function ProjectedBalanceChart() {
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
          series={[
            {
              id: "balance",
              label: "Projected balance:",
              curve: LINE_CHART_CURVATURE,
              data: BALANCES,
              area: true,
              showMark: false,
              valueFormatter: SERIES_VALUE_FORMATTER,
            },
          ]}
          grid={{ horizontal: true }}
          xAxis={[
            {
              data: DATES,
              scaleType: "point",
              tickSpacing: X_AXIS_TICK_SPACING,
              disableTicks: true,
            },
          ]}
          yAxis={[
            {
              colorMap: {
                type: "continuous",
                min: 0,
                max: Y_AXIS_COLOR_MAP_MAX,
                color: [
                  `#${LINE_CHART_AREA_COLOR}00`,
                  `#${LINE_CHART_AREA_COLOR}70`,
                ],
              },
              max: 6000,
              valueFormatter: (value: number) => `$${value / 1000}K`,
              disableTicks: true,
              disableLine: true,
              tickSpacing: Y_AXIS_TICK_SPACING,
            },
          ]}
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
