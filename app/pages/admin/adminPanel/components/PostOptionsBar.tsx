"use client";

import { useAppSelector } from "@/app/hooks";
import { PostAuthors, PostTypeSelection } from ".";
import { PostTitleBarPropsTypes } from "./PostTitleBar";

const PostOptionsBar = ({ screen }: PostTitleBarPropsTypes) => {
  const postType = useAppSelector((state) => state.post.postType);
  const adminPanelScreen = useAppSelector(
    (state) => state.adminPanel.panelScreen
  );

  return (
    <div className="w-full h-fit grid grid-rows-1 grid-flow-col border-y-2 gap-2 border-solid border-[#003b31] dark:border-[#4cb050]">
      {/* Selection of the Post Type */}
      <PostTypeSelection screen={screen} />
      {/* Post Author's */}
      <PostAuthors />
    </div>
  );
};

export default PostOptionsBar;
