import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import Routing from "./pages";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./assets/defaultTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Routing />
    </ThemeProvider>
  </React.StrictMode>
);
