// "This page will list all the calculators";
import carEMI from "@/public/calculator/carLoanEmi.webp";
import emi from "@/public/calculator/emi.webp";
import gratuity from "@/public/calculator/gratuity.webp";
import homeEMI from "@/public/calculator/homeLoanEmi.webp";
import investment from "@/public/calculator/investment.webp";
import sip from "@/public/calculator/sip.webp";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calculators",
  description:
    "Calculate your way to financial success with StopLoss.Live's comprehensive suite of financial calculators. From stop loss and position sizing to profit/loss and risk/reward ratios, our tools help you make informed trading decisions. Explore our calculators now and maximize your returns!",
  keywords: [
    "financial calculators",
    "stop loss calculator",
    "position sizing calculator",
    "profit loss calculator",
    "risk reward ratio calculator",
    "trading calculators",
    "investment calculators",
    "stock market calculators",
    "forex calculators",
    "cryptocurrency calculators",
    "trading tools",
    "financial tools",
    "investment tools",
  ],
  openGraph: {
    title: "Calculators",
    type: "article",
    description:
      "Calculate your way to financial success with StopLoss.Live's comprehensive suite of financial calculators. From stop loss and position sizing to profit/loss and risk/reward ratios, our tools help you make informed trading decisions. Explore our calculators now and maximize your returns!",
    url: "https://www.stoploss.live/pages/home/calculators",
    siteName: "stoploss.live",
    authors: "Coder Mehul",
    tags: [
      "financial calculators",
      "stop loss calculator",
      "position sizing calculator",
      "profit loss calculator",
      "risk reward ratio calculator",
      "trading calculators",
      "investment calculators",
      "stock market calculators",
      "forex calculators",
      "cryptocurrency calculators",
      "trading tools",
      "financial tools",
      "investment tools",
    ],
  },
};

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <h1 className="text-3xl md:text-4xl 2xl:text-7xl text-center mb-8 text-dark dark:text-light">
        Calculators
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row px-4 items-center justify-items-center gap-y-16">
        {/* EMI Calculator */}
        <Link
          href={"/pages/home/calculators/emi/emi"}
          className="w-28 md:w-36 h-28 md:h-36 rounded-md border-2 border-solid border-[#4CB050] md:opacity-50 md:hover:opacity-100 md:transition-all md:ease-in md:duration-300"
        >
          <div className="w-full h-full relative">
            <Image
              src={emi}
              width={80}
              height={80}
              alt="EMI-Image"
              className="w-12 md:w-20 h-12 md:h-20 absolute bottom-0 left-0"
            />
            <h3 className="text-center text-2xl md:text-3xl text-[#4CB050]">
              EMI
            </h3>
          </div>
        </Link>
        {/* HomeEMI Calculator */}
        <Link
          href={"/pages/home/calculators/emi/home"}
          className="w-28 md:w-36 h-28 md:h-36 rounded-md border-2 border-solid border-[#4CB050] md:opacity-50 md:hover:opacity-100 md:transition-all md:ease-in md:duration-300"
        >
          <div className="w-full h-full relative">
            <Image
              src={homeEMI}
              width={80}
              height={80}
              alt="EMI-Image"
              className="w-12 md:w-20 h-12 md:h-20 absolute bottom-0 left-0"
            />
            <h3 className="text-center text-xl md:text-2xl text-[#4CB050]">
              Home Loan EMI
            </h3>
          </div>
        </Link>
        {/* Car EMI Calculator */}
        <Link
          href={"/pages/home/calculators/emi/car"}
          className="w-28 md:w-36 h-28 md:h-36 rounded-md border-2 border-solid border-[#4CB050] md:opacity-50 md:hover:opacity-100 md:transition-all md:ease-in md:duration-300"
        >
          <div className="w-full h-full relative">
            <Image
              src={carEMI}
              width={80}
              height={80}
              alt="EMI-Image"
              className="w-12 md:w-20 h-12 md:h-20 absolute bottom-0 left-0"
            />
            <h3 className="text-center text-xl md:text-2xl text-[#4CB050]">
              Car Loan EMI
            </h3>
          </div>
        </Link>
        {/* SI */}
        <Link
          href={"/pages/home/calculators/interest/si"}
          className="w-28 md:w-36 h-28 md:h-36 rounded-md border-2 border-solid border-[#4CB050] md:opacity-50 md:hover:opacity-100 md:transition-all md:ease-in md:duration-300"
        >
          <div className="w-full h-full relative">
            <Image
              src={investment}
              width={80}
              height={80}
              alt="EMI-Image"
              className="w-12 md:w-20 h-12 md:h-20 absolute bottom-0 left-0"
            />
            <h3 className="text-center text-xl md:text-2xl text-[#4CB050]">
              Simple Interest
            </h3>
          </div>
        </Link>
        {/* CI */}
        <Link
          href={"/pages/home/calculators/interest/ci"}
          className="w-28 md:w-36 h-28 md:h-36 rounded-md border-2 border-solid border-[#4CB050] md:opacity-50 md:hover:opacity-100 md:transition-all md:ease-in md:duration-300"
        >
          <div className="w-full h-full relative">
            <Image
              src={gratuity}
              width={80}
              height={80}
              alt="EMI-Image"
              className="w-12 md:w-20 h-12 md:h-20 absolute bottom-0 left-0"
            />
            <h3 className="text-center text-xl md:text-2xl text-[#4CB050]">
              Compound Interest
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
