import { configureStore } from "@reduxjs/toolkit";

import {
  adminPanelSlice,
  appSlice,
  loginSlice,
  postSlice,
  sessionSlice,
  signUpSlice,
  upcomingIPOEntriesSlice,
  dataSlice,
} from "../slice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    login: loginSlice,
    session: sessionSlice,
    post: postSlice,
    signUp: signUpSlice,
    adminPanel: adminPanelSlice,
    upcomingIPO: upcomingIPOEntriesSlice,
    data: dataSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
