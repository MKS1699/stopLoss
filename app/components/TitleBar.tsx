/* Component : Info & Usage
 * Info :
 *       Title bar for the home component.
 *
 * Usage :
 *        Responsive title bar for the app providing various
 * navigational links for the website.
 */

// component import
import Image from "next/image";
import { NavBar, SearchBar, ThemeEnabler } from ".";
import MobileMenu from "./MobileMenu";
// font import
import { barlow, pacifico } from "../utils/fonts";
// LOGO import
import LOGO from "@/public/Logo.svg";
import Link from "next/link";

const TitleBar = () => {
  return (
    <div className="bg-light dark:bg-dark grid grid-rows-1 grid-cols-[10%_80%_10%] lg:grid-cols-[30%_25%_40%_5%] xl:grid-cols-[25%_25%_45%_5%] 2xl:grid-cols-[20%_25%_50%_5%] lg:gap-0 transition-all ease-in py-1 border-b-[3px] border-solid border-b-[#4CB050]">
      {/* Mobile Nav Menu */}
      <MobileMenu className="lg:hidden" />
      {/* Title  */}
      <div
        className={`${barlow.className} w-full h-full grid grid-cols-1 grid-rows-1 lg:col-start-1 lg:px-2 lg:gap-2`}
      >
        {/* Image Logo */}
        {/* <Image
          src={LOGO}
          alt="StopLoss Logo"
          sizes="100vw"
          className="w-10 h-10 sm:w-14 sm:h-14 self-center justify-self-end"
        /> */}
        <h1 className="text-[#4CB050] text-5xl font-thin sm:font-light text-center self-center justify-self-center sm:justify-self-start">
          <Link href="/" className={`${barlow.className}`}>
            stoploss.live
          </Link>
          <span className="hidden sm:inline sm:text-sm sm:font-light text-dark dark:text-light lg:hidden px-1">
            One stop solution for your losses
          </span>
        </h1>
      </div>
      {/* SearchBar */}
      <SearchBar
        className="hidden lg:block lg:col-start-2"
        classNameSearchField="lg:h-[85%] lg:pr-8 lg:text-3xl lg:font-light"
        classNameSearchIcon="lg:w-8 lg:h-8 lg:top-2"
      />
      {/* NavBar */}
      <NavBar />
      {/* dark Mode */}
      <ThemeEnabler className="lg:col-start-4" />
    </div>
  );
};

export default TitleBar;
