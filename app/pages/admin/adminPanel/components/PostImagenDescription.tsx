"use client";

import { PostDescription, PostImage } from ".";
import { PostTitleBarPropsTypes } from "./PostTitleBar";

interface PostImagenDescriptionPropsTypes extends PostTitleBarPropsTypes {}

const PostImagenDescription = ({ screen }: PostImagenDescriptionPropsTypes) => {
  return (
    <div className="w-full h-full grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-2">
      <PostImage
        screen={screen}
        type="mainImage"
        captionLabel="main-image-caption"
        imageLabel="main-image"
      />
      <PostDescription screen={screen} />
    </div>
  );
};

export default PostImagenDescription;
