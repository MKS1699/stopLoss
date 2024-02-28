/* Component : Info
 * Info :
 *       This component renders the cover image for different
 * screens allowing fully css customization from the component
 * it is being called.
 */

// cover image
import SL_Cover_Image from "@/public/SL-desktop-cover.png";
// component import
import Image from "next/image";
// types import
import { StyledComponent } from "../types/component_types";

const CoverImage = ({ className }: StyledComponent) => {
  return (
    <Image
      src={SL_Cover_Image}
      alt="StopLoss Cover Image"
      sizes="100vw"
      className={`w-full h-full ${className}`}
    />
  );
};

export default CoverImage;
