"use client";
import { useAppSelector, useGetPostsByUser } from "@/app/hooks";
import { PostsList } from "./components";
import { useEffect, useState } from "react";
import { Pagination } from "@/app/components";
import {
  useGetNumOfPostsByUser,
  useGetMorePostsByUser,
} from "@/app/hooks/apiHooks";
import { PostSliceTypes } from "@/app/types/slice_types/postSliceTypes";

const AllPosts = () => {
  const userId = useAppSelector((state) => state.session.userId);
  const userPosts = useAppSelector((state) => state.adminPanel.userPosts);
  const { isLoading: firstPostsPageLoading } = useGetPostsByUser({
    userId,
  });
  const { numberOfPostsByUser } = useGetNumOfPostsByUser();
  const { getMorePostsByUser } = useGetMorePostsByUser();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsToShow, setPostsToShow] = useState<PostSliceTypes[]>([]);
  function handleUpdateCurrentPage(page: number): void {
    if (page >= 1) {
      setCurrentPage(page);
    }
  }

  useEffect(() => {
    if (userPosts.length > 1) {
      setPostsToShow(userPosts[currentPage - 1]);
    }
  }, [userPosts]);

  // doing pagination for the user if posts more than 10
  useEffect(() => {
    if (numberOfPostsByUser > 10) {
      getMorePostsByUser();
    }
  }, [numberOfPostsByUser]);
  return (
    /* All Posts Section */
    <div className="w-full min-h-screen p-2 flex flex-col justify-between gap-y-2 text-lg relative gap-4">
      {!firstPostsPageLoading && (
        <>
          {/* Posts List section */}
          <PostsList posts={postsToShow} />
          {/* Pagination */}

          <Pagination
            currPage={currentPage}
            updateCurrPage={handleUpdateCurrentPage}
            makePagesOf={userPosts}
            updatePostsToShow={() => setPostsToShow(userPosts[currentPage - 1])}
          />
        </>
      )}
      {firstPostsPageLoading && (
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
