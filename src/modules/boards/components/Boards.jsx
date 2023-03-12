import { Box, Typography } from "@mui/material";
import { boards } from "../constants/boards";
import { NavList } from "../../../components/NavList";

export const Boards = () => {
  return (
    <Box component="nav">
      <Typography
        component="h4"
        sx={(theme) => ({
          fontSize: theme.typography.pxToRem(24),
          color: theme.palette.primary.main,
          lineHeight: 1.37,
          fontWeight: 600,
          px: 2.5,
          mb: 2.5,
          letterSpacing: "0.03em",
        })}
      >
        Boards
      </Typography>

      <NavList boards={boards} />
    </Box>
  );
};
