import {
  Image,
  Paragraph,
  PostSliceTypes,
  Table,
} from "@/app/types/slice_types/postSliceTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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

// 3x3 Table constant
const TABLE: Table = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// paragraph constant
const PARAGRAPH: Paragraph = {
  paraHeading: "",
  paraSubHeading: "",
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
  hasTable: false,
  paraTable: TABLE,
};

// initial state of the post slice
const initialState: PostSliceTypes = {
  postAuthors: [""],
  postTitle: "",
  postDescription: "",
  postType: "",
  postCreated: "",
  postUpdated: "",
  postImage: IMAGE,
  hasImage: false,
  postParagraphs: [PARAGRAPH],
  postTags: [""],
  postInfo: {
    upcomingIPO: false,
    ipoName: "",
  },
  createdBy: {
    name: "",
    id: "",
  },
  postStatus: {
    publish: false,
  },
};

// EMPTY STATE
const EMPTY_STATE: PostSliceTypes = {
  postAuthors: [""],
  postTitle: "",
  postDescription: "",
  postType: "",
  postCreated: "",
  postUpdated: "",
  postImage: IMAGE,
  hasImage: false,
  postParagraphs: [PARAGRAPH],
  postTags: [""],
  postInfo: {
    upcomingIPO: false,
    ipoName: "",
  },
  createdBy: {
    name: "",
    id: "",
  },
  postStatus: {
    publish: false,
  },
};

// post Slice
const postSlice = createSlice({
  name: "Post Slice",
  initialState,
  reducers: {
    setPostAuthors: (
      state,
      action: PayloadAction<PostSliceTypes["postAuthors"]>
    ) => {
      const authors = action.payload;
      let newAuthorsArr: string[] | [] = [];
      // removing extra white space at start and end of string
      for (let author of authors) {
        let authorArr = author.split("");
        // removing white space at the start of the name
        if (authorArr[0] === " " && authorArr.length > 1) {
          authorArr.splice(0, 1);
        }
        // removing white space at the end of the name
        if (authorArr[authorArr.length - 1] === " ") {
          authorArr.splice(authorArr.length - 1, 1);
        }
        let newAuthorName = authorArr.join("");
        newAuthorsArr[newAuthorsArr.length] = newAuthorName;
      }
      // capitalizing the first character of author's
      // first and last name
      for (var i = 0; i < newAuthorsArr.length; i++) {
        let newAuthorName = newAuthorsArr[i];
        if (newAuthorName !== "") {
          // first char of first and last name to uppercase
          if (newAuthorName.includes(" ")) {
            let newAuthorNamesArr = newAuthorName.split(" ");
            for (var j = 0; j < newAuthorNamesArr.length; j++) {
              let newAuthorNamesArrChar = newAuthorNamesArr[j].split("");
              let firstChar = newAuthorNamesArrChar[0].toUpperCase();
              newAuthorNamesArrChar[0] = firstChar;
              newAuthorNamesArr[j] = newAuthorNamesArrChar.join("");
            }
            newAuthorName = newAuthorNamesArr.join(" ");
          }
          // first char of first name to uppercase
          else {
            let newAuthorNameArr = newAuthorName.split("");
            let firstChar = newAuthorNameArr[0].toUpperCase();
            newAuthorNameArr[0] = firstChar;
            newAuthorName = newAuthorNameArr.join("");
          }
          newAuthorsArr[i] = newAuthorName;
        }
      }
      // storing author names in the state
      for (var i = 0; i < newAuthorsArr.length; i++) {
        if (newAuthorsArr[i].length > 0) {
          state.postAuthors[i] = newAuthorsArr[i];
        }
      }
    },
    setPostTitle: (
      state,
      action: PayloadAction<PostSliceTypes["postTitle"]>
    ) => {
      state.postTitle = action.payload;
    },
    setPostType: (state, action: PayloadAction<PostSliceTypes["postType"]>) => {
      state.postType = action.payload;
    },
    setPostDescription: (
      state,
      action: PayloadAction<PostSliceTypes["postDescription"]>
    ) => {
      state.postDescription = action.payload;
    },
    setPostMainImage: (
      state,
      action: PayloadAction<{
        caption?: string;
        original?: string;
        medium?: string;
        thumbnail?: string;
      }>
    ) => {
      const { caption, original, medium, thumbnail } = action.payload;
      if (caption) {
        state.postImage.caption = caption;
      }
      if (original) {
        state.postImage.links.original = original;
      }
      if (medium) {
        state.postImage.links.medium = medium;
      }
      if (thumbnail) {
        state.postImage.links.thumbnail = thumbnail;
      }
    },
    setMainHasImage: (
      state,
      action: PayloadAction<PostSliceTypes["hasImage"]>
    ) => {
      state.hasImage = action.payload;
    },
    // adding new paragraph to the postparagraphs
    addPostParagraphs: (state, action: PayloadAction<{ paraID: number }>) => {
      const paraID = action.payload.paraID;
      if (state.postParagraphs[paraID]) return;
      state.postParagraphs[paraID] = PARAGRAPH;
    },
    // post para related reducers
    // post para heading
    setPostParaHeading: (
      state,
      action: PayloadAction<{
        heading: Paragraph["paraHeading"];
        paraID: number;
      }>
    ) => {
      state.postParagraphs[action.payload.paraID].paraHeading =
        action.payload.heading;
    },
    // post para subheading
    setPostParaSubHeading: (
      state,
      action: PayloadAction<{
        subheading: Paragraph["paraSubHeading"];
        paraID: number;
      }>
    ) => {
      state.postParagraphs[action.payload.paraID].paraSubHeading =
        action.payload.subheading;
    },
    // post para body
    setPostParaBody: (
      state,
      action: PayloadAction<{
        bodyText: string;
        paraID: number;
      }>
    ) => {
      state.postParagraphs[action.payload.paraID].paraBody =
        action.payload.bodyText;
    },
    // post para images
    // add new Images to state slice
    addPostParaImage: (
      state,
      action: PayloadAction<{
        paraID: number;
        imageID: number;
      }>
    ) => {
      const { paraID, imageID } = action.payload;
      if (!state.postParagraphs[paraID].paraImages[imageID]) {
        state.postParagraphs[paraID].paraImages[imageID] = IMAGE;
      }
    },
    // setting post para has images
    setPostParaHasImages: (
      state,
      action: PayloadAction<{
        hasImages: Paragraph["hasImages"];
        paraID: number;
      }>
    ) => {
      const { hasImages, paraID } = action.payload;
      if (!state.postParagraphs[paraID].hasImages)
        state.postParagraphs[paraID].hasImages = hasImages;
    },
    // setting post para images values
    setPostParaImage: (
      state,
      action: PayloadAction<{
        caption?: string;
        original?: string;
        medium?: string;
        thumbnail?: string;
        paraID: number;
        imageID: number;
      }>
    ) => {
      const { caption, original, medium, thumbnail, paraID, imageID } =
        action.payload;
      if (caption) {
        state.postParagraphs[paraID].paraImages[imageID].caption = caption;
      }
      if (original) {
        state.postParagraphs[paraID].paraImages[imageID].links.original =
          original;
      }
      if (medium) {
        state.postParagraphs[paraID].paraImages[imageID].links.medium = medium;
      }
      if (thumbnail) {
        state.postParagraphs[paraID].paraImages[imageID].links.thumbnail =
          thumbnail;
      }
    },
    // post para table
    setPostParaTableData: (
      state,
      action: PayloadAction<{
        paraID: number;
        rowID: number;
        colID: number;
        data: string;
      }>
    ) => {
      const { paraID, rowID, colID, data } = action.payload;
      const ROW = state.postParagraphs[paraID].paraTable[rowID];
      if (!state.postParagraphs[paraID].hasTable)
        state.postParagraphs[paraID].hasTable = true;
      if (ROW) {
        ROW[colID] = data;
      } else {
        state.postParagraphs[paraID].paraTable[rowID] = [];
        state.postParagraphs[paraID].paraTable[rowID][colID] = data;
      }
    },

    // post tags
    setPostTags: (
      state,
      action: PayloadAction<{ tag: string; tagID: number }>
    ) => {
      const { tag, tagID } = action.payload;
      state.postTags[tagID] = tag;
    },
    // post info
    setPostUpcomingIPOInfo: (state, action: PayloadAction<boolean>) => {
      state.postInfo.upcomingIPO = action.payload;
    },
    setPostIPONameInfo: (state, action: PayloadAction<string>) => {
      state.postInfo.ipoName = action.payload;
    },
    // post creating date
    setPostCreateDate: (state) => {
      const date = new Date();

      state.postCreated = date.toString();
    },
    //post update date
    setPostUpdateDate: (state) => {
      const date = new Date();
      state.postUpdated = date.toString();
    },
    // created by
    setPostCreatedBy: (
      state,
      action: PayloadAction<PostSliceTypes["createdBy"]>
    ) => {
      const { id, name } = action.payload;
      state.createdBy.id = id;
      state.createdBy.name = name;
    },
    // post publishing
    setPostPublishStatus: (
      state,
      action: PayloadAction<PostSliceTypes["postStatus"]["publish"]>
    ) => {
      state.postStatus.publish = action.payload;
    },
    // reset state
    resetPostState: (state) => {
      const {
        createdBy,
        hasImage,
        postAuthors,
        postDescription,
        postImage,
        postInfo,
        postParagraphs,
        postStatus,
        postTags,
        postTitle,
        postType,
        postCreated,
        postUpdated,
      } = EMPTY_STATE;

      state.createdBy = createdBy;
      state.hasImage = hasImage;
      state.postAuthors = postAuthors;
      state.postCreated = postCreated;
      state.postDescription = postDescription;
      state.postImage = postImage;
      state.postInfo = postInfo;
      state.postParagraphs = postParagraphs;
      state.postStatus = postStatus;
      state.postTags = postTags;
      state.postTitle = postTitle;
      state.postType = postType;
      state.postUpdated = postUpdated;
    },
  },
});

// export post slice actions (reducers)
export const {
  setPostAuthors,
  setPostTitle,
  setPostType,
  setPostDescription,
  setPostMainImage,
  setMainHasImage,
  setPostTags,
  addPostParagraphs,
  setPostCreateDate,
  setPostUpdateDate,
  setPostCreatedBy,
  // post para related reducers
  setPostParaHeading,
  setPostParaSubHeading,
  setPostParaBody,
  addPostParaImage,
  setPostParaImage,
  setPostParaHasImages,
  setPostParaTableData,
  // post info
  setPostUpcomingIPOInfo,
  setPostIPONameInfo,
  // post status
  setPostPublishStatus,
  //reset state
  resetPostState,
} = postSlice.actions;

// export postSlice
export default postSlice.reducer;
