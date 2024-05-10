interface UpcomingIPOPropsTypes {
  upcomingIPO:
    | {
        _id: string;
        ipoName: string;
        open: string;
        close: string;
        linkedPostsId: string[];
        __v: number;
      }[]
    | {}[];
}

const UpcomingIPO = ({ upcomingIPO }: UpcomingIPOPropsTypes) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 h-auto p-2 my-2">
      <h1 className="w-full h-fit text-center text-xl text-dark dark:text-light">
        Upcoming IPO
      </h1>
      {/* Upcoming IPO Table */}
      <div className="w-full h-full grid grid-cols-3 grid-rows-1 mx-auto gap-y-1">
        {/* ipoName */}
        <div className="w-full h-full grid grid-flow-row grid-cols-1">
          <div className="w-full h-fit font-semibold justify-self-center text-center bg-dark bg-opacity-80 dark:bg-opacity-100 text-light py-1">
            IPO Name
          </div>
          {/* ipoName */}
          {upcomingIPO.map((entry: any) => {
            const ipoName: string = entry?.ipoName;

            return (
              <div
                className="w-full h-fit text-center border-b-2 border-solid border-dark dark:border-light cursor-pointer"
                id={`${entry._id}-ipoName`}
                key={`${entry._id}-ipoName`}
              >
                {ipoName}
              </div>
            );
          })}
        </div>
        {/* open date */}
        <div className="w-full h-full grid grid-flow-row grid-cols-1">
          <div className="w-full h-fit font-semibold justify-self-center text-center bg-dark bg-opacity-80 dark:bg-opacity-100 text-light py-1">
            Open Date
          </div>
          {/* dates */}
          {upcomingIPO.map((entry: any) => {
            return (
              <div
                className="w-full h-fit text-center border-b-2 border-solid border-dark dark:border-light cursor-pointer"
                id={`${entry._id}-open`}
                key={`${entry._id}-open`}
              >
                {entry.open}
              </div>
            );
          })}
        </div>
        {/* close date */}
        <div className="w-full h-full grid grid-flow-row grid-cols-1">
          <div className="w-full h-fit font-semibold justify-self-center text-center bg-dark bg-opacity-80 dark:bg-opacity-100 text-light py-1">
            Close Date
          </div>
          {/* dates */}
          {upcomingIPO.map((entry: any) => {
            return (
              <div
                className="w-full h-fit text-center border-b-2 border-solid border-dark dark:border-light cursor-pointer"
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
