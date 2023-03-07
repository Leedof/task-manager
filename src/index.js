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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Routing />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
