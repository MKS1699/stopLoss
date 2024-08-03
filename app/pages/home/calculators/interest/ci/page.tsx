import React from "react";
import { Metadata } from "next";
import { CI } from "../../components";

export async function generateMetadata({}): Promise<Metadata> {
  const pageDetails = {
    title: "Compound Interest Calculator",
    description: `Calculate the power of compound interest with Stoploss.live's free online compound interest calculator! Determine how much your investment or loan will grow over time, with accurate calculations of interest earned or paid. Enter principal amount, interest rate, time period, and compounding frequency to see the impact of compound interest.`,
    keywords: [
      "Compound Interest Calculator",
      "Free Compound Interest Calculator",
      "Online Compound Interest Calculator",
      "Calculate Compound Interest",
      "Compound Interest Calculation Tool",
      "Stoploss.live",
      "Investment Growth Calculator",
      "Loan Interest Calculator",
      "Compound Interest Rate Calculator",
      "Principal Amount Calculator",
      "Time Period Calculator",
      "Financial Calculator",
      "Money Calculator",
      "Compound Interest Calculator Online",
    ],
  };

  return {
    title: pageDetails.title,
    description: pageDetails.description,
    keywords: pageDetails.keywords,
    openGraph: {
      type: "website",
      title: pageDetails.title,
      description: pageDetails.description,
      siteName: "stoploss.live",
      url: "www.stoploss.live",
    },
  };
}

// todo : faq for the calculator

const page = () => {
  return <CI />;
};

export default page;
