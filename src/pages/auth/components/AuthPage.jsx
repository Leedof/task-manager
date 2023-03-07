import { Container } from "@mui/material";
import { AuthHeader } from "./AuthHeader";
import { AuthMain } from "./AuthMain";
import { AuthFooter } from "./AuthFooter";

export const AuthPage = ({ isLogin }) => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AuthHeader />
      <AuthMain isLogin={isLogin} />
      <AuthFooter />
    </Container>
  );
};
