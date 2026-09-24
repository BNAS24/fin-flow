"use client";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import { Box, Backdrop } from "@mui/material";
import { useState } from "react";
import { Settings } from "@/_shared/presentational/components/utility/Settings";

export const AccountSettingsButton = () => {
  const [open, setOpen] = useState(false);

  const handleBackdrop = () => setOpen((open) => !open);

  return (
    <Box>
      <IconButton
        aria-label="settings-button"
        onClick={handleBackdrop}
        sx={{
          border: 2,
          borderColor: "divider",
          borderRadius: 4,
          boxShadow: 1,
        }}
      >
        <TuneIcon />
      </IconButton>

      <Backdrop
        open={open}
        onClick={handleBackdrop}
        sx={{
          // zIndex and position properties are added to backdrop to push the modal ahead of the mui line graph
          zIndex: (theme) => theme.zIndex.modal + 1,
          position: "absolute",
        }}
      >
        <Settings handleBackdrop={handleBackdrop} />
      </Backdrop>
    </Box>
  );
};
