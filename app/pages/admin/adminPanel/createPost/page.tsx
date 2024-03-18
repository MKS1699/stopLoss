import {
  PostImagenDescription,
  PostOptionsBar,
  PostParagraphs,
  PostTags,
  PostTitleBar,
} from "../components";

const CreatePost = () => {
  const screen = "createPost";
  return (
    <div className="w-full h-auto grid grid-flow-row grid-cols-1 gap-1">
      {/* Title Bar*/}
      <PostTitleBar screen={screen} />
      {/* Post Options Bar */}
      <PostOptionsBar screen={screen} />
      {/* Post Thumbnail/mainImage &  */}
      <PostImagenDescription screen={screen} />
      {/* Post Paragraphs */}
      <PostParagraphs screen={screen} />
      {/* Post Tags */}
      <PostTags screen={screen} />
    </div>
  );
};

export default CreatePost;
