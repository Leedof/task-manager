import {
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../../../api/todosApi";
import { Paper } from "@mui/material";
import { TaskList } from "../../../components/TaskList";
import { useUid, useBoard } from "./../../../hooks";
import { Loader } from "../../../UI/Loader";

export const Board = () => {
  const uid = useUid();
  //Get current board
  const { path } = useBoard();

  //Fetch data per board
  const { data, isLoading } = useGetTasksQuery({
    uid: uid,
    board: path,
  });
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  //LOADING
  if (isLoading) {
    return <Loader />;
  }

  //HELPERS
  const completed = data
    .filter((item) => item.completed)
    .sort((a, b) => b.created - a.created);
  const notCompleted = data
    .filter((item) => !item.completed)
    .sort((a, b) => b.created - a.created);

  return (
    <Paper elevation={4} sx={{ p: 2.5, maxWidth: { xs: "none" } }}>
      <TaskList
        title="Active tasks"
        tasks={notCompleted}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <TaskList
        title="Completed tasks"
        tasks={completed}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </Paper>
  );
};
