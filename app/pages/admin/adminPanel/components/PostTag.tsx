"use client";

import { useAppDispatch } from "@/app/hooks";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import { useEffect, useState } from "react";
import { setPostTags } from "@/app/redux/slice/postSlice";

interface PostTagPropsTypes extends PostTitleBarPropsTypes {
  tagID: number;
}
const PostTag = ({ screen, tagID }: PostTagPropsTypes) => {
  const dispatch = useAppDispatch();
  // storing tag as react state
  const [tag, setTag] = useState<string>("");

  // adding tag to state slice
  useEffect(() => {
    dispatch(setPostTags({ tag, tagID }));
  }, [tag]);
  return (
    <input
      type="text"
      className="w-full h-fit p-1 text-base bg-[#4cb050] bg-opacity-50 text-[#003b31] rounded-md cursor-text outline-none text-center placeholder:text-[#003b31] placeholder:text-opacity-70"
      placeholder={`Tag ${tagID + 1}`}
      id={`Tag ${tagID + 1}`}
      onChange={(e) => setTag(e.target.value)}
    />
  );
};

export default PostTag;
