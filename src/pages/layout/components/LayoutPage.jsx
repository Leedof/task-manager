import { Box } from "@mui/material";

import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks";

import { Header } from "./Header/Header";
//UI
import { Navbar } from "./Navbar/Navbar";
import { useState } from "react";
import { Board } from "../../../modules/board";
import { CreateTask } from "../../../modules/createTask";

export const LayoutPage = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [modalCreateTask, setModalCreateTask] = useState(false);

  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <Box>
      <CreateTask
        modalCreateTask={modalCreateTask}
        setModalCreateTask={setModalCreateTask}
      />
      <Header
        setModalCreateTask={setModalCreateTask}
        setMobileNavbar={setMobileNavbar}
      />
      <Navbar mobileNavbar={mobileNavbar} setMobileNavbar={setMobileNavbar} />
      <Box
        component="main"
        sx={{
          width: { sm: "calc(100% - 180px)", md: "calc(100% - 230px)" },
          ml: { sm: "180px", md: "230px" },
          pt: { xs: "70px", md: "94px" },
          px: { xs: 2, sm: 3, md: 5, lg: 6, xl: 8 },
        }}
      >
        <Board />
      </Box>
    </Box>
  );
};
