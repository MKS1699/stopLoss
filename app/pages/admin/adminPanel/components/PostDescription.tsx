"use client";

import { useAppDispatch } from "@/app/hooks";
import { setPostDescription } from "@/app/redux/slice/postSlice";
import { ChangeEvent, useEffect, useState } from "react";
import { PostTitleBarPropsTypes } from "./PostTitleBar";

interface PostDescriptionPropsTypes extends PostTitleBarPropsTypes {}

const PostDescription = ({ screen }: PostDescriptionPropsTypes) => {
  const dispatch = useAppDispatch();

  const [postDescriptionState, setPostDescriptionState] = useState<string>("");

  // function for handling textarea input
  // particularly the next line input in the textarea
  function handlePostDescription(e: ChangeEvent<HTMLTextAreaElement>) {
    let val = e.target.value;
    let valLines = val.split("\n");
    let valWithHTML = valLines.join("<br />");
    setPostDescriptionState(valWithHTML);
  }

  useEffect(() => {
    if (screen === "createPost") {
      dispatch(setPostDescription(postDescriptionState.toString()));
    }
  }, [postDescriptionState]);

  return (
    <div className="w-full h-full py-1 flex flex-col gap-1">
      <label
        htmlFor="post-description"
        className="lg:text-lg w-full h-auto dark:text-white"
      >
        Description :
      </label>
      <textarea
        className="w-full h-full bg-[#4cb050] bg-opacity-50 outline-none rounded-md px-1 text-base py-1 md:text-lg scrollbar-thin placeholder:text-[#003b31] placeholder:text-opacity-70"
        name="post-description"
        id="post-description"
        onChange={(e) => handlePostDescription(e)}
        placeholder="Post description."
      />
    </div>
  );
};

export default PostDescription;
