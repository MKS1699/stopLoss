"use client";

import { useAppDispatch } from "@/app/hooks";
import { setLoginUserEmail } from "@/app/redux/slice/loginSlice";
import { barlow } from "@/app/utils/fonts";
import React, { useEffect, useState } from "react";
import { FieldPropsTypes } from "@/app/types/component_types";

interface EmailFieldPropsTypes extends FieldPropsTypes {
  emailId: string;
}

const EmailField = ({ className, slice, emailId }: EmailFieldPropsTypes) => {
  const dispatch = useAppDispatch();
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const isValid = emailRegex.test(userEmail);

    if (isValid) {
      if (slice === "login") {
        dispatch(setLoginUserEmail({ userEmail }));
      }
    }
  }, [userEmail]);

  return (
    <div
      className={`${barlow.className} w-full h-full grid grid-cols-1 grid-rows-2 ${className}`}
    >
      <h3 className="font-medium text-xl text-[#2B3947] dark:text-white self-end md:text-lg">
        Email
      </h3>
      <input
        type="email"
        name={emailId}
        id={emailId}
        className="text-xl md:text-lg px-2 text-[#003B31] bg-white dark:bg-[#003b31] dark:text-white outline-none border-2 border-solid border-[#4CB050] rounded-md"
        onChange={(e) => setUserEmail(e.target.value)}
      />
    </div>
  );
};

export default EmailField;
