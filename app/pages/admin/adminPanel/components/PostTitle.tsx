"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setPostTitle } from "@/app/redux/slice/postSlice";
import { FiEdit2 } from "react-icons/fi";
interface PostTitlePropsTypes extends PostTitleBarPropsTypes {}

const PostTitle = ({ screen }: PostTitlePropsTypes) => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>("");

  const [editTitle, setEditTitle] = useState<boolean>(false);

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    let val = event.target.value;
    setTitle(val);
  }

  const postTitle: string = useAppSelector((state) => state.post.postTitle);

  useEffect(() => {
    dispatch(setPostTitle(title));
  }, [title]);

  // changing PostTitle from readable to editable
  useEffect(() => {
    if (editTitle) {
      setTitle(postTitle);
    }
  }, [editTitle]);

  return (
    <div className="w-full h-fit border-b-2 border-b-solid border-b-[#003b31] dark:border-b-[#4cb050] py-1 grid grid-rows-1 grid-cols-1">
      {/* Create Post Title */}
      {screen === "createPost" && (
        <input
          type="text"
          onChange={(e) => handleTitleChange(e)}
          placeholder="Title"
          className="outline-none indent-1 text-lg lg:text-xl bg-white dark:bg-[#003b31] bg-blend-normal text-[#003b31] dark:text-white"
          value={title}
        />
      )}
      {/* Edit Post */}
      {screen === "editPost" && (
        <div className="w-full h-fit grid grid-rows-1 grid-flow-col">
          {!editTitle ? (
            <div className="w-full h-fit">{postTitle}</div>
          ) : (
            <input
              type="text"
              className="outline-none indent-1 text-lg lg:text-xl"
              value={title}
              onChange={(e) => handleTitleChange(e)}
            />
          )}
          {/* Edit Icon */}
          <FiEdit2
            size={"2rem"}
            className="justify-self-center items-center"
            onClick={() => setEditTitle(true)}
          />
        </div>
      )}
    </div>
  );
};

export default PostTitle;
