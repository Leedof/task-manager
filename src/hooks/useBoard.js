import { useLocation } from "react-router-dom";

export const useBoard = () => {
  const location = useLocation();
  //Take from path all small
  let currentBoard =
    location.pathname === "/" ? "home" : location.pathname.slice(1);

  //Normalize to Home / Business
  let normalBoard = currentBoard[0].toUpperCase() + currentBoard.slice(1);

  return { path: currentBoard, board: normalBoard };
};
