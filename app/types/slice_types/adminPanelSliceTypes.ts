export interface AdminPanelSliceTypes {
  panelScreen:
    | "allPosts"
    | "createPost"
    | "editPost"
    | "userSettings"
    | "panelSettings";
  workingOnPost: boolean;
}
