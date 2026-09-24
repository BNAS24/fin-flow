import { TextField, TextFieldProps } from "@mui/material";
import React, { Dispatch, DispatchWithoutAction } from "react";

export type IFormTextFieldProps<State, Action> = TextFieldProps & {
  dispatch?: Dispatch<Action> | DispatchWithoutAction;
  state?: State;
  actionType: string;
  fieldError?: string;
};

export default function FormTextField<State, Action>({
  dispatch,
  state,
  actionType,
  fieldError,
  ...props
}: IFormTextFieldProps<State, Action>) {
  // Function to update reducer hook state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (dispatch) {
      dispatch({ type: actionType, payload: event.target.value } as Action);
    }
  };

  return (
    <TextField
      {...props}
      onChange={handleChange}
      value={state}
      error={!!fieldError}
      helperText={fieldError ? fieldError : props.helperText}
    />
  );
}
