import { useActionState, useReducer } from "react";
import {
  FieldErrors,
  ServerActionResult,
} from "@/_types/api/action-result";

interface IUseDynamicFormOptions<State, Action, Result> {
  reducer: (state: State, action: Action) => State;
  initialState: State;
  serverAction: (
    currentState: any,
    formData: State
  ) => Promise<ServerActionResult<Result>>;
  intialServerActionState?: any | null;
}

interface UseDynamicFormResult<State, Action> {
  state: State;
  dispatch: React.Dispatch<Action>;
  actionState: ServerActionResult<any> | null;
  pending: boolean;
  action: (payload: State) => void;
  fieldErrors: FieldErrors;
  globalError: string | undefined;
}

/**
 * Custom React hook for managing dynamic forms with reducer-based state management and server-side actions.
 *
 * @template State - The type representing the form state.
 * @template Action - The type representing actions dispatched to the reducer.
 * @template Result - The type representing the result returned from the server action.
 *
 * @param options - Configuration options for the dynamic form.
 * @param options.reducer - The reducer function to manage form state.
 * @param options.initialState - The initial state of the form.
 * @param options.serverAction - The async function to handle server-side form submission.
 * @param options.intialServerActionState - (Optional) The initial state for the server action.
 *
 * @returns An object containing:
 * - `state`: The current form state.
 * - `dispatch`: The dispatch function for the reducer.
 * - `actionState`: The current state of the server action.
 * - `pending`: Boolean indicating if the server action is in progress.
 * - `action`: Function to trigger the server action.
 * - `fieldErrors`: Object containing field-specific validation errors.
 * - `globalError`: String containing a global error message, if any.
 */
export function useDynamicForm<State, Action, Result>({
  reducer,
  initialState,
  serverAction,
  intialServerActionState = null,
}: IUseDynamicFormOptions<State, Action, Result>): UseDynamicFormResult<
  State,
  Action
> {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [actionState, action, pending] = useActionState(
    serverAction,
    intialServerActionState
  );

  const fieldErrors: FieldErrors =
    actionState?.ok === false ? actionState.fieldErrors ?? {} : {};

  const globalError: string | undefined =
    actionState?.ok === false && actionState.message
      ? actionState.message
      : undefined;

  return {
    state,
    dispatch,
    actionState,
    pending,
    action,
    fieldErrors,
    globalError,
  };
}