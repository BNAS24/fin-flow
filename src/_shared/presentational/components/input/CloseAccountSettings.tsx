"use client";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { IconButton } from "@mui/material";

interface ICloseDrawerButton {
  handleBackdrop: () => void;
}

export const CloseAccountSettings = ({
  handleBackdrop,
}: ICloseDrawerButton) => {
  return (
    <IconButton onClick={handleBackdrop}>
      <CloseOutlinedIcon />
    </IconButton>
  );
};
