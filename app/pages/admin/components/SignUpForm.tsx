"use client";

import { StyledComponent } from "@/app/types/component_types";
import {
  EmailField,
  LoginButtons,
  NameField,
  PasswordField,
  RememberMe,
} from ".";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setAdminScreen } from "@/app/redux/slice/appSlice";
import { validateCredentials } from "@/app/utils/tools";
import toast from "react-hot-toast";
import axios from "axios";
import {
  API_URL,
  API_USERS_ENDPOINTS,
  API_USERS_ROUTE,
} from "@/app/hooks/apiHooks/endPoints";
import { resetSignUpState } from "@/app/redux/slice/signUpSlice";

interface SignUpFormPropsTypes extends StyledComponent {
  passwordId: string;
  emailId: string;
  nameId: string;
}

const SignUpForm = ({
  className,
  passwordId,
  emailId,
  nameId,
}: SignUpFormPropsTypes) => {
  const dispatch = useAppDispatch();

  const userName: string = useAppSelector((state) => state.signUp.userName);
  const userPassword: string = useAppSelector(
    (state) => state.signUp.userPassword
  );

  const handleSignUp = async (): Promise<void> => {
    const isUserNameValid = validateCredentials(userName, "name");
    const isUserPasswordValid = validateCredentials(userPassword, "password");

    if (isUserNameValid && isUserPasswordValid) {
      try {
        const signupURL = `${API_URL}${API_USERS_ROUTE}${API_USERS_ENDPOINTS.signup}`;
        const body = {
          userName,
          userPassword,
        };
        const res = await axios.post(signupURL, body);
        if (res.status === 200) {
          dispatch(resetSignUpState());
          dispatch(setAdminScreen({ screen: "login" }));
          toast.success("SignUp Successful");
        }
      } catch (error) {
        toast.error("Unable to SignUp, try again");
        console.log(error);
      }
    } else if (!isUserNameValid) {
      toast.error("Provided Name is not valid.");
    } else if (!isUserPasswordValid) {
      toast.error("Provided Password is not valid.");
    }
  };

  return (
    <div
      className={`w-full h-full grid grid-rows-3 grid-cols-1 p-2 ${className}`}
    >
      {/* <EmailField slice="signUp" emailId={emailId} /> */}
      <NameField slice="signUp" nameId={nameId} />
      <PasswordField slice="signUp" passwordId={passwordId} />
      <LoginButtons
        button1="Sign Up"
        handleButton1={handleSignUp}
        button2="Login"
        handleButton2={() => {
          dispatch(setAdminScreen({ screen: "login" }));
        }}
        className="w-full h-full self-center mt-20"
      />
    </div>
  );
};

export default SignUpForm;
