import { PostSliceTypes } from "./postSliceTypes";

export interface AdminPanelSliceTypes {
  panelScreen:
    | "allPosts"
    | "createPost"
    | "editPost"
    | "userSettings"
    | "panelSettings";
  workingOnPost: boolean;
  postUploadStatus: "idle" | "uploading" | "uploaded";
  userPosts: PostSliceTypes[][];
}
