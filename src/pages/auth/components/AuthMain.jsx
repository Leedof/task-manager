import { Grid } from "@mui/material";
import { SignUpForm } from "../../../modules/signUpForm";
import { Logo } from "../../../UI/Logo";
import { LoginForm } from "./../../../modules/loginForm";

export const AuthMain = ({ isLogin }) => {
  return (
    <Grid
      container
      component="main"
      flexGrow={1}
      sx={{ alignContent: "center" }}
    >
      <Grid
        item
        xs={5}
        sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
      >
        <Logo sx={{ width: "100%" }} />
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </Grid>
    </Grid>
  );
};
