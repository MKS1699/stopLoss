"use client";

import Image from "next/image";
import Link from "next/link";

interface PostCardPropsTypes {
  post: any;
}

const PostCard = ({ post }: PostCardPropsTypes) => {
  function getDate(timestamp: Date) {
    const date = new Date(timestamp);
    return date;
  }

  const postTitle = post?.postTitle;
  function createTitleURL(title: string): string {
    const title_lower = title.toLowerCase();
    const titleArr = title_lower.split(" ");
    const newTitle = titleArr.join("-");
    return newTitle;
  }
  return (
    <>
      {/* mobile version */}
      <Link
        href={{
          pathname: `/pages/home/categories/${post?.postType}/${createTitleURL(
            postTitle
          )}`,
          query: {
            id: post?._id,
          },
        }}
        className="md:hidden ring-2 ring-blue-400 rounded-md cursor-pointer overflow-hidden mt-1"
      >
        <div className="w-full h-28 lg:h-32 grid grid-cols-[40%_60%] overflow-hidden md:hidden">
          {/* Post Image */}
          <div className="w-full h-full">
            <Image
              src={
                post?.postImage?.links?.thumbnail
                  ? post?.postImage?.links?.thumbnail
                  : post?.postImage?.links?.medium
                  ? post?.postImage?.links?.medium
                  : post?.postImage?.links?.original
              }
              sizes="100vw"
              alt={post?.postImage?.caption}
              className="rounded-tl-md rounded-bl-md"
              width={150}
              height={150}
            />
          </div>
          {/* Post Info */}
          <div className="w-full h-full py-1 flex flex-col text-dark dark:text-light">
            {/* Post Title*/}
            <div className="w-full h-8 overflow-hidden text-lg font-medium text-blue-500 px-1">
              {post?.postTitle}
            </div>
            {/* Post Creation info */}
            <div className="w-full h-5 p-1 flex flex-row justify-between items-center">
              {/* Post Author */}
              <div className="text-sm font-light">{post?.postAuthors[0]}</div>
              {/* Post created/updated date */}
              <div className="text-xs font-light">
                {getDate(post?.postUpdated).toLocaleDateString()}
              </div>
            </div>
            {/* Post Description */}
            <div className="w-full h-16 text-xs text-justify font-light px-1 py-1">
              {post?.postDescription}
            </div>
          </div>
        </div>
      </Link>
      {/* tablet and above */}
      <Link
        href={{
          pathname: `/pages/home/categories/${post?.postType}/${createTitleURL(
            postTitle
          )}`,
          query: {
            id: post?._id,
          },
        }}
        className="hidden md:block rounded-md shadow-md"
      >
        <div
          className="hidden md:block w-full h-36 bg-cover bg-center relative cursor-pointer rounded-md"
          style={{
            backgroundImage: `url(${post?.postImage?.links?.original})`,
          }}
        >
          {/* post info */}
          <div className="absolute w-full h-[40%] top-[60%] px-1 overflow-hidden rounded-b-md bg-blue-500 bg-opacity-50">
            {/* post title */}
            <div className="w-fit h-fit z-10 text-xl font-medium text-left">
              {post?.postTitle}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
