import {
  PostPreviewButton,
  PostPublishButton,
  PostSaveButton,
  PostTitle,
} from ".";

export interface PostTitleBarPropsTypes {
  screen: "createPost" | "editPost";
}

const PostTitleBar = ({ screen }: PostTitleBarPropsTypes) => {
  return (
    <div className="w-full h-fit grid grid-rows-1 grid-flow-col lg:grid-cols-[53%_47%] xl:grid-cols-[60%_40%] 2xl:grid-cols-[70%_30%] gap-2 py-3 items-center pr-2">
      <PostTitle screen={screen} />
      <div className="w-full h-fit grid grid-rows-1 grid-flow-col gap-2">
        <PostSaveButton />
        <PostPreviewButton />
        <PostPublishButton screen={screen} />
      </div>
    </div>
  );
};

export default PostTitleBar;
