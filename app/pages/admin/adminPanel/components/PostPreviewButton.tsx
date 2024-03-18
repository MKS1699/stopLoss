"use client";
import toast from "react-hot-toast";
import { MdOutlinePreview } from "react-icons/md";
import { IoAlert } from "react-icons/io5";
const PostPreviewButton = () => {
  /* to do : Preview button login */

  function handlePostPreviewButton() {
    toast("This feature is currently under development.", {
      icon: <IoAlert size={"2rem"} />,
      position: "top-center",
    });
  }
  return (
    <div
      className="w-auto h-fit grid grid-rows-1 grid-cols-1 md:grid-cols-[40%_60%] bg-[#4cb050] bg-opacity-50 items-center justify-items-center cursor-pointer rounded-md px-3 py-1 text-black"
      title="Preview"
      aria-label="Preview Post Button Icon"
      onClick={handlePostPreviewButton}
    >
      <MdOutlinePreview
        size={"2rem"}
        title="Preview"
        aria-label="Preview Post Button Icon"
      />
      <div
        className="hidden md:inline-block md:text-lg"
        title="Preview"
        aria-label="Preview Post Button Icon"
      >
        Preview
      </div>
    </div>
  );
};

export default PostPreviewButton;
