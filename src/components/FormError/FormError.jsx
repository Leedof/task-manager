import { Box, CircularProgress, Alert } from "@mui/material";

export const FormError = ({ isSubmitting, isSubmitSuccessful, error }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
      }}
    >
      {isSubmitting && <CircularProgress color="primary" />}
      {error && <Alert severity="error">{error}</Alert>}
      {isSubmitSuccessful && <Alert severity="success">Success</Alert>}
    </Box>
  );
};
