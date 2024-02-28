"use client";
import { useEffect } from "react";
/* Component : Info & Usage
 * Info :
 *       This components renders the Home / Admin (Login)
 * component.
 *
 * Usage :
 *        This components renders the desired component based
 * on the selection of the screen to view by the user / visitor
 * which is Home or Admin (Login), be default it is always Home.
 */

// redux hooks import
import { useAppSelector } from "../hooks";
// component (pages/screens) import
import { Admin, Home } from "../pages";

const AppScreenSelector = () => {
  const appScreen = useAppSelector((store) => store.app.appScreen);

  //scrolling to top on every component mounting
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appScreen]);

  return <>{appScreen === "home" ? <Home /> : <Admin />}</>;
};

export default AppScreenSelector;
