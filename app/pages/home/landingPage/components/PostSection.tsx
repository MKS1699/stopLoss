"use client";

import { PostCardList } from "../../components";
import { useGetLatestPostsIds, useGetPostsByType } from "@/app/hooks/apiHooks";
import { pacifico } from "@/app/utils/fonts";
import { useRouter } from "next/navigation";
import { CiViewList } from "react-icons/ci";
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

  const { latestPostsIds } = useGetLatestPostsIds();

  return (
    <div className="w-auto h-fit flex flex-col px-2 gap-2 mt-4">
      <div
        className={`${pacifico.className} w-full h-fit text-center text-lg italic text-dark dark:text-light
        flex flex-row items-center justify-start gap-x-2 cursor-pointer hover:underline
        `}
        onClick={() => {
          console.log("clicked", postType);
          // to do route change
        }}
      >
        {POSTTYPE(postType)}
        <CiViewList />
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
        posts?.map((post: any, index: number) => {
          const { _id: postId } = post; // postId
          let showThisPost: boolean = true; // showingPost
          // checking if Posts exists in latestPosts or not
          for (let latestPostId of latestPostsIds) {
            if (latestPostId === postId) {
              // changing the variable to not show post if it
              // exists in latestPosts section
              showThisPost = false;
            }
          }
          // showing posts if it is nor in latestPost
          if (showThisPost) {
            return (
              <PostCardList
                post={post}
                key={`${postType}-PostCard-${index}`}
                // titleTextSize="text-base"
              />
            );
          }
        })
      )}
    </div>
  );
};

export default PostSection;
