import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { useController } from "react-hook-form";

export const FormDatePicker = ({ control, name }) => {
  const { field } = useController({ name, control });
  return (
    <DesktopDateTimePicker
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
    />
  );
};
