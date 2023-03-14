import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useController } from "react-hook-form";

export const FormSelect = ({ name, control, label, options, sx }) => {
  const { field, fieldState } = useController({ name, control });

  return (
    <FormControl sx={sx}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        variant="outlined"
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        //Default hook-form props
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
        inputRef={field.ref}
        label={label}
        //To handle errors
        error={!!fieldState.error}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

//   <Select
//   //Default hook-form props
//   onChange={field.onChange}
//   onBlur={field.onBlur}
//   value={field.value}
//   name={field.name}
//   inputRef={field.ref}
//   //To handle errors
//   error={!!fieldState.error}
//   helperText={fieldState?.error ? fieldState.error.message : ""}
// >
//   {options.map((option) => {
//     return (
//       <MenuItem key={option} value={option}>
//         {option}
//       </MenuItem>
//     );
//   })}
// </Select>
