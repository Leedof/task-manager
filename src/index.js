import React from "react";
import ReactDOM from "react-dom/client";
// Auth
import "./firebase";
// Store
import { Provider } from "react-redux";
import { store } from "./store";
// Routing
import Routing from "./pages";
// UI
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./assets/defaultTheme";
//Date picker
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en-gb";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-gb"}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Routing />
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>
);
