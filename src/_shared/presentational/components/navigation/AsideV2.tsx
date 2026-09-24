import { DarkModeButton } from "@/_shared/presentational/components/input/DarkModeButton";
import Link from "@/_shared/presentational/components/navigation/Link";
import { BrandLogoAndName } from "@/_shared/presentational/components/utility/BrandLogoAndName";
import { links } from "@/_shared/presentational/data/navigation/nav-links";
import { Container, List, ListItem, Link as MuiLink } from "@mui/material";

export const AsideV2 = async () => {
  return (
    <Container
      component="aside"
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        flexDirection: "column",
        gridColumn: {
          md: "1 / span 3",
          lg: "1 / span 2",
        },
        p: "1rem 1rem",
        border: 0,
        borderRight: 1,
        borderColor: "divider",
        backgroundColor: "secondary.main",
      }}
    >

      {/*Logo and Name*/}
      <BrandLogoAndName />

      {/*Navigation list */}
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          height: "100%",
        }}
      >
        {links &&
          links.map((link, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                alignItems: "center",
                justifyContent: "left",
                borderRadius: 3,
                backgroundColor: "primary.main",
                "&: hover": {
                  cursor: "pointer",
                },
              }}
            >
              <MuiLink
                component={Link}
                href={link.link}
                sx={{
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  fontSize: "button",
                  color: "primary.contrastText",
                  textDecoration: "none",
                }}
              >
                {link.name}
              </MuiLink>
            </ListItem>
          ))}
      </List>

      {/* Light and dark mode button */}
      <DarkModeButton />
    </Container>
  );
};
