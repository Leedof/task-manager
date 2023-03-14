import { useController } from "react-hook-form";

import { TextField } from "@mui/material";

export const FormInputText = ({ label, name, control, ...props }) => {
  const { field, fieldState } = useController({ name, control });

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
      {...props}
    />
  );
};
