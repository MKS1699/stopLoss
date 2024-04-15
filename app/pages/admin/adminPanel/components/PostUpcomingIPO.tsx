"use client";

import { useAppDispatch } from "@/app/hooks";
import { setPostUpcomingIPOInfo } from "@/app/redux/slice/postSlice";
import { useEffect, useState } from "react";

import PostUpcomingIPOSelection from "./PostUpcomingIPOSelection";
import toast from "react-hot-toast";

const PostUpcomingIPO = () => {
  const dispatch = useAppDispatch();
  const [upcomingIPO, setUpcomingIPO] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setPostUpcomingIPOInfo(upcomingIPO));
    if (upcomingIPO) {
      toast.success("UpcomingIPO Enabled.");
    } else {
      toast.error("UpcomingIPO disabled.");
    }
  }, [upcomingIPO]);

  return (
    <div
      className={`w-full h-auto py-3 px-2 border-solid border-2 rounded-md ${
        upcomingIPO ? "border-green-500" : "border-gray-500"
      }`}
    >
      <div
        className="mx-auto w-fit h-auto flex flex-row gap-x-4 items-center cursor-cell"
        onClick={() => setUpcomingIPO(!upcomingIPO)}
      >
        <div
          className={`w-5 h-5 rounded-full ${
            upcomingIPO ? "bg-green-500" : "bg-gray-500"
          }`}
        ></div>
        <div
          className={`${
            upcomingIPO ? "text-black dark:text-white" : "text-gray-500"
          }`}
        >
          Upcoming IPO
        </div>
      </div>
      {/* Available UpcomingIPO List */}
      <PostUpcomingIPOSelection upcomingIPO={upcomingIPO} />
    </div>
  );
};

export default PostUpcomingIPO;
