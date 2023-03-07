import { useController } from "react-hook-form";
import { StyledTextField } from "../../UI/StyledTextField";

export const FormInputText = ({ label, name, control }) => {
  const { field, fieldState } = useController({ name, control });

  return (
    <StyledTextField
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
    />
  );
};
