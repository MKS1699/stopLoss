"use client";

import { barlow, pacifico } from "@/app/utils/fonts";
import LOGO from "@/public/Logo.svg";
import Image from "next/image";
import { User } from ".";
import { ThemeEnabler } from "@/app/components";

const AdminTitleBar = () => {
  return (
    <div className="w-full h-auto grid grid-rows-1 grid-cols-[70%_15%_15%] md:grid-cols-[40%_52%_8%] lg:grid-cols-[37%_55%_8%] xl:grid-cols-[35%_57%_8%] p-1 bg-transparent transition-all duration-200 ease-in fixed backdrop-blur-sm z-50 pl-2">
      {/* Image */}
      {/* <Image
        src={LOGO}
        alt="StopLoss Logo"
        sizes="100vw"
        className="w-10 h-10 self-center"
      /> */}
      <h1
        className={`${barlow.className} font-thin text-[#4CB050] text-5xl self-center w-full h-fit  md:justify-self-start`}
      >
        stoploss.live
      </h1>
      <User userIconClass="md:!justify-self-end" />
      <ThemeEnabler className="!justify-items-end" />
    </div>
  );
};

export default AdminTitleBar;
