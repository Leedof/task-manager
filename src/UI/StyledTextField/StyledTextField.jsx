import { styled } from "@mui/system";
import { TextField } from "@mui/material";

const CssTextField = styled(TextField)(({ theme }) => {
  const { palette } = theme;
  return {
    "& .MuiInputBase-root": {
      "&:hover fieldset": {
        border: `2px solid ${palette.primary.main}`,
      },
    },
  };
});

export const StyledTextField = (props) => {
  return <CssTextField variant="outlined" fullWidth={true} {...props} />;
};
