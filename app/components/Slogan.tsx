/* Component : Info & Usage
 * Info :
 *       component containing slogan.
 *
 * Usage :
 *        Provides customizable slogan component.
 */

// types imports
import { StyledComponent } from "../types/component_types";
// font import
import { barlow } from "../utils/fonts";

const Slogan = ({ className }: StyledComponent) => {
  return (
    <div
      className={`${barlow.className} w-full h-full text-center text-xl text-light py-2 ${className}`}
    >
      Tomorrow Never Comes, Until Its TOO Late!
    </div>
  );
};

export default Slogan;
