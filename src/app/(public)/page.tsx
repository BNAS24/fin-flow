
import { ProjectionScopeFilter } from "@/_context/cash-flow-forecasting/presentational/components/input/ProjectionScopeFilter";
import ProjectedBalanceChartV2 from "@/_context/cash-flow-forecasting/presentational/components/line-chart/ProjectedBalanceLineChartV2";

import { Goals } from "@/_context/cash-flow-forecasting/presentational/components/list/Goals";

import { UpcomingPayments } from "@/_context/cash-flow-forecasting/presentational/components/list/UpcomingPayments";
import { AccountSettingsButton } from "@/_shared/presentational/components/input/AccountSettingsButton";
import { ContentGridContainer } from "@/_shared/presentational/components/layout/ContentGridContainer";
import { MainContent } from "@/_shared/presentational/components/layout/MainContent";
import { Title } from "@/_shared/presentational/components/utility/Title";

import { paymentPreview } from "@/_shared/presentational/data/test/payment-preview";
import { Box, Card, Typography } from "@mui/material";

export default function Home() {
  return (
    <MainContent
      sx={{
        overflowY: "auto",
      }}
    >
      <ContentGridContainer
        disableGutters
        sx={{
          gridTemplateRows: "max-content max-content max-content max-content",
          gap: "1.5rem",
        }}
      >
        <Box
          sx={{
            gridColumn: "1 / span 12",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "1rem",
            width: "100%",
          }}
        >
          {/*Tile and subtext container*/}
          <Title
            boxProps={{
              sx: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              },
            }}
            title="Overview"
            titleProps={{
              variant: "h1",
              align: "center",
            }}
            subText="Your projected cash flow and spending power at a glance."
            subTextProps={{
              variant: "body1",
              sx: {
                color: "text.secondary",
              },
            }}
          />

          {/*Filter and settings inputs container*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <ProjectionScopeFilter />
            <AccountSettingsButton />
          </Box>
        </Box>
        
        {/*Project preview cards */}
        <Box
          sx={{
            gridColumn: "1 / span 12",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            width: "100%",
          }}
        >
          {paymentPreview &&
            paymentPreview.map((card, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  flex: "1 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  minWidth: "15rem",
                }}
              >
                {/*Title*/}
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {card.title}
                </Typography>

                {/*Amount summary*/}
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "var(--font-inter)",
                    color: card.textColor,
                  }}
                >
                  {`${card.amount}`}
                </Typography>

                {/*Helper text*/}
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {card.text}
                </Typography>
              </Card>
            ))}
        </Box>
        
        {/*Projected balance line chart */}
        {/* <ProjectedBalanceChart /> */}

        <ProjectedBalanceChartV2/>

        {/*Upcoming payment and goals container*/}
        <Box
          sx={{
            gridColumn: "1 / span 12",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            width: "100%",
            gap: "1.5rem",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              flex: {
                xs: "unset",
                md: 1,
              },
              minHeight: {
                xs: "unset",
                md: "37.5rem",
              },
            }}
          >
            <Title
              title="Upcoming"
              titleProps={{
                variant: "h5",
              }}
              subText="Next scheduled money movements"
              subTextProps={{
                variant: "body1",
                sx: {
                  color: "text.secondary",
                },
              }}
            />

            <UpcomingPayments />
          </Card>

          <Card
            variant="outlined"
            sx={{
              flex: 1,
              minHeight: {
                md: "37.5rem",
              },
            }}
          >
            <Title
              title="Goals"
              titleProps={{
                variant: "h5",
              }}
              subText="Progress toward what matters"
              subTextProps={{
                variant: "body1",
                sx: {
                  color: "text.secondary",
                },
              }}
            />

            <Goals />
          </Card>
        </Box>
      </ContentGridContainer>
    </MainContent>
  );
}
