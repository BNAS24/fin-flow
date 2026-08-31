import { DynamicFormFields } from "@/_types/forms/DynamicInputTypes";

export const settingsFormFields: DynamicFormFields = [
  {
    id: "current-cash-balance-field",
    type: "FormTextField",
    actionType: "update-current-cash-balance",
    props: {
      name: "currentCashBalance",
      label: "Current cash balance",
      required: true,
      type: "number",
      fullWidth: true,
      size: "small",
    },
  },
  {
    id: "safety-buffer-field",
    type: "FormTextField",
    actionType: "update-safety-buffer",
    props: {
      name: "safetyBuffer",
      label: "Safety buffer",
      required: true,
      type: "number",
      fullWidth: true,
      size: "small",
      helperText:
        "Decisions that drop your lowest projected balance below this are flagged medium risk.",
      slotProps: {
        formHelperText: {
          sx: {
            mx: 0,
          },
        },
      },
    },
  },
];
