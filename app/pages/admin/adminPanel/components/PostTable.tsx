"use client";

import { useEffect, useState } from "react";
import { PostTableRow } from ".";
import { PostTitleBarPropsTypes } from "./PostTitleBar";

export interface PostTablePropsTypes extends PostTitleBarPropsTypes {
  paraID: number;
}

const PostTable = ({ screen, paraID }: PostTablePropsTypes) => {
  const [nRows, setNRows] = useState<number>(0);
  const [nRowsArr, setNRowsArr] = useState<number[] | []>([]);

  // initializing table
  useEffect(() => {
    setNRows(3);
  }, []);

  // function for creating Rows arr
  function creatingRowsArr(): void {
    let arr: number[] | [] = [];
    for (var i = 0; i < nRows; i++) {
      arr[i] = i;
    }
    setNRowsArr(arr);
  }

  useEffect(() => {
    creatingRowsArr();
  }, [nRows]);

  // incrementing Rows
  function incrementRows(): void {
    setNRows((prev: number) => prev + 1);
  }
  return (
    <div className="w-full h-auto grid grid-flow-row border-y-2 border-solid border-[#003b31] dark:border-[#4cb050] gap-1 mb-2 pb-1">
      {nRowsArr.map((rowID: number) => {
        return (
          <PostTableRow
            key={`Post Para ${paraID + 1} Table Row ${rowID + 1}`}
            paraID={paraID}
            rowID={rowID}
            screen={screen}
          />
        );
      })}
      <div
        className="w-full h-fit p-1 text-base bg-[#4cb050] bg-opacity-70 text-[#003b31] rounded-md cursor-cell text-center dark:text-black font-medium"
        onClick={incrementRows}
      >
        + Rows
      </div>
    </div>
  );
};

export default PostTable;
