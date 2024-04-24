import { Footer, TitleBar } from "@/app/components";
import { Main } from "./components";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      <TitleBar />
      <Suspense>
        <Main />
      </Suspense>
      <Footer />
    </>
  );
};

export default page;
