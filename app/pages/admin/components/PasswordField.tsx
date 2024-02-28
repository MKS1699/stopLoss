"use client";
import { barlow } from "@/app/utils/fonts";
import { useEffect, useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { FieldPropsTypes } from "@/app/types/component_types";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setLoginUserPassword } from "@/app/redux/slice/loginSlice";
import { setSignUpUserPassword } from "@/app/redux/slice/signUpSlice";

interface PasswordFieldPropsTypes extends FieldPropsTypes {
  passwordId: string;
}

const PasswordField = ({
  className,
  slice,
  passwordId,
}: PasswordFieldPropsTypes) => {
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const LoginStatus = useAppSelector((state) => state.app.loginStatus);

  useEffect(() => {
    if (slice === "login") {
      setPassword("");
    }
  }, [LoginStatus]);

  useEffect(() => {
    let isValid: boolean = false;

    if (password.length >= 8 && password.length <= 20) {
      isValid = true;
    }

    if (isValid) {
      if (slice === "login") {
        dispatch(setLoginUserPassword({ userPassword: password }));
      } else if (slice === "signUp") {
        dispatch(setSignUpUserPassword({ userPassword: password }));
      }
    }
  }, [password]);

  return (
    <div
      className={`${barlow.className} w-full h-full grid grid-cols-1 grid-rows-2 relative ${className}`}
    >
      <h3 className="font-medium text-xl md:text-lg text-[#2B3947] dark:text-white self-end">
        Password
      </h3>
      <input
        type={showPassword ? "text" : "password"}
        name={passwordId}
        id={passwordId}
        value={password}
        className="text-xl md:text-lg px-2 outline-none text-[#003B31] bg-white dark:bg-[#003b31] dark:text-white border-2 border-solid border-[#4CB050] rounded-md "
        onChange={(e) => setPassword(e.target.value)}
      />
      {showPassword ? (
        <IoEyeOff
          className="absolute w-8 h-8 bottom-3  md:bottom-2 right-4 text-[#003B31] dark:text-[#4cb050] cursor-pointer"
          onClick={() => setShowPassword(false)}
        />
      ) : (
        <IoEye
          className={`absolute w-8 h-8 right-4 text-[#003B31] dark:text-[#4cb050] cursor-pointer ${
            slice === "signUp" ? "top-2/3" : "bottom-3 md:bottom-2"
          }`}
          onClick={() => setShowPassword(true)}
        />
      )}
    </div>
  );
};

export default PasswordField;
