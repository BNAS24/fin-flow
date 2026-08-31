import React from "react";
import { Grid, TGridProps } from "./Grid";

export const MainLayoutGrid = (props: TGridProps) => {
  return <Grid {...props} component="main"/>;
};
