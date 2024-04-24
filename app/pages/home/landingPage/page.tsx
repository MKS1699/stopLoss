"use client";
import { PostSection, UpcomingIPO } from "./components";
import { FetchPostsTypeSize } from "@/app/api";

const LandingPage = () => {
  const BLOG_POSTS = FetchPostsTypeSize({ postType: "blog" });
  const TUTORIAL_POSTS = FetchPostsTypeSize({ postType: "tutorial" });
  const IPO_POSTS = FetchPostsTypeSize({ postType: "ipo" });
  const COMPAnY_PROFILE_POSTS = FetchPostsTypeSize({
    postType: "company_profile",
  });
  const SPONSORED_POSTS = FetchPostsTypeSize({ postType: "sponsored_post" });
  const NEWS_POSTS = FetchPostsTypeSize({ postType: "news" });

  return (
    <div className="w-full h-full grid grid-flow-row-dense gap-y-4">
      <UpcomingIPO />
      {IPO_POSTS > 0 ? <PostSection postType="ipo" limit={10} /> : null}
      {NEWS_POSTS > 0 ? <PostSection postType="news" limit={10} /> : null}
      {SPONSORED_POSTS > 0 ? (
        <PostSection postType="sponsored_post" limit={10} />
      ) : null}
      {BLOG_POSTS > 0 ? <PostSection postType="blog" limit={10} /> : null}
      {COMPAnY_PROFILE_POSTS > 0 ? (
        <PostSection postType="company_profile" limit={10} />
      ) : null}
      {TUTORIAL_POSTS > 0 ? (
        <PostSection postType="tutorial" limit={10} />
      ) : null}
    </div>
  );
};

export default LandingPage;
