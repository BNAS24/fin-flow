import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BrandLogo } from "@/_shared/presentational/components/icons/mui/BrandLogo";
import Link from "@/_shared/presentational/components/navigation/Link";

export const BrandLogoAndName = () => {
  return (
    <Box
      component={Link}
      href="/"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem",
        textDecoration: "none"
      }}
    >
      <BrandLogo />

      <Typography
        sx={{
          fontSize: "1.5rem",
          fontFamily: "var(--space-grotesk)",
          fontWeight: "bold",
          color: "secondary.contrastText"
        }}
      >
        FinFlow
      </Typography>
    </Box>
  );
};
