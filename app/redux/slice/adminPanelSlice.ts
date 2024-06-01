import { AdminPanelSliceTypes } from "@/app/types/slice_types/adminPanelSliceTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AdminPanelSliceTypes = {
  panelScreen: "allPosts",
  workingOnPost: false,
  postUploadStatus: "idle",
  userPosts: [],
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
    //post upload status
    setPostUploadStatus: (
      state,
      action: PayloadAction<AdminPanelSliceTypes["postUploadStatus"]>
    ) => {
      state.postUploadStatus = action.payload;
    },
    // add user posts
    setAdminPanelUserPosts: (
      state,
      action: PayloadAction<{ posts: {}[][] }>
    ) => {
      const { posts } = action.payload;
      state.userPosts[state.userPosts.length] = posts;
    },
    // clear user posts and add new
    reAddAdminPanelUserPosts: (
      state,
      action: PayloadAction<{ posts: {}[] }>
    ) => {
      (state.userPosts = []), (state.userPosts[0] = action.payload.posts);
    },
    // reset all panel data
    resetAdminPanelState: (state) => {
      state.panelScreen = "allPosts";
      state.workingOnPost = false;
      state.postUploadStatus = "idle";
      state.userPosts = [];
    },
  },
});

export const {
  changeAdminPanelScreen,
  changeAdminPanelWorkingOnPost,
  setPostUploadStatus,
  setAdminPanelUserPosts,
  reAddAdminPanelUserPosts,
  resetAdminPanelState,
} = adminPanelSlice.actions;
export default adminPanelSlice.reducer;
