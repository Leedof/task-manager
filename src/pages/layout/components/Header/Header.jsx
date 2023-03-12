import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { PrimaryBtn } from "./../../../../UI/PrimaryBtn/PrimaryBtn";
import { makeUsername } from "./../../helpers/makeUsername";
import { useSelector } from "react-redux";
import { selectEmail } from "../../../../store";

export const Header = ({ handleDrawerToggle }) => {
  const email = useSelector(selectEmail);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: "calc(100% - 180px)", md: "calc(100% - 230px)" },
        ml: { sm: "180px", md: "230px" },
      }}
      color="transparent"
      elevation={0}
    >
      <Toolbar
        sx={{
          minHeight: { xs: "64px", md: "94px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          size="large"
          aria-label="open drawer"
          color="primary"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "flex", sm: "none" }, ml: 0 }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        <PrimaryBtn
          variant="contained"
          startIcon={<AddCircleOutlineOutlinedIcon />}
          sx={{ flex: "0 0 160px" }}
        >
          Create task
        </PrimaryBtn>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          {makeUsername(email)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
