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
import { useUid, useBoard } from "./../../hooks";

export const Task = ({ task, updateTask, deleteTask }) => {
  const uid = useUid();
  const { path } = useBoard();
  const toggleCompletedTask = async () => {
    await updateTask({
      uid,
      board: path,
      taskId: task.id,
      taskData: { completed: !task.completed },
    });
  };
  const handlerDeleteTask = async () => {
    deleteTask({ uid, board: path, taskId: task.id });
  };
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
        "&:not(:last-child)": {
          mb: 1,
        },
        "&::before": {
          bgcolor: "transparent",
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
        <TaskCheckbox
          sx={{ mr: 1.2 }}
          checked={task.completed}
          onChange={toggleCompletedTask}
        />
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
          {task.description || "None"}
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
          <IconButton
            color="error"
            size="large"
            sx={{ p: 1 }}
            onClick={handlerDeleteTask}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
