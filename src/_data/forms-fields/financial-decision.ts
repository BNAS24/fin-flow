import { DynamicFormFields } from "@/_types/forms/DynamicInputTypes";

export const financialDecisionFields: DynamicFormFields = [
  {
    id: "item-name",
    type: "FormTextField",
    actionType: "update-item-name",
    props: {
      name: "itemName",
      label: "What is it?",
      placeholder: "e.g. New headphones",
      required: true,
      type: "text",
      fullWidth: true,
      size: "small",
    },
  },
  {
    id: "item-amount",
    type: "FormTextField",
    actionType: "update-item-amount",
    props: {
      name: "itemAmount",
      label: "Amount",
      placeholder: "0",
      required: true,
      type: "number",
      fullWidth: false,
      size: "small",
    },
  },
  {
    id: "item-spending-date",
    type: "DatePickerInput",
    actionType: "update-item-spending-date",
    props: {
      name: "itemSpendingDate",
      label: "When",
      slotProps: {
        textField: {
          fullWidth: true,
          size: "small",
          slotProps: {
            input: {
              sx: { borderRadius: 4},
            },
          },
        },
      },
    },
  },
  {
    id: "item-note",
    type: "FormTextField",
    actionType: "update-item-note",
    props: {
      name: "itemNote",
      label: "Note (optional)",
      placeholder: "Why are you considering this?",
      size: "small",
      multiline: true,
      minRows: 4,
    },
  },
];
