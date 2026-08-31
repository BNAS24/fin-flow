import { Box, LinearProgress } from "@mui/material";

interface IProgressBar {
  minimumValue: number | undefined;
  maximumValue: number | undefined;
  value: number | undefined;
}

export const ProgressBar = ({
  minimumValue = 0,
  maximumValue,
  value,
}: IProgressBar) => {
  return (
    <LinearProgress
      variant="determinate"
      color="primary"
      value={value}
      min={minimumValue}
      max={maximumValue}
    />
  );
};
