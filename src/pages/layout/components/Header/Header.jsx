import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = ({ handleDrawerToggle }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: "calc(100% - 180px)", md: "calc(100% - 230px)" },
        ml: { sm: "180px", md: "230px" },
        border: "none",
      }}
      color="transparent"
      variant="outlined"
    >
      <Toolbar sx={{ minHeight: { xs: "64px", md: "94px" } }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        Responsive Header
      </Toolbar>
    </AppBar>
  );
};
