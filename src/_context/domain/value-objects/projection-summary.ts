import { Money } from "./money";

export interface DayProjectionSummary {
  projectedBalance: Money;
  income: Money;
  outflow: Money;
  netChange: Money;
  isDeficit: boolean;
  isBelowSafetyBuffer: boolean;
}

const create = (cents: number): Money => {
  if (!Number.isSafeInteger(cents)) {
    throw new Error("Money must be represented as safe integer cents.");
  }

  return { cents, currency: "USD" };
};

const positive = (cents: number): Money => {
  if (cents <= 0) {
    throw new Error("This amount must be greater than zero.");
  }

  return create(cents);
};

const add = (left: Money, right: Money): Money => {
  assertSameCurrency(left, right);
  return create(left.cents + right.cents);
};

const subtract = (left: Money, right: Money): Money => {
  assertSameCurrency(left, right);
  return create(left.cents - right.cents);
};

const assertSameCurrency = (left: Money, right: Money): void => {
  if (left.currency !== right.currency) {
    throw new Error("Cannot calculate across currencies.");
  }
};

export const money = {
  create,
  positive,
  add,
  subtract,
} as const;