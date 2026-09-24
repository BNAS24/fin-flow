"use client";
import { Field } from "@/_shared/presentational/types/forms/DynamicInputTypes";
import { Dispatch, DispatchWithoutAction, memo } from "react";
import { DynamicInputMap } from "@/_shared/presentational/components/registries/DynamicInputMap"

interface DynamicInputProps<State, Action> {
  field: Field;
  dispatch?: Dispatch<Action> | DispatchWithoutAction;
  state?: State;
  fieldError?: string;
}

function DynamicInputComponent<State, Action>({
  field,
  dispatch,
  state,
  fieldError,
}: DynamicInputProps<State, Action>) {
  // Destructure dispatch and state from field
  const { type, props, children, actionType } = field;

  const Component = DynamicInputMap[type];

  if (!Component) return null;

  return (
    <Component
      {...props}
      dispatch={dispatch}
      state={state}
      actionType={actionType}
      fieldError={fieldError}
    >
      {children}
    </Component>
  );
}

export const DynamicInput = memo(
  DynamicInputComponent,
) as typeof DynamicInputComponent;
