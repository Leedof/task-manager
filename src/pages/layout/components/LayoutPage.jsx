import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { signOut } from "../../../store/app/thunks";
import { Header } from "./Header/Header";
//UI
import { Navbar } from "./Navbar/Navbar";
import { useState } from "react";

export const LayoutPage = () => {
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <Box>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Navbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Outlet />
    </Box>
  );
};
