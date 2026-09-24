export interface IFinancialDecision {
  itemName: string;
  itemAmount: number | undefined;
  itemSpendingDate: Date | null;
  itemNote: string;
}

export const financialDecisionForm: IFinancialDecision = {
  itemName: "",
  itemAmount: undefined,
  itemSpendingDate: null,
  itemNote: "",
};

export type FinancialDecisionAction =
  | { type: "update-item-name"; payload: string }
  | { type: "update-item-amount"; payload: number }
  | { type: "item-spending-date"; payload: Date }
  | { type: "update-item-note"; payload: string };

export function financialDecisionReducer(
  state: IFinancialDecision,
  action: FinancialDecisionAction,
): IFinancialDecision {
  switch (action.type) {
    case "update-item-name": {
      return {
        ...state,
        itemName: action.payload,
      };
    }
    case "update-item-amount": {
      return {
        ...state,
        itemAmount: action.payload,
      };
    }
    case "item-spending-date": {
      return {
        ...state,
        itemSpendingDate: action.payload,
      };
    }
    case "update-item-note": {
      return {
        ...state,
        itemNote: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
