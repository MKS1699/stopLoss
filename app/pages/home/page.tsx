"use client";
import { TitleBar } from "@/app/components";
import LandingPage from "./landingPage/page";
import { usePathname } from "next/navigation";
const Home = () => {
  const pathname = usePathname();
  return (
    <div className="w-full min-h-screen bg-light dark:bg-bodyDark">
      {pathname == "/" && <TitleBar />}
      <LandingPage />
    </div>
  );
};

export default Home;
