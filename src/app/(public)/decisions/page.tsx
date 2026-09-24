import { FinancialDecisionForm } from "@/_context/cash-flow-forecasting/presentational/components/forms/FinancialDecisionForm";
import { EmptyState } from "@/_shared/presentational/components/feedback/EmptyState";
import { ContentGridContainer } from "@/_shared/presentational/components/layout/ContentGridContainer";
import { MainContent } from "@/_shared/presentational/components/layout/MainContent";
import { Title } from "@/_shared/presentational/components/utility/Title";
import { decisions } from "@/_shared/presentational/data/test/lists/decisions";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

export default function Decisions() {
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
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "flex-start",
            },
          }}
          title="Decisions"
          titleProps={{
            variant: "h1",
          }}
          subText="Test a purchase against your forecast before you commit — see the risk instantly."
          subTextProps={{
            variant: "body1",
            sx: {
              color: "text.secondary",
            },
          }}
        />

        <Card
          variant="outlined"
          sx={{
            // gridColumn: "1 / span 7",
            gridColumn: {
              xs: "span 12",
              md: "1 / span 7",
            },
          }}
        >
          <CardContent>
            <FinancialDecisionForm />
          </CardContent>
        </Card>

        <Card
          variant="outlined"
          sx={{
            gridColumn: {
              xs: "span 12",
              md: "8 / span 5",
            },
            // gridColumn: "8 / span 5",
          }}
        >
          <CardContent>
            <Title
              title="Live assessment"
              titleProps={{
                variant: "h6",
              }}
            />
            {true && (
              <EmptyState
                message="Enter an amount to see how it affects your forecast."
                containerProps={{
                  sx: {
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  },
                }}
                typographyProps={{
                  align: "center",
                  sx: {
                    color: "text.secondary",
                  },
                }}
              />
            )}
          </CardContent>
        </Card>

        <Box
          sx={{
            gridColumn: "1 / span 12",
          }}
        >
          <Title
            iconContainerProps={{
              sx: {
                display: "flex",
                flexDirection: "row",
                gap: "0.5rem",
              },
            }}
            title="Saved decisions"
            titleProps={{
              variant: "h5",
            }}
          />

          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {decisions.map((decision, index) => (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: "background.paper",
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 3,
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <VerifiedUserOutlinedIcon color="primary" />

                    <Stack
                      direction="column"
                      spacing={1}
                    >
                      <Typography variant="body1">{decision.name}</Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                        }}
                      >
                        {`$${decision.amount} • ${decision.date} • ${decision.note}`}
                      </Typography>
                    </Stack>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <Stack direction="column">
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                        }}
                      >
                        Lowest after
                      </Typography>
                      <Typography variant="body1">$3,000</Typography>
                    </Stack>

                    <IconButton>
                      <DeleteForeverOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </ContentGridContainer>
    </MainContent>
  );
}
