import { FinancialDecision } from "@/_context/cash-flow-forecasting/domain/entities/decision";
import { FinancialGoal } from "@/_context/cash-flow-forecasting/domain/entities/goal";
import { BalanceByDate, CalendarMarker, CalendarMarkerKind, MarkersByDate } from "@/_context/cash-flow-forecasting/presentational/types/calendar";
import { ProjectedBalanceChartDatum } from "@/_context/cash-flow-forecasting/presentational/types/line-chart";

// Calendar helpers
export const createMarkersByDate = (
  projectionDays: readonly ProjectedBalanceChartDatum[],
): MarkersByDate => {
  const markersByDate: MarkersByDate = {};

  for (const day of projectionDays) {
    const markers: CalendarMarker[] = [];

    if (day.income > 0) {
      markers.push({
        id: `projection-income-${day.date}`,
        kind: "income",
      });
    }

    if (day.outflow > 0) {
      markers.push({
        id: `projection-expense-${day.date}`,
        kind: "expense",
      });
    }

    if (markers.length > 0) {
      markersByDate[day.date] = markers;
    }
  }

  return markersByDate;
};

export const createBalanceByDate = (
  projectionDays: readonly ProjectedBalanceChartDatum[],
): BalanceByDate => {
  const balanceByDate: BalanceByDate = {};

  for (const day of projectionDays) {
    balanceByDate[day.date] = {
      projectedBalance: day.projectedBalance,
      income: day.income,
      outflow: day.outflow,
      netChange: day.netChange,
      isDeficit: day.isDeficit,
      isBelowSafetyBuffer: day.isBelowSafetyBuffer,
    };
  }

  return balanceByDate;
};

export const createDecisionAndGoalMarkers = (
  decisions: readonly FinancialDecision[],
  goals: readonly FinancialGoal[],
): MarkersByDate => {
  const markersByDate: MarkersByDate = {};

  for (const decision of decisions) {
    const markers = markersByDate[decision.date] ?? [];
    markers.push({ id: decision.id, kind: "decision" });
    markersByDate[decision.date] = markers;
  }

  for (const goal of goals) {
    if (!goal.deadline) continue;
    const markers = markersByDate[goal.deadline] ?? [];
    markers.push({ id: goal.id, kind: "goal" });
    markersByDate[goal.deadline] = markers;
  }

  return markersByDate;
};

export const mergeMarkersByDate = (
  ...sources: readonly MarkersByDate[]
): MarkersByDate => {
  const merged: MarkersByDate = {};

  for (const source of sources) {
    for (const [date, markers] of Object.entries(source)) {
      merged[date] = [...(merged[date] ?? []), ...markers];
    }
  }

  return merged;
};

export const markerColorByKind: Record<CalendarMarkerKind, string> = {
  income: "success.main",
  expense: "error.main",
  decision: "warning.main",
  goal: "info.main",
};