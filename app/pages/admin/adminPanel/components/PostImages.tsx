"use client";

import { useEffect, useState } from "react";
import { PostImage } from ".";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import { useAppDispatch } from "@/app/hooks";
import { addPostParaImage } from "@/app/redux/slice/postSlice";

interface PostImagesPropsTypes extends PostTitleBarPropsTypes {
  paraID: number;
}
const PostImages = ({ screen, paraID }: PostImagesPropsTypes) => {
  const dispatch = useAppDispatch();
  const [paraImages, setParaImages] = useState<number>(0);
  const [paraImagesArr, setParaImagesArr] = useState<number[] | []>([]);

  // initializing 1 images for the start however none are required
  useEffect(() => {
    setParaImages(1);
  }, []);

  // creating paraImagesArr based on paraImages
  function createParaImagesArr(): void {
    let arr: number[] | [] = [];
    for (var i = 0; i < paraImages; i++) {
      arr[i] = i;
    }
    setParaImagesArr(arr);
  }
  useEffect(() => {
    createParaImagesArr();
  }, [paraImages]);

  // increment ParaImages
  function incrementParaImages(): void {
    setParaImages((prev: number) => prev + 1);
  }
  return (
    <div className="w-full h-auto flex flex-col">
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row">
        {paraImagesArr.map((imageID: number) => {
          dispatch(
            addPostParaImage({
              imageID,
              paraID,
            })
          );
          return (
            <PostImage
              screen={screen}
              paraID={paraID}
              imageID={imageID}
              key={`Post Para ${paraID + 1} image ${imageID + 1}`}
              type="paraImage"
              imageLabel={`Post Para ${paraID + 1} image ${imageID + 1}`}
              captionLabel={`Post Para ${paraID + 1} image ${
                imageID + 1
              } caption`}
            />
          );
        })}
      </div>
      {/* Add Image Button */}
      <div
        className="w-full h-fit p-2 text-base bg-[#4cb050] bg-opacity-70 text-[#003b31] rounded-md self-end cursor-pointer dark:text-black font-medium text-center"
        onClick={incrementParaImages}
      >
        + Image
      </div>
    </div>
  );
};

export default PostImages;
