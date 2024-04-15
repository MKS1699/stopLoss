"use client";

import { useEffect, useState } from "react";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import PostExternalLink from "./PostExternalLink";
import { useAppSelector } from "@/app/hooks";

interface PostExternalLinksTypes extends PostTitleBarPropsTypes {}

const PostExternalLinks = ({ screen }: PostExternalLinksTypes) => {
  const LINKS = useAppSelector((state) => state.post.postExternalLinks);
  const [nLinks, setNLinks] = useState<number>(0);
  const [nlinksArr, setNLinksArr] = useState<number[]>([]);
  // initial render 3 links field
  useEffect(() => {
    setNLinks(4);
  }, []);
  // creating Array based on newNLinks
  useEffect(() => {
    let arr: number[] = [];
    for (var i = 0; i < nLinks; i++) {
      arr[i] = i;
    }
    setNLinksArr(arr);
  }, [nLinks]);

  return (
    <div className="w-full h-auto py-2 border-b-2 border-solid border-[#003b31] dark:border-[#4cb050]">
      External Links : {LINKS.length}
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-1 border-y-2 border-solid border-[#003b31] dark:border-[#4cb050] py-2">
        {nlinksArr.map((link: number) => {
          return (
            <PostExternalLink
              screen={screen}
              linkId={link}
              pos={link}
              key={`Post External Link-${link}`}
            />
          );
        })}
      </div>
      <div
        className="w-full h-fit p-1 text-base bg-[#4cb050] bg-opacity-70 text-[#003b31] rounded-md cursor-pointer text-center self-center dark:text-black font-medium mt-2"
        onClick={() => setNLinks((prev) => prev + 1)}
      >
        + Link
      </div>
    </div>
  );
};

export default PostExternalLinks;
