import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../helpers/validationScheme";
// UI
import { FormWrapperAuth } from "./../../../../components/FormWrapperAuth/FormWrapperAuth";
import { FormInputText } from "../../../../components/FormInputText";
import { FormInputPass } from "../../../../components/FormInputPass";
import { PrimaryBtn } from "./../../../../UI/PrimaryBtn";
import { RouterLink } from "../../../../UI/RouterLink";

export const LoginForm = () => {
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormWrapperAuth title="Log in">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
      >
        <FormInputText label="Login" name="login" control={control} />
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
