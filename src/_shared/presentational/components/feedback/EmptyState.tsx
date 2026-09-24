import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";

interface IEmptyStateProps {
  containerProps?: BoxProps;
  typographyProps?: TypographyProps;
  message?: string;
}

export const EmptyState = ({
  message = "Nothing to show here yet.",
  containerProps,
  typographyProps,
}: IEmptyStateProps) => {
  return (
    <Box {...containerProps}>
      <Typography {...typographyProps}>{message}</Typography>
    </Box>
  );
};
