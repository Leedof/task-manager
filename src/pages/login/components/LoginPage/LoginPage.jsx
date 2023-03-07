import { Container, Grid } from "@mui/material";
import { AuthFooter } from "../../../../components/authFooter";
import { AuthHeader } from "../../../../components/authHeader";
import { LoginForm } from "../../../../modules/loginForm";
import { Logo } from "../../../../UI/Logo";

export const LoginPage = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AuthHeader />
      {/* LOGIN MAIN */}
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
          <LoginForm />
        </Grid>
      </Grid>
      {/* LOGIN FOOTER */}
      <AuthFooter />
    </Container>
  );
};
