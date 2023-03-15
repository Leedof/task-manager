import { Drawer, Toolbar } from "@mui/material";
import { Logo } from "./../../../../UI/Logo/Logo";
import { BoardsList } from "../../../../modules/boardsList";
import { SingOutBtn } from "../../../../UI/SingOutBtn/SingOutBtn";
import { signOut } from "../../../../store";
import { useDispatch } from "react-redux";

export const Navbar = ({ mobileNavbar, setMobileNavbar }) => {
  const dispatch = useDispatch();
  const handlerCloseMobileNavbar = () => {
    setMobileNavbar(false);
  };

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
      <BoardsList handlerCloseMobileNavbar={handlerCloseMobileNavbar} />
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
        open={mobileNavbar}
        onClose={handlerCloseMobileNavbar}
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
