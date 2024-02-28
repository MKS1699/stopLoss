import {
  ChartValues,
  Image,
  Paragraph,
  PostSliceTypes,
  Table,
} from "@/app/types/slice_types/postSliceTypes";
import { createSlice } from "@reduxjs/toolkit";

// constans
// IMAGE constant
const IMAGE: Image = {
  links: {
    original: "",
    medium: "",
    thumbnail: "",
  },
  caption: "",
};

// ChartValues constant
const CHARTVALUES: ChartValues = {
  name: "",
  key1: 0,
  key2: 0,
  key3: 0,
};

// 3x3 Table constant
const TABLE: Table = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// paragraph constant
const PARAGRAPH: Paragraph = {
  paraTitle: "",
  paraSubHeadings: [""],
  paraBody: "",
  hasImages: false,
  paraImages: [
    {
      links: {
        original: "",
        medium: "",
        thumbnail: "",
      },
      caption: "",
    },
  ],
  hasCharts: false,
  paraCharts: [
    {
      chartType: "",
      chartValues: [CHARTVALUES],
    },
  ],
  hasTables: false,
  paraTables: [TABLE],
};

// initial state of the post slice
const initialState: PostSliceTypes = {
  postTitle: "",
  postType: "",
  postCreated: "",
  postUpdated: "",
  postImage: IMAGE,
  postParagraphs: [PARAGRAPH],
  postTags: [""],
};

// post Slice
const postSlice = createSlice({
  name: "Post Slice",
  initialState,
  reducers: {},
});

// export post slice actions (reducers)
export const {} = postSlice.actions;

// export postSlice
export default postSlice.reducer;
