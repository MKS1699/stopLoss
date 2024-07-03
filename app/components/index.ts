/* File Info :
 * These components are at app level hierarchy which means
 * they can be used by any component anywhere in the app.
 *
 * Imports all the component in this single file and exports
 * them from this single file creating a more readable form in
 * components importing lot of components
 *
 */

// importing components
import AppScreenSelector from "./AppScreenSelector";
import ChangeAppScreen from "./ChangeAppScreen";
import CoverImage from "./CoverImage";
import Slogan from "./Slogan";
import TitleBar from "./TitleBar";
import Footer from "./Footer";
import ThemeEnabler from "./ThemeEnabler";
import SearchBar from "./SearchBar";
import SideBarMenu from "./SideBarMenu";
import NavBar from "./NavBar";
import HotToast from "./HotToast";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import FAQs from "./FAQs";
// exporting components
export {
  AppScreenSelector,
  ChangeAppScreen,
  CoverImage,
  Slogan,
  TitleBar,
  Footer,
  ThemeEnabler,
  SearchBar,
  SideBarMenu,
  NavBar,
  HotToast,
  Pagination,
  Spinner,
  FAQs,
};
