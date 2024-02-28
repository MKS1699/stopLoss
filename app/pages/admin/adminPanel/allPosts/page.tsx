import React from "react";
import { PostsList } from "./components";

const AllPosts = () => {
  return (
    /* All Posts Section */
    <div className="w-full h-screen p-2  grid grid-rows-[90%_10%] grid-cols-1 text-lg relative gap-4">
      {/* Posts List section */}
      <PostsList />
      {/* Pagination */}
      <div className="">Pagination</div>
    </div>
  );
};

export default AllPosts;
