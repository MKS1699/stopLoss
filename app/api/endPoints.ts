export const API_URL = "https://stoploss-api.onrender.com/api";
export const API_DEV = "http://localhost:6969/api";

export const API_USERS_ROUTE = "/users";
export const API_POSTS_ROUTE = "/posts";

export const API_POSTS_UPCOMING_IPO_LIST_ROUTE = "/posts/upcomingIPO";

export const API_USERS_ENDPOINTS = {
  login: "/login",
  signup: "/signup",
  delete: "/deleteUser",
  update: "/updateUser",
};

export const API_POSTS_ENDPOINTS = {
  createPost: "/createPost",
};

export const API_POSTS_UPCOMING_IPO_LIST_ENDPOINTS = {
  // create (POST)
  createEntry: "/create",
  // get (GET)
  getAllEntries: "/get",
  getEntryByName: "/get/name",
  getEntryByID: "/get/id",
  // update (PUT)
  updateEntryName: "/update/name",
  updateEntryClose: "/update/close",
  updateEntryOpen: "/update/open",
  updateLinkedPostsAddOne: "/update/linkedPosts/addOne",
  // delete (DELETE)
  deleteEntry: "/delete",
  deleteOneLinkedPost: "/delete/linkedPosts/removeOne",
};
