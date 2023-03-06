import { Box, Link, Typography } from "@mui/material";

export const AuthFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: "10px",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {`© copyright ${new Date().getFullYear()}`}
        <Link color="inherit" href="#" sx={{ ml: 5 }}>
          Privacy Policy
        </Link>{" "}
      </Typography>
    </Box>
  );
};
