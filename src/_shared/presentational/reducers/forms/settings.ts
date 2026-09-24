export interface ISettingsForm {
  currentCashBalance: number;
  safetyBuffer: number;
}

export const settingsForm: ISettingsForm = {
  currentCashBalance: 0,
  safetyBuffer: 0,
};

export type SettingsFormAction =
  | { type: "update-current-cash-balance"; payload: number }
  | { type: "update-safety-buffer"; payload: number };

export function settingsFormReducer(
  state: ISettingsForm,
  action: SettingsFormAction,
): ISettingsForm {
  switch (action.type) {
    case "update-current-cash-balance": {
      return {
        ...state,
        currentCashBalance: action.payload,
      };
    }
    case "update-safety-buffer": {
      return {
        ...state,
        safetyBuffer: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
