import { Toolbar } from "@mui/material";
import { Logo } from "../../../UI/Logo";
export const AuthHeader = () => {
  return (
    <Toolbar
      component="header"
      disableGutters={true}
      sx={{
        display: { xs: "flex", md: "none" },
        padding: "10px 0",
      }}
    >
      <Logo
        sx={{
          width: { xs: "80px", sm: "100px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </Toolbar>
  );
};
