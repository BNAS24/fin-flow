import { DarkModeButton } from "@/_components/input/DarkModeButton";
import Link from "@/_components/navigation/Link";
import { links } from "@/_data/navigation/nav-links";
import {
    Container,
    List,
    ListItem,
    Link as MuiLink
} from "@mui/material";
import { BrandLogoAndName } from "@/_components/utility/BrandLogoAndName";

export const Aside = async () => {
  return (
    <Container
      component="aside"
      sx={{
        flex: "2 0",
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        gap: "1rem",
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
          height: "100%",
          gap: "0.5rem",
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

      {/*Light and dark mode button */}
      <DarkModeButton />
    </Container>
  );
};
