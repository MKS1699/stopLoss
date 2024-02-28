"use client";

import { useAppSelector } from "@/app/hooks";
import { StyledComponent } from "@/app/types/component_types";
import { barlow } from "@/app/utils/fonts";
import SAMPLE_IPO from "@/public/ipo_sample_image.webp";
import Image from "next/image";
import toast from "react-hot-toast";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

interface PostTilePropsTypes extends StyledComponent {
  title: string;
  description: string;
  mainImageLink: string;
  id: string;
}

const PostTile = ({
  title,
  description,
  mainImageLink,
  id,
}: PostTilePropsTypes) => {
  const guestMode = useAppSelector((state) => state.app.guestMode);

  function handlePostEditButton() {
    if (!guestMode) {
      toast.success(`Editing Post ${id}`);
    } else {
      toast.error("Can't edit post in guest mode.");
    }
  }
  function handlePostDeleteButton() {
    if (!guestMode) {
      toast.success(`Deleting Post ${id}`);
    } else {
      toast.error("Can't delete post in guest mode.");
    }
  }

  return (
    <div
      className={`${barlow.className} font-normal w-full h-full grid grid-cols-[15%_65%_10%_10%] grid-rows-1 text-base border-2 border-solid border-[#003b31] rounded-md`}
    >
      {/* Main Image of the post */}
      <Image
        src={mainImageLink ? mainImageLink : SAMPLE_IPO}
        alt="IPO"
        sizes="100vw"
        className="w-full h-full rounded-tl-md rounded-bl-md"
      />
      {/* Title and description of the post */}
      <div className="w-full h-full grid grid-cols-1 grid-rows-2">
        <h1 className="w-full h-full">{title}</h1>
        <p className="w-full h-full">{description}</p>
      </div>
      {/* Edit Button */}
      <FiEdit2
        className={`self-center justify-self-center w-2/3 h-2/3 ${
          guestMode
            ? "text-gray-500 cursor-not-allowed"
            : "text-[#003b31] cursor-pointer dark:text-[#4cb050]"
        }`}
        title="Edit Post"
        onClick={handlePostEditButton}
      />
      {/* Delete Button */}
      <MdOutlineDelete
        className={`self-center justify-self-center w-2/3 h-2/3 ${
          guestMode
            ? "text-gray-500 cursor-not-allowed"
            : "text-[#003b31] cursor-pointer dark:text-[#4cb050]"
        }`}
        title="Delete Post"
        onClick={handlePostDeleteButton}
      />
    </div>
  );
};

export default PostTile;
