"use client";

import { useAppDispatch } from "@/app/hooks";
import { PostTableRowPropsTypes } from "./PostTableRow";
import { useEffect, useState } from "react";
import { setPostParaTableData } from "@/app/redux/slice/postSlice";

export interface PostTableColPropsTypes extends PostTableRowPropsTypes {
  colID: number;
}
const PostTableCol = ({
  screen,
  paraID,
  rowID,
  colID,
}: PostTableColPropsTypes) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<string>("");

  useEffect(() => {
    dispatch(setPostParaTableData({ paraID, rowID, colID, data }));
  }, [data]);

  return (
    <input
      type="text"
      className="w-full h-fit p-1 text-base bg-[#4cb050] bg-opacity-50 text-[#003b31] rounded-md cursor-text outline-none text-center placeholder:text-[#003b31] placeholder:text-opacity-70"
      placeholder={`Table Row ${rowID + 1} Col ${colID + 1}`}
      onChange={(e) => setData(e.target.value.toString())}
    />
  );
};

export default PostTableCol;
