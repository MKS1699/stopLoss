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
      {blog > 0 && <PostSection postType="blog" key="blog-posts" limit={10} />}
      {companyProfile > 0 && (
        <PostSection
          postType="company_profile"
          key="company-posts"
          limit={10}
        />
      )}
      {tutorial > 0 && (
        <PostSection postType="tutorial" key="tutorial-posts" limit={10} />
      )}
    </div>
  );
};

export default RightDiv;
