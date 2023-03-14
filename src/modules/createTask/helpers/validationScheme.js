import * as yup from "yup";

export const schema = yup.object({
  title: yup
    .string()
    .required("Required field")
    .max(75, "Max length is 75 symbols"),
});
