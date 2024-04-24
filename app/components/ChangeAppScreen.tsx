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
import { useRouter } from "next/navigation";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { HiHome } from "react-icons/hi";

const ChangeAppScreen = () => {
  const dispatch = useAppDispatch();
  const appScreen = useAppSelector((state) => state.app.appScreen);

  const router = useRouter();

  function handleAppScreenChangeButton() {
    router.replace("/", { scroll: true });
    if (appScreen === "home") {
      dispatch(setAppScreen({ screen: "admin" }));
    } else if (appScreen === "admin") {
      dispatch(setAppScreen({ screen: "home" }));
    }
  }
  return (
    <div className="w-full h-fit">
      {appScreen === "home" ? (
        <div
          className="cursor-pointer w-full h-fit flex flex-grow text-nowrap gap-1 items-center justify-around"
          onClick={handleAppScreenChangeButton}
        >
          <MdOutlineDisplaySettings className="w-5 h-5" />
          <h4 className="hidden md:block">Admin Panel</h4>
        </div>
      ) : (
        <div
          className="cursor-pointer w-full h-fit flex flex-grow text-nowrap gap-1 items-center justify-around"
          onClick={handleAppScreenChangeButton}
        >
          <HiHome className="w-5 h-5" />
          <h4 className="hidden md:block">Home</h4>
        </div>
      )}
    </div>
  );
};

export default ChangeAppScreen;
