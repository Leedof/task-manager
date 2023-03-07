import { Box, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
//to be separated
import * as yup from "yup";

import { SectionTitle } from "../../../../UI/SectionTitle";
import { PrimaryBtn } from "../../../../UI/PrimaryBtn";
import { FormInputText } from "../../../../components/FormInputText";
import { FormInputPass } from "../../../../components/FormInputPass";
import { RouterLink } from "../../../../UI/RouterLink";

const schema = yup.object({
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

export const SignUpForm = () => {
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      login: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 2.5, width: { xs: "90%", sm: "70%", md: "350px" } }}
    >
      <SectionTitle sx={{ textAlign: "center", mb: 2.5 }}>Sign up</SectionTitle>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
      >
        <FormInputText label="Login" name="login" control={control} />
        <FormInputPass label="Password" name="password" control={control} />
        <FormInputPass
          label="Confirm password"
          name="confirmPassword"
          control={control}
        />

        <PrimaryBtn variant="contained" type="submit">
          Sign up
        </PrimaryBtn>
        <Typography>
          Already have an account? <RouterLink to="/login">Sign in</RouterLink>
        </Typography>
      </Box>
    </Paper>
  );
};
