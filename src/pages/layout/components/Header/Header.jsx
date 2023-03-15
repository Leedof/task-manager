import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { PrimaryBtn } from "./../../../../UI/PrimaryBtn/PrimaryBtn";
import { makeUsername } from "./../../helpers/makeUsername";
import { useSelector } from "react-redux";
import { selectEmail } from "../../../../store";

export const Header = ({ setMobileNavbar, setModalCreateTask }) => {
  const email = useSelector(selectEmail);
  const handlerOpenMobileNavbar = () => {
    setMobileNavbar(true);
  };
  const handlerOpenCreateTaskModal = () => {
    setModalCreateTask(true);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: "calc(100% - 180px)", md: "calc(100% - 230px)" },
        ml: { sm: "180px", md: "230px" },
        px: { xs: 2, sm: 3, md: 5, lg: 6, xl: 8 },
      }}
      color="transparent"
      elevation={0}
    >
      <Toolbar
        sx={{
          minHeight: { xs: "64px", md: "94px" },
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
        disableGutters
      >
        <IconButton
          size="large"
          aria-label="open drawer"
          color="primary"
          edge="start"
          onClick={handlerOpenMobileNavbar}
          sx={{ display: { xs: "flex", sm: "none" }, ml: 0 }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        <PrimaryBtn
          variant="contained"
          startIcon={<AddCircleOutlineOutlinedIcon />}
          onClick={handlerOpenCreateTaskModal}
          sx={{ flex: "0 0 160px" }}
        >
          Create task
        </PrimaryBtn>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" }, overflowX: "auto" }}
        >
          {makeUsername(email)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
