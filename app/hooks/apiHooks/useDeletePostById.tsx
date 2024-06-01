"use client";

import { useState } from "react";
import {
  API_DEV,
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "./endPoints";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../storeHooks";
import toast from "react-hot-toast";
import {
  reAddAdminPanelUserPosts,
  setAdminPanelUserPosts,
} from "@/app/redux/slice/adminPanelSlice";

/* This is a custom hook to delete post by id
 *
 * Working :
 * This hooks deletePost takes postId as a parameter and returns
 * whether the post has been deleted or not
 *
 *
 *
 * This hooks return `deletePost` and `isPostDeleted` which are:
 * deletePost : is an async function which deletes the post
 * isPostDeleted : is a state which tells whether the promise is
 * fulfilled or not.
 */

const useDeletePostById = () => {
  const dispatch = useAppDispatch();
  const [postDeleteStatus, setPostDeleteStatus] = useState<
    "start" | "processing" | "deleted"
  >("start");

  const userId = useAppSelector((state) => state.session.userId);

  const deletePost = async (postId: string) => {
    setPostDeleteStatus("processing");
    // const DeletePATH = `${API_DEV}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.deletePostById}`;

    const DeletePATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.deletePostById}`;

    // const PostPATH = `${API_DEV}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostByUser}`;

    const PostPATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostByUser}`;

    // deleting post
    const dPost = await axios
      .delete(DeletePATH, {
        data: {
          postId,
        },
      })
      .then((res) => {
        if (res.status == 201) {
          setPostDeleteStatus("deleted");
          toast.success("Post deleted successfully.");
        }
      });

    // refetching updated posts
    const fetchingLatestPosts = await axios
      .post(PostPATH, {
        userId,
      })
      .then((res) => {
        const posts = res.data.result.posts;
        dispatch(reAddAdminPanelUserPosts({ posts }));
      });
  };
  return { postDeleteStatus, deletePost };
};

export default useDeletePostById;
