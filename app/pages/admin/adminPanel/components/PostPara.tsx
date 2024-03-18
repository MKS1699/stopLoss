"use client";
import { useAppDispatch } from "@/app/hooks";
import { PostImages, PostParaBody, PostParaHeading, PostTable } from ".";
import { PostTitleBarPropsTypes } from "./PostTitleBar";

interface PostParaPropsTypes extends PostTitleBarPropsTypes {
  paraID: number;
}

const PostPara = ({ paraID, screen }: PostParaPropsTypes) => {
  return (
    <div className="w-full h-auto px-1 flex flex-col gap-1">
      {/* Paragraph Information */}
      <div className="w-full h-auto flex flex-row justify-center gap-4 items-center">
        {/* decorative line */}
        <div className="w-full h-1 bg-[#003b31] dark:bg-[#4cb050] rounded-full"></div>
        <div className="w-full px-4  h-auto flex flex-row justify-evenly">
          {/* para info */}
          <div className="w-fit h-fit p-2 mx-3 bg-[#4cb050] bg-opacity-70 text-[#003b31] rounded-md self-center justify-self-center text-xs md:text-base font-medium">
            Para {paraID + 1}
          </div>
        </div>
        {/* decorative line */}
        <div className="w-full h-1 bg-[#003b31] dark:bg-[#4cb050] rounded-full"></div>
      </div>
      {/* Post Para Heading */}
      <PostParaHeading paraID={paraID} screen={screen} type="heading" />
      {/* Post Para Sub Heading */}
      <PostParaHeading paraID={paraID} screen={screen} type="subheading" />
      {/* Post Para Body */}
      <PostParaBody screen={screen} paraID={paraID} />
      {/* Post Para Images */}
      <PostImages screen={screen} paraID={paraID} />
      {/* Post Para Tables */}
      {/* <PostTables screen={screen} paraID={paraID} /> */}
      <PostTable screen={screen} paraID={paraID} />
    </div>
  );
};

export default PostPara;
