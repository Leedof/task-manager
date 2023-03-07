//to be separated
import * as yup from "yup";

export const schema = yup.object({
  login: yup.string().required("Required field"),
  password: yup
    .string()
    .min(6, "Min length 6 symbols")
    .required("Required field"),
});
