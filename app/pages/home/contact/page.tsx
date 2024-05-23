import { barlow } from "@/app/utils/fonts";
import { Metadata } from "next";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

export const metadata: Metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <div className={`${barlow.className} min-h-screen w-full p-4 relative`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 self-center justify-self-center w-4/5 mx-auto h-4/5 md:h-96 p-4 flex flex-col justify-between shadow-2xl drop-shadow-2xl rounded-lg">
        <div className="w-full h-full text-dark dark:text-light text-3xl text-left">
          Welcome to STOPLOSS, your premier destination for comprehensive stock
          market information. We strive to empower investors with insightful
          analysis, and expert perspectives to navigate the dynamic world of
          finance.
        </div>
        <div className="w-full h-full grid grid-cols-1 grid-rows-2 text-dark dark:text-light text-xl">
          <div className="h-fit">
            You contact us through us our social media links below :
          </div>
          <ul className="h-fit grid grid-flow-col grid-rows-1 text-sm items-center justify-items-center text-secondaryColorLight">
            <li className="lg:flex lg:gap-2 hover:scale-110 transition-transform">
              <a
                href="https://www.instagram.com/stoploss_live/"
                className="lg:flex lg:gap-2 hover:scale-110 transition-transform"
                target="_blank"
              >
                <div>
                  <FaInstagram size="2rem" />
                </div>
                <div className="hidden lg:block lg:text-2xl">Instagram</div>
              </a>
            </li>
            <li className="lg:flex lg:gap-2 hover:scale-110 transition-transform">
              <a
                href="https://www.facebook.com/people/Stoplosslive/61555551387943/"
                className="lg:flex lg:gap-2 hover:scale-110 transition-transform"
                target="_blank"
              >
                <div>
                  <FaFacebook size="2rem" />
                </div>
                <div className="hidden lg:block lg:text-2xl">Facebook</div>
              </a>
            </li>
            <li className="lg:flex lg:gap-2 hover:scale-110 transition-transform">
              <a
                href="https://twitter.com/stoploss_live"
                className="lg:flex lg:gap-2 hover:scale-110 transition-transform"
                target="_blank"
              >
                <div>
                  <FaXTwitter size="2rem" />
                </div>
                <div className="hidden lg:block lg:text-2xl">X (Twitter)</div>
              </a>
            </li>
            <li className="lg:flex lg:gap-2 hover:scale-110 transition-transform">
              <a
                href="https://www.youtube.com/channel/UCvYUlvl9D0CIWAhWB1gdaFg"
                className="lg:flex lg:gap-2 hover:scale-110 transition-transform"
                target="_blank"
              >
                <div>
                  <FaYoutube size="2rem" />
                </div>
                <div className="hidden lg:block lg:text-2xl">YouTube</div>
              </a>
            </li>
            <li className="">
              <a
                href="mailto:stoploss65@gmail.com"
                className="lg:flex lg:gap-2 hover:scale-110 transition-transform"
                target="_blank"
              >
                <div>
                  <GoMail size="2rem" />
                </div>
                <div className="hidden lg:block lg:text-2xl">Mail</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
