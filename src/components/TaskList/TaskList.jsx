import { Box } from "@mui/material";
import { SectionTitle } from "../../UI/SectionTitle";
import { Task } from "../Task";

export const TaskList = ({ tasks, title }) => {
  return (
    <Box sx={{ "&:not(:last-child)": { mb: 2.5 } }}>
      <SectionTitle sx={{ mb: 2.5 }}>{title}</SectionTitle>
      <Box>
        {tasks.length
          ? tasks.map((task) => <Task task={task} key={task.id} />)
          : "There is no task here"}
      </Box>
    </Box>
  );
};
