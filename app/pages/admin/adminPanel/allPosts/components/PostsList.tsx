import { PostTile } from ".";

interface PostsListPropsTypes {
  posts: {}[];
}

const PostsList = ({ posts }: PostsListPropsTypes) => {
  return (
    <div className="w-full h-full flex flex-col justify-items-start gap-y-2 relative">
      {posts?.map((post: any, index: number) => {
        // return index;
        const { _id, postTitle, postDescription, postImage } = post;
        const { caption, links } = postImage;
        return (
          <PostTile
            key={`Post Tile ${_id}`}
            caption={caption}
            description={postDescription}
            id={_id}
            mainImageLink={links.original}
            title={postTitle}
          />
        );
      })}
    </div>
  );
};

export default PostsList;
