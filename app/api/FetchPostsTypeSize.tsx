"use client";

import { useEffect, useState } from "react";
import { PostSliceTypes } from "../types/slice_types/postSliceTypes";
import {
  API_DEV,
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "./endPoints";
import axios from "axios";

const FetchPostsTypeSize = ({
  postType,
}: {
  postType: PostSliceTypes["postType"];
}) => {
  const [postSize, setPostSize] = useState<number>(0);

  useEffect(() => {
    // const API_PATH = `${API_DEV}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.countPostsByType}`;

    const API_PATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.countPostsByType}`;
    const fetch = async () => {
      const result = await axios.post(API_PATH, {
        postType,
      });
      if (result.status === 200) {
        setPostSize(result.data.result.nPosts);
      } else if (result.status === 404) {
        setPostSize(0);
      } else if (result.status === 424) {
        setPostSize(-1);
      }
    };

    fetch();
  });

  return postSize;
};

export default FetchPostsTypeSize;
