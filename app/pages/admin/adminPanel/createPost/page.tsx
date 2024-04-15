"use client";
import { useAppSelector } from "@/app/hooks";
import {
  PostExternalLinks,
  PostImagenDescription,
  PostOptionsBar,
  PostParagraphs,
  PostTags,
  PostTitleBar,
  PostUpcomingIPO,
} from "../components";

const CreatePost = () => {
  const screen = "createPost";
  const postType = useAppSelector((state) => state.post.postType);
  return (
    <div className="w-full h-auto grid grid-flow-row grid-cols-1 gap-1">
      {/* Title Bar*/}
      <PostTitleBar screen={screen} />
      {/* Post Options Bar */}
      <PostOptionsBar screen={screen} />
      {/* if post type is IPO */}
      {/* Post UpcomingIPO Status */}
      {postType === "ipo" && <PostUpcomingIPO />}
      {/* Post Thumbnail/mainImage &  */}
      <PostImagenDescription screen={screen} />
      {/* Post Paragraphs */}
      <PostParagraphs screen={screen} />
      {/* Post External Links */}
      <PostExternalLinks screen={screen} />
      {/* Post Tags */}
      <PostTags screen={screen} />
    </div>
  );
};

export default CreatePost;
