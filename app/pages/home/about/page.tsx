import Image from "next/image";
import { Metadata } from "next";
// Images import
import mehul from "@/public/mehul.jpg";
import aditya from "@/public/aditya.jpg";
// Icons import
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <div className="min-h-screen max-h-max p-3 mb-4">
      {/* about us */}
      <div className="text-justify text-base lg:text-xl text-dark dark:text-light md:w-3/5 2xl:w-4/5 md:mx-auto md:shadow-xl p-8">
        <p className="text-3xl text-center underline underline-offset-8 mb-3">
          About Us
        </p>
        Welcome to&nbsp;
        <span className="cursor-pointer font-medium text-[#4CB050]">
          <a href="https://stoplos.live">STOPLOSS</a>
        </span>
        , your ultimate destination for all things stock market. We&apos;re not
        your typical finance platform; we&apos;re your financial companion in
        this rollercoaster of market highs and lows. At{" "}
        <span className="cursor-pointer font-medium text-[#4CB050]">
          <a href="https://stoploss.live">STOPLOSS</a>
        </span>{" "}
        we&apos;re on a mission to demystify the complexities of the stock
        market. Think of us as your financial GPS, guiding you through the
        twists and turns with clear and straightforward insights. Whether
        you&apos;re a seasoned trader or just dipping your toes into the market,
        we&apos;ve got your back. Our team of experts is committed to providing
        you with real-time updates, in-depth analysis, and market trends, all
        delivered in a language that&apos;s as approachable as your favorite
        coffee shop conversation. No confusing jargon, just the information you
        need to make informed decisions. But we&apos;re more than just numbers
        and charts. We&apos;re a community of like-minded individuals who share
        a passion for financial growth. Join us as we navigate the exciting
        world of stocks together, helping you build confidence in your financial
        journey. So, buckle up and explore the world of finance with{" "}
        <span className="cursor-pointer font-medium text-[#4CB050]">
          <a href="https://www.stoploss.live">STOPLOSS</a>
        </span>
        . Let&apos;s turn those market mysteries into opportunities, one stock
        at a time. Cheers to financial success! 🚀💰
      </div>
      {/* team details */}
      <div className="text-xl lg:text-3xl mt-4 lg:mt-8 w-full lg:w-[40%] lg:mx-auto h-full grid grid-cols-1 grid-rows-[20%_80%] rounded-md shadow-lg dark:text-light text-dark">
        <div className="w-full h-full text-center rounded-t-md border-t-2 border-x-2 grid grid-cols-[30%_70%] grid-rows-1">
          <div className="self-center justify-self-end">
            <FaUserGroup />
          </div>
          <div className="self-center justify-self-start indent-2">
            <a href="https://www.stoploss.live" className="">
              stoploss.live
            </a>{" "}
            Team
          </div>
        </div>
        <div className="w-full h-full grid grid-cols-1 grid-rows-2 ">
          <div className="grid grid-rows-1 grid-cols-[20%_50%_15%_15%] h-full border-2">
            <Image
              src={mehul}
              alt="Mehul's Image"
              quality={100}
              loading="lazy"
              className="rounded-[50%] w-20 h-20 p-2  self-center justify-self-center"
              width={1000}
              height={1000}
            />
            <div className="self-center justify-self-center indent-4  border-x-2 w-full h-full">
              <div className="grid grid-rows-1 grid-cols-1 w-full h-full items-center justify-self-center">
                Mehul Kumar
              </div>
            </div>
            <div className=" w-full h-full border-r-2 grid grid-cols-1 grid-rows-1 cursor-pointer">
              <div className="self-center justify-self-center">
                <a
                  href="https://github.com/MKS1699/"
                  target="_blank"
                  title="Github profile URL"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="self-center justify-self-center  ">
              <a
                href="https://www.linkedin.com/in/codermehul/"
                target="_blank"
                title="LinkedIn Profile URL"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="grid grid-rows-1 grid-cols-[20%_50%_15%_15%] h-full border-x-2 border-b-2 rounded-b-md">
            <Image
              src={aditya}
              alt="Aditya's Image"
              quality={100}
              loading="lazy"
              className="rounded-[50%] w-20 h-20 p-2  self-center justify-self-center"
              width={1000}
              height={1000}
            />
            <div className="self-center justify-self-center indent-4  border-x-2 w-full h-full">
              <div className="grid grid-rows-1 grid-cols-1 w-full h-full items-center justify-self-center">
                Aditya Kumar
              </div>
            </div>
            <div className=" w-full h-full border-r-2 grid grid-cols-1 grid-rows-1 cursor-pointer">
              <div className="self-center justify-self-center">
                <a
                  href="https://github.com/codepoet25"
                  target="_blank"
                  title="Github profile URL"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="self-center justify-self-center  ">
              <a href="#" target="_blank" title="LinkedIn profile URL">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
