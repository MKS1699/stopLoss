import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppSliceTypes } from "@/app/types/slice_types/appSliceTypes";

const initialState: AppSliceTypes = {
  appTheme: "light",
  appScreen: "home",
  adminScreen: "login",
  loginStatus: false,
  guestMode: false,
  loadingState: true,
  rememberMe: true,
};

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    // App theme changing reducer
    toggleAppTheme: (state) => {
      const currTheme = state.appTheme;
      if (currTheme === "light") {
        state.appTheme = "dark";
      } else if (currTheme === "dark") {
        state.appTheme = "light";
      }
    },
    // App Screen setting reducer
    setAppScreen: (
      state,
      action: PayloadAction<{
        screen: AppSliceTypes["appScreen"];
      }>
    ) => {
      state.appScreen = action.payload.screen;
    },
    // Admin Screen setting reducer
    setAdminScreen: (
      state,
      action: PayloadAction<{ screen: AppSliceTypes["adminScreen"] }>
    ) => {
      state.adminScreen = action.payload.screen;
    },
    // set login status
    setAppAdminLoginStatus: (
      state,
      action: PayloadAction<{
        loginStatus: AppSliceTypes["loginStatus"];
      }>
    ) => {
      state.loginStatus = action.payload.loginStatus;
    },
    // set guestMode
    setAppAdminGuestMode: (
      state,
      action: PayloadAction<{ guestMode: AppSliceTypes["guestMode"] }>
    ) => {
      state.guestMode = action.payload.guestMode;
    },
    toggleLoadingState: (state) => {
      state.loadingState = !state.loadingState;
    },
    // toggle RemeberMe:
    toggleRememberMe: (state) => {
      state.rememberMe = !state.rememberMe;
    },
    // reset app State
    resetAppState: (state) => {
      state.adminScreen = "login";
      state.appScreen = "home";
      state.appTheme = "light";
      state.guestMode = false;
      state.loginStatus = false;
      state.loadingState = true;
      state.rememberMe = true;
    },
  },
});

export const {
  toggleAppTheme,
  setAppScreen,
  setAdminScreen,
  setAppAdminLoginStatus,
  setAppAdminGuestMode,
  toggleLoadingState,
  toggleRememberMe,
  resetAppState,
} = appSlice.actions;

export default appSlice.reducer;
