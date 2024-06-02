"use client";

/* API HOOK
 *
 * Info :
 * This API Hook gets the number of posts done by a user based
 * based on its userId.
 *
 * Usage :
 * It is used to detect if the user has posts more than 10 posts
 * which is the default number of posts that is made visible to
 * the user in the admin panel in 1 page view of its posts.
 * If this returns the number greater than 10 then the hook
 * to get other old posts of the user is triggered to create
 * pagination of posts in "AllPosts" page in admin panel.
 *
 * Initially created by : MKS1699
 */

import { useEffect, useState } from "react";
import { useAppSelector } from "../storeHooks";
import {
  API_DEV,
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "./endPoints";
import axios from "axios";

const useGetNumOfPostsByUser = () => {
  const [numberOfPostsByUser, setNumberOfPostsByUser] = useState<number>(0);

  const userId: string = useAppSelector((state) => state.session.userId);

  const userPosts: {}[] = useAppSelector((state) => state.adminPanel.userPosts);

  useEffect(() => {
    if (userId.length > 0) {
      const PATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.countPostsByUser}`;

      // const PATH = `${API_DEV}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.countPostsByUser}`;

      const fetch = async () => {
        const res = await axios
          .post(PATH, {
            userId,
          })
          .then((res) => {
            const {
              nPosts,
              operation,
              statusCode,
            }: {
              nPosts: number;
              operation: boolean;
              statusCode: 1 | 0;
            } = res.data.result;
            if (statusCode == 1 && operation == true) {
              setNumberOfPostsByUser(nPosts);
            }
          });
      };

      fetch();
    }
  }, [userId]);

  return { numberOfPostsByUser };
};

export default useGetNumOfPostsByUser;
