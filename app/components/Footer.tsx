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
import { ChangeAppScreen } from ".";

const Footer = () => {
  return (
    <div className="w-full h-full dark:bg-[#202D37] dark:text-white bg-white text-[#202d37] transition-all ease-in border-t-2 border-solid border-t-[#003b31]">
      <ChangeAppScreen />
    </div>
  );
};

export default Footer;
