import { Main } from "./components";
import { Metadata } from "next";
type generateMetadataPropsTypes = {
  params: {
    entry: string;
  };
  //   searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  //   searchParams,
  params,
}: generateMetadataPropsTypes): Promise<Metadata> {
  const metaKeywords = [
    `${params.entry}`,
    "upcoming IPO",
    "IPO news",
    "IPO insights",
    "IPO dates",
    "IPO valuation",
    "market analysis",
    "how to invest",
    "financial event",
    "stock market",
    "investment opportunities",
    "IPO guide",
    "latest IPOs",
  ];

  const metaAuthors = ["Mehul Kumar"];

  return {
    title: `${params.entry} Upcoming IPO`,
    description: `Stay updated on the latest news and insights about the ${params.entry} Upcoming IPO. Get detailed information on IPO dates, valuation, market analysis, and how to invest. Don't miss out on this significant financial event!`,
    keywords: metaKeywords,
    // authors: metaAuthors,
  };
}

const page = () => {
  return <Main />;
};

export default page;
