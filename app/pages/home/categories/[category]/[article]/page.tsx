import { Footer, TitleBar } from "@/app/components";
import { Main } from "./components";

import axios from "axios";
import { Metadata } from "next";
import {
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "@/app/api/endPoints";

type generateMetadataPropsTypes = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
  params,
}: generateMetadataPropsTypes): Promise<Metadata> {
  const post = await axios
    .post(`${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getPostById}`, {
      id: searchParams?.id,
    })
    .then((result) => result.data.result.post);
  const TAGS = await axios
    .post(`${API_URL}${API_POSTS_ROUTE}${API_POSTS_ENDPOINTS.getTagForPost}`, {
      postId: searchParams?.id,
    })
    .then((result) => result.data.result.tags);

  let tagsArr: string[] = [];
  for (let tag of TAGS) {
    tagsArr.push(tag.tag);
  }

  return {
    title: post.postTitle,
    description: post.postDescription,
    keywords: tagsArr,
    authors: post?.postAuthors,
  };
}

const page = () => {
  return (
    <>
      <TitleBar />
      <Main />
      <Footer />
    </>
  );
};

export default page;
