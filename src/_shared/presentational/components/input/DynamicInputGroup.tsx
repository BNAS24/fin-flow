import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormControlProps,
  FormGroup,
  FormGroupProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
  Switch,
  SwitchProps,
} from "@mui/material";
import React, { Dispatch } from "react";

type InputTypes = "radio" | "checkbox" | "switch";

type Option = Omit<FormControlLabelProps, "control"> & {
  control: InputTypes;
  controlProps?: RadioProps | CheckboxProps | SwitchProps;
};

type BaseFormControlProps = {
  formControlProps?: FormControlProps;
  formLabelProps?: (FormLabelProps & { text?: string }) | null;
  dispatch?: Dispatch<any>;
  state?: any;
  actionType?: string;
  fieldError?: string;
};

type RadioMode = BaseFormControlProps & {
  inputGroupType: "radio";
  groupProps: RadioGroupProps & { options: Option[] };
};

type CheckboxOrSwitchMode = BaseFormControlProps & {
  inputGroupType: "checkbox" | "switch";
  groupProps: FormGroupProps & { options: Option[] };
};

export type DynamicInputGroupProps = RadioMode | CheckboxOrSwitchMode;

const controlComponentMap: Record<InputTypes, React.ElementType> = {
  radio: Radio,
  checkbox: Checkbox,
  switch: Switch,
};

export default function DynamicInputGroup({
  inputGroupType,
  formControlProps,
  formLabelProps,
  groupProps,
  dispatch,
  state,
  actionType,
  fieldError,
}: DynamicInputGroupProps) {
  const { text, ...labelProps } = formLabelProps ?? {};
  const { options, ...restGroupProps } = groupProps;

  const handleRadioOrCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked, value } = event.target;

    if (!dispatch || !actionType || !state) return;

    if (inputGroupType === "checkbox") {
      // State update logic for checkboxes (made for being able to select multiple options)
      dispatch({ type: actionType, payload: { checked, value } });
    } else {
      // State update logic for switches or radios
      dispatch({ type: actionType, payload: value });
    }
  };

  return (
    <FormControl {...formControlProps}>
      {text && <FormLabel {...labelProps}>{text}</FormLabel>}

      {inputGroupType === "radio" ? (
        <RadioGroup
          {...(restGroupProps as RadioGroupProps)}
          onChange={handleRadioOrCheckboxChange}
        >
          {options.map(({ control, controlProps, ...label }) => {
            const ControlComponent = controlComponentMap[control];
            return (
              <FormControlLabel
                key={String(label.value ?? label.label)}
                {...label}
                control={<ControlComponent {...(controlProps as RadioProps)} />}
              />
            );
          })}
        </RadioGroup>
      ) : (
        <FormGroup {...(restGroupProps as FormGroupProps)}>
          {options.map(({ control, controlProps, ...label }) => {
            const ControlComponent = controlComponentMap[control];
            return (
              <FormControlLabel
                key={String(label.value ?? label.label)}
                {...label}
                control={
                  <ControlComponent
                    {...(controlProps as CheckboxProps | SwitchProps)}
                    onChange={handleRadioOrCheckboxChange}
                  />
                }
              />
            );
          })}
        </FormGroup>
      )}

      {fieldError && <FormHelperText>{fieldError}</FormHelperText>}
    </FormControl>
  );
}