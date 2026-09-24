"use client";
import { ContentGridContainer } from "@/_shared/presentational/components/layout/ContentGridContainer";
import { Grid } from "@/_shared/presentational/components/layout/Grid";
import { MainContent } from "@/_shared/presentational/components/layout/MainContent";
import { CustomTabPanel } from "@/_shared/presentational/components/navigation/CustomTabPanel";
import { ProgressBar } from "@/_shared/presentational/components/progress/ProgressBar";
import { Title } from "@/_shared/presentational/components/utility/Title";
import { financesPreview } from "@/_shared/presentational/data/test/finances-preview";
import { financesTabs } from "@/_shared/presentational/data/test/finances-tabs";
import { goals } from "@/_shared/presentational/data/test/lists/goals";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  List,
  ListItem,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Finances() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

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
            alignItems: "flex-end",
            gap: "1rem",
          }}
        >
          <Title
            boxProps={{
              sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
            title="Finances"
            titleProps={{
              variant: "h1",
              align: "center",
            }}
            subText="Everything the forecast is built from — income, expenses, savings, and investments."
            subTextProps={{
              variant: "body1",
              sx: {
                color: "text.secondary",
              },
            }}
          />

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              borderRadius: 3,
            }}
          >
            Add entry
          </Button>
        </Box>

        {/*Finances preview section */}
        <Grid
          disableGutters
          sx={{
            gridColumn: "1 / span 12",
            gap: "1rem",
          }}
        >
          {financesPreview.map((finance, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{
                gridColumn: {
                  xs: "span 12",
                  sm: "span 6",
                  md: "span 6",
                  lg: "span 3",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  padding: 0,
                  paddingBottom: "0 !important",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {finance.title}
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "var(--font-inter)",
                    color:
                      finance.cashflow === "incoming"
                        ? "primary.light"
                        : "secondary.contrastText",
                  }}
                >
                  {`${finance.cashflow === "incoming" ? "+" : "-"}$${finance.amount}`}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/*Finances preview section */}
        <Box sx={{ gridColumn: "1 / span 12" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="finances preview"
              slotProps={{
                indicator: {
                  sx: {
                    display: "none",
                  },
                },
              }}
              sx={{
                borderRadius: 3,
                backgroundColor: "secondary.main",
                p: "0.5rem",
              }}
            >
              {/*Tabs navigation */}
              {["Income", "Expense", "Savings", "Investment"].map(
                (label, index) => (
                  <Tab
                    key={index}
                    disableRipple
                    label={label}
                    sx={{
                      flex: 1,
                      "&.Mui-selected": {
                        backgroundColor: "background.default",
                        borderRadius: 3,
                      },
                    }}
                  />
                ),
              )}
            </Tabs>

            {/*Tabs content */}
            {financesTabs.map((tab, index) => (
              <CustomTabPanel
                key={tab.label}
                index={index}
                value={value}
              >
                {/*Tabs list*/}
                <List
                  sx={{
                    border: 1,
                    borderRadius: 3,
                    borderColor: "divider",
                    backgroundColor: "background.paper",
                    overflowX: "hidden",
                  }}
                >
                  {/*List items */}
                  {tab.content.map((data, index) => (
                    <ListItem
                      key={data.id}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        border: 0,
                        borderBottom: index === financesTabs.length - 1 ? 0 : 1,
                        borderColor: "divider",
                        py: 2,
                      }}
                    >
                      {/*Title, subtitle, and category and reliability chips */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                      >
                        {/*Title and chips line */}
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "0.5rem",
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              lineHeight: "unset",
                            }}
                          >
                            {data.name}
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "0.5rem",
                            }}
                          >
                            {/*Income type chip */}
                            <Chip
                              variant="outlined"
                              label={data.category}
                              size="small"
                              sx={{
                                height: "unset",
                                flexGrow: "0 1",
                                fontSize: "0.79rem",
                              }}
                            />

                            {/*Income reliability chip */}
                            <Chip
                              variant="outlined"
                              label={`Reliability: ${data.incomeReliability}`}
                              size="small"
                              color={
                                data.incomeReliability === "High"
                                  ? "success"
                                  : data.incomeReliability === "Medium"
                                    ? "warning"
                                    : "error"
                              }
                              sx={{
                                height: "unset",
                                flexGrow: "0 1",
                                fontSize: "0.79rem",
                              }}
                            />
                          </Box>
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                          }}
                        >
                          {`${data.cashFlowFrequency} • next ${data.date}`}
                        </Typography>
                      </Box>

                      {/*Income amount, edit button, and delete item container */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ color: "primary.light" }}
                        >
                          {`+$${data.amount}`}
                        </Typography>

                        {/*Edit item button */}
                        <IconButton
                          sx={{
                            borderRadius: 4,
                          }}
                        >
                          <EditOutlinedIcon />
                        </IconButton>

                        {/*Delete item button */}
                        <IconButton
                          sx={{
                            borderRadius: 4,
                          }}
                        >
                          <DeleteForeverOutlinedIcon />
                        </IconButton>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </CustomTabPanel>
            ))}
          </Box>
        </Box>

        {/*Financial goals section*/}
        <Box
          sx={{
            gridColumn: "1 / span 12",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {/*Title and add goal section */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1rem",
              width: "100%",
            }}
          >
            <Title
              startIcon={<TrackChangesOutlinedIcon fontSize="large" />}
              iconContainerProps={{
                sx: {
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                },
              }}
              title="Goals"
              titleProps={{
                variant: "h2",
              }}
            />

            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                borderRadius: 3,
              }}
            >
              Add goal
            </Button>
          </Box>

          {/*Goals cards*/}
          <Grid
            disableGutters
            sx={{
              gap: "1rem",
            }}
          >
            {goals.map((goal, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  gridColumn: {
                    xs: "span 12",
                    sm: "span 6",
                    md: "span 4",
                    lg: "span 3",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    padding: 0,
                    paddingBottom: "0 !important",
                  }}
                >
                  {/*Title and delete button */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>{goal.title}</Typography>

                    {/*Delete item button */}
                    <IconButton
                      aria-label="delete"
                      sx={{
                        borderRadius: 4,
                      }}
                    >
                      <DeleteForeverOutlinedIcon />
                    </IconButton>
                  </Box>

                  {/*Amount accumalated vs target goal amount */}
                  <Box>
                    <Typography>
                      {`$${goal.accumalatedAmount} of $${goal.targetAmount}`}
                    </Typography>
                  </Box>

                  {/*Goal progress bar*/}
                  <Box>
                    <ProgressBar
                      minimumValue={0}
                      maximumValue={goal.targetAmount}
                      value={goal.accumalatedAmount}
                    />
                  </Box>

                  {/*Percentage of goal completed */}
                  <Box>
                    <Typography>
                      {`${Math.round((goal.accumalatedAmount / goal.targetAmount) * 100)}% funded`}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Box>
      </ContentGridContainer>
    </MainContent>
  );
}
