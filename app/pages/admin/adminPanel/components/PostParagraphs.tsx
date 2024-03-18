"use client";

import { useEffect, useState } from "react";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import { PostPara } from ".";
import { useAppDispatch } from "@/app/hooks";
import { addPostParagraphs } from "@/app/redux/slice/postSlice";

interface PostParagraphsPropsTypes extends PostTitleBarPropsTypes {}

const PostParagraphs = ({ screen }: PostParagraphsPropsTypes) => {
  const dispatch = useAppDispatch();
  const [nOfPara, setNofPara] = useState<number>(0);

  const [nParaArr, setNParaArr] = useState<number[] | []>([]);

  //   para initializer creating at least 1 para
  useEffect(() => {
    setNofPara((prev: number): number => {
      if (prev === 0) {
        return prev + 1;
      } else return prev;
    });
  }, []);

  //   creating para numbers array to map
  useEffect(() => {
    let arr: number[] | [] = [];
    for (var i = 0; i < nOfPara; i++) {
      arr[i] = i;
    }
    setNParaArr(arr);
  }, [nOfPara]);

  //   adding new para to postParagraphs in the post state slice
  useEffect(() => {
    dispatch(addPostParagraphs({ paraID: nOfPara - 1 }));
  }, [nOfPara]);

  //   increment para
  function incrementPara() {
    setNofPara((prev: number) => prev + 1);
  }

  return (
    <div className="w-full h-full border-y-2 border-solid border-[#003b31] dark:border-[#4cb050] py-2 flex flex-col gap-1">
      {/* Para Information Section */}
      <div className="w-full h-fit border-b-2 border-solid border-[#003b31] dark:border-[#4cb050] flex flex-row justify-between pb-2">
        <h4 className="w-fit h-fit p-2 text-lg justify-self-start text-black dark:text-white">
          PostParagraphs
        </h4>
        {/* Total Para Information */}
        <div className="w-fit h-fit p-2 text-base bg-[#4cb050] bg-opacity-70 text-[#003b31] rounded-md self-center justify-self-end">
          Paragraphs : {nOfPara}
        </div>
      </div>
      {/* Paras */}
      {nParaArr.map((para: number) => (
        <PostPara
          key={`Post Paragraph ${para + 1}`}
          paraID={para}
          screen={screen}
        />
      ))}
      {/* New Para Button */}
      <div
        className="w-full h-fit p-2 text-base bg-[#4cb050] bg-opacity-70 text-[#003b31] dark:text-black font-medium rounded-md self-center cursor-pointer text-center"
        onClick={incrementPara}
      >
        + New Para
      </div>
    </div>
  );
};

export default PostParagraphs;
