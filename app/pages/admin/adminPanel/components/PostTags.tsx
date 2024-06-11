"use client";

import { useEffect, useState } from "react";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import { useAppDispatch } from "@/app/hooks";
import { setPostTags } from "@/app/redux/slice/postSlice";
import toast from "react-hot-toast";

interface PostTagsPropsTypes extends PostTitleBarPropsTypes {}

// todo :
// check for duplicate tags and alert the user based on it

const PostTags = ({ screen }: PostTagsPropsTypes) => {
  const dispatch = useAppDispatch();
  // tags state
  const [tags, setTags] = useState<string[]>([]); // individual tags
  const [tagsString, setTagsString] = useState<string>(""); //tag string raw input

  // function for turning raw tags string into individual tags
  function handleTags(): void {
    let tagsArr: string[] = tagsString.split(",");
    let lastTag: string = tagsArr[tagsArr.length - 1];
    if (tagsArr.length > 1) {
      let isDuplicateTag: boolean = false;
      for (var i = 0; i < tagsArr.length - 1; i++) {
        if (lastTag == tagsArr[i]) {
          toast.error(`Duplicate Tag found : ${tagsArr[i]}`);
        }
      }
      if (!isDuplicateTag) {
        setTags(tagsArr);
      }
    } else {
      setTags(tagsArr);
    }
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
      <div className="font-semibold flex flex-row justify-between w-full px-2">
        <div>Tags</div>
        <div>
          <span
            className={`${
              tags.length < 20 ? "text-[#E50000]" : "text-[#198C19]"
            }`}
          >
            {tags[0] == "" ? 0 : tags.length}
          </span>
          &nbsp;/&nbsp;20
        </div>
      </div>
      <input
        type="text"
        className="w-full h-fit p-1 text-base bg-[#4cb050] bg-opacity-50 text-[#003b31] rounded-md cursor-text outline-none placeholder:text-[#003b31] placeholder:text-opacity-70 text-left indent-2"
        placeholder={`Enter Tags separated by , :-  tag1,tag2 . At least 20 unique tags are required.`}
        onChange={(e) => {
          let tag = e.target.value.toString();
          setTagsString(tag);
        }}
        value={tagsString}
      />
    </div>
  );
};

export default PostTags;
