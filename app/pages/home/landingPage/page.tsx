import { CenterDiv, LeftDiv, RightDiv } from "./components";

const LandingPage = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-rows-1 mt-2 px-1">
      <LeftDiv className="row-start-2 md:row-start-1 md:col-start-1" />
      <CenterDiv className="row-start-1 md:row-start-1 md:col-start-2" />
      <RightDiv className="row-start-3 md:row-start-1 md:col-start-3" />
    </div>
  );
};

export default LandingPage;
