export interface DATASLICETYPES {
  latestPosts: {}[];
  post: {};
  postsSizes: {
    ipo: number;
    news: number;
    blog: number;
    tutorial: number;
    sponsoredPost: number;
    companyProfile: number;
  };
  categoryPosts: {
    ipoPosts: {}[];
    newsPosts: {}[];
    blogPosts: {}[];
    tutorialPosts: {}[];
    sponsoredPosts: {}[];
    companyProfilePosts: {}[];
  };
  upcomingIPOEntries:
    | {
        _id: string;
        ipoName: string;
        open: string;
        close: string;
        linkedPostsId: string[];
        __v: number;
      }[]
    | {}[];
}
