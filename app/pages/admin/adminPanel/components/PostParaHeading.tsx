"use client";

import { useAppDispatch } from "@/app/hooks";
import {
  setPostParaHeading,
  setPostParaSubHeading,
} from "@/app/redux/slice/postSlice";
import { useEffect, useState } from "react";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
interface PostParaHeadingPropsTypes extends PostTitleBarPropsTypes {
  paraID: number;
  type: "heading" | "subheading";
}
const PostParaHeading = ({ paraID, type }: PostParaHeadingPropsTypes) => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (type === "heading") {
      dispatch(setPostParaHeading({ heading: text, paraID }));
    } else if (type === "subheading") {
      dispatch(setPostParaSubHeading({ subheading: text, paraID }));
    }
  }, [text]);

  return (
    <div className={`w-full h-auto grid grid-rows-1 grid-cols-[30%_70%]`}>
      <label
        htmlFor={`${
          type === "heading"
            ? `post-para-heading-${paraID + 1}`
            : `post-para-subheading-${paraID + 1}`
        }`}
        className="w-fit cursor-pointer text-black dark:text-white"
      >
        {type === "heading" ? "Heading" : "Sub Heading"}:
      </label>
      <input
        type="text"
        name={`${
          type === "heading"
            ? `post-para-heading-${paraID + 1}`
            : `post-para-subheading-${paraID + 1}`
        }`}
        id={`${
          type === "heading"
            ? `post-para-heading-${paraID + 1}`
            : `post-para-subheading-${paraID + 1}`
        }`}
        className="w-full h-auto bg-[#4cb050] bg-opacity-50 outline-none rounded-md p-1 placeholder:text-[#003b31] placeholder:text-opacity-70"
        placeholder={`Post paragraph ${paraID + 1} ${type}`}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default PostParaHeading;
