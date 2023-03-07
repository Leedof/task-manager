//to be separated
import * as yup from "yup";
export const schema = yup.object({
  email: yup.string().required("Required field"),
  password: yup
    .string()
    .min(6, "Min length 6 symbols")
    .max(16, "Max length 16symbols")
    .required("Required field"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Your passwords do not match.")
    .required("Please confirm your password."),
});
