"use client";

import { useGetLatestPosts } from "@/app/hooks/apiHooks";
import { PostCardList } from "../../components";
import { LatestPostCard } from ".";
import { pacifico } from "@/app/utils/fonts";

const LatestPosts = () => {
  const { isLoading, latestPosts } = useGetLatestPosts();
  return (
    <div className="w-full h-auto">
      {isLoading ? (
        // loading animation
        <div className="flex flex-col gap-y-3">
          <div className="w-full h-36 md:h-60 rounded-md animate-skeleton bg-[#ccc]"></div>
          <div className="w-full h-10 md:h-20 bg-[#ccc] rounded-md animate-skeleton"></div>
          <div className="w-full h-10 md:h-20 bg-[#ccc] rounded-md animate-skeleton"></div>
          <div className="w-full h-10 md:h-20 bg-[#ccc] rounded-md animate-skeleton"></div>
          <div className="w-full h-10 md:h-20 bg-[#ccc] rounded-md animate-skeleton"></div>
        </div>
      ) : (
        // post card
        <div className="flex flex-col gap-y-3">
          <div
            className={`${pacifico.className} w-full h-fit text-center text-lg italic text-dark  dark:text-light`}
          >
            Latest
          </div>
          {latestPosts.map((post: any, index: number) => {
            const { _id } = post;
            if (index === 0) return <LatestPostCard post={post} />;
            else return <PostCardList post={post} key={_id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default LatestPosts;
