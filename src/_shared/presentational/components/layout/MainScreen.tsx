import { Container } from "@mui/material";

export const MainScreen = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        flex: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        p: "2rem",
        backgroundColor: "background.default",
        overflowY: "scroll"
      }}
    >
      <Container
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "1rem",
        }}
      >
        {children}
      </Container>
    </Container>
  );
};
