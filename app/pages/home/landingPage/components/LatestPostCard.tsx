import Image from "next/image";
import { PostCardListTypes } from "../../components/PostCardList";
import Link from "next/link";
import { createTitleURL } from "@/app/utils/tools";

interface LatestPostCardTypes {
  post: PostCardListTypes["post"];
}
const LatestPostCard = ({ post }: LatestPostCardTypes) => {
  const { _id, postAuthors, postImage, postTitle, postType, postUpdated } =
    post;
  return (
    <div className="w-full h-60 bg-light dark:bg-dark rounded-md p-4 shadow-xl relative flex flex-col">
      <Link
        href={{
          pathname: `/pages/home/categories/${postType}/${createTitleURL(
            postTitle
          )}`,
          query: {
            id: _id,
          },
        }}
      >
        <Image
          src={postImage?.links?.original}
          alt={postImage?.caption}
          width={500}
          height={500}
          quality={100}
          priority
          className="w-full h-40 rounded-md"
        />
      </Link>
      <Link
        href={{
          pathname: `/pages/home/categories/${postType}/${createTitleURL(
            postTitle
          )}`,
          query: {
            id: _id,
          },
        }}
      >
        <div className="w-full h-full text-lg lg:text-xl 2xl:text-2xl font-medium overflow-hidden truncate text-dark dark:text-light">
          {postTitle}
        </div>
      </Link>
      <div className="text-xs w-full h-fit flex flex-row justify-between text-dark dark:text-light">
        <div className="w-full h-fit grid grid-flow-col grid-rows-1 text-left">
          {postAuthors.map((author: string, index: number) => author)}
        </div>
        <div>{new Date(postUpdated).toLocaleDateString()}</div>
      </div>
      {/* latest badge */}
      <div className="absolute w-4 h-4 p-1 bg-light text-light rounded-full text-xs right-0 md:-right-1 top-0 md:-top-1 grid grid-cols-1 grid-rows-1 animate-pulse ring-1 ring-[#dc2626]">
        <div className="w-2 h-2 bg-[#dc2626] rounded-full self-center justify-self-center"></div>
      </div>
    </div>
  );
};

export default LatestPostCard;
