import { CalendarAndPanelContainer } from "@/_components/calendar/CalendarAndPanelContainer";
import { ContentGridContainer } from "@/_components/layout/ContentGridContainer";
import { MainContent } from "@/_components/layout/MainContent";
import { Title } from "@/_components/utility/Title";
import { Box } from "@mui/material";

export default function Calendar() {
  return (
    <MainContent
      sx={{
        overflowY: "auto",
      }}
    >
      <ContentGridContainer
        disableGutters
        sx={{
          gridTemplateRows: "max-content max-content max-content",
          gap: "1.5rem",
        }}
      >
        <Title
          boxProps={{
            sx: {
              gridColumn: "1 / span 12",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            },
          }}
          title="Calendar"
          titleProps={{
            variant: "h1",
          }}
          subText="Bills, income, decisions, and goal dates — with the balance projected for each day."
          subTextProps={{
            variant: "body1",
            sx: {
              color: "text.secondary",
            },
          }}
        />

        <CalendarAndPanelContainer />

        <Box
          sx={{
            gridColumn: "1 / span 12",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Title
            title="{{Month}} 2026 agenda"
            titleProps={{
              variant: "h5",
            }}
          />
        </Box>
      </ContentGridContainer>
    </MainContent>
  );
}
