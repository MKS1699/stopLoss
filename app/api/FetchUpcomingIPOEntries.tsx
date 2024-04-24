"use client";
import React, { useEffect, useState } from "react";
import {
  API_DEV,
  API_POSTS_ENDPOINTS,
  API_POSTS_ROUTE,
  API_POSTS_UPCOMING_IPO_LIST_ENDPOINTS,
  API_POSTS_UPCOMING_IPO_LIST_ROUTE,
  API_URL,
} from "./endPoints";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addUpcomingIPOEntries } from "../redux/slice/upcomingIPOEntriesSlice";

const FetchUpcomingIPOEntries = () => {
  const dispatch = useAppDispatch();
  const upcomingIPO = useAppSelector((state) => state.upcomingIPO.entries);
  useEffect(() => {
    // const API_PATH = `${API_DEV}${API_POSTS_UPCOMING_IPO_LIST_ROUTE}${API_POSTS_UPCOMING_IPO_LIST_ENDPOINTS.getAllEntries}`;

    const API_PATH = `${API_URL}${API_POSTS_UPCOMING_IPO_LIST_ROUTE}${API_POSTS_UPCOMING_IPO_LIST_ENDPOINTS.getAllEntries}`;

    const fetch = async () => {
      const result = await axios.get(API_PATH);
      const ALL_ENTRIES = result.data.RESULT.ALL_ENTRIES;
      dispatch(addUpcomingIPOEntries(ALL_ENTRIES));
    };

    fetch();
  }, []);
  return upcomingIPO;
};

export default FetchUpcomingIPOEntries;
