"use client";
import { useAppDispatch, useAppSelector, usePostValidation } from "@/app/hooks";
import toast from "react-hot-toast";
import { BsSendCheck } from "react-icons/bs";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import {
  setPostCreateDate,
  setPostCreatedBy,
  setPostUpdateDate,
} from "@/app/redux/slice/postSlice";
import { useState } from "react";
import PostPublishDialog from "./PostPublishDialog";

const PostPublishButton = ({ screen }: PostTitleBarPropsTypes) => {
  const dispatch = useAppDispatch();
  const [showPublishDialog, setShowPublishDialog] = useState<boolean>(false);

  const userID = useAppSelector((state) => state.session.userId);
  const userName = useAppSelector((state) => state.session.userName);

  const post = useAppSelector((state) => state.post);

  const result = usePostValidation();
  /* to do : Publish button logic */
  function handlePostPublishButton() {
    if (result.passed) {
      if (screen === "createPost") {
        // post creation details
        dispatch(setPostCreateDate()); // post create date
        dispatch(setPostUpdateDate()); // post update date
        dispatch(setPostCreatedBy({ name: userName, id: userID })); // post created by
        setShowPublishDialog(true);
      }
    } else {
      toast.error(result.message ? result.message : "", { duration: 1500 });
      result.errorDetails?.map((err: any) => {
        toast.error(err.errorMessage, { duration: 3000 });
      });
    }
  }

  return (
    <>
      <div
        className="w-auto h-fit grid grid-rows-1 grid-cols-1 md:grid-cols-[40%_60%] bg-[#4cb050] bg-opacity-50 items-center justify-items-center cursor-pointer rounded-md px-3 py-1 text-black"
        title="Publish"
        aria-label="Publish Post Button"
        onClick={handlePostPublishButton}
      >
        <BsSendCheck
          size={"2rem"}
          title="Publish"
          aria-label="Publish Post Button Icon"
        />
        <div
          className="hidden md:inline-block md:text-lg"
          title="Publish"
          aria-label="Publish Post Button Text"
        >
          Publish
        </div>
      </div>
      {showPublishDialog && (
        <PostPublishDialog
          closeDialog={() => setShowPublishDialog(false)}
          showPublishDialog={showPublishDialog}
        />
      )}
    </>
  );
};

export default PostPublishButton;
