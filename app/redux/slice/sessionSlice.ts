import { SessionSliceTypes } from "@/app/types/slice_types/sessionSliceTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: SessionSliceTypes = {
  userName: "",
  token: "",
  userId: "",
};

export const sessionSlice = createSlice({
  name: "Session Slice",
  initialState,
  reducers: {
    // set session token
    setSessionToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    // set session userName
    setSessionUserName: (
      state,
      action: PayloadAction<{ userName: string }>
    ) => {
      state.userName = action.payload.userName;
    },
    // set session userId
    setSessionUserId: (state, action: PayloadAction<{ userId: string }>) => {
      state.userId = action.payload.userId;
    },
    // reset session credentials
    resetSession: (state) => {
      state.token = "";
      state.userName = "";
      state.userId = "";
    },
  },
});

export const {
  setSessionUserName,
  setSessionToken,
  setSessionUserId,
  resetSession,
} = sessionSlice.actions;

export default sessionSlice.reducer;
