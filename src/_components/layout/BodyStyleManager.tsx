"use client";
import { useBodyStyle } from "@/_context/BodyStyleProvider";
import { GlobalStyles } from "@mui/material";

export default function BodyStyleManager() {
  const { bodyStyle } = useBodyStyle();

  return <GlobalStyles styles={{ body: { ...bodyStyle } }} />;
}
