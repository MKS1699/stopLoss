"use client";

import { useGetPostsCategorySizes } from "@/app/hooks/apiHooks";
import { PostSection } from ".";
import { CenterDivropsTypes } from "./CenterDiv";
interface LeftDivProps extends CenterDivropsTypes {}
const LeftDiv = ({ className }: LeftDivProps) => {
  const { size: ipo } = useGetPostsCategorySizes({ category: "ipo" });
  const { size: news } = useGetPostsCategorySizes({ category: "news" });
  const { size: sponsoredPost } = useGetPostsCategorySizes({
    category: "sponsored_post",
  });
  return (
    <div className={`flex flex-col justify-evenly ${className}`}>
      {ipo > 0 && <PostSection postType="ipo" key="ipo-posts" limit={5} />}
      {news > 0 && <PostSection postType="news" key="news-posts" limit={5} />}
      {sponsoredPost > 0 && (
        <PostSection
          postType="sponsored_post"
          key="sponsored-posts"
          limit={5}
        />
      )}
    </div>
  );
};

export default LeftDiv;
