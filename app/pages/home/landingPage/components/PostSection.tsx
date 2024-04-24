"use client";

import { FetchPostsType } from "@/app/api";
import { PostSliceTypes } from "@/app/types/slice_types/postSliceTypes";
import { useEffect } from "react";
import { PostCard } from ".";

const PostSection = ({
  postType,
  limit = -1,
}: {
  postType:
    | "ipo"
    | "news"
    | "tutorial"
    | "blog"
    | "sponsored_post"
    | "company_profile";
  limit?: number;
}) => {
  const data = FetchPostsType({ postType, limit });

  return (
    <div className="w-auto h-fit flex flex-col md:grid md:grid-cols-5 xl:grid-cols-8 px-2 my-1 gap-2 md:gap-x-3 overflow-hidden scrollbar-none mb-4 pb-2">
      {data?.map((post: {}, index: number) => (
        <PostCard post={post} key={`${postType}-PostCard-${index}`} />
      ))}
    </div>
  );
};

export default PostSection;
