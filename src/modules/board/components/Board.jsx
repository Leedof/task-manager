import { useGetTasksQuery } from "../../../api/todosApi";
import { Paper } from "@mui/material";
import { TaskList } from "../../../components/TaskList";
import { useUid } from "./../../../hooks";
import { useBoard } from "./../../../hooks";

export const Board = () => {
  const uid = useUid();
  //Get current board
  const { path } = useBoard();

  //Fetch data per board
  const { data, isFetching } = useGetTasksQuery({
    uid: uid,
    board: path,
  });

  //LOADING
  if (isFetching) {
    return <p>LOADING...</p>;
  }

  //HELPERS
  const completed = data.filter((item) => item.completed);
  const notCompleted = data.filter((item) => !item.completed);

  return (
    <Paper elevation={4} sx={{ p: 2.5, maxWidth: { xs: "none" } }}>
      <TaskList title="Active tasks" tasks={notCompleted} />
      <TaskList title="Completed tasks" tasks={completed} />
    </Paper>
  );
};
