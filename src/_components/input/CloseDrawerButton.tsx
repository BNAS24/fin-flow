"use client";
import { IconButton } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useBodyStyle } from "@/_context/BodyStyleProvider";


export const CloseDrawerButton = ({}) => {
  const { handleBodyStyle } = useBodyStyle();

  return (
    <IconButton onClick={() => handleBodyStyle("mobile-sidemenu")}>
      <CancelOutlinedIcon
        arial-label="close-drawer"
        fontSize="medium"
        color="primary"
      />
    </IconButton>
  );
};
