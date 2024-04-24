/* Component : Info & Usage
 * Info :
 *       This is the footer of the app which will be always
 * present at every screen.
 * Usage :
 *        Main purpose is for navigation throughout out the app.
 */

/* TODO : //
 * @ - Make it responsive.
 * @ - Add more navigational links to it.
 * @ - Add other links as well
 */

// component import
import Link from "next/link";
import { ChangeAppScreen } from ".";
import { HiHome } from "react-icons/hi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { IoMdInformationCircle } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full h-fit dark:bg-[#202D37] dark:text-white bg-white text-[#202d37] transition-all ease-in border-t-2 border-solid border-t-[#003b31] grid grid-rows-1 grid-flow-col items-center justify-items-center">
      <ChangeAppScreen />
      {/* Home Menu */}
      <div className="cursor-pointer w-full h-fit">
        <Link
          href="/"
          className="flex flex-grow text-nowrap gap-1 items-center justify-around"
        >
          <HiHome className="w-5 h-5" />
          <h4 className="hidden md:block">Home</h4>
        </Link>
      </div>
      {/* IPO Menu */}
      <div className="cursor-pointer w-full h-fit ">
        <Link
          href={"/pages/home/ipo?category=ipo"}
          className="flex flex-grow text-nowrap gap-1 items-center justify-around"
        >
          <GiTakeMyMoney className="w-5 h-5" />
          <h4 className="hidden md:block">IPO</h4>
        </Link>
      </div>
      {/* Market update */}
      <div className="cursor-pointer w-full h-fit ">
        <Link
          href="/pages/home/news?category=news"
          className="flex flex-grow text-nowrap gap-1 items-center justify-around"
        >
          <FaRegNewspaper className="w-5 h-5" />
          <h4 className="hidden md:block">Market Updates</h4>
        </Link>
      </div>
      {/* Contacts */}
      <div className="cursor-pointer w-full h-fit flex flex-grow text-nowrap gap-1 items-center justify-around">
        <GrContactInfo className="w-5 h-5" />
        <h4 className="hidden md:block">Contact</h4>
      </div>
      {/* About */}
      <div className="cursor-pointer w-full h-fit flex flex-grow text-nowrap gap-1 items-center justify-around">
        <IoMdInformationCircle className="w-5 h-5" />
        <h4 className="hidden md:block">About</h4>
      </div>
    </div>
  );
};

export default Footer;
