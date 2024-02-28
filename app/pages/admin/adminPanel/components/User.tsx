"use client";

import { useAppDispatch, useAppSelector, useGuestMode } from "@/app/hooks";
import { StyledComponent } from "@/app/types/component_types";
import { barlow } from "@/app/utils/fonts";
import React, { HTMLProps, useEffect, useState } from "react";
import { UserMenu } from ".";
interface UserPropsTypes extends StyledComponent {
  userIconClass?: React.ComponentProps<"div">["className"];
}

const User = ({ className, userIconClass }: UserPropsTypes) => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.session.userName);
  const userId = useAppSelector((state) => state.session.userId);

  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  const guestMode = useGuestMode();

  function handleUserMenu() {
    setShowUserMenu(!showUserMenu);
  }

  return (
    <div
      className={`${barlow.className} w-full h-full self-center justify-self-center  grid grid-rows-1 grid-cols-1 relative  text-thin ${className}`}
    >
      {/* user icon */}
      <div
        className={`w-8 h-8 bg-[#4cb050] text-white rounded-full self-center justify-self-center text-center text-xl cursor-pointer ${userIconClass}`}
        onClick={handleUserMenu}
      >
        {guestMode ? "G" : userName.split("")[0].toUpperCase()}
      </div>
      {/* user menu */}
      <UserMenu
        userName={userName}
        guestMode={guestMode}
        setShowUserMenu={setShowUserMenu}
        showUserMenu={showUserMenu}
      />
    </div>
  );
};

export default User;
