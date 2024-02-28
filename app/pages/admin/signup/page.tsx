import React from "react";
import { MastHead, SignUpForm } from "../components";
import { Slogan, CoverImage } from "@/app/components";

const SignUp = () => {
  return (
    <>
      <div className="w-full h-full grid grid-cols-1 grid-rows-[10%_30%_5%_55%] md:hidden">
        <MastHead />
        <CoverImage className="sm:w-3/4 sm:mx-auto" />
        <Slogan className="self-center" />
        <SignUpForm
          emailId="mobile-signUp-email"
          passwordId="mobile-signUp-password"
          nameId="mobile-signUp-name"
        />
      </div>
      <div className="hidden md:w-full md:h-full md:grid md:grid-rows-1 md:grid-cols-1 bg-[#003b31] dark:bg-[#4CB050] md:px-20 lg:px-24 xl:px-28 2xl:px-32 md:py-16 xl:py-20 2xl:py-24">
        <div className="self-center w-full h-full justify-self-center grid grid-rows-1 grid-cols-2 bg-white dark:bg-[#003b31] rounded-md">
          <div className="grid grid-cols-1 grid-rows-[20%_15%_65%] xl:grid-rows-[20%_10%_70%] rounded-tl-md rounded-bl-md px-4">
            <MastHead className="rounded-tl-md self-start" />
            <Slogan className="font-thin self-start justify-self-start text-left lg:text-xl" />
            <SignUpForm
              className="rounded-bl-md"
              emailId="desktop-signUp-email"
              passwordId="desktop-signUp-password"
              nameId="desktop-signUp-name"
            />
          </div>
          <CoverImage className="rounded-tr-md rounded-br-md" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
