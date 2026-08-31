import DatePickerInput from "@/_components/input/DatePicker";
import DynamicInputGroup from "@/_components/input/DynamicInputGroup";
import FormTextField from "@/_components/input/FormTextField";
import { Autocomplete, TextField } from "@mui/material";

/**
 * A mapping of string keys to React component types used for dynamic input rendering.
 *
 * This map allows dynamic selection and rendering of input components based on a string key.
 * The available components include:
 * - FormTextField
 * - Autocomplete
 * - DynamicInputGroup
 * - DatePickerInput
 *
 * @remarks
 * This is useful for forms or UIs that require dynamic input generation based on configuration or data.
 *
 * @example
 * ```tsx
 * const InputComponent = DynamicInputMap[inputType];
 * return <InputComponent {...props} />;
 * ```
 */
export const DynamicInputMap: Record<string, React.ElementType> = {
  FormTextField,
  Autocomplete,
  DynamicInputGroup,
  DatePickerInput,
} as const;

export const serverComponentMap: Record<string, React.ElementType> = {
  TextField,
  Autocomplete,
};
