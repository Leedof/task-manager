import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const SectionTitle = styled(Typography)(({ theme }) => {
  const {
    palette,
    typography: { pxToRem },
  } = theme;

  return {
    color: palette.primary.main,
    fontWeight: 600,
    fontSize: pxToRem(18),
    lineHeight: 1.4,
    letterSpacing: "0.02em",
  };
});
