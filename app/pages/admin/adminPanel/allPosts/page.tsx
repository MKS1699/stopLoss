"use client";
import { useAppSelector, useGetPostsByUser } from "@/app/hooks";
import { PostsList } from "./components";
import { useState } from "react";
import { Pagination } from "@/app/components";

const AllPosts = () => {
  const userId = useAppSelector((state) => state.session.userId);
  const userPosts = useAppSelector((state) => state.adminPanel.userPosts);
  const { isLoading } = useGetPostsByUser({ userId });
  const [currentPage, setCurrentPage] = useState<number>(1);

  function handleUpdateCurrentPage(page: number): void {
    if (page >= 1) {
      setCurrentPage(page);
    }
  }
  return (
    /* All Posts Section */
    <div className="w-full h-screen p-2  grid grid-rows-[90%_10%] grid-cols-1 text-lg relative gap-4">
      {!isLoading && (
        <>
          {/* Posts List section */}
          <PostsList posts={userPosts[currentPage - 1]} />
          {/* Pagination */}
          <Pagination
            currPage={currentPage}
            updateCurrPage={handleUpdateCurrentPage}
            makePagesOf={userPosts}
          />
        </>
      )}
      {isLoading && (
        <div className="w-full h-full flex flex-col gap-y-2">
          <div className="w-full h-20 animate-skeleton"></div>
          <div className="w-full h-20 animate-skeleton"></div>
          <div className="w-full h-20 animate-skeleton"></div>
          <div className="w-full h-20 animate-skeleton"></div>
          <div className="w-full h-20 animate-skeleton"></div>
          <div className="w-full h-20 animate-skeleton"></div>
          <div className="w-full h-20 animate-skeleton"></div>
          <div className="w-full h-20 animate-skeleton"></div>
          <div className="w-full h-20 animate-skeleton"></div>
        </div>
      )}
    </div>
  );
};

export default AllPosts;
