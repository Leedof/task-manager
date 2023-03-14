import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { IconButton } from "@mui/material";

export const CloseBtn = (props) => {
  return (
    <IconButton {...props}>
      <HighlightOffOutlinedIcon fontSize="inherit" />
    </IconButton>
  );
};
