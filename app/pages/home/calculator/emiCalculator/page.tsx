import { FAQs } from "@/app/components";
import { Main } from "./components/Main";
import emiFAQs from "./data/emiFAQ";

const page = () => {
  return (
    <>
      <Main />;
      <FAQs faqs={emiFAQs} category="EMI Calculator" />
    </>
  );
};

export default page;
