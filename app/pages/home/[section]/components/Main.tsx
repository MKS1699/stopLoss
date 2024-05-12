"use client";

import { FetchPostsType } from "@/app/api";
import { createTitleURL } from "@/app/utils/tools";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Main = () => {
  const params = useParams();
  const category: any = params.section;

  const posts = FetchPostsType({ postType: category, limit: 10 });

  return (
    <div className="w-full min-h-screen pt-3">
      {posts && posts?.length > 0 ? (
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
            return (
              <div
                key={`Post-${category}-${_id}`}
                className="grid grid-cols-[20%_80%] grid-rows-1 gap-x-2 rounded-md bg-[#fff] dark:bg-dark drop-shadow-md py-5 px-2 h-28 lg:h-32 relative dark:text-light text-dark"
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
                    <div className="text-lg lg:text-xl 2xl:text-2xl font-medium">
                      {postTitle}
                    </div>
                  </Link>
                  {/* date & author */}
                  <div className="w-full h-fit flex flex-row justify-between self-end">
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
                </div>
                {/* new badge only & only on first article */}
                {index === 0 && (
                  <div className="absolute bg-[#dc2626] top-[40%] right-0 md:-right-5 z-10 text-light p-1 text-xs flex flex-row items-center gap-1 ring-1 ring-light rounded-md">
                    <div className="w-2 h-2 bg-light rounded-full"></div>
                    <span>New</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        // Rendered When no posts are found
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
