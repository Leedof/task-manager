import { Box } from "@mui/material";
import { SectionTitle } from "../../UI/SectionTitle";
import { Task } from "../Task";

export const TaskList = ({ tasks, title, updateTask, deleteTask }) => {
  return (
    <Box sx={{ "&:not(:last-child)": { mb: 2.5 } }}>
      <SectionTitle sx={{ mb: 2.5 }}>{title}</SectionTitle>
      <Box>
        {tasks.length
          ? tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))
          : "There is no task here"}
      </Box>
    </Box>
  );
};
