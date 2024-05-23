import { Main } from "./components";
import axios from "axios";
import { Metadata } from "next";
import {
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_URL,
} from "@/app/hooks/apiHooks/endPoints";
import { createTitleURL } from "@/app/utils/tools";

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
    authors: post.postAuthors,
    openGraph: {
      title: post.postTitle,
      type: "article",
      images: {
        alt: post.postImage.caption,
        url: post.postImage.links.original,
        type: "image/jpeg/png",
      },
      url: `https://www.stoploss.live/pages/home/categories/${
        post.postType
      }/${createTitleURL(post.postTitle)}?id=${searchParams?.id}`,
      authors: post.postAuthors,
      description: post.postDescription,
      tags: tagsArr,
      siteName: "Stoploss.live",
    },
  };
}

const page = () => {
  return <Main />;
};

export default page;
