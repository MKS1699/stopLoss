"use client";

import { useState } from "react";
import {
  API_DEV,
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "./endPoints";
import axios, { AxiosRequestConfig } from "axios";
import { useAppDispatch, useAppSelector } from "../storeHooks";
import toast from "react-hot-toast";
import { resetPostState } from "@/app/redux/slice/postSlice";
import { resetAdminPanelState } from "@/app/redux/slice/adminPanelSlice";

const usePostPublishSave = () => {
  const dispatch = useAppDispatch();

  const [publishStatus, setPublishStatus] = useState<
    "idle" | "processing" | "published"
  >("idle");

  const token = useAppSelector((state) => state.session.token);
  const post = useAppSelector((state) => state.post);
  const uploadPost = async () => {
    setPublishStatus("processing");
    // api path for uploading post
    const POST_PATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.createPost}`;

    // const POST_PATH = `${API_DEV}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.createPost}`;

    const config: AxiosRequestConfig = {
      url: POST_PATH,
      method: "POST",
      headers: {
        authorization: `bearer ${token}`,
      },
      data: {
        post,
      },
    };

    const res = await axios(config);
    const { statusCode, operation } = res.data;

    if (statusCode == 1 && operation == true) {
      toast.success("Post Uploaded");
      dispatch(resetPostState());
      dispatch(resetAdminPanelState());
      setPublishStatus("published");
    } else {
      toast.error("Post not uploaded");
    }
  };
  return { publishStatus, uploadPost };
};

export default usePostPublishSave;
