import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TaskDeadline } from "../../UI/TaskDeadline/TaskDeadline";
import { TaskCheckbox } from "./../../UI/TaskCheckbox";
import { convertTimestamp } from "../../helpers";

export const Task = ({ task }) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      square
      sx={{
        px: 2,
        py: 1.5,
        bgcolor: "transparent",
        border: "1px solid rgba(40, 40, 70, 0.1)",
        borderRadius: "10px",
        "&:hover": {
          bgcolor: "rgba(41, 161, 156, 0.02)",
        },
      }}
    >
      <AccordionSummary
        sx={{
          p: 0,
          ".MuiAccordionSummary-content": {
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        <TaskCheckbox sx={{ mr: 1.2 }} />
        <Typography
          component="span"
          sx={{
            fontWeight: 400,
            fontSize: 18,
            letterSpacing: "0.02em",
            mr: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          {task.title}
        </Typography>
        <TaskDeadline deadline={task.deadline} />
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0, pt: 1 }}>
        <Typography component="span" color="grey" fontSize={14}>
          Description
        </Typography>
        <Typography component="p" sx={{ wordWrap: "break-word", mb: 1.5 }}>
          {task.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Typography component="span" color="grey" fontSize={14}>
            {"Created: " + convertTimestamp(task.created)}
          </Typography>
          <IconButton color="error" size="large" sx={{ p: 1 }}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
