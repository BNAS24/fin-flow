import { upcomingPayments } from "@/_shared/presentational/data/test/lists/upcoming-payments";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SouthEastOutlinedIcon from "@mui/icons-material/SouthEastOutlined";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export const UpcomingPayments = () => {
  return (
    <List>
      {upcomingPayments.map((payment, index) => (
        <ListItem
          key={index}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: 0,
            borderBottom: index === upcomingPayments.length - 1 ? 0 : 1,
            borderColor: "divider",
            p: "1rem 0.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <ListItemIcon>
              {payment.cashFlow === "incoming" ? (
                <ArrowOutwardIcon
                  fontSize="large"
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    backgroundColor: "#00C48840",
                  }}
                />
              ) : (
                <SouthEastOutlinedIcon
                  fontSize="large"
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    backgroundColor: "#00533940",
                  }}
                />
              )}
            </ListItemIcon>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ListItemText
                primary={payment.title}
                secondary={
                  <Typography
                    variant="body2"
                    component="span"
                  >
                    {/*In production you should use toLocalString() instead of String() for real date formatting*/}
                    {String(payment.date)}
                  </Typography>
                }
                sx={{
                  lineHeight: "unset",
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              dispay: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color:
                  payment.cashFlow === "incoming"
                    ? "primary.light"
                    : "secondary.contrastText",
              }}
            >
              {`${payment.cashFlow === "incoming" ? "+" : "-"}$${payment.amount}`}
            </Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};
