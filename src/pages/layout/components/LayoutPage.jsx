import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { signOut } from "../../../store/app/thunks";
//UI
import { Navbar } from "./Navbar/Navbar";

export const LayoutPage = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <Box>
      <Navbar />
      {/* Temporaty content */}
      <Button
        variant="contained"
        onClick={() => {
          dispatch(signOut());
        }}
      >
        Test
      </Button>
      <Outlet />
    </Box>
  );
};
