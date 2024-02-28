"use client";
/* Theme hook returning theme of the app. */
import { useAppSelector } from ".";

const useTheme = () => {
  const theme = useAppSelector((store) => store.app.appTheme);
  return theme;
};

export default useTheme;
