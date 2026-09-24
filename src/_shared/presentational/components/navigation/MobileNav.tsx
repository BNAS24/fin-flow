import Container from "@mui/material/Container";
import { DarkModeButton } from "@/_shared/presentational/components/input/DarkModeButton";
import { Box } from "@mui/material";
import { BrandLogoAndName } from "../utility/BrandLogoAndName";
import { MobileMenuButton } from "@/_shared/presentational/components/input/MobileMenuButton";

export const MobileNav = () => {
  return (
    <Container
      sx={{
        gridColumn: "1 / span 12",
        display: {
          xs: "flex",
          md: "none",
        },
        justifyContent: "space-between",
        py: "0.5rem",
        borderBottom: 1,
        borderColor: "divider",
        backgroundColor: {
          xs: "background.default",
          md: "secondary.main",
        },
      }}
    >
      <BrandLogoAndName />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Box>
          <DarkModeButton />
        </Box>

        <MobileMenuButton />
      </Box>
    </Container>
  );
};
