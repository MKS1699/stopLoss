"use client";

import { useAppDispatch, useAppSelector } from "../storeHooks";
import { useEffect } from "react";
import axios from "axios";
import {
  API_DEV,
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "./endPoints";
import { setDataStatePostsCategorySizes } from "@/app/redux/slice/dataSlice";

const useGetPostsCategorySizes = ({
  category,
}: {
  category:
    | "ipo"
    | "news"
    | "tutorial"
    | "blog"
    | "sponsored_post"
    | "company_profile";
}) => {
  const dispatch = useAppDispatch();
  const postsSizes = useAppSelector((state) => state.data.postsSizes);
  const PATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.countPostsByType}`;
  // const PATH = `${API_DEV}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.countPostsByType}`
  useEffect(() => {
    const fetch = async () =>
      await axios
        .post(PATH, {
          postType: category,
        })
        .then((res) =>
          dispatch(
            setDataStatePostsCategorySizes({
              category: category,
              size: res.data.result.nPosts,
            })
          )
        )
        .catch((err) => console.log(err));
    fetch();
  }, []);

  if (category === "blog") {
    return { size: postsSizes.blog };
  } else if (category === "company_profile") {
    return { size: postsSizes.companyProfile };
  } else if (category === "ipo") {
    return { size: postsSizes.ipo };
  } else if (category === "news") {
    return { size: postsSizes.news };
  } else if (category === "sponsored_post") {
    return { size: postsSizes.sponsoredPost };
  } else if (category === "tutorial") {
    return { size: postsSizes.tutorial };
  }
  return { size: 0 };
};

export default useGetPostsCategorySizes;
