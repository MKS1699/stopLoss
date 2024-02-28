import { LoginSliceTypes } from "@/app/types/slice_types/logInSlice";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: LoginSliceTypes = {
  userPassword: "",
  userEmail: "",
  rememberMe: false,
  userName: "",
};

export const loginSlice = createSlice({
  name: "Login Slice",
  initialState,
  reducers: {
    // setting userPassword
    setLoginUserPassword: (
      state,
      action: PayloadAction<{ userPassword: string }>
    ) => {
      state.userPassword = action.payload.userPassword;
    },
    // setting userEmail
    setLoginUserEmail: (
      state,
      action: PayloadAction<{ userEmail: string }>
    ) => {
      state.userEmail = action.payload.userEmail;
    },
    // setting user name
    setLoginUserName: (state, action: PayloadAction<{ userName: string }>) => {
      state.userName = action.payload.userName;
    },
    // setting remember me state
    setRememberMe: (state, action: PayloadAction<{ rememberMe: boolean }>) => {
      state.rememberMe = action.payload.rememberMe;
    },
    // resetting all the data on the slice state
    resetLoginSlice: (state) => {
      state.userPassword = "";
      state.userEmail = "";
      state.rememberMe = false;
    },
  },
});

export const {
  setLoginUserPassword,
  setLoginUserEmail,
  setLoginUserName,
  setRememberMe,
  resetLoginSlice,
} = loginSlice.actions;

export default loginSlice.reducer;
