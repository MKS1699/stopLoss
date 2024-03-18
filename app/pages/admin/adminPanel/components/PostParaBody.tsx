"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import { useAppDispatch } from "@/app/hooks";
import { setPostParaBody } from "@/app/redux/slice/postSlice";

interface PostParaBodyPropsTypes extends PostTitleBarPropsTypes {
  paraID: number;
}

const PostParaBody = ({ screen, paraID }: PostParaBodyPropsTypes) => {
  const dispatch = useAppDispatch();
  // storing body text as react state
  const [bodyText, setBodyText] = useState<string>("");

  // changing new line escape char (\n) with <br /> and storing
  // it in the react state
  function handleTextAreaChange(e: ChangeEvent<HTMLTextAreaElement>) {
    let val = e.target.value;
    let valArr = val.split("\n");
    let newVal = valArr.join("<br />");
    setBodyText(newVal);
  }

  // adding stored react state to post slice aka state slice
  useEffect(() => {
    dispatch(setPostParaBody({ bodyText, paraID }));
  }, [bodyText]);

  return (
    <div className="w-full h-full grid grid-rows-1 grid-cols-[30%_70%]">
      <label
        htmlFor={`Post Para ${paraID} Body`}
        className="w-full h-auto cursor-pointer text-black dark:text-white"
      >
        Body :
      </label>
      <textarea
        name={`Post Para ${paraID} Body`}
        id={`Post Para ${paraID} Body`}
        placeholder={`Post Para ${paraID + 1} Body`}
        className="w-full h-full bg-[#4cb050] bg-opacity-50 outline-none rounded-md p-1 placeholder:text-[#003b31] placeholder:text-opacity-70"
        onChange={(e) => handleTextAreaChange(e)}
      />
    </div>
  );
};

export default PostParaBody;
