import {
  TCashFlowFrequency,
  TCashFlowType,
  TFinanceCategory,
  TIncomeReliability,
} from "@/_shared/lib/types/util/finance-essentials";

export interface IIncomeItem {
  id: number;
  name: string;
  type: TCashFlowType;
  amount: number;
  category?: TFinanceCategory;
  cashFlowFrequency: TCashFlowFrequency;
  incomeReliability: TIncomeReliability;
  date?: string;
}

export type TIncome = IIncomeItem[];

export interface IFinancesTabs {
  id: number;
  label: string;
  content: TIncome;
}

export type TFinancesTabs = IFinancesTabs[];

export const financesTabs: TFinancesTabs = [
  {
    id: 1,
    label: "Income",
    content: [
      {
        id: 1,
        name: "Paycheck",
        type: "Income",
        amount: 1850,
        category: "Salary",
        cashFlowFrequency: "One-time",
        incomeReliability: "High",
        date: "Apr 2027",
      },
      {
        id: 2,
        name: "Freelance gig",
        type: "Income",
        amount: 5600,
        category: "Side Income",
        cashFlowFrequency: "Every 2 weeks",
        incomeReliability: "Low",
        date: "Apr 2027",
      },
      {
        id: 3,
        name: "Lorum ipsum",
        type: "Income",
        amount: 3000,
        category: "Utilities",
        cashFlowFrequency: "Yearly",
        incomeReliability: "High",
        date: "Apr 2026",
      },
      {
        id: 4,
        name: "Lorum ipsum",
        type: "Income",
        amount: 100,
        category: "Lifestyle",
        cashFlowFrequency: "Weekly",
        incomeReliability: "Medium",
        date: "",
      },
    ],
  },
  {
    id: 2,
    label: "Expense",
    content: [],
  },
  {
    id: 3,
    label: "Savings",
    content: [],
  },
  {
    id: 4,
    label: "Investment",
    content: [],
  },
];
