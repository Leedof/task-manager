import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            transition: "border-color 200ms",
          },
          "&:hover fieldset": {
            border: `2px solid `,
            borderColor: "rgba(41, 161, 156, 1)!important",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Nunito",
    button: { textTransform: "none" },
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
