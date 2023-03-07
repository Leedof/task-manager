//to be separated
import * as yup from "yup";
export const schema = yup.object({
  login: yup.string().required("Required field"),
  password: yup
    .string()
    .min(6, "Min length 6 symbols")
    .required("Required field"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});
