export interface IPaymentPreiview {
  title: string;
  amount: string;
  text: string;
  textColor: string;
}

export type TPaymentPreviews = IPaymentPreiview[];

export const paymentPreview: TPaymentPreviews = [
  {
    title: "Current balance",
    amount: "$2,450",
    text: "Cash on hand today",
    textColor: "primary.main"
  },
  {
    title: "Available to spend",
    amount: "$2,272",
    text: "Safe to spend now over n days",
    textColor: "primary.light",
  },
  {
    title: "Net • n days",
    amount: "+1,482",
    text: "$4,300 in • $2,818 out",
    textColor: "primary.light",
  },
  {
    title: "Lowest Projected",
    amount: "$2,272",
    text: "Around Aug 8",
    textColor: "secondary.contrastText",
  },
];
