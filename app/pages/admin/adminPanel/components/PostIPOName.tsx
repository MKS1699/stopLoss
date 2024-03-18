"use client";

import { useAppDispatch } from "@/app/hooks";
import { setPostIPONameInfo } from "@/app/redux/slice/postSlice";
import { useEffect, useState } from "react";

const PostIPOName = () => {
  const dispatch = useAppDispatch();
  const [ipoName, setIPOName] = useState<string>("");

  //storing ipo name in state
  useEffect(() => {
    dispatch(setPostIPONameInfo(ipoName));
  }, [ipoName]);
  return (
    <div className="w-full h-auto flex flex-row my-1 gap-1">
      <label
        htmlFor="ipo-name"
        className="w-auto h-auto self-center text-base font-medium"
      >
        IPO
      </label>
      <input
        type="text"
        name="ipo-name"
        id="ipo-name"
        placeholder="IPO / Company Name"
        className="w-full h-fit p-1 text-base bg-[#4cb050] bg-opacity-50 text-[#003b31] rounded-md cursor-text outline-none text-center placeholder:text-[#003b31] placeholder:text-opacity-70"
        onChange={(e) => setIPOName(e.target.value.toString())}
      />
    </div>
  );
};

export default PostIPOName;
