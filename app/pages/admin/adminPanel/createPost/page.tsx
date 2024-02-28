import React from "react";
import { CreatePostTitle } from "./components";

const CreatePost = () => {
  return (
    <div className="w-full h-screen grid grid-flow-row grid-cols-1">
      {/* mobile post creation */}
      {/* Title and Publish btn also (preview mode : feature to be added later stage) */}
      <CreatePostTitle />
    </div>
  );
};

export default CreatePost;
