import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DATASLICETYPES } from "@/app/types/slice_types/dataSliceTypes";

const EMPTYSTATE = {
  latestPosts: [],
  post: {},
  postsSizes: {
    blog: -1,
    companyProfile: -1,
    ipo: -1,
    news: -1,
    sponsoredPost: -1,
    tutorial: -1,
  },
  categoryPosts: {
    ipoPosts: [],
    blogPosts: [],
    companyProfilePosts: [],
    newsPosts: [],
    sponsoredPosts: [],
    tutorialPosts: [],
  },
  upcomingIPOEntries: [],
};

const initialState: DATASLICETYPES = {
  latestPosts: [],
  post: {},
  postsSizes: {
    blog: -1,
    companyProfile: -1,
    ipo: -1,
    news: -1,
    sponsoredPost: -1,
    tutorial: -1,
  },
  categoryPosts: {
    ipoPosts: [],
    blogPosts: [],
    companyProfilePosts: [],
    newsPosts: [],
    sponsoredPosts: [],
    tutorialPosts: [],
  },
  upcomingIPOEntries: [],
};

export const dataSlice = createSlice({
  name: "Data Slice",
  initialState,
  reducers: {
    // storing content to state
    setDataLatestPosts: (
      state,
      action: PayloadAction<{ posts: DATASLICETYPES["latestPosts"] }>
    ) => {
      state.latestPosts = action.payload.posts;
    },

    setDataStatePostsCategorySizes: (
      state,
      action: PayloadAction<{
        category:
          | "ipo"
          | "news"
          | "tutorial"
          | "blog"
          | "sponsored_post"
          | "company_profile";
        size: number;
      }>
    ) => {
      const { category, size } = action.payload;
      if (category == "blog") {
        state.postsSizes.blog = size;
      } else if (category == "company_profile") {
        state.postsSizes.companyProfile = size;
      } else if (category == "ipo") {
        state.postsSizes.ipo = size;
      } else if (category == "news") {
        state.postsSizes.news = size;
      } else if (category == "sponsored_post") {
        state.postsSizes.sponsoredPost = size;
      } else if (category == "tutorial") {
        state.postsSizes.tutorial = size;
      }
    },

    // upcomingipoentries
    setDataUpcomingIPOEntries: (
      state,
      action: PayloadAction<{ entries: {}[] }>
    ) => {},

    // catergory Posts
    setDataCategoryPosts: (
      state,
      action: PayloadAction<{
        category:
          | "ipo"
          | "news"
          | "tutorial"
          | "blog"
          | "sponsored_post"
          | "company_profile";
        posts: {}[];
      }>
    ) => {
      const { category, posts } = action.payload;
      if (category === "blog") {
        state.categoryPosts.blogPosts = posts;
      }
      if (category === "company_profile") {
        state.categoryPosts.companyProfilePosts = posts;
      }
      if (category === "ipo") {
        state.categoryPosts.ipoPosts = posts;
      }
      if (category === "news") {
        state.categoryPosts.newsPosts = posts;
      }
      if (category === "sponsored_post") {
        state.categoryPosts.sponsoredPosts = posts;
      }
      if (category === "tutorial") {
        state.categoryPosts.tutorialPosts = posts;
      }
    },

    // post
    setDataPost: (state, action: PayloadAction<{ post: {} }>) => {
      state.post = action.payload.post;
    },

    // resetState
    resetDataSliceState: (state) => {
      state.categoryPosts = EMPTYSTATE.categoryPosts;
      state.latestPosts = EMPTYSTATE.latestPosts;
      state.post = EMPTYSTATE.post;
      state.postsSizes = EMPTYSTATE.postsSizes;
      state.upcomingIPOEntries = EMPTYSTATE.upcomingIPOEntries;
    },
  },
});

export const {
  setDataLatestPosts,
  setDataStatePostsCategorySizes,
  setDataUpcomingIPOEntries,
  setDataCategoryPosts,
  setDataPost,
  resetDataSliceState,
} = dataSlice.actions;

export default dataSlice.reducer;
