"use client";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export function useBreakpoints() {
  const theme = useTheme();

  return {
    smDown: useMediaQuery(theme.breakpoints.down("sm")),
    mdDown: useMediaQuery(theme.breakpoints.down("md")),
    lgUp: useMediaQuery(theme.breakpoints.up("lg")),
  };
}
