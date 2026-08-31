import { Grid, TGridProps } from "@/_components/layout/Grid";

export const MainContent = (props: TGridProps) => {
  return (
    <Grid
      {...props}
      component="div"
      maxWidth={false}
      disableGutters
      sx={{
        ...props.sx,
        gridColumn: {
          xs: "1 / span 12",
          md: "4 / span 12",
          lg: "3 / span 12",
        },
        py: {
          xs: 4,
        },
        px: {
          xs: 2,
          sm: 4,
        },
        backgroundColor: "background.default",
      }}
    />
  );
};
