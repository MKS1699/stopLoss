"use client";

import { useEffect, useState } from "react";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import { useAppDispatch } from "@/app/hooks";
import { setPostTags } from "@/app/redux/slice/postSlice";

interface PostTagsPropsTypes extends PostTitleBarPropsTypes {}

// todo :
// check for duplicate tags and alert the user based on it

const PostTags = ({ screen }: PostTagsPropsTypes) => {
  const dispatch = useAppDispatch();
  // tags state
  const [tags, setTags] = useState<string[]>([]); // individual tags
  const [tagsString, setTagsString] = useState<string>(""); //tag string raw input

  // function for turning raw tags string into individual tags
  function handleTags() {
    let tagsArr: string[] = tagsString.split(",");
    setTags(tagsArr);
  }

  // creating individual tags on tagString update
  useEffect(() => {
    handleTags();
  }, [tagsString]);

  // function for updating individual tags in the raw string
  useEffect(() => {
    for (var i = 0; i < tags.length; i++) {
      dispatch(setPostTags({ tag: tags[i], tagID: i }));
    }
  }, [tags]);

  return (
    <div className="w-full h-auto flex flex-col justify-evenly items-center justify-items-center mb-2 gap-2 border-b-2 border-solid border-[#003b31] dark:border-[#4cb050] pb-2">
      <div className="font-semibold">Tags</div>
      <input
        type="text"
        className="w-full h-fit p-1 text-base bg-[#4cb050] bg-opacity-50 text-[#003b31] rounded-md cursor-text outline-none placeholder:text-[#003b31] placeholder:text-opacity-70 text-left indent-2"
        placeholder={`Enter Tags separated by , :-  tag1,tag2 . At least 20 unique tags are required.`}
        onChange={(e) => setTagsString(e.target.value.toString())}
        value={tagsString}
      />
    </div>
  );
};

export default PostTags;
