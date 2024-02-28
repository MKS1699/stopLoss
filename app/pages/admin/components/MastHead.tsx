import Image from "next/image";
import Logo from "@/public/Logo.svg";
import { barlow } from "@/app/utils/fonts";
import { ThemeEnabler } from "@/app/components";
import { StyledComponent } from "@/app/types/component_types";
const MastHead = ({ className }: StyledComponent) => {
  return (
    <div
      className={`w-full h-full grid grid-rows-1 grid-cols-[20%_70%_10%] items-center bg-white dark:bg-[#003B31] transition-all ease-in ${className}`}
    >
      <Image
        src={Logo}
        sizes="100vw"
        alt="StopLoss Logo"
        className="w-12 h-12 md:w-8 md:h-8 lg:w-12 lg:h-12 justify-self-center"
      />
      <div
        className={`${barlow.className} font-thin text-5xl text-[#003B31] dark:text-white justify-self-center md:text-4xl lg:text-5xl xl:text-7xl`}
      >
        STOPLOSS
      </div>
      <ThemeEnabler className="justify-self-center md:w-8 md:h-8" />
    </div>
  );
};

export default MastHead;
