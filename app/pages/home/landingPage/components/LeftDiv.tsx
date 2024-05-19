"use client";

import { useGetPostsCategorySizes } from "@/app/hooks/apiHooks";
import { PostSection } from ".";
import { CenterDivropsTypes } from "./CenterDiv";
interface LeftDivProps extends CenterDivropsTypes {}
const LeftDiv = ({ className }: LeftDivProps) => {
  const { size: blog } = useGetPostsCategorySizes({ category: "blog" });
  const { size: news } = useGetPostsCategorySizes({ category: "news" });
  const { size: sponsoredPost } = useGetPostsCategorySizes({
    category: "sponsored_post",
  });
  return (
    <div className={`flex flex-col justify-evenly ${className}`}>
      {blog > 0 && <PostSection postType="blog" key="blog-posts" limit={5} />}
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
