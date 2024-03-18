"use client";

import { barlow } from "@/app/utils/fonts";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PostSliceTypes } from "@/app/types/slice_types/postSliceTypes";
import { setPostType } from "@/app/redux/slice/postSlice";
import { useAppDispatch } from "@/app/hooks";
const PostTypeSelection = ({ screen }: PostTitleBarPropsTypes) => {
  const dispatch = useAppDispatch();
  const [selectedOption, setSelectedOption] =
    useState<PostSliceTypes["postType"]>("");

  const [showOptions, setShowOptions] = useState<boolean>(false);

  function handleSelectedOption(option: PostSliceTypes["postType"]): void {
    setSelectedOption(option);
    setShowOptions(false);
  }

  // setting default option to none and menu to hidden
  useEffect(() => {
    setShowOptions(false);
    setSelectedOption("");
  }, []);

  // setting up the post type in the post state slice
  useEffect(() => {
    if (selectedOption !== "") {
      dispatch(setPostType(selectedOption));
    }
  }, [selectedOption]);
  return (
    <div
      className={`${barlow.className} w-fit h-fit bg-white dark:bg-[#003b31] grid grid-rows-1 grid-cols-[90%_10%] gap-1 font-normal items-center py-1`}
    >
      {/* options */}
      <div className="bg-[#4cb050] rounded-md bg-opacity-70 h-full w-full grid grid-rows-1 grid-cols-1 relative">
        <div className="max-w-max h-full self-center p-1 indent-1">
          {selectedOption === "" && "None"}
          {selectedOption === "ipo" && "IPO"}
          {selectedOption === "news" && "News"}
          {selectedOption === "blog" && "Blog"}
          {selectedOption === "tutorial" && "Tutorial"}
          {selectedOption === "company_profile" && "Company Profile"}
          {selectedOption === "sponsored_post" && "Sponsored Post"}
        </div>
        {/* options */}
        <div
          className={`${
            !showOptions ? "hidden" : "inline-block"
          } absolute w-auto h-auto bg-[#4cb050] rounded-md top-full mt-2 p-2 text-nowrap z-10`}
        >
          <div
            className="cursor-pointer hover:scale-110"
            onClick={() => handleSelectedOption("ipo")}
          >
            IPO
          </div>
          <div
            className="cursor-pointer hover:scale-110"
            onClick={() => handleSelectedOption("news")}
          >
            News
          </div>
          <div
            className="cursor-pointer hover:scale-110"
            onClick={() => handleSelectedOption("blog")}
          >
            Blog
          </div>
          <div
            className="cursor-pointer hover:scale-110"
            onClick={() => handleSelectedOption("tutorial")}
          >
            Tutorial
          </div>
          <div
            className="cursor-pointer hover:scale-110"
            onClick={() => handleSelectedOption("company_profile")}
          >
            Company Profile
          </div>
          <div
            className="cursor-pointer hover:scale-110"
            onClick={() => handleSelectedOption("sponsored_post")}
          >
            Sponsored Post
          </div>
        </div>
      </div>
      {/* dropdown button */}
      <RiArrowDropDownLine
        size={"2rem"}
        className="cursor-pointer bg-[#4cb050] rounded-md bg-opacity-70 text-[#003b31]"
        onClick={() => setShowOptions(!showOptions)}
      />
    </div>
  );
};

export default PostTypeSelection;
