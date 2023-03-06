import logo from "../../assets/logo.svg";
import { Box } from "@mui/material";

export const Logo = ({ sx }) => {
  return (
    <Box sx={sx}>
      <img src={logo} alt="logo" style={{ width: "100%" }} />
    </Box>
  );
};
