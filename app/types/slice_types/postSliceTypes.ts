/* Types for the Post */
export interface PostSliceTypes {
  postTitle: string;
  postAuthors: string[];
  postType:
    | "ipo"
    | "news"
    | "tutorial"
    | "blog"
    | "sponsored_post"
    | "company_profile"
    | "";
  postCreated?: Date | string;
  postUpdated?: Date | string;
  postImage: Image;
  hasImage: boolean;
  postParagraphs: Paragraph[];
  postTags: string[];
  postDescription: string;
  postInfo: {
    upcomingIPO: boolean;
    ipoName: string;
    open: string;
    close: string;
    linkedPostsId: string[];
  };
  createdBy: {
    name: string;
    id: string;
  };
  postStatus: {
    publish: boolean;
  };
  postExternalLinks: string[];
}

// Paragraph Types of the post
export interface Paragraph {
  paraHeading?: string;
  paraSubHeading?: string;
  paraBody: string;
  hasImages: boolean;
  paraImages: Image[];
  hasTable: boolean;
  paraTable: Table;
}

// Image Types for the post
export interface Image {
  links: {
    original: string;
    medium?: string;
    thumbnail?: string;
  };
  caption: string;
}

// Table Types for the post
export type Table = string[][];
