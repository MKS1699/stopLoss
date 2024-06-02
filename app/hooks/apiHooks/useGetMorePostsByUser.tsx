"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../storeHooks";
import useGetNumOfPostsByUser from "./useGetNumOfPostsByUser";
import { API_POSTS_ENDPOINTS, API_POSTS_ROUTE, API_URL } from "./endPoints";
import axios from "axios";
import { setAdminPanelUserPosts } from "@/app/redux/slice/adminPanelSlice";

const useGetMorePostsByUser = () => {
  const dispatch = useAppDispatch();
  const userPosts = useAppSelector((state) => state.adminPanel.userPosts);
  const userId = useAppSelector((state) => state.session.userId);
  const { numberOfPostsByUser } = useGetNumOfPostsByUser();
  const [postUpdatedOfLastPost, setPostUpdatedOfLastPost] = useState<
    Date | string | undefined
  >("");
  useEffect(() => {
    if (userPosts.length > 1 && numberOfPostsByUser > 10 && userId.length > 1) {
      for (var i = 1; i < numberOfPostsByUser; i++) {
        if (i % 2 == 0 && i % 5 == 0) {
          const lastPageOfUserPost = userPosts[userPosts.length - 1];
          const lastPostOfLastPage =
            lastPageOfUserPost[lastPageOfUserPost.length - 1];
          setPostUpdatedOfLastPost(lastPostOfLastPage.postUpdated);
          if (postUpdatedOfLastPost) {
            if (postUpdatedOfLastPost.toString().length > 0) {
              getMorePostsByUser();
            }
          }
        }
      }
    }
  }, [userPosts, numberOfPostsByUser, userId]);

  // function for fetching more posts
  async function getMorePostsByUser() {
    const PATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostByUser}`;

    await axios
      .post(PATH, {
        fromLastPostDate: postUpdatedOfLastPost,
        userId,
      })
      .then((res) => {
        const { posts, statusCode, operation } = res.data.result;
        if (statusCode == 1 && operation == true) {
          dispatch(setAdminPanelUserPosts({ posts }));
        }
      })
      .catch((err) => console.log(err));
  }

  return { getMorePostsByUser };
};

export default useGetMorePostsByUser;
