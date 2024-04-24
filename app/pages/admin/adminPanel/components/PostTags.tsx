"use client";

import { useEffect, useState } from "react";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import { PostTag } from ".";

interface PostTagsPropsTypes extends PostTitleBarPropsTypes {}

const PostTags = ({ screen }: PostTagsPropsTypes) => {
  const [nTags, setNTags] = useState<number>(0);
  const [nTagsArr, setNTagsArr] = useState<number[] | []>([]);

  // initial Tags rendering which will be 20
  useEffect(() => {
    setNTags(20);
  }, []);

  // function for creating Tags Arr
  function createTagsArr() {
    let arr: number[] | [] = [];
    for (var i = 0; i < nTags; i++) {
      arr[i] = i;
    }
    setNTagsArr(arr);
  }

  // creating nTagsArr every time nTags are incremented
  useEffect(() => {
    createTagsArr();
  }, [nTags]);

  // increment nTagsArr
  function incrementNTags() {
    setNTags((prev: number) => prev + 20);
  }
  return (
    <div className="w-full h-auto flex flex-col gap-2">
      <div className="w-full h-auto self-center">Tags : {nTags}</div>
      <div className="w-full h-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-flow-row gap-1 border-y-2 border-solid border-[#003b31] dark:border-[#4cb050] py-2">
        {nTagsArr.map((tagID: number) => {
          return (
            <PostTag screen={screen} tagID={tagID} key={`Post Tag ${tagID}`} />
          );
        })}
      </div>
      <div
        className="w-full h-fit p-1 text-base bg-[#4cb050] bg-opacity-70 text-[#003b31] rounded-md cursor-pointer text-center self-center dark:text-black font-medium mb-2"
        onClick={incrementNTags}
      >
        + Tags
      </div>
    </div>
  );
};

export default PostTags;
