import { Main } from "./components";
import { Metadata } from "next";
import { PostSliceTypes } from "@/app/types/slice_types/postSliceTypes";

type generateMetadataPropsTypes = {
  params: {
    section: PostSliceTypes["postType"];
  };
  // searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  // searchParams,
  params,
}: generateMetadataPropsTypes): Promise<Metadata> {
  const { section }: { section: PostSliceTypes["postType"] } = params;

  let SECTION: string = "";

  if (section === "news") {
    SECTION = "News";
  } else if (section === "blog") {
    SECTION = "Blogs";
  } else if (section === "company_profile") {
    SECTION = "Company Profiles";
  } else if (section == "ipo") {
    SECTION = "IPO";
  } else if (section === "sponsored_post") {
    SECTION = "Sponsored Posts";
  } else if (section === "tutorial") {
    SECTION = "Tutorials";
  }

  const keywordsArr: string[] = [
    "stoploss.live",
    "stoploss",
    `${SECTION}`,
    "category",
  ];

  return {
    title: ` ${SECTION}`,
    description: `This page contains articles related to ${SECTION} category.`,
    keywords: keywordsArr,
    openGraph: {
      type: "website",
      title: `Stoploss.live : ${SECTION}`,
      description: `This page contains articles related to ${SECTION} category.`,
    },
  };
}

const page = () => {
  return <Main />;
};

export default page;
