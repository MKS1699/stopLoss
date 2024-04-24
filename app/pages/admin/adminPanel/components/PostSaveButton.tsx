"use client";
import toast from "react-hot-toast";
import { IoSaveOutline } from "react-icons/io5";
const PostSaveButton = () => {
  /* to do : save button login */

  function handlePostSaveButton() {
    toast.success("Feature under development");
  }
  return (
    <div
      className="w-auto h-fit grid grid-rows-1 grid-cols-1 md:grid-cols-[40%_60%] bg-[#4cb050] bg-opacity-50 items-center justify-items-center cursor-pointer rounded-md px-3 py-1 text-black"
      title="Save"
      aria-label="Save Post Button Icon"
      onClick={handlePostSaveButton}
    >
      <IoSaveOutline
        size={"2rem"}
        title="Save"
        aria-label="Save Post Button Icon"
        className="md:self-start"
      />
      <div
        className="hidden md:inline-block md:text-lg"
        title="Save"
        aria-label="Save Post Button Icon"
      >
        Save
      </div>
    </div>
  );
};

export default PostSaveButton;
