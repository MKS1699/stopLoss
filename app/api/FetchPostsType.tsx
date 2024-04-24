"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import {
  API_DEV,
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "./endPoints";
import axios from "axios";

const FetchPostsType = ({
  postType,
  limit = -1,
}: {
  postType:
    | "ipo"
    | "news"
    | "tutorial"
    | "blog"
    | "sponsored_post"
    | "company_profile";
  limit?: number;
}) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<{}[] | null>([]);

  useEffect(() => {
    // const API_PATH = `${API_DEV}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostByType}`;
    const API_PATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostByType}`;

    const fetch = async () => {
      const result = await axios.post(API_PATH, { postType, limit });
      if (result.status === 200) {
        setData(result.data.result.posts);
      } else if (result.status === 424) {
        setData(null);
      } else if (result.status === 401) {
        setData(null);
      }
    };

    fetch();
  }, []);
  return data;
};

export default FetchPostsType;
