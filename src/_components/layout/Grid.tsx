import { Container, ContainerProps } from "@mui/material";

export type TGridProps = ContainerProps;

export const Grid = (props: TGridProps) => {
  return (
    <Container
      {...props}
      sx={{
        ...props?.sx,
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
      }}
    />
  );
};
