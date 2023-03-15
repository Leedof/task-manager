import { useNavigate } from "react-router-dom";
import { Paper, Typography, Box, Button } from "@mui/material";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography component="h1" variant="h1">
          404
        </Typography>
        <Typography component="span" variant="h3">
          page not found
        </Typography>
      </Box>

      <Button variant="contained" size="large" onClick={() => navigate("/")}>
        Home page
      </Button>
    </Box>
  );
};
