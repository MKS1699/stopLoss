"use client";
import { useAppDispatch } from "@/app/hooks";
import {
  setAdminScreen,
  setAppAdminGuestMode,
} from "@/app/redux/slice/appSlice";
import toast from "react-hot-toast";
/* Component - About & Usage
 * This is a component for remembering the user through its
 * email in cookie or local storage.
 * Although remembering the user does not means that it will
 * be granted the login access as it visits the login page
 * again. It will be required to enter its password for
 * verification and login.
 */

import { TbUserExclamation } from "react-icons/tb";
import { IoAlert } from "react-icons/io5";
const RememberMe = ({ checkBoxId }: { checkBoxId: string }) => {
  /* "checkBoxId" - Prop explanation & usage
   * checkBoxId prop will let the label target its specific
   * checkBox since there are 2 checkboxes in the DOM through the
   * login component one is for mobile view and the other for
   * desktop view.
   */

  const dispatch = useAppDispatch();
  function handleGuestLogin() {
    dispatch(setAppAdminGuestMode({ guestMode: true }));
    dispatch(setAdminScreen({ screen: "adminPanel" }));
    toast.success("Guest Login", { duration: 500 });
    toast(
      "Listed Posts cannot be edited nor a new post created can be published.",
      {
        icon: <IoAlert size={"2rem"} />,
        duration: 4000,
        position: "top-center",
      }
    );
  }

  return (
    <div className="w-full h-full grid grid-cols-[40%_25%_35%] grid-rows-1 text-base items-center md:text-sm xl:text-base">
      {/* Remember Me  main component */}
      <div className="px-1">
        <input
          type="checkbox"
          id={checkBoxId}
          className="cursor-pointer w-3 h-3 mr-1 outline-none text-[#355B3E]"
        />
        <label htmlFor={checkBoxId} className="text-light cursor-pointer">
          Remember me
        </label>
      </div>
      {/* Guest Login : To take tour of the admin panel. */}
      <div
        className="w-full h-fit text-light self-center justify-self-center grid grid-flow-col text-sm items-center cursor-pointer 2xl:text-base"
        onClick={handleGuestLogin}
      >
        <TbUserExclamation />
        Guest Login
      </div>
      {/* Forgot Password : To reset the password if doesn't remember. */}
      <div className="text-light justify-self-end cursor-pointer">
        Forgot Password
      </div>
    </div>
  );
};

export default RememberMe;
