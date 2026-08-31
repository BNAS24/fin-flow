import Box, { BoxProps } from "@mui/material/Box";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface ITitle {
  startIcon?: React.ReactNode;
  iconContainerProps?: BoxProps;
  boxProps?: BoxProps;
  title: string;
  titleProps?: TypographyProps;
  subText?: string;
  subTextProps?: TypographyProps;
}

export const Title = ({
  startIcon,
  iconContainerProps,
  boxProps,
  titleProps,
  title,
  subText,
  subTextProps,
}: ITitle) => {
  return (
    <Box {...boxProps}>
      {startIcon ? (
        <>
          <Box {...iconContainerProps}>
            {startIcon}
            <Typography {...titleProps}>{title}</Typography>
          </Box>
          <Typography {...subTextProps}>{subText}</Typography>
        </>
      ) : (
        <>
          <Typography {...titleProps}>{title}</Typography>
          <Typography {...subTextProps}>{subText}</Typography>
        </>
      )}
    </Box>
  );
};
