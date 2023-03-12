import { Button, Icon, Typography } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export const SingOutBtn = ({ onClickHandler }) => {
  return (
    <Button
      variant="text"
      sx={{
        fontWeight: 400,
        lineHeight: 1.37,
        letterSpacing: "0.025em",
        px: 2.5,
        mt: "auto",
        mb: 2.5,
        justifyContent: "flex-start",
      }}
      onClick={onClickHandler}
    >
      <Icon fontSize="medium" sx={{ mr: 1.2 }}>
        <LogoutOutlinedIcon fontSize="medium" />
      </Icon>
      <Typography sx={{ fontSize: (theme) => theme.typography.pxToRem(20) }}>
        Sign out
      </Typography>
    </Button>
  );
};
