import { Drawer, Toolbar } from "@mui/material";
import { Logo } from "./../../../../UI/Logo/Logo";
import { Boards } from "../../../../modules/boards";
import { SingOutBtn } from "../../../../UI/SingOutBtn/SingOutBtn";

export const Navbar = () => {
  const drawer = (
    <>
      <Toolbar sx={{ p: 2.5, mb: 5 }}>
        <Logo sx={{ display: "flex" }} />
      </Toolbar>
      <Boards />
      <SingOutBtn />
    </>
  );
  return (
    <>
      {/* <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer> */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 230 },
        }}
        open
        PaperProps={{ elevation: 4, sx: { borderRight: "none" } }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
