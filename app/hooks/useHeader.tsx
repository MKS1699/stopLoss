"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "./storeHooks";

type HEADERS = {
  // authorization : `bearer ${token}`
  authorization: string;
};

const useHeader = () => {
  const [headers, setHeaders] = useState<HEADERS>({
    authorization: "",
  });

  const token = useAppSelector((state) => state.session.token);

  useEffect(() => {
    setHeaders({ authorization: `bearer ${token}` });
  }, [token]);
  return headers;
};

export default useHeader;
