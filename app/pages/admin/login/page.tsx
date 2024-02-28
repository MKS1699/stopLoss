import React from "react";
import { LoginForm, MastHead } from "../components";
import { Slogan, CoverImage } from "@/app/components";

const Login = () => {
  return (
    <>
      <div className="w-full h-full grid grid-cols-1 grid-rows-[10%_30%_5%_55%] md:hidden">
        <MastHead />
        <CoverImage className="sm:w-3/4 sm:mx-auto" />
        <Slogan />
        <LoginForm
          checkBoxId="mobile-view"
          emailId="mobile-login-email"
          passwordId="mobile-login-password"
          nameId="mobile-login-name"
        />
      </div>
      <div className="hidden md:w-full md:h-full md:grid md:grid-rows-1 md:grid-cols-1 bg-[#003b31] dark:bg-[#4CB050] md:px-20 lg:px-24 xl:px-28 2xl:px-40 md:py-16 xl:py-20 2xl:py-24">
        <div className="self-center w-full h-full justify-self-center grid grid-rows-1 grid-cols-2 bg-white dark:bg-[#003b31] rounded-md">
          <div className="grid grid-cols-1 grid-rows-[20%_15%_65%] xl:grid-rows-[20%_10%_70%] rounded-tl-md rounded-bl-md px-4">
            <MastHead className="rounded-tl-md self-start" />
            <Slogan className="font-thin self-start justify-self-start text-left lg:text-xl" />
            <LoginForm
              className="rounded-bl-md"
              checkBoxId="desktop-view"
              emailId="desktop-login-email"
              passwordId="desktop-login-password"
              nameId="desktop-login-name"
            />
          </div>
          <CoverImage className="rounded-tr-md rounded-br-md" />
        </div>
      </div>
    </>
  );
};

export default Login;
