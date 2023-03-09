import { createAsyncThunk } from "@reduxjs/toolkit";
import { appAPI } from "../../api/appApi";
import { setInitialized, setUser } from "./slice";

export const signIn = createAsyncThunk(
  "app/signIn",
  async function ({ email, password }, { dispatch }) {
    try {
      const data = await appAPI.signInAPI(email, password);
      dispatch(
        setUser({
          uid: data.user.uid,
          email: data.user.email,
          accessToken: data.user.accessToken,
          isAuth: true,
        })
      );
      return { status: "Success" };
    } catch (error) {
      return { status: error.message };
    }
  }
);

export const signUp = createAsyncThunk(
  "app/signUp",
  async function ({ email, password }, { dispatch }) {
    try {
      const data = await appAPI.signUpAPI(email, password);
      dispatch(
        setUser({
          uid: data.user.uid,
          email: data.user.email,
          accessToken: data.user.accessToken,
          isAuth: true,
        })
      );
      return { status: "Success" };
    } catch (error) {
      return { status: error.message };
    }
  }
);

export const signOut = createAsyncThunk(
  "app/signOut",
  async function (_, { dispatch }) {
    try {
      await appAPI.singOut();
      dispatch(
        setUser({
          uid: "",
          email: "",
          accessToken: "",
          isAuth: false,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
);

export const authMe = createAsyncThunk(
  "app/authMe",
  async function (_, { dispatch }) {
    try {
      const data = await appAPI.authMe();
      if (!data) return;

      dispatch(
        setUser({
          uid: data.uid,
          email: data.email,
          accessToken: data.accessToken,
          isAuth: true,
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setInitialized(true));
    }
  }
);
