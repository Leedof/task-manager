import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  typography: {
    fontFamily: "Nunito",
  },
  palette: {
    primary: {
      main: "rgba(41, 161, 156, 1)",
    },
    warning: {
      main: "rgba(236, 202, 117, 1)",
    },
    error: {
      main: "rgba(240, 84, 84, 1)",
    },
  },
});
