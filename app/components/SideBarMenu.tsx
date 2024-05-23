"use client";
/* Component : Info & Usage
 * Info :
 *       This component is created as providing menu for the
 * visitors thorough the mobile devices for the website. It opens
 * based on the Mobile Menu Component states.
 *
 * Usage :
 *        It provides navigational links to various sections of
 * the website for the visitor.
 */

/* TODO ://
 *
 * @ - add more links
 */

// component import
import { SearchBar } from ".";
// icons imports
import { HiHome } from "react-icons/hi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { IoMdInformationCircle } from "react-icons/io";
// types import
import { StyledComponent } from "../types/component_types";
import Link from "next/link";

interface SideBarMenuPropsTypes extends StyledComponent {
  showMenu: boolean;
  handleShowMenu: (val: boolean) => void;
}

const SideBarMenu = ({
  className,
  showMenu,
  handleShowMenu,
}: SideBarMenuPropsTypes) => {
  return (
    <div
      className={`absolute z-[999] w-[85vw] min-h-screen top-16  bg-dark text-white dark:bg-gray-600 p-4 text-lg transition-all ease-in grid grid-cols-1 grid-flow-row rounded-tr-md backdrop-blur-sm ${
        showMenu ? "animate-sideBarMenuSlideIn" : "animate-sideBarMenuSlideOut"
      }`}
    >
      {/* Search Bar */}
      <SearchBar />
      {/* Home Menu */}
      <div className="cursor-pointer w-fit h-fit  text-light">
        <Link
          href="/"
          className="flex flex-grow text-nowrap gap-2 items-center"
          onClick={() => handleShowMenu(false)}
        >
          <HiHome className="w-5 h-5" />
          <h4 className="">Home</h4>
        </Link>
      </div>
      {/* IPO Menu */}
      <div className="cursor-pointer w-fit h-fit  text-light">
        <Link
          href={"/pages/home/ipo"}
          className="flex flex-grow text-nowrap gap-2 items-center"
          onClick={() => handleShowMenu(false)}
        >
          <GiTakeMyMoney className="w-5 h-5" />
          <h4 className="">IPO</h4>
        </Link>
      </div>
      {/* Market update */}
      <div className="cursor-pointer w-fit h-fit text-light">
        <Link
          href={"/pages/home/news"}
          className="flex flex-grow text-nowrap gap-2 items-center"
          onClick={() => handleShowMenu(false)}
        >
          <FaRegNewspaper className="w-5 h-5" />
          <h4 className="">Market Updates</h4>
        </Link>
      </div>
      {/* Contacts */}
      <div className="cursor-pointer w-fit h-fit text-light">
        <Link
          href={"/pages/home/contact"}
          className="flex flex-grow text-nowrap gap-2 items-center"
          onClick={() => handleShowMenu(false)}
        >
          <GrContactInfo className="w-5 h-5" />
          <h4 className="">Contact</h4>
        </Link>
      </div>
      {/* About */}
      <div className="cursor-pointer w-fit h-fit text-light">
        <Link
          href={"/pages/home/about"}
          className="flex flex-grow text-nowrap gap-2 items-center"
          onClick={() => handleShowMenu(false)}
        >
          <IoMdInformationCircle className="w-5 h-5" />
          <h4 className="">About</h4>
        </Link>
      </div>
    </div>
  );
};

export default SideBarMenu;
