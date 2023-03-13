import { useLocation } from "react-router-dom";
import { useGetTasksQuery } from "../../../api/todosApi";
import { useSelector } from "react-redux";
import { selectUid } from "../../../store";
import { Paper } from "@mui/material";
import { TaskList } from "../../../components/TaskList";

export const Board = () => {
  const uid = useSelector(selectUid);
  //Get current board
  const location = useLocation();
  let currentBoard =
    location.pathname === "/" ? "home" : location.pathname.slice(1);
  //Fetch data per board
  const { data, isLoading } = useGetTasksQuery({
    uid: uid,
    board: currentBoard,
  });

  //LOADING
  if (isLoading) {
    return <p>LOADING...</p>;
  }

  //HELPERS
  const completed = data.filter((item) => item.completed);
  const notCompleted = data.filter((item) => !item.completed);

  return (
    <Paper elevation={4} sx={{ p: 2.5, maxWidth: { xs: "none", md: "53%" } }}>
      <TaskList title="Active tasks" tasks={notCompleted} />
      <TaskList title="Completed tasks" tasks={completed} />
    </Paper>
  );
};
