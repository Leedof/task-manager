import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const PrimaryBtn = styled(Button)(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;
  return {
    padding: `${pxToRem(10)} ${pxToRem(25)}`,
    fontWeight: 600,
    fontSize: pxToRem(16),
    lineHeight: 1.37,
    letterSpacing: "0.01em",
  };
});
