"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { PostCardList } from "../../components";
import { useGetPostsByType } from "@/app/hooks/apiHooks";
import { createTitleURL } from "@/app/utils/tools";
import { useEffect } from "react";

const Main = () => {
  const params = useParams();
  const category: any = params.section;
  const router = useRouter();
  const { isLoading, posts } = useGetPostsByType({
    postType: category,
    limit: 10,
  });

  // need to prefetch posts here based on isLoading
  useEffect(() => {
    if (!isLoading) {
      posts.map((post: any) => {
        const { _id: id, postTitle, postType } = post;
        router.prefetch(
          `/pages/home/categories/${postType}/${createTitleURL(
            postTitle
          )}?id=${id}`
        );
      });
    }
  }, [router, isLoading]);
  return (
    <div className="w-full min-h-screen pt-3">
      {/* Currently this page has no more than 1 section but will be divided into more once there is hell lot for content available */}
      {/* posts listing section */}
      {isLoading ? (
        // posts list loading
        <div className="lg:mx-auto w-full lg:w-1/2 min-h-screen flex flex-col gap-y-3 justify-evenly container mx-auto">
          <div className="w-full h-24 rounded-md animate-skeleton"></div>
          <div className="w-full h-24 rounded-md animate-skeleton"></div>
          <div className="w-full h-24 rounded-md animate-skeleton"></div>
          <div className="w-full h-24 rounded-md animate-skeleton"></div>
          <div className="w-full h-24 rounded-md animate-skeleton"></div>
          <div className="w-full h-24 rounded-md animate-skeleton"></div>
          <div className="w-full h-24 rounded-md animate-skeleton"></div>
          <div className="w-full h-24 rounded-md animate-skeleton"></div>
          <div className="w-full h-24 rounded-md animate-skeleton"></div>
          <div className="w-full h-24 rounded-md animate-skeleton"></div>
        </div>
      ) : // posts list loaded
      posts && posts?.length > 0 ? (
        // posts are present
        <div className="lg:mx-auto w-full lg:w-1/2 h-auto flex flex-col gap-2 px-2">
          {posts?.map((post: any, index: number) => {
            const {
              _id,
              postImage,
              postTitle,
              postAuthors,
              postDescription,
              postUpdated,
              postType,
            } = post;
            // adding `new badge` to post based on which post is latest
            if (index === 0)
              return <PostCardList post={post} showNewBadge key={_id} />;
            else return <PostCardList post={post} key={_id} />;
          })}
        </div>
      ) : (
        // posts are not present for the category
        <div className="absolute container md:mx-auto w-full md:w-1/2 min-h-screen pb-3 text-4xl top-1/2 left-1/2 -translate-x-1/2">
          Currently we have no <span className="text-7xl">{category}</span>
          related articles.
          <ul className="w-full h-auto list-disc mt-6">
            <h3 className="text-3xl">Here&apos;s what you can do</h3>
            <li className="ml-8">
              Go to{" "}
              <Link
                href={"/"}
                className="text-blue-700 cursor-pointer animate-ping"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Main;
