"use client";

import { shareTechMono } from "@/app/utils/fonts";
import { useEffect, useState } from "react";

const Timer = ({ limit }: { limit: number }) => {
  const [currentLimit, setCurrentLimit] = useState<number>(limit);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentLimit((prev) => {
          const newLimit = prev - 1;
          if (newLimit <= 0) {
            clearInterval(intervalId);
          }
          return newLimit;
        }),
      1000
    );

    //   clearing the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${shareTechMono.className} text-4xl inline-block`}>
      {currentLimit}
    </div>
  );
};

export default Timer;
