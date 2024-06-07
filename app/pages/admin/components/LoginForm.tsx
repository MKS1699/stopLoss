"use client";

import { StyledComponent } from "@/app/types/component_types";
import {
  EmailField,
  LoginButtons,
  NameField,
  PasswordField,
  RememberMe,
} from ".";
import { useAppDispatch, useAppSelector, useRememberMe } from "@/app/hooks";
import {
  setAdminScreen,
  setAppAdminLoginStatus,
} from "@/app/redux/slice/appSlice";
import axios from "axios";
import {
  API_URL,
  API_USERS_ENDPOINTS,
  API_USERS_ROUTE,
} from "@/app/hooks/apiHooks/endPoints";
import {
  resetSession,
  setSessionToken,
  setSessionUserId,
  setSessionUserName,
} from "@/app/redux/slice/sessionSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { validateCredentials } from "@/app/utils/tools";
import { resetLoginSlice } from "@/app/redux/slice/loginSlice";

interface LoginPropsTypes extends StyledComponent {
  checkBoxId: string;
  passwordId: string;
  emailId: string;
  nameId: string;
}

const LoginForm = ({
  className,
  checkBoxId,
  passwordId,
  emailId,
  nameId,
}: LoginPropsTypes) => {
  const dispatch = useAppDispatch();

  const userName: string = useAppSelector((state) => state.login.userName);
  const userPassword: string = useAppSelector(
    (state) => state.login.userPassword
  );

  const rememberMe = useAppSelector((state) => state.app.rememberMe);
  const { storeCurrentUserName } = useRememberMe();

  function handleRememberMe() {
    if (rememberMe) {
      storeCurrentUserName(userName);
    }
  }

  const handleLogin = async (): Promise<void> => {
    const isNameValidated = validateCredentials(userName, "name");
    const isPasswordValidated = validateCredentials(userPassword, "password");
    if (isNameValidated && isPasswordValidated) {
      try {
        // login body
        const body = {
          userName,
          userPassword,
        };
        //login path
        const path = `${API_URL}${API_USERS_ROUTE}${API_USERS_ENDPOINTS.login}`;
        const res = await axios.post(path, body);
        // login successful
        if (res.status === 200) {
          // getting session information
          const token = res.data.generatedToken;
          const userName = res.data.userName;
          const userId = res.data.userId;
          // dispatching required store actions
          dispatch(setSessionToken({ token }));
          dispatch(setSessionUserId({ userId }));
          dispatch(setSessionUserName({ userName }));
          dispatch(setAppAdminLoginStatus({ loginStatus: true }));
          handleRememberMe();
          dispatch(resetLoginSlice());
          dispatch(setAdminScreen({ screen: "adminPanel" }));
          // showing successful login notification
          toast.success("Login Successful");
        }
      } catch (error) {
        // login error
        toast.error("Login Unsuccessful");
        console.log(error);
        dispatch(resetSession());
        dispatch(resetLoginSlice());
      }
    } else if (!isNameValidated) {
      toast.error("Provided Name is not valid");
    } else if (!isPasswordValidated) {
      toast.error("Provided Password is not valid");
    }
  };

  return (
    <div
      className={`w-full h-full grid grid-rows-4 grid-cols-1 p-2  ${className}`}
    >
      {/* <EmailField slice="login" emailId={emailId} /> */}
      <NameField slice="login" nameId={nameId} />
      <PasswordField slice="login" passwordId={passwordId} />
      <RememberMe checkBoxId={checkBoxId} />
      <LoginButtons
        button1="Login"
        handleButton1={handleLogin}
        button2="Sign Up"
        handleButton2={() => {
          dispatch(setAdminScreen({ screen: "signUp" }));
        }}
      />
    </div>
  );
};

export default LoginForm;
