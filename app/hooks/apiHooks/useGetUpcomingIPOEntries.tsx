"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../storeHooks";
import {
  API_POSTS_UPCOMING_IPO_LIST_ENDPOINTS,
  API_POSTS_UPCOMING_IPO_LIST_ROUTE,
  API_URL,
} from "./endPoints";
import axios from "axios";
import { setDataUpcomingIPOEntries } from "@/app/redux/slice/dataSlice";

const useGetUpcomingIPOEntries = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const upcomingIPOEntries = useAppSelector(
    (state) => state.data.upcomingIPOEntries
  );

  useEffect(() => {
    const PATH = `${API_URL}${API_POSTS_UPCOMING_IPO_LIST_ROUTE}${API_POSTS_UPCOMING_IPO_LIST_ENDPOINTS.getAllEntries}`;

    const fetch = async () =>
      await axios
        .get(PATH)
        .then((res) => {
          dispatch(
            setDataUpcomingIPOEntries({ entries: res.data.RESULT.ALL_ENTRIES })
          );
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    fetch();
  }, []);

  return { isLoading, upcomingIPOEntries };
};

export default useGetUpcomingIPOEntries;
