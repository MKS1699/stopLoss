/* Types for the Post */
export interface PostSliceTypes {
  postTitle: string;
  postType:
    | "ipo"
    | "news"
    | "tutorial"
    | "blog"
    | "sponsored post"
    | "company profile"
    | "";
  postCreated?: Date | string;
  postUpdated?: Date | string;
  postImage: Image;
  postParagraphs: Paragraph[];
  postTags: string[];
}

// Paragraph Types of the post
export interface Paragraph {
  paraTitle?: string;
  paraSubHeadings?: string[];
  paraBody: string;
  hasImages: boolean;
  paraImages?: Image[];
  hasCharts: boolean;
  paraCharts?: Chart[];
  hasTables: boolean;
  paraTables?: Table[];
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

// Chart Types for the post
export interface Chart {
  chartType: "pie" | "bar" | "line" | "area" | "";
  chartValues: ChartValues[]; // to define
}

// Chart Values Types for the Chart
export interface ChartValues {
  name: string;
  /* this value will be represented always on X-axis
   * but will provide a feature in the future to interchange
   * the values.
   */
  key1?: number; // values for Y-axis
  key2?: number; // values for Y-axis
  key3?: number; // values for Y-axis
}

// Table Types for the post
export type Table = string[][];
