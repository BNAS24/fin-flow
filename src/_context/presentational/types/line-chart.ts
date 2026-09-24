import { DateString } from "@/_context/domain/value-objects/local-date";
import { DatasetElementType } from "@mui/x-charts/internals";

/**
 * Directly consumable by an MUI LineChart through `dataset`.
 */
export interface ProjectedBalanceChartDatum extends DatasetElementType<unknown> {
  date: DateString;
  projectedBalanceCents: number;
  // Helpful for custom tooltips and future chart series.
  incomeCents: number;
  outflowCents: number;
  netChangeCents: number;
  isDeficit: boolean;
  isBelowSafetyBuffer: boolean;
}

/**
 * UI-ready chart model.
 *
 * `dataset` is derived from BalanceProjection.days rather than being
 * independently stored state.
 */
export interface ProjectedBalanceLineChartData {
  dataset: ProjectedBalanceChartDatum[];
  series: [
    {
      id: "projected-balance";
      dataKey: "projectedBalanceCents";
      label: "Projected balance";
    },
  ];
  xAxis: [
    {
      id: "projection-date";
      dataKey: "date";
      scaleType: "point";
    },
  ];
}