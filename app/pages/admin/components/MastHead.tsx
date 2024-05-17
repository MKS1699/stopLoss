import Image from "next/image";
import Logo from "@/public/Logo.svg";
import { barlow, pacifico } from "@/app/utils/fonts";
import { ThemeEnabler } from "@/app/components";
import { StyledComponent } from "@/app/types/component_types";
const MastHead = ({ className }: StyledComponent) => {
  return (
    <div
      className={`w-full h-full grid grid-rows-1 grid-cols-[20%_70%_10%] items-center  transition-all ease-in ${className}`}
    >
      <Image
        src={Logo}
        sizes="100vw"
        alt="StopLoss Logo"
        className="w-12 h-12 md:w-8 md:h-8 lg:w-12 lg:h-12 justify-self-center"
      />
      <div
        className={`${pacifico.className} font-thin text-5xl justify-self-center md:text-3xl lg:text-4xl xl:text-6xl z-10 text-[#4CB050]`}
      >
        stoploss
      </div>
      <ThemeEnabler className="justify-self-center md:w-8 md:h-8 text-light" />
    </div>
  );
};

export default MastHead;
