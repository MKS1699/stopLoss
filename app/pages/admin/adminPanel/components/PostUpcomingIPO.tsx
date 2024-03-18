"use client";

import { useAppDispatch } from "@/app/hooks";
import { setPostUpcomingIPOInfo } from "@/app/redux/slice/postSlice";
import { useEffect, useState } from "react";

const PostUpcomingIPO = () => {
  const dispatch = useAppDispatch();
  const [upcomingIPO, setUpcomingIPO] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setPostUpcomingIPOInfo(upcomingIPO));
  }, [upcomingIPO]);

  return (
    <div className="w-auto h-auto flex flex-row gap-1 p-1 text-base dark:text-white items-center">
      <input
        type="checkbox"
        name="upcoming-ipo-checkbox"
        id="upcoming-ipo-checkbox"
        className="w-auto h-auto justify-self-center self-center"
        onChange={(e) => setUpcomingIPO(e.target.checked)}
      />
      <label
        className="w-full h-fit self-center justify-self-center font-medium"
        htmlFor="upcoming-ipo-checkbox"
        title="This post will be linked as to the upcoming IPO section."
      >
        Upcoming IPO
      </label>
    </div>
  );
};

export default PostUpcomingIPO;
