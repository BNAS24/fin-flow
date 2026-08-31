import { Box } from "@mui/material";

interface ICustomTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const CustomTabPanel = ({
  children,
  value,
  index,
  ...other
}: ICustomTabPanelProps) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </Box>
  );
};
