"use client";
/* Component : Info & Usage
 * Info :
 *       This component is created as providing menu for the
 * visitors coming thorough the mobile devices for the website.
 *
 * Usage :
 *        It provides navigational links to various sections of
 * the website for the visitor.
 */

import { useState } from "react";
// icon imports
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
// component import
import { SideBarMenu } from ".";
// types import
import { StyledComponent } from "../types/component_types";

const MobileMenu = ({ className }: StyledComponent) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div
      className={`self-center justify-self-center w-full h-full grid grid-rows-1 grid-cols-1 relative ${className}`}
    >
      <RxCross1
        className={`w-6 h-6 sm:w-12 sm:h-12 self-center justify-self-center  text-dark dark:text-light cursor-pointer ${
          showMenu ? "block animate-rotateNshow" : "animate-rotateNhide hidden"
        }`}
        onClick={() => setShowMenu(false)}
      />

      <RxHamburgerMenu
        className={`w-6 h-6 sm:w-12 sm:h-12 self-center justify-self-center  text-dark dark:text-light cursor-pointer ${
          showMenu ? "animate-rotateNhide hidden" : "block animate-rotateNshow"
        }`}
        onClick={() => setShowMenu(true)}
      />

      {showMenu && (
        <SideBarMenu showMenu={showMenu} handleShowMenu={setShowMenu} />
      )}
    </div>
  );
};

export default MobileMenu;
