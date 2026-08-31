"use client";
import { IconButton } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useBodyStyle } from "@/_context/BodyStyleProvider";

export const MobileMenuButton = () => {
  const { handleBodyStyle } = useBodyStyle();

  return (
    <IconButton onClick={() => handleBodyStyle("mobile-sidemenu")}>
      <MenuOutlinedIcon arial-label="mobile-menu-button" />
    </IconButton>
  );
};
