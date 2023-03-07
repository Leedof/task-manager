import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../helpers/validationScheme";
// UI
import { FormWrapperAuth } from "./../../../../components/FormWrapperAuth/FormWrapperAuth";
import { FormInputText } from "../../../../components/FormInputText";
import { FormInputPass } from "../../../../components/FormInputPass";
import { PrimaryBtn } from "./../../../../UI/PrimaryBtn";
import { RouterLink } from "../../../../UI/RouterLink";
import { signIn } from "../../../../store/app/thunks";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = ({ email, password }) => {
    dispatch(signIn({ email, password }));
  };

  return (
    <FormWrapperAuth title="Log in">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
      >
        <FormInputText label="Email" name="email" control={control} />
        <FormInputPass label="Password" name="password" control={control} />
        <PrimaryBtn variant="contained" type="submit">
          Login
        </PrimaryBtn>
        <Typography>
          No account? <RouterLink to="/register">Create one!</RouterLink>
        </Typography>
      </Box>
    </FormWrapperAuth>
  );
};
