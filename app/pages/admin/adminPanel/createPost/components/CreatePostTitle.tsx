"use client";

import { ChangeEvent, ReactEventHandler, useState } from "react";

const CreatePostTitle = () => {
  const [postTitle, setPostTitle] = useState<string>("");

  function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
    let val = e.target.value;
    setPostTitle(val);
  }

  return (
    <input
      type="text"
      onChange={(e) => handleTextChange(e)}
      placeholder="Title"
      className="outline-none border-b-2 border-b-solid border-[#003b31]"
    />
  );
};

export default CreatePostTitle;
