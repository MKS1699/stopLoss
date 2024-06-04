"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "../storeHooks";

const useGetLatestPostsIds = () => {
  const latestPosts = useAppSelector((state) => state.data.latestPosts);

  const [latestPostsIds, setLatestPostsIds] = useState<string[]>([]);

  useEffect(() => {
    if (latestPosts.length > 1) {
      const ids: string[] = [];
      for (let i: number = 0; i < latestPosts.length; i++) {
        ids[i] = latestPosts[i]._id;
      }
      setLatestPostsIds(ids);
    }
  }, [latestPosts]);
  return { latestPostsIds };
};

export default useGetLatestPostsIds;
