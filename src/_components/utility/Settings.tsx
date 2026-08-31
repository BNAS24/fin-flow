import { SettingsForm } from "@/_components/forms/SettingsForm";
import { CloseAccountSettings } from "@/_components/input/CloseAccountSettings";
import { Box, Container } from "@mui/material";

interface ISettingsForm {
  handleBackdrop: () => void;
}

export const Settings = ({ handleBackdrop }: ISettingsForm) => {
  return (
    <Container
      onClick={(event) => event.stopPropagation()}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
        border: 1,
        borderColor: "divider",
        borderRadius: 3,
        height: "40%",
        width: "35%",
        p: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <CloseAccountSettings handleBackdrop={handleBackdrop} />
      </Box>

      <SettingsForm />
    </Container>
  );
};
