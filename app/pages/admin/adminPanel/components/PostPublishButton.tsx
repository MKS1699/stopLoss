"use client";
import { useAppDispatch, useAppSelector, usePostValidation } from "@/app/hooks";
import toast from "react-hot-toast";
import { BsSendCheck } from "react-icons/bs";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import {
  resetPostState,
  setPostCreateDate,
  setPostCreatedBy,
  setPostPublishStatus,
  setPostUpdateDate,
} from "@/app/redux/slice/postSlice";
import {
  API_DEV,
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "@/app/api/endPoints";
import axios, { AxiosRequestConfig } from "axios";
import {
  resetAdminPanelState,
  setPostUploadStatus,
} from "@/app/redux/slice/adminPanelSlice";
import { useEffect } from "react";

const PostPublishButton = ({ screen }: PostTitleBarPropsTypes) => {
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.session.token);
  const userID = useAppSelector((state) => state.session.userId);
  const userName = useAppSelector((state) => state.session.userName);

  const post = useAppSelector((state) => state.post);

  // post upload status
  const postUploadStatus = useAppSelector(
    (state) => state.adminPanel.postUploadStatus
  );

  //post publish status
  const postPublishStatus = useAppSelector(
    (state) => state.post.postStatus.publish
  );

  // function for publishing post
  async function publishPost() {
    if (post.createdBy.name === userName && post.createdBy.id === userID) {
      if (token.length > 1) {
        // const POST_PATH = `${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.createPost}`;
        const POST_PATH = `${API_DEV}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.createPost}`;
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
        if (res.status === 201) {
          toast.success("Post Uploaded");
          dispatch(resetPostState());
          dispatch(resetAdminPanelState());
        } else {
          toast.error("Post not uploaded");
        }
      }
    }
  }

  const result = usePostValidation();
  /* to do : Publish button logic */
  function handlePostPublishButton() {
    if (result.passed) {
      dispatch(setPostUploadStatus("uploading"));
      if (screen === "createPost") {
        // post creation details
        dispatch(setPostCreateDate());
        dispatch(setPostUpdateDate());
        dispatch(setPostCreatedBy({ name: userName, id: userID }));
        dispatch(setPostPublishStatus(true));
      }
    } else {
      toast.error(result.message ? result.message : "", { duration: 1500 });
      result.errorDetails?.map((err: any) => {
        toast.error(err.errorMessage, { duration: 3000 });
      });
    }
  }

  // publish post if publish status changes to true
  useEffect(() => {
    if (postPublishStatus) {
      publishPost();
    }
  }, [postPublishStatus]);

  return (
    <div
      className="w-auto h-fit grid grid-rows-1 grid-cols-1 md:grid-cols-[40%_60%] bg-[#4cb050] bg-opacity-50 items-center justify-items-center cursor-pointer rounded-md px-3 py-1 text-black"
      title="Publish"
      aria-label="Publish Post Button"
      onClick={handlePostPublishButton}
    >
      <BsSendCheck
        size={"2rem"}
        title="Publish"
        aria-label="Publish Post Button Icon"
      />
      <div
        className="hidden md:inline-block md:text-lg"
        title="Publish"
        aria-label="Publish Post Button Text"
      >
        Publish
      </div>
    </div>
  );
};

export default PostPublishButton;
