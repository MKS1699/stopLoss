"use client";

import { useAppSelector } from "@/app/hooks";
import Link from "next/link";

interface UpcomingIPOPropsTypes {
  // upcomingIPO:
  //   | {
  //       _id: string;
  //       ipoName: string;
  //       open: string;
  //       close: string;
  //       linkedPostsId: string[];
  //       __v: number;
  //     }[]
  //   | {}[];
  className?: string;
}

const UpcomingIPO = ({
  className,
}: // upcomingIPO
UpcomingIPOPropsTypes) => {
  const upcomingIPO = useAppSelector((state) => state.data.upcomingIPOEntries);

  return (
    <div
      className={`w-full h-auto p-2 my-2 bg-light dark:bg-dark rounded-md shadow-lg pb-4 ${className}`}
    >
      <h1 className="w-full h-fit text-center text-xl text-dark dark:text-light">
        Upcoming IPO
      </h1>
      {/* Upcoming IPO Table */}
      <div className="w-full h-full grid grid-cols-3 grid-rows-1 mx-auto gap-y-1">
        {/* ipoName */}
        <div className="w-full h-full grid grid-flow-row grid-cols-1 text-dark dark:text-light">
          <div className="w-full h-fit font-semibold justify-self-center text-center bg-dark bg-opacity-80 dark:bg-opacity-100 text-light py-1">
            IPO Name
          </div>
          {/* ipoName */}
          {upcomingIPO.map((entry: any) => {
            const ipoName: string = entry?.ipoName;

            return (
              <div
                className="w-full h-fit text-center  cursor-pointer"
                id={`${entry._id}-ipoName`}
                key={`${entry._id}-ipoName`}
              >
                <Link
                  href={{
                    pathname: `/pages/home/landingPage/upcomingIPO/${ipoName}`,
                  }}
                >
                  {ipoName}
                </Link>
              </div>
            );
          })}
        </div>
        {/* open date */}
        <div className="w-full h-full grid grid-flow-row grid-cols-1 text-dark dark:text-light">
          <div className="w-full h-fit font-semibold justify-self-center text-center bg-dark bg-opacity-80 dark:bg-opacity-100 text-light py-1">
            Open Date
          </div>
          {/* dates */}
          {upcomingIPO.map((entry: any) => {
            return (
              <div
                className="w-full h-fit text-center"
                id={`${entry._id}-open`}
                key={`${entry._id}-open`}
              >
                {entry.open}
              </div>
            );
          })}
        </div>
        {/* close date */}
        <div className="w-full h-full grid grid-flow-row grid-cols-1 text-dark dark:text-light">
          <div className="w-full h-fit font-semibold justify-self-center text-center bg-dark bg-opacity-80 dark:bg-opacity-100 text-light py-1">
            Close Date
          </div>
          {/* dates */}
          {upcomingIPO.map((entry: any) => {
            return (
              <div
                className="w-full h-fit text-center"
                id={`${entry._id}-close`}
                key={`${entry._id}-close`}
              >
                {entry.close}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default UpcomingIPO;
