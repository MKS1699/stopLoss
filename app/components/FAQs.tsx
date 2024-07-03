"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface faq {
  q: string;
  a: string;
}

interface FAQPropTypes {
  faq: faq;
}

export interface FAQsPropsTypes {
  faqs: faq[];
  category: string;
}

const FAQ = ({ faq }: FAQPropTypes) => {
  const [show, setShow] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string[]>(faq.a.split("."));
  return (
    <div className=" md:mx-auto w-full md:w-4/5 h-auto px-2 flex flex-col my-3 bg-light dark:bg-bodyDark shadow-xl rounded-md py-4">
      <div className="w-full h-fit flex flex-row justify-between items-center">
        <div
          className="w-fit h-auto text-xl lg:text-4xl text-left text-dark dark:text-light px-2 font-light cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {faq.q}
        </div>
        <div
          className="w-fit h-fit flex-none flex items-center justify-around mr-3 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {show && <FaAngleUp />}
          {!show && <FaAngleDown />}
        </div>
      </div>
      {show && (
        <motion.div
          className="w-full h-auto text-base md:text-xl text-left indent-3 text-dark dark:text-light px-3 mt-4"
          onClick={() => setShow(!show)}
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          transition={{ ease: "easeIn", duration: 0.2 }}
        >
          {answer.map((a: string, index: number) => {
            if (a.length > 1) {
              const aContainsHeadings = a.includes(":");
              if (aContainsHeadings) {
                const aParts = a.split(":");
                return (
                  <p className="w-full h-auto my-2">
                    <span className="font-medium">{aParts[0]} : </span>
                    {aParts[1]}
                  </p>
                );
              } else {
                return <p className="w-full h-auto my-2">{a}</p>;
              }
            } else {
              return <p className="w-full h-auto my-2">{a}</p>;
            }
          })}
        </motion.div>
      )}
    </div>
  );
};

const FAQs = ({ faqs, category }: FAQsPropsTypes) => {
  return (
    <div className="w-full h-auto flex flex-col justify-evenly gap-2">
      {faqs.map((faq: faq, index: number) => {
        return <FAQ faq={faq} key={`${category} FAQ ${index}`} />;
      })}
    </div>
  );
};

export default FAQs;
