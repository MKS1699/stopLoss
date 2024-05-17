"use client";

import { PostCardList } from "../../components";
import { useGetPostsByType } from "@/app/hooks/apiHooks";
import { pacifico } from "@/app/utils/fonts";

interface PostSectionPropsTypes {
  postType:
    | "ipo"
    | "news"
    | "tutorial"
    | "blog"
    | "sponsored_post"
    | "company_profile";
  limit?: number;
}

const PostSection = ({ postType, limit = -1 }: PostSectionPropsTypes) => {
  const { isLoading, posts } = useGetPostsByType({ limit, postType });
  const POSTTYPE = (postType: PostSectionPropsTypes["postType"]) => {
    if (postType === "blog") {
      return "Blog";
    } else if (postType === "company_profile") {
      return "Company Profiles";
    } else if (postType === "ipo") {
      return "IPO";
    } else if (postType === "news") {
      return "News";
    } else if (postType === "sponsored_post") {
      return "Sponsored Posts";
    } else if (postType === "tutorial") {
      return "Tutorials";
    }
  };
  return (
    <div className="w-auto h-fit flex flex-col px-2 gap-2 mt-4">
      <div
        className={`${pacifico.className} w-full h-fit text-center text-lg italic text-dark dark:text-light`}
      >
        {POSTTYPE(postType)}
      </div>
      {isLoading ? (
        <div className="w-full h-auto flex flex-col gap-y-3 my-2">
          <div className="w-full h-24 rounded-md grid grid-cols-[30%_70%] grid-rows-2 gap-2">
            {/* image */}
            <div className="w-full h-full animate-skeleton rounded-md col-span-1 row-span-2"></div>
            {/* title */}
            <div className="w-full h-full animate-skeleton rounded-md row-start-2 col-start-2"></div>
            {/* info */}
            <div className="w-full h-full animate-skeleton rounded-md"></div>
          </div>
          <div className="w-full h-24 rounded-md grid grid-cols-[30%_70%] grid-rows-2 gap-2">
            {/* image */}
            <div className="w-full h-full animate-skeleton rounded-md col-span-1 row-span-2"></div>
            {/* title */}
            <div className="w-full h-full animate-skeleton rounded-md row-start-2 col-start-2"></div>
            {/* info */}
            <div className="w-full h-full animate-skeleton rounded-md"></div>
          </div>
          <div className="w-full h-24 rounded-md grid grid-cols-[30%_70%] grid-rows-2 gap-2">
            {/* image */}
            <div className="w-full h-full animate-skeleton rounded-md col-span-1 row-span-2"></div>
            {/* title */}
            <div className="w-full h-full animate-skeleton rounded-md row-start-2 col-start-2"></div>
            {/* info */}
            <div className="w-full h-full animate-skeleton rounded-md"></div>
          </div>
          <div className="w-full h-24 rounded-md grid grid-cols-[30%_70%] grid-rows-2 gap-2">
            {/* image */}
            <div className="w-full h-full animate-skeleton rounded-md col-span-1 row-span-2"></div>
            {/* title */}
            <div className="w-full h-full animate-skeleton rounded-md row-start-2 col-start-2"></div>
            {/* info */}
            <div className="w-full h-full animate-skeleton rounded-md"></div>
          </div>
          <div className="w-full h-24 rounded-md grid grid-cols-[30%_70%] grid-rows-2 gap-2">
            {/* image */}
            <div className="w-full h-full animate-skeleton rounded-md col-span-1 row-span-2"></div>
            {/* title */}
            <div className="w-full h-full animate-skeleton rounded-md row-start-2 col-start-2"></div>
            {/* info */}
            <div className="w-full h-full animate-skeleton rounded-md"></div>
          </div>
        </div>
      ) : (
        posts?.map((post: any, index: number) => (
          <PostCardList
            post={post}
            key={`${postType}-PostCard-${index}`}
            // titleTextSize="text-base"
          />
        ))
      )}
    </div>
  );
};

export default PostSection;
