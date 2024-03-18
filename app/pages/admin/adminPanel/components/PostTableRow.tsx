"use client";

import { useEffect, useState } from "react";
import { PostTablePropsTypes } from "./PostTable";
import { PostTableCol } from ".";

export interface PostTableRowPropsTypes extends PostTablePropsTypes {
  rowID: number;
}
const PostTableRow = ({ screen, paraID, rowID }: PostTableRowPropsTypes) => {
  const [nCols, setNCols] = useState<number>(0);
  const [nColsArr, setNColsArr] = useState<number[] | []>([]);

  // initializing table
  useEffect(() => {
    setNCols(3);
  }, []);

  // function for creating cols arr
  function creatingColsArr(): void {
    let arr: number[] | [] = [];
    for (var i = 0; i < nCols; i++) {
      arr[i] = i;
    }
    setNColsArr(arr);
  }

  useEffect(() => {
    creatingColsArr();
  }, [nCols]);

  // incrementing Cols
  function incrementCols(): void {
    setNCols((prev: number) => prev + 1);
  }
  return (
    <div className="w-full h-auto grid grid-rows-1 grid-flow-col pt-1 gap-1">
      {nColsArr.map((colID: number) => {
        return (
          <PostTableCol
            key={`Post Para ${paraID + 1} Table Row ${rowID + 1} Col ${
              colID + 1
            }`}
            colID={colID}
            paraID={paraID}
            rowID={rowID}
            screen={screen}
          />
        );
      })}
      <div
        className="w-full h-fit p-1 text-base bg-[#4cb050] bg-opacity-70 text-[#003b31] rounded-md cursor-cell text-center self-center dark:text-black font-medium"
        onClick={incrementCols}
      >
        + Cols
      </div>
    </div>
  );
};

export default PostTableRow;
