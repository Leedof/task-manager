import { Box, Button } from "@mui/material";
import { Outlet } from "react-router-dom";

export const LayoutPage = () => {
  return (
    <Box sx={{ fontSize: 14 }}>
      <header>Header</header>
      <div>Sidebar</div>
      <div>Depends on URL section</div>
      <Button variant="contained">Test</Button>
      <Outlet />
    </Box>
  );
};
