"use client";
import { DynamicInput } from "@/_components/input/DynamicInput";
import { settingsFormFields } from "@/_data/forms-fields/settings";
import { useDynamicForm } from "@/_hooks/utility/useDynamicInputForm";
import {
  ISettingsForm,
  settingsForm,
  settingsFormReducer,
} from "@/_reducers/forms/settings";
import { ServerActionResult } from "@/_types/api/action-result";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { Box, Button, Container, Typography } from "@mui/material";

export const SettingsForm = () => {
  const { state, dispatch, fieldErrors } = useDynamicForm({
    reducer: settingsFormReducer,
    initialState: settingsForm,
    serverAction: async () => "ds" as unknown as ServerActionResult<unknown>,
  });

  return (
    <Container
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/*Title and subtext */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6">Account Settings</Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
          }}
        >
          Your current cash balance anchors every projection
        </Typography>
      </Box>

      {/*Form fields */}
      {settingsFormFields.map((field) => {
        return (
          <DynamicInput
            key={field.id}
            field={field}
            dispatch={dispatch}
            state={
              "name" in field.props
                ? state[field.props.name as keyof ISettingsForm]
                : state
            }
            fieldError={
              "name" in field.props
                ? fieldErrors[field.props.name as keyof ISettingsForm]
                : undefined
            }
          />
        );
      })}

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          startIcon={<RestartAltOutlinedIcon />}
          sx={{
            color: "error.main",
          }}
        >
          Reset
        </Button>

        <Button
          variant="contained"
          sx={{ borderRadius: 3 }}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
};
