"use client";

import { useEffect, useState } from "react";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import { useAppDispatch } from "@/app/hooks";
import { setPostExternalLink } from "@/app/redux/slice/postSlice";

interface PostExternalLinkTypes extends PostTitleBarPropsTypes {
  linkId: number;
  pos: number;
}
const PostExternalLink = ({ screen, linkId, pos }: PostExternalLinkTypes) => {
  const dispatch = useAppDispatch();
  const [link, setLink] = useState<string>("");
  // link to store
  useEffect(() => {
    dispatch(setPostExternalLink({ pos, link }));
  }, [link]);
  return (
    <input
      type="text"
      className="w-full h-fit p-1 text-base bg-[#4cb050] bg-opacity-50 text-[#003b31] rounded-md cursor-text outline-none text-center placeholder:text-[#003b31] placeholder:text-opacity-70"
      placeholder={`Link ${linkId + 1}`}
      id={`Tag ${linkId + 1}`}
      onChange={(e) => setLink(e.target.value.toString())}
      value={link}
    />
  );
};

export default PostExternalLink;
