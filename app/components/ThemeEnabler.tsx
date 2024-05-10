"use client";

/* Component : Info & Usage
 * Info :
 *       Component for creating light / dark theme.
 *
 * Usage :
 *        Changes theme for the entire app based on users
 * preference.
 */

// icon import
import { CiLight, CiDark } from "react-icons/ci";
// hooks import
import { useAppDispatch, useTheme } from "../hooks";
// react hooks
import { useEffect } from "react";
// slice actions
import { toggleAppTheme } from "../redux/slice/appSlice";

type ThemeEnablerPropsTypes = {
  className?: string; // customizing the component
};

const ThemeEnabler = ({ className }: ThemeEnablerPropsTypes) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return (
    <div
      className={`w-full h-full grid grid-cols-1 grid-rows-1 cursor-pointer items-center justify-items-center text-dark dark:text-light ${className}`}
      onClick={() => dispatch(toggleAppTheme())}
    >
      {/* different icon base on theme to change */}
      {theme === "light" ? (
        <CiLight className="w-6 h-6 sm:w-12 sm:h-12" />
      ) : (
        <CiDark className="w-6 h-6 sm:w-12 sm:h-12" />
      )}
    </div>
  );
};

export default ThemeEnabler;
