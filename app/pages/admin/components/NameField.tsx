"use client";

import { useAppDispatch, useAppSelector, useRememberMe } from "@/app/hooks";
import { setLoginUserName } from "@/app/redux/slice/loginSlice";
import { barlow } from "@/app/utils/fonts";
import React, { useEffect, useState } from "react";
import { FieldPropsTypes } from "@/app/types/component_types";
import { setSignUpUserName } from "@/app/redux/slice/signUpSlice";

interface NameFieldPropsTypes extends FieldPropsTypes {
  nameId: string;
}

const NameField = ({ className, slice, nameId }: NameFieldPropsTypes) => {
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState<string>("");

  const LoginStatus = useAppSelector((state) => state.app.loginStatus);

  const rememberMe = useAppSelector((state) => state.app.rememberMe);

  const { getStoredUserName } = useRememberMe();

  useEffect(() => {
    if (slice === "login" && !rememberMe) {
      setUserName("");
    }
    if (slice === "login" && rememberMe) {
      const user = getStoredUserName();
      setUserName(user.userName);
    }
  }, [LoginStatus]);

  useEffect(() => {
    if (!rememberMe) {
      setUserName("");
    } else {
      const user = getStoredUserName();
      setUserName(user.userName);
    }
  }, [rememberMe]);

  useEffect(() => {
    if (userName.length >= 4 && userName.length <= 10) {
      if (slice === "login") {
        dispatch(setLoginUserName({ userName }));
      } else if (slice === "signUp") {
        dispatch(setSignUpUserName({ userName }));
      }
    }
  }, [userName]);

  return (
    <div
      className={`${barlow.className} w-full h-full grid grid-cols-1 grid-rows-2 ${className}`}
    >
      <h3 className="font-medium text-xl text-light self-end md:text-lg">
        Name
      </h3>
      <input
        type="text"
        name={nameId}
        id={nameId}
        value={userName}
        className="text-xl md:text-lg px-2 text-dark bg-white dark:bg-[#003b31] dark:text-light outline-none border-2 border-solid border-[#4CB050] rounded-md"
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};

export default NameField;
