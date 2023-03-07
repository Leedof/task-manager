//to be separated
import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().email("Enter valid email").required("Required field"),
  password: yup
    .string()
    .min(6, "Min length 6 symbols")
    .max(16, "Max length 16 symbols")
    .required("Required field"),
});
