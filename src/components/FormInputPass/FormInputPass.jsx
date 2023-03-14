import { useController } from "react-hook-form";
import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const FormInputPass = ({ label, name, control, ...props }) => {
  const { field, fieldState } = useController({ name, control });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      variant="outlined"
      fullWidth={true}
      //Default hook-form props
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
      //To handle errors
      error={!!fieldState.error}
      helperText={fieldState?.error ? fieldState.error.message : ""}
      label={label}
      //Show pass icon
      InputProps={
        field.value
          ? {
              type: showPassword ? "text" : "password",
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
      {...props}
    />
  );
};
