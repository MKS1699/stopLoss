"use client";

/* Component : Info & Usage
 * Info :
 *       The component is created for selecting either the home
 * view for browsing the website as a visitor or login
 * page as a user for posting articles for the website.
 *
 * Usage :
 *        This component makes the user available option
 * for changing its view home or admin by checking
 * where the user is. Default view is Home therefore Login
 * option is provided to login and move to admin panel and
 * in admin panel Home option is provided for the user to
 * browse the website as a visitor / audience.
 */

/* TODO ://
 *
 * @ - improve functionality - by not letting user to in the
 * middle of post creation to change their view from admin
 * panel to home.
 *
 *
 *
 */

// redux hooks import
import { useAppDispatch, useAppSelector } from "@/app/hooks";
// slice actions import
import { setAppScreen } from "@/app/redux/slice/appSlice";

const ChangeAppScreen = () => {
  const dispatch = useAppDispatch();
  const appScreen = useAppSelector((state) => state.app.appScreen);

  function handleAppScreenChangeButton() {
    if (appScreen === "home") {
      dispatch(setAppScreen({ screen: "admin" }));
    } else if (appScreen === "admin") {
      dispatch(setAppScreen({ screen: "home" }));
    }
  }
  return (
    <button onClick={handleAppScreenChangeButton}>
      {appScreen === "home" ? "Login" : "Home"}
    </button>
  );
};

export default ChangeAppScreen;
