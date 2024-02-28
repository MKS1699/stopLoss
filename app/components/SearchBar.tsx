"use client";
/* Component : Info & Usage
 * Info :
 *       Component for searching the content of the website.
 *
 * Usage :
 *        Search engine for the website.
 */

/* TODO ://
 *
 * @ - write the search algo
 */

// search icon
import { CiSearch } from "react-icons/ci";

interface SearchBarPropsTypes {
  className?: string; // for styling the main component
  classNameSearchIcon?: string; // for styling the search icon
  classNameSearchField?: string; // for styling the search field [input:text]
}

const SearchBar = ({
  className,
  classNameSearchIcon,
  classNameSearchField,
}: SearchBarPropsTypes) => {
  return (
    <div
      className={`w-full h-full relative grid grid-cols-1 grid-rows-1 ${className}`}
    >
      <input
        type="text"
        className={`w-full h-fit border-b-2 border-b-solid border-b-[#003b31] dark:border-b-white bg-transparent text-[#003b31] dark:text-white outline-none text-lg pr-5 ${classNameSearchField}`}
      />
      <CiSearch
        className={`absolute top-2 right-0 cursor-pointer animate-bounce dark:text-white text-[#003b31] ${classNameSearchIcon}`}
      />
    </div>
  );
};

export default SearchBar;
