
export interface IDecision {
    name: string,
    riskLevel: "low" | "medium" | "high",
    amount: number;
    date: Date;
    note: string,
}

export type TDecisions = IDecision[]

export const decisions: TDecisions = [
    {
        name: "Trip to Dubai",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 12 2016" as unknown as Date,
        note: "I dont know"
    },
    {
        name: "New headphone",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 16 2016" as unknown as Date,
        note: "Nice to have -- upgrade"
    },
    {
        name: "Trip to Dubai",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 12 2016" as unknown as Date,
        note: "I dont know"
    },
    {
        name: "New headphone",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 16 2016" as unknown as Date,
        note: "Nice to have -- upgrade"
    },
    {
        name: "Trip to Dubai",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 12 2016" as unknown as Date,
        note: "I dont know"
    },
    {
        name: "New headphone",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 16 2016" as unknown as Date,
        note: "Nice to have -- upgrade"
    },
    {
        name: "Trip to Dubai",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 12 2016" as unknown as Date,
        note: "I dont know"
    },
    {
        name: "New headphone",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 16 2016" as unknown as Date,
        note: "Nice to have -- upgrade"
    },
    {
        name: "Trip to Dubai",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 12 2016" as unknown as Date,
        note: "I dont know"
    },
    {
        name: "New headphone",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 16 2016" as unknown as Date,
        note: "Nice to have -- upgrade"
    },
    {
        name: "Trip to Dubai",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 12 2016" as unknown as Date,
        note: "I dont know"
    },
    {
        name: "New headphone",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 16 2016" as unknown as Date,
        note: "Nice to have -- upgrade"
    },
    {
        name: "Trip to Dubai",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 12 2016" as unknown as Date,
        note: "I dont know"
    },
    {
        name: "New headphone",
        riskLevel: "low",
        amount: 3000,
        date: "Aug 16 2016" as unknown as Date,
        note: "Nice to have -- upgrade"
    },
]