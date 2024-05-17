"use client";

import {
  useGetPostsCategorySizes,
  useGetUpcomingIPOEntries,
} from "@/app/hooks/apiHooks";
import { PostSection, UpcomingIPO } from ".";
import { CenterDivropsTypes } from "./CenterDiv";

interface RightDivPropsTypes extends CenterDivropsTypes {}

const RightDiv = ({ className }: RightDivPropsTypes) => {
  const { isLoading: upcomingIPOEntriesLoading, upcomingIPOEntries } =
    useGetUpcomingIPOEntries();

  const { size: blog } = useGetPostsCategorySizes({ category: "blog" });
  const { size: companyProfile } = useGetPostsCategorySizes({
    category: "company_profile",
  });
  const { size: tutorial } = useGetPostsCategorySizes({
    category: "tutorial",
  });
  return (
    <div className={`flex flex-col justify-evenly ${className}`}>
      {upcomingIPOEntries.length > 0 && (
        <UpcomingIPO upcomingIPO={upcomingIPOEntries} />
      )}
      {blog > 0 && <PostSection postType="ipo" key="ipo-posts" limit={10} />}
      {companyProfile > 0 && (
        <PostSection postType="news" key="news-posts" limit={10} />
      )}
      {tutorial > 0 && (
        <PostSection
          postType="sponsored_post"
          key="sponsored-posts"
          limit={10}
        />
      )}
    </div>
  );
};

export default RightDiv;
