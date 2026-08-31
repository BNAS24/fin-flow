import {
    BalanceByDate,
    CalendarMarker,
    CalendarMarkerKind,
    FinancialDecision,
    FinancialGoal,
    MarkersByDate,
    ProjectedBalanceChartDatum,
} from "@/_types/util/core";

// Calendar helpers
export const createMarkersByDate = (
  projectionDays: readonly ProjectedBalanceChartDatum[],
): MarkersByDate => {
  const markersByDate: MarkersByDate = {};

  for (const day of projectionDays) {
    const markers: CalendarMarker[] = [];

    if (day.incomeCents > 0) {
      markers.push({
        id: `projection-income-${day.date}`,
        kind: "income",
      });
    }

    if (day.outflowCents > 0) {
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
      projectedBalanceCents: day.projectedBalanceCents,
      incomeCents: day.incomeCents,
      outflowCents: day.outflowCents,
      netChangeCents: day.netChangeCents,
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