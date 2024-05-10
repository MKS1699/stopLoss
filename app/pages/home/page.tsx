import React from "react";
import LandingPage from "./landingPage/page";
import { TitleBar } from "@/app/components";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-light dark:bg-bodyDark">
      <TitleBar />
      <LandingPage />
    </div>
  );
};

export default Home;
