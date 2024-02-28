"use client";

import { useAppDispatch } from "@/app/hooks";
import {
  changeAdminPanelScreen,
  resetAdminPanelState,
} from "@/app/redux/slice/adminPanelSlice";
import {
  setAdminScreen,
  setAppAdminGuestMode,
  setAppAdminLoginStatus,
} from "@/app/redux/slice/appSlice";
import { resetSession } from "@/app/redux/slice/sessionSlice";
import { StyledComponent } from "@/app/types/component_types";
import toast from "react-hot-toast";
import { MdOutlineEditNote, MdOutlinePostAdd } from "react-icons/md";

interface UserMenuPropsTypes extends StyledComponent {
  showUserMenu: boolean;
  guestMode: boolean;
  setShowUserMenu: (val: boolean) => void;
  userName: string;
}

const UserMenu = ({
  showUserMenu,
  guestMode,
  userName,
  setShowUserMenu,
}: UserMenuPropsTypes) => {
  const dispatch = useAppDispatch();

  // user menu functions
  // logout function
  function logout() {
    if (!guestMode) {
      dispatch(resetSession());
      dispatch(resetAdminPanelState());
      dispatch(setAppAdminLoginStatus({ loginStatus: false }));
      dispatch(setAdminScreen({ screen: "login" }));
      toast.success(`${userName} successfully logged out.`);
      setShowUserMenu(false);
    } else {
      dispatch(resetSession());
      dispatch(resetAdminPanelState());
      dispatch(setAppAdminLoginStatus({ loginStatus: false }));
      dispatch(setAdminScreen({ screen: "login" }));
      dispatch(setAppAdminGuestMode({ guestMode: false }));
      toast.success(`Logged out.`);
      setShowUserMenu(false);
    }
  }

  // create post
  function createPost() {
    dispatch(changeAdminPanelScreen({ screen: "createPost" }));
    toast("Create Post", {
      icon: <MdOutlinePostAdd size="2rem" />,
    });
    setShowUserMenu(false);
  }

  // edit post
  function editPost() {
    dispatch(changeAdminPanelScreen({ screen: "editPost" }));
    toast("Editing Post", { icon: <MdOutlineEditNote size="2rem" /> });
    setShowUserMenu(false);
  }

  // setting's menu for the user
  function settings() {
    dispatch(changeAdminPanelScreen({ screen: "userSettings" }));
    setShowUserMenu(false);
  }

  return (
    <div
      className={`${
        showUserMenu ? "grid" : "hidden"
      } absolute w-28 md:w-[85%] h-auto py-3 md:py-2 px-2 bg-[#4cb050]  dark:bg-[#003b31] rounded-md  text-[#003b31] dark:text-[#4cb050] top-28 md:top-0 md:grid-flow-col z-30`}
    >
      <p
        className="cursor-pointer mx-1 my-1 text-base md:border-r-2 md:border-r-solid md:border-r-[#003b31] md:dark:border-r-[#4cb050] md:text-center hover:scale-110 transition-all ease-linear "
        onClick={createPost}
      >
        Create Post
      </p>
      <p
        className="cursor-pointer mx-1 my-1 text-base md:border-r-2 md:border-r-solid md:border-r-[#003b31] md:dark:border-r-[#4cb050] md:text-center hover:scale-110 transition-all ease-linear "
        onClick={editPost}
      >
        Edit Post
      </p>
      <p
        className="cursor-pointer mx-1 my-1 text-base md:border-r-2 md:border-r-solid md:border-r-[#003b31] md:dark:border-r-[#4cb050] md:text-center hover:scale-110 transition-all ease-linear "
        onClick={settings}
      >
        Settings
      </p>
      <p
        className="cursor-pointer mx-1 my-1 text-base md:text-center hover:scale-110 transition-all ease-linear "
        onClick={logout}
      >
        Logout
      </p>
    </div>
  );
};

export default UserMenu;
