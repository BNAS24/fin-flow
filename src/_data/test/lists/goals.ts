export interface IGoal {
title:  string;
dueDate?: Date | string;
targetAmount: number;
accumalatedAmount: number;
}

export type TGoals = IGoal[];

export const goals: TGoals = [
    {
        title: "Emegency fund",
        targetAmount: 6000,
        accumalatedAmount: 2100,
        dueDate: "Apr 2027"
    },
    {
        title: "New Laptop",
        targetAmount: 1600,
        accumalatedAmount: 450,
        dueDate: "Nov 2026"
    },
    {
        title: "Trip fund",
        targetAmount: 2500,
        accumalatedAmount: 800,
    },
    {
        title: "Trip fund",
        targetAmount: 2500,
        accumalatedAmount: 800,
    },
    {
        title: "Trip fund",
        targetAmount: 2500,
        accumalatedAmount: 800,
    },
]