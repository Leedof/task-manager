import { Paper } from "@mui/material";
import { SectionTitle } from "./../../UI/SectionTitle";

export const FormWrapperAuth = ({ children, title }) => {
  return (
    <Paper
      elevation={3}
      sx={{ padding: 2.5, width: { xs: "90%", sm: "70%", md: "350px" } }}
    >
      <SectionTitle sx={{ textAlign: "center", mb: 2.5 }}>{title}</SectionTitle>
      {children}
    </Paper>
  );
};
