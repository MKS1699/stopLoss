import { createTitleURL } from "@/app/utils/tools";
import Image from "next/image";
import Link from "next/link";

export interface PostCardListTypes {
  post: {
    postType: string;
    _id: string;
    postTitle: string;
    postImage: {
      links: {
        original: string;
        medium: string;
        thumbnail: string;
      };
      caption: string;
    };
    postAuthors: string[];
    postUpdated: Date;
  };
  showNewBadge?: boolean;
  titleTextSize?: string;
}

const PostCardList = ({
  post,
  showNewBadge = false,
  titleTextSize,
}: PostCardListTypes) => {
  const { _id, postAuthors, postImage, postTitle, postType, postUpdated } =
    post;
  return (
    <div
      key={`Post-${postType}-${_id}`}
      className="grid grid-cols-[20%_80%] grid-rows-1 gap-x-2 rounded-md bg-[#fff] dark:bg-dark drop-shadow-md py-5 px-2 h-20 lg:h-24 relative dark:text-light text-dark"
    >
      {/* post Image */}
      <Link
        href={{
          pathname: `/pages/home/categories/${postType}/${createTitleURL(
            postTitle
          )}`,
          query: {
            id: _id,
          },
        }}
        className="cursor-pointer"
      >
        <Image
          src={
            postImage?.links?.thumbnail
              ? postImage?.links?.thumbnail
              : postImage?.links?.medium
              ? postImage?.links?.medium
              : postImage?.links?.original
          }
          width={200}
          height={200}
          alt={postImage?.caption}
          className="w-24 lg:w-28 h-full rounded-md "
        />
      </Link>
      {/* post Info */}
      <div className="w-full h-full pl-1 pr-3 pb-1 grid grid-cols-1 grid-rows-[85%_15%]">
        <Link
          href={{
            pathname: `/pages/home/categories/${postType}/${createTitleURL(
              postTitle
            )}`,
            query: {
              id: _id,
            },
          }}
          className="w-full h-fit overflow-hidden cursor-pointer"
        >
          <div
            className={`w-full h-fit truncate text-lg xl:text-xl 2xl:text-2xl font-medium !${titleTextSize}`}
          >
            {postTitle}
          </div>
        </Link>
        {/* date & author */}
        <div className="w-full h-fit flex flex-row justify-between self-end">
          {/* author */}
          <div className="text-xs w-fit h-fit">
            {postAuthors.map((author: string, index: number) => (
              <div className="" key={`Post-${postType}-${_id}-Author-${index}`}>
                {index === 0
                  ? author
                  : index > 0
                  ? ", " + author + ", "
                  : index === postAuthors.length - 1
                  ? " ," + author
                  : author}
              </div>
            ))}
          </div>
          {/* date */}
          <div className="text-xs w-fit h-fit text-right">
            {new Date(postUpdated).toLocaleDateString()}
          </div>
        </div>
      </div>
      {/* new badge only & only on first article */}
      {showNewBadge && (
        <div className="absolute bg-[#dc2626] top-[40%] right-0 md:-right-5 z-10 text-light p-1 text-xs flex flex-row items-center gap-1 ring-1 ring-light rounded-md">
          <div className="w-2 h-2 bg-light rounded-full"></div>
          <span>New</span>
        </div>
      )}
    </div>
  );
};

export default PostCardList;
