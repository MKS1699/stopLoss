"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../storeHooks";
import {
  API_DEV,
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "./endPoints";
import axios from "axios";
import { setDataPost } from "@/app/redux/slice/dataSlice";

interface useGetPostPropsTypes {
  id: string;
}

const useGetPost = ({ id }: useGetPostPropsTypes) => {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => state.data.post);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const POST_PATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostById}`;
    // const POST_PATH = `${API_DEV}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostById}`
    const fetch = async () => {
      const post = await axios
        .post(POST_PATH, {
          id,
        })
        .then((res) => {
          dispatch(setDataPost({ post: res.data.result.post }));
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);

  return { isLoading, post };
};

export default useGetPost;
