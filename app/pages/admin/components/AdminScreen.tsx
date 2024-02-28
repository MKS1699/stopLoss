"use client";
import { useAppSelector } from "@/app/hooks";
import { Login, SignUp } from "..";
import AdminPanel from "../adminPanel/page";

const AdminScreen = () => {
  const adminScreen = useAppSelector((state) => state.app.adminScreen);

  return (
    <div className="w-full h-screen">
      {adminScreen === "login" && <Login />}
      {adminScreen === "signUp" && <SignUp />}
      {adminScreen === "adminPanel" && <AdminPanel />}
    </div>
  );
};

export default AdminScreen;
