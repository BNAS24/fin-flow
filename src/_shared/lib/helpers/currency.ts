import { Money } from "@/_context/cash-flow-forecasting/domain/value-objects/money";

export const formatCentsAsCurrency = (cents: Money["amount"] | null) => {
  if (cents == null) {
    return "";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
};
