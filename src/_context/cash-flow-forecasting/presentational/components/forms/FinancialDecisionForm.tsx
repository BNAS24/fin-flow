"use client";
import { financialDecisionFields } from "@/_context/cash-flow-forecasting/presentational/data/form-fields/financial-decision";
import {
  financialDecisionForm,
  financialDecisionReducer,
  IFinancialDecision,
} from "@/_context/cash-flow-forecasting/presentational/reducers/financial-decision";
import { ServerActionResult } from "@/_shared/lib/types/api/action-result";
import { DynamicInput } from "@/_shared/presentational/components/input/DynamicInput";
import { Title } from "@/_shared/presentational/components/utility/Title";
import { useDynamicForm } from "@/_shared/presentational/hooks/utility/useDynamicInputForm";
import AddIcon from "@mui/icons-material/Add";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import { Button, Container } from "@mui/material";

export const FinancialDecisionForm = () => {
  const { state, dispatch, fieldErrors } = useDynamicForm({
    reducer: financialDecisionReducer,
    initialState: financialDecisionForm,
    serverAction: async () => "ds" as unknown as ServerActionResult<unknown>,
  });

  return (
    <Container
      component="form"
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Title
        iconContainerProps={{
          sx: {
            display: "flex",
            gap: "0.5rem",
          },
        }}
        startIcon={<BalanceOutlinedIcon color="primary" />}
        title="Should I spend this?"
        titleProps={{
          variant: "h6",
        }}
        subText="We simulate this spend across your 60-day forecast."
        subTextProps={{
          variant: "body1",
          sx: {
            color: "text.secondary",
          },
        }}
      />

      {/*Form fields */}
      {financialDecisionFields.map((field) => {
        return (
          <DynamicInput
            key={field.id}
            field={field}
            dispatch={dispatch}
            state={
              "name" in field.props
                ? state[field.props.name as keyof IFinancialDecision]
                : state
            }
            fieldError={
              "name" in field.props
                ? fieldErrors[field.props.name as keyof IFinancialDecision]
                : undefined
            }
          />
        );
      })}

      <Button
        startIcon={<AddIcon />}
        variant="contained"
        sx={{
          borderRadius: 3,
        }}
      >
        Add Decision
      </Button>
    </Container>
  );
};
