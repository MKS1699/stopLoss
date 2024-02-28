import { AdminPanelSliceTypes } from "@/app/types/slice_types/adminPanelSliceTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AdminPanelSliceTypes = {
  panelScreen: "allPosts",
  workingOnPost: false,
};

const adminPanelSlice = createSlice({
  name: "Admin Panel",
  initialState,
  reducers: {
    // changePanelScreen
    changeAdminPanelScreen: (
      state,
      action: PayloadAction<{ screen: AdminPanelSliceTypes["panelScreen"] }>
    ) => {
      state.panelScreen = action.payload.screen;
    },
    // change working on post
    changeAdminPanelWorkingOnPost: (
      state,
      action: PayloadAction<{
        workingStatus: AdminPanelSliceTypes["workingOnPost"];
      }>
    ) => {
      state.workingOnPost = action.payload.workingStatus;
    },
    // reset all panel data
    resetAdminPanelState: (state) => {
      (state.panelScreen = "allPosts"), (state.workingOnPost = false);
    },
  },
});

export const {
  changeAdminPanelScreen,
  changeAdminPanelWorkingOnPost,
  resetAdminPanelState,
} = adminPanelSlice.actions;
export default adminPanelSlice.reducer;
