import { goals } from "@/_data/test/lists/goals";
import { Box, List, ListItem, Typography } from "@mui/material";
import { ProgressBar } from "../visual/ProgressBar";

export const Goals = () => {
  return (
    <List>
      {goals.map((goal, index) => (
        <ListItem
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem",
            p: "1rem 0.5rem",
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
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold" }}
            >
              {goal.title}
            </Typography>

            <Typography variant="body1">
              {`$${goal.accumalatedAmount}/${goal.targetAmount}`}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
            }}
          >
            <ProgressBar
              value={goal.accumalatedAmount}
              minimumValue={0}
              maximumValue={goal.targetAmount}
            />
          </Box>

          <Box>
            <Typography>{`${Math.round((goal.accumalatedAmount / goal.targetAmount) * 100)}% funded`}</Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};
