import React from "react";
import { SI } from "../../components";
import { Metadata } from "next";

export async function generateMetadata({}): Promise<Metadata> {
  const pageDetails = {
    title: "Simple Interest Calculator",
    description: `Calculate interest effortlessly with Stoploss.live's free online interest calculator! Get instant results for interest earned or paid on your investments or loans. Simply enter principal amount, interest rate, and time period to calculate interest now!`,
    keywords: [
      "Interest Calculator",
      "Free Interest Calculator",
      "Online Interest Calculator",
      "Calculate Interest",
      "Interest Calculation Tool",
      "Stoploss.live",
      "Investment Calculator",
      "Loan Calculator",
      "Interest Rate Calculator",
      "Principal Amount Calculator",
      "Time Period Calculator",
      "Financial Calculator",
      "Money Calculator",
      "Interest Calculator Online",
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
  return <SI />;
};

export default page;
