import { DateString } from "@/_context/cash-flow-forecasting/domain/value-objects/local-date";
import { DatasetElementType } from "@mui/x-charts/internals";
import { Money } from "../../domain/value-objects/money";

/**
 * Directly consumable by an MUI LineChart through `dataset`.
 */
export interface ProjectedBalanceChartDatum extends DatasetElementType<unknown> {
  date: DateString;
  projectedBalance: Money["amount"];
  // Helpful for custom tooltips and future chart series.
  income: Money["amount"];
  outflow: Money["amount"];
  netChange: Money["amount"];
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