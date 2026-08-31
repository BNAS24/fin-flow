"use client";
import { useBreakpoints } from "@/_hooks/utility/useBreakpoints";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Button from "@mui/material/Button";
import { useColorScheme } from "@mui/material/styles";

export const DarkModeButton = () => {
  const { mode, setMode } = useColorScheme();

  const { smDown, mdDown } = useBreakpoints();

  if (!mode) return null; // avoid hydration mismatch [page:1]

  return (
    <Button
      fullWidth
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      variant="contained"
      size={smDown ? "small" : mdDown ? "medium" : "large"}
      startIcon={
        mode === "light" ? (
          <NightlightOutlinedIcon arial-label="dark-mode-button" />
        ) : (
          <WbSunnyOutlinedIcon arial-label="light-mode-button" />
        )
      }
      sx={{
        border: 1,
        borderRadius: 3,
        borderColor: "divider",
        boxShadow: 1,
        color: "text.primary",
        backgroundColor:
          mode === "light" ? "background.default" : "secondary.dark",
      }}
    >
      {mode === "light" ? "Dark" : "Light"}
    </Button>
  );
};
