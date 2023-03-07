import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  accessToken: "",
  email: "",
  isAuth: false,
  isInitialized: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.userId = payload.uid;
      state.accessToken = payload.accessToken;
      state.email = payload.email;
      state.isAuth = payload.isAuth;
    },
    setInitialized: (state, { payload }) => {
      state.isInitialized = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setInitialized } = appSlice.actions;

export const appReducer = appSlice.reducer;
