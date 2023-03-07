import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  accessToken: "",
  email: "",
  isAuth: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = appSlice.actions;

export const appReducer = appSlice.reducer;
