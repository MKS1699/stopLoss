"use client";

import { FetchPostsType } from "@/app/api";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Main = () => {
  const params = useSearchParams();
  const category: any = params.get("category");

  const posts = FetchPostsType({ postType: category, limit: 10 });

  return (
    <div className="w-fit min-h-screen pt-3">
      {posts && posts?.length > 0 ? (
        posts?.map((post: any, index: number) => {
          const {
            _id,
            postImage,
            postTitle,
            postAuthors,
            postDescription,
            postUpdated,
          } = post;
          return (
            <div key={`Post-${category}-${_id}`}>
              <Link
                href={{
                  pathname: "/pages/home/articles",
                  query: {
                    id: _id,
                  },
                }}
                className="md:mx-auto w-full md:w-1/2 h-28 md:h-32 lg:h-40 grid grid-cols-[40%_60%] grid-rows-1 overflow-hidden pb-3"
              >
                <Image
                  src={
                    postImage?.links?.thumbnail
                      ? postImage?.links?.thumbnail
                      : postImage?.links?.medium
                      ? postImage?.links?.medium
                      : postImage?.links?.original
                  }
                  width={500}
                  height={500}
                  alt={postImage?.caption}
                  className="w-full h-full"
                />
                <div className="w-full h-full px-1 border-y-2 border-r-2 border-solid border-blue-400 pb-1 overflow-hidden">
                  <div className="text-base lg:text-lg 2xl:text-xl font-medium">
                    {postTitle}
                  </div>
                  {/* date & author */}
                  <div className="w-full h-fit flex flex-row justify-between">
                    {/* author */}
                    <div className="text-xs w-fit h-fit">
                      {postAuthors.map((author: string, index: number) => (
                        <div
                          className=""
                          key={`Post-${category}-${_id}-Author-${index}`}
                        >
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
                  <div className="text-xs lg:text-sm w-full h-full">
                    {postDescription}
                  </div>
                </div>
              </Link>
            </div>
          );
        })
      ) : (
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
