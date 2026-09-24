import { DynamicInputGroupProps } from "@/_shared/presentational/components/input/DynamicInputGroup";
import type { AutocompleteProps, TextFieldProps } from "@mui/material";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
export type BaseField<FieldType extends string, ComponentProps> = {
  id: string;
  type: FieldType;
  props: ComponentProps;
  actionType: string;
  children?: React.ReactNode;
};

export type Field =
  | BaseField<"FormTextField", TextFieldProps>
  | BaseField<"DatePickerInput", DatePickerProps>
  | BaseField<"Autocomplete", AutocompleteProps<any, any, any, any>>
  | BaseField<"DynamicInputGroup", DynamicInputGroupProps>;


export type DynamicFormFields = Field[]