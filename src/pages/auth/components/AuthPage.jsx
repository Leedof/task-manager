import { Container } from "@mui/material";
import { AuthHeader } from "./AuthHeader";
import { AuthMain } from "./AuthMain";
import { AuthFooter } from "./AuthFooter";
import { useAuth } from "../../../hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthPage = ({ isLogin }) => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [isAuth, navigate]);

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
