"use client";

import { useAppDispatch } from "@/app/hooks";
import { setPostAuthors } from "@/app/redux/slice/postSlice";
import { useEffect, useState } from "react";

const PostAuthors = () => {
  const dispatch = useAppDispatch();
  const [authors, setAuthors] = useState<string[] | []>([]);
  // creating author strings
  function createAuthor(text: string) {
    let textArr = text.split(",");
    setAuthors(textArr);
  }

  useEffect(() => {
    dispatch(setPostAuthors(authors));
  }, [authors]);

  return (
    <div className="w-full h-auto flex flex-row my-1 gap-1">
      <label
        htmlFor="post-authors"
        className="w-auto h-auto self-center text-base font-medium"
      >
        Authors
      </label>
      <input
        type="text"
        name="post-authors"
        id="post-authors"
        className="w-full h-fit p-1 text-base bg-[#4cb050] bg-opacity-50 text-[#003b31] rounded-md cursor-text outline-none text-center placeholder:text-[#003b31] placeholder:text-opacity-70"
        onChange={(e) => createAuthor(e.target.value.toString())}
        placeholder="Separate authors by ','"
      />
    </div>
  );
};

export default PostAuthors;
