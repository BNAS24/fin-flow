import { Grid, TGridProps } from "./Grid";

export const ContentGridContainer = (props: TGridProps) => {
  return (
    <Grid
      {...props}
      component="div"
      sx={{
        ...props.sx,
        gridColumn: "1 / span 12",
      }}
    />
  );
};
