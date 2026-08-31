"use client";
import Link from "@/_components/navigation/Link";
import { links } from "@/_data/navigation/nav-links";
import { useMenu } from "@/_hooks/animations/useMenu";
import { Box, Container, List, ListItem, Link as MuiLink } from "@mui/material";
import AnimatedContainer from "../animated/Container";
import { BrandLogoAndName } from "../utility/BrandLogoAndName";
import { CloseDrawerButton } from "@/_components/input/CloseDrawerButton";

export const MobileAside = () => {
  const { menuSpring, animationComplete, handleBodyStyle } = useMenu({
    identifier: "mobile-sidemenu",
  });

  return (
    <AnimatedContainer
      disableGutters={true}
      maxWidth={false}
      style={menuSpring}
      onClick={() => handleBodyStyle("close-all")}
      sx={{
        display: !animationComplete ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1rem",
        position: "fixed",
        top: "0",
        left: 0,
        height: "100%",
        backgroundColor: "#00000050",
        overflowX: "hidden",
        zIndex: 101,
      }}
    >
      <Container
        component="aside"
        onClick={(event) => event.stopPropagation()}
        sx={{
          flex: "1 0",
          display: { xs: "flex", lg: "none" },
          flexDirection: "column",
          backgroundColor: "secondary.main",
          border: 0,
          borderRight: 1,
          borderColor: "divider",
          p: "1rem 1rem",
          ml: 0,
          maxWidth: "24rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <CloseDrawerButton />
        </Box>

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
                  onClick={() => handleBodyStyle("close-all")}
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
      </Container>
    </AnimatedContainer>
  );
};
