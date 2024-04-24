"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import { useEffect, useState } from "react";
import { setPostTags } from "@/app/redux/slice/postSlice";
import toast from "react-hot-toast";

interface PostTagPropsTypes extends PostTitleBarPropsTypes {
  tagID: number;
}
const PostTag = ({ screen, tagID }: PostTagPropsTypes) => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.post.postTags);
  // storing tag as react state
  const [tag, setTag] = useState<string>("");

  const [duplicateTag, setDuplicateTag] = useState<boolean>(false);

  // adding tag to state slice
  useEffect(() => {
    setDuplicateTag(false);
    const tagExists = tags.filter((val: string) =>
      val.length > 0 ? val === tag : null
    );
    if (tagExists.length <= 0) {
      dispatch(setPostTags({ tag, tagID }));
    } else {
      setDuplicateTag(true);
      toast.error("Tags cannot be same");
    }
  }, [tag]);
  return (
    <input
      type="text"
      className={`w-full h-fit p-1 text-base bg-[#4cb050] bg-opacity-50 text-[#003b31] rounded-md cursor-text outline-none text-center placeholder:text-[#003b31] placeholder:text-opacity-70 ${
        duplicateTag ? "border-solid border-2 border-red-500 rounded-md" : ""
      }`}
      placeholder={`Tag ${tagID + 1}`}
      id={`Tag ${tagID + 1}`}
      onChange={(e) => setTag(e.target.value)}
    />
  );
};

export default PostTag;
