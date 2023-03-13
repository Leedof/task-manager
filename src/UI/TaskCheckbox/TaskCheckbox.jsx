import { Checkbox } from "@mui/material";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

export const TaskCheckbox = ({ sx, ...props }) => {
  return (
    <Checkbox
      icon={<AssignmentTurnedInOutlinedIcon />}
      checkedIcon={<AssignmentTurnedInIcon />}
      onClick={(e) => {
        e.stopPropagation();
      }}
      sx={{ p: 0, "& .MuiSvgIcon-root": { fontSize: 25 }, ...sx }}
      {...props}
    />
  );
};
