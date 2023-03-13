import { Typography } from "@mui/material";
import { convertTimestamp } from "./../../helpers";

export const TaskDeadline = ({ deadline }) => {
  const text = convertTimestamp(deadline);
  const timeDiff = deadline - Date.now() / 1000;
  let color;
  if (text === "today") {
    color = "success";
  } else if (text === "yesterday" || timeDiff < 0) {
    color = "error";
  }

  return (
    <Typography
      sx={{
        color: (theme) => (color ? theme.palette[color].main : "grey"),
        fontWeight: 400,
        lineHeight: 1.37,
        letterSpacing: "0.02em",
        ml: "auto",
        display: "inline",
        px: 1,
        py: 0.5,
        border: "1px solid",
        borderColor: (theme) => (color ? theme.palette[color].main : "grey"),
        borderRadius: "20px",
      }}
    >
      {text}
    </Typography>
  );
};
