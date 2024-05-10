"use client";

import { barlow } from "@/app/utils/fonts";
import LOGO from "@/public/Logo.svg";
import Image from "next/image";
import { User } from ".";
import { ThemeEnabler } from "@/app/components";

const AdminTitleBar = () => {
  return (
    <div className="w-full h-auto grid grid-rows-1 grid-cols-[15%_55%_15%_15%] md:grid-cols-[10%_30%_52%_8%] lg:grid-cols-[7%_30%_55%_8%] xl:grid-cols-[5%_30%_57%_8%] p-1 bg-transparent transition-all duration-200 ease-in fixed backdrop-blur-sm z-10 pl-2">
      <Image
        src={LOGO}
        alt="StopLoss Logo"
        sizes="100vw"
        className="w-10 h-10 self-center"
      />
      <h1
        className={`${barlow.className} font-thin text-dark dark:text-light text-5xl self-center w-full h-fit  md:justify-self-start`}
      >
        STOPLOSS
      </h1>
      <User userIconClass="md:!justify-self-end" />
      <ThemeEnabler className="!justify-items-end" />
    </div>
  );
};

export default AdminTitleBar;
