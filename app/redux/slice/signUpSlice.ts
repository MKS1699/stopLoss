import { SignUpSliceTypes } from "@/app/types/slice_types/signUpSliceTypes";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: SignUpSliceTypes = {
  userName: "",
  userPassword: "",
};

const signUpSlice = createSlice({
  name: "SignUp Slice",
  initialState,
  reducers: {
    // setting up user name
    setSignUpUserName: (state, action: PayloadAction<{ userName: string }>) => {
      state.userName = action.payload.userName;
    },
    // setting up userPassword
    setSignUpUserPassword: (
      state,
      action: PayloadAction<{ userPassword: string }>
    ) => {
      state.userPassword = action.payload.userPassword;
    },
    // resetting signup state
    resetSignUpState: (state) => {
      state.userName = "";
      state.userPassword = "";
    },
  },
});

export const { setSignUpUserName, setSignUpUserPassword, resetSignUpState } =
  signUpSlice.actions;

export default signUpSlice.reducer;
