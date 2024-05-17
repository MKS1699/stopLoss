"use client";

import { useSearchParams } from "next/navigation";
import Article from "./Article";
import RelatedPosts from "./RelatedPosts";
import Tags from "./Tags";

import { useGetPost } from "@/app/hooks/apiHooks";

const Main = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const { isLoading: articleLoading, post } = useGetPost({
    id: id ? id : "",
  });

  return (
    <div className="md:container md:mx-auto md:w-1/2 bg-light dark:bg-bodyDark min-h-screen mt-2">
      {articleLoading ? (
        <div className="w-full h-full flex flex-col justify-evenly gap-y-2 mb-2">
          {/* main image */}
          <div className="w-full h-96 rounded-md animate-skeleton"></div>
          {/* title */}
          <div className="w-full h-20 rounded-md animate-skeleton"></div>
          {/* info */}
          <div className="w-full h-16 rounded-md animate-skeleton"></div>
          {/* description */}
          <div className="w-full h-32 rounded-md animate-skeleton"></div>
          {/* paragraph */}
          <div className="w-full h-16 rounded-md animate-skeleton"></div>
        </div>
      ) : (
        <Article post={post} />
      )}
      {/* <Tags tags={tags} /> */}
      {/* <RelatedPosts tags={tags} /> */}
    </div>
  );
};

export default Main;
