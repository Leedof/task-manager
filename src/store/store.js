import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./app/slice";
import { todosApi } from "../api/todosApi";

export const store = configureStore({
  reducer: {
    app: appReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
