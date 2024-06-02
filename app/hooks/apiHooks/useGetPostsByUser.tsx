"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  API_DEV,
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "./endPoints";
import { useAppDispatch, useAppSelector } from "../storeHooks";
import toast from "react-hot-toast";
import {
  resetAdminPanelUserPosts,
  setAdminPanelUserPosts,
  setPostsToShow,
} from "@/app/redux/slice/adminPanelSlice";

interface useGetPostsByUserPropsTypes {
  userId: string;
}

const useGetPostsByUser = ({ userId }: useGetPostsByUserPropsTypes) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const userName = useAppSelector((state) => state.session.userName);
  const userPosts = useAppSelector((state) => state.adminPanel.userPosts);

  const getPostsByUser = async () => {
    // const PATH = `${API_DEV}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostByUser}`;
    const PATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostByUser}`;
    const res = await axios
      .post(PATH, {
        userId,
      })
      .then((res) => {
        if (
          res.data.result.operation == true &&
          res.data.result.statusCode == 1
        ) {
          toast.success(`Posts fetched for user: ${userName}`);
          const { posts } = res.data.result;
          dispatch(resetAdminPanelUserPosts());
          dispatch(setAdminPanelUserPosts({ posts }));
          dispatch(setPostsToShow({ posts }));
          setIsLoading(false);
        }
      });
  };

  useEffect(() => {
    getPostsByUser();
  }, []);

  return { userPosts, isLoading, getPostsByUser };
};

export default useGetPostsByUser;
