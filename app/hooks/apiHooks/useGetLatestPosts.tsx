"use client";

import { useEffect, useState } from "react";
import {
  API_DEV,
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "./endPoints";
import { useAppDispatch, useAppSelector } from "../storeHooks";
import axios from "axios";
import { setDataLatestPosts } from "@/app/redux/slice/dataSlice";

const useGetLatestPosts = () => {
  const dispatch = useAppDispatch();
  const PATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getLatestPosts}`;

  // const PATH = `${API_DEV}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getLatestPosts}`;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const latestPosts = useAppSelector((state) => state.data.latestPosts);

  useEffect(() => {
    const fetch = async () =>
      await axios
        .get(PATH)
        .then((res) => {
          dispatch(setDataLatestPosts({ posts: res.data.result.posts }));
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    fetch();
  }, []);

  return { isLoading, latestPosts };
};

export default useGetLatestPosts;
