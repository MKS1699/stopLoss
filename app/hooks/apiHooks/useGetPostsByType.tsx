import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../storeHooks";
import {
  API_DEV,
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "./endPoints";
import axios from "axios";
import { setDataCategoryPosts } from "@/app/redux/slice/dataSlice";

interface useGetPostsByTypePropsTypes {
  postType:
    | "ipo"
    | "news"
    | "tutorial"
    | "blog"
    | "sponsored_post"
    | "company_profile";
  pagination?: boolean;
  updatedOfLastPost?: string;
  limit: number;
}

const useGetPostsByType = ({
  postType,
  pagination = false,
  updatedOfLastPost = "",
  limit = 10,
}: useGetPostsByTypePropsTypes) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const categoryPosts = useAppSelector((state) => state.data.categoryPosts);

  const {
    blogPosts,
    companyProfilePosts,
    ipoPosts,
    newsPosts,
    sponsoredPosts,
    tutorialPosts,
  } = categoryPosts;

  useEffect(() => {
    const PATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostByType}`;
    // const PATH = `${API_DEV}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostByType}`;

    const fetch = async () => {
      const res = await axios
        .post(PATH, {
          postType,
          limit,
        })
        .then((response) => {
          dispatch(
            setDataCategoryPosts({
              category: postType,
              posts: response.data.result.posts,
            })
          );
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);

  if (postType === "blog") {
    return { isLoading, posts: blogPosts };
  } else if (postType === "company_profile") {
    return { isLoading, posts: companyProfilePosts };
  } else if (postType === "ipo") {
    return { isLoading, posts: ipoPosts };
  } else if (postType === "news") {
    return { isLoading, posts: newsPosts };
  } else if (postType === "sponsored_post") {
    return { isLoading, posts: sponsoredPosts };
  } else if (postType === "tutorial") {
    return { isLoading, posts: tutorialPosts };
  }
  return { isLoading, posts: null };
};

export default useGetPostsByType;
