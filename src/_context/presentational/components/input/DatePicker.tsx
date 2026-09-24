import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import { Dispatch } from "react";
import { SvgIcon } from "@mui/material";
import CalendarIcon from "@/_shared/presentational/components/icons/custom/CalendarIcon";

export type IDatePickerInput = DatePickerProps & {
  dispatch?: Dispatch<any>;
  state?: any;
  actionType: string;
  fieldError?: string;
};

export default function DatePickerInput({
  dispatch,
  state,
  actionType,
  fieldError,
  ...props
}: IDatePickerInput) {
  const handleChange = (value: Dayjs | null) => {
    if (dispatch) {
      dispatch({ type: actionType, payload: value?.format("YYYY-MM-DD") });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...props}
        onChange={(value) => handleChange(value)}
        slotProps={{
          textField: {
            ...(typeof props.slotProps?.textField === "object"
              ? props.slotProps.textField
              : {}),
            helperText:
              fieldError ??
              (typeof props.slotProps?.textField === "object"
                ? props.slotProps.textField.helperText
                : undefined),
          },
        }}
        slots={{
          openPickerIcon: DatePickerIcon,
        }}
      />
    </LocalizationProvider>
  );
}

const DatePickerIcon = () => {
  return (
    <SvgIcon>
      <CalendarIcon />
    </SvgIcon>
  );
};
