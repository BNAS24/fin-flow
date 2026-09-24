export interface IUpcomingPayments {
    title: string;
    date: Date | string; // Possibly will be changed to one strict format for formality
    amount: number;
    cashFlow: "outgoing" | "incoming"
    category: "Debt" | "Food" | "Salary" | "Investing" | "Food" | "Utilities" 
}

export type TUpcomingPayments = IUpcomingPayments[];

export const upcomingPayments: TUpcomingPayments = [
    {
        title: "Car payment",
        date: "Wed, Aug 12",
        amount: 320,
        cashFlow: "outgoing",
        category: "Debt",
    },
    {
        title: "Grocceries",
        date: "Wed, Aug 12",
        amount: 320,
        cashFlow: "outgoing",
        category: "Food",
    },
    {
        title: "Paycheck",
        date: "Sat, Aug 15",
        amount: 320,
        cashFlow: "incoming",
        category: "Salary"
    },
    {
        title: "Phone + internet",
        date: "Thu, Aug 20",
        amount: 320,
        cashFlow: "outgoing",
        category: "Utilities"
    },
    {
        title: "Paycheck",
        date: "Fri, Aug 28",
        amount: 320,
        cashFlow: "incoming",
        category: "Salary",
    },
]