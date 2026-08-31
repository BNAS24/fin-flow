export interface IFinancePreview {
  title: string;
  amount: number;
  cashflow: "outgoing" | "incoming";
}

export type TFinancesPreview = IFinancePreview[];

export const financesPreview: TFinancesPreview = [
    {
        title: "Income • monthly",
        amount: 4603,
        cashflow: "incoming",
    },
    {
        title: "Expense • monthly",
        amount: 2477,
        cashflow: "outgoing",
    },
    {
        title: "Savings • monthly",
        amount: 150,
        cashflow: "outgoing",
    },
    {
        title: "Investment • monthly",
        amount: 100,
        cashflow: "outgoing",
    },
];
