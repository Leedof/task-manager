import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../helpers/validationScheme";
import { handleErrorMsg } from "../../helpers/errorMsgHandler";
// UI
import { FormWrapperAuth } from "./../../../../components/FormWrapperAuth/FormWrapperAuth";
import { FormInputText } from "../../../../components/FormInputText";
import { FormInputPass } from "../../../../components/FormInputPass";
import { PrimaryBtn } from "./../../../../UI/PrimaryBtn";
import { RouterLink } from "../../../../UI/RouterLink";
import { signIn } from "../../../../store/app/thunks";
import { FormError } from "../../../../components/FormError";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ email, password }) => {
    const { status } = await dispatch(signIn({ email, password })).unwrap();
    if (status !== "Success") {
      setError("root.serverError", { status: handleErrorMsg(status) });
    }
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
        <PrimaryBtn
          variant="contained"
          type="submit"
          disabled={isSubmitting || isSubmitSuccessful}
        >
          Login
        </PrimaryBtn>
        <Typography>
          No account? <RouterLink to="/register">Create one!</RouterLink>
        </Typography>
      </Box>
      <FormError
        isSubmitting={isSubmitting}
        isSubmitSuccessful={isSubmitSuccessful}
        error={errors.root?.serverError.status}
      />
      <Typography sx={{ fontSize: "14px", color: "grey" }}>
        Kindly use these credentials:
        <br />
        Login: test@gmail.com
        <br />
        Password: 123456
      </Typography>
    </FormWrapperAuth>
  );
};
