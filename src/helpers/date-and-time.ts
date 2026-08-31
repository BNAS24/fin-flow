export const formatProjectionDate = (dateString: string) =>
  Temporal.PlainDate.from(dateString).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });
