"use client";
import { useBodyStyle } from "@/_shared/presentational/context/BodyStyleProvider";
import { GlobalStyles } from "@mui/material";

export default function BodyStyleManager() {
  const { bodyStyle } = useBodyStyle();

  return <GlobalStyles styles={{ body: { ...bodyStyle } }} />;
}
