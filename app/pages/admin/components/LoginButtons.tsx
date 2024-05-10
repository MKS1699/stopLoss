"use client";

import { StyledComponent } from "@/app/types/component_types";

interface LoginButtonsPropsTypes extends StyledComponent {
  button1: string;
  button2: string;
  handleButton1: () => void;
  handleButton2: () => void;
}

const LoginButtons = ({
  button1,
  button2,
  handleButton1,
  handleButton2,
  className,
}: LoginButtonsPropsTypes) => {
  return (
    <div
      className={`w-full h-full grid grid-cols-2 grid-rows-1 gap-4 ${className}`}
      role="group"
    >
      <button
        onClick={handleButton1}
        className="w-full h-fit border-2 border-solid border-[#4CB050] focus:text-dark text-[#4cb050] text-2xl rounded-md focus:bg-[#4CB050] py-4"
        autoFocus={true}
      >
        {button1}
      </button>
      <button
        className="w-full h-fit border-2 border-solid border-[#4CB050] focus:text-dark text-[#4cb050] text-2xl rounded-md focus:bg-[#4CB050] py-4"
        onClick={handleButton2}
      >
        {button2}
      </button>
    </div>
  );
};

export default LoginButtons;
