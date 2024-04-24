"use client";

import { useSearchParams } from "next/navigation";
import Article from "./Article";
import RelatedPosts from "./RelatedPosts";
import Tags from "./Tags";
import { useEffect, useState } from "react";
import {
  API_DEV,
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "@/app/api/endPoints";
import axios from "axios";

const Main = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const [post, setPost] = useState<any>({});
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetch = async () => {
      // const API_PATH = `${API_DEV}${API_POSTS_ROUTE}`;
      const API_PATH = `${API_URL}${API_POSTS_ROUTE}`;
      const POST = await axios.post(
        `${API_PATH}${API_POSTS_ENDPOINTS.getPostById}`,
        { id }
      );

      const TAGS = await axios.post(
        `${API_PATH}${API_POSTS_ENDPOINTS.getTagForPost}`,
        { postId: id }
      );
      if (POST.status === 200) {
        setPost(POST?.data?.result?.post);
      }
      if (TAGS.status === 200) {
        setTags(TAGS?.data?.result?.tags);
      }
    };
    fetch();
  }, [id]);
  return (
    <div className="md:container md:mx-auto md:w-1/2">
      <Article post={post} />
      <Tags tags={tags} />
      {/* <RelatedPosts tags={tags} /> */}
    </div>
  );
};

export default Main;
