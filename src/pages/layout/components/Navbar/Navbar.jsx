import { Drawer, Toolbar } from "@mui/material";
import { Logo } from "./../../../../UI/Logo/Logo";
import { Boards } from "../../../../modules/boards";
import { SingOutBtn } from "../../../../UI/SingOutBtn/SingOutBtn";
import { signOut } from "../../../../store";
import { useDispatch } from "react-redux";

export const Navbar = ({ mobileOpen, handleDrawerToggle }) => {
  const dispatch = useDispatch();

  const drawer = (
    <>
      <Toolbar
        sx={{
          p: 2.5,
          mb: 5,
          height: "94px",
          minHeight: { xs: "94px" },
        }}
      >
        <Logo sx={{ display: "flex", height: "100%" }} />
      </Toolbar>
      <Boards handleDrawerToggle={handleDrawerToggle} />
      <SingOutBtn
        onClickHandler={() => {
          dispatch(signOut());
        }}
      />
    </>
  );
  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 230 },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: "230px", sm: "180px", md: "230px" },
          },
        }}
        PaperProps={{ elevation: 4, sx: { borderRight: "none" } }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
