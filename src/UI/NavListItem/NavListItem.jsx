import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavListItem = ({ title, icon, to }) => {
  return (
    <ListItemButton
      component={NavLink}
      to={to}
      disableRipple
      sx={(theme) => ({
        padding: `0 ${theme.typography.pxToRem(20)}`,
        position: "relative",
        transition: "right 0.3s ease 0",
        overflow: "hidden",
        "&:hover": {
          color: theme.palette.primary.main,
        },
        "&::after": {
          content: "''",
          position: "absolute",
          width: "30px",
          height: "18px",
          backgroundColor: theme.palette.primary.main,
          right: "-30px",
          borderRadius: "50% 0 0 50%",
        },
        "&.active::after": {
          right: 0,
        },
      })}
    >
      <ListItemIcon sx={{ color: "inherit", minWidth: "34px" }}>
        {icon}
      </ListItemIcon>
      <Typography
        component="span"
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: 1.37,
          letterSpacing: "0.025em",
        }}
      >
        {title}
      </Typography>
    </ListItemButton>
  );
};
