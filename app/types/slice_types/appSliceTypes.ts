export interface AppSliceTypes {
  appScreen: "home" | "admin";
  appTheme: "light" | "dark";
  adminScreen: "login" | "signUp" | "forgotPassword" | "adminPanel";
  loginStatus: boolean;
  guestMode: boolean;
}
