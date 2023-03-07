import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUp } from "../../../../store/app/thunks";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../helpers/validationScheme";
//UI
import { PrimaryBtn } from "../../../../UI/PrimaryBtn";
import { FormInputText } from "../../../../components/FormInputText";
import { FormInputPass } from "../../../../components/FormInputPass";
import { RouterLink } from "../../../../UI/RouterLink";
import { FormWrapperAuth } from "./../../../../components/FormWrapperAuth";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = ({ email, password }) => {
    dispatch(signUp({ email, password }));
  };

  return (
    <FormWrapperAuth title="Sign up">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
      >
        <FormInputText label="Email" name="email" control={control} />
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
    </FormWrapperAuth>
  );
};
