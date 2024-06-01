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
import { setAdminPanelUserPosts } from "@/app/redux/slice/adminPanelSlice";

interface useGetPostsByUserPropsTypes {
  userId: string;
  limit?: number;
  fromLastPostDate?: Date;
}

const useGetPostsByUser = ({
  userId,
  limit,
  fromLastPostDate,
}: useGetPostsByUserPropsTypes) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const userName = useAppSelector((state) => state.session.userName);
  const userPosts = useAppSelector((state) => state.adminPanel.userPosts);
  useEffect(() => {
    // const PATH = `${API_DEV}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostByUser}`;
    const PATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostByUser}`;

    const fetch = async () => {
      const res = await axios
        .post(PATH, {
          userId,
          limit,
          fromLastPostDate,
        })
        .then((res) => {
          if (
            res.data.result.operation == true &&
            res.data.result.statusCode == 1
          ) {
            toast.success(`Posts fetched for user: ${userName}`);
            dispatch(setAdminPanelUserPosts({ posts: res.data.result.posts }));
            setIsLoading(false);
          }
        });
    };
    fetch();
  }, []);

  return { userPosts, isLoading };
};

export default useGetPostsByUser;
