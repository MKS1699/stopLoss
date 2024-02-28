"use client";

import { useAppSelector } from ".";

const useGuestMode = () => {
  const guestMode = useAppSelector((state) => state.app.guestMode);
  return guestMode;
};

export default useGuestMode;
