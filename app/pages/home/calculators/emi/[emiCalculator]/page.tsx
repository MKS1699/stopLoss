import { FAQs } from "@/app/components";
import emiFAQs from "./data/emiFAQ";
import { EMI } from "../../components";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type generateMetadataPropsTypes = {
  params: {
    emiCalculator: "emi" | "car" | "loan";
  };
};

export async function generateMetadata({
  params,
}: generateMetadataPropsTypes): Promise<Metadata> {
  const { emiCalculator } = params;

  const validParams = ["car", "emi", "home"];

  if (!validParams.includes(emiCalculator)) {
    notFound();
  }

  const pageDetails = {
    title:
      emiCalculator === "emi"
        ? "EMI Calculator"
        : emiCalculator === "car"
        ? "Car Loan EMI Calculator"
        : "Home Loan EMI Calculator",
    description: `Calculate your loan EMI effortlessly with Stoploss.live's intuitive EMI calculator! Get accurate estimates of your monthly payments, total interest, and total amount payable on home loans, car loans, personal loans, and more. Make informed decisions about your loan repayments with our easy-to-use tool.`,
    keywords: [
      "EMI Calculator",
      "Loan Calculator",
      "Home Loan EMI",
      "Car Loan EMI",
      "Personal Loan EMI",
      "Loan Repayment Calculator",
      "Monthly Payment Calculator",
      "Interest Calculator",
      "Loan Calculation Tool",
      "EMI Calculation",
      "Loan Planning",
      "Financial Planning",
      "Loan Management",
      "Stoploss.live",
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

const page = () => {
  return (
    <>
      <EMI />
      <FAQs faqs={emiFAQs} category="EMI Calculator" />
    </>
  );
};

export default page;
