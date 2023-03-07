import { Box, Button } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../../hooks";
import { signOut } from "../../../../store/app/thunks";
import { useDispatch } from "react-redux";

export const LayoutPage = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <Box sx={{ fontSize: 14 }}>
      <header>Header</header>
      <div>Sidebar</div>
      <div>Depends on URL section</div>
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
