import { LatestPosts } from ".";

export interface CenterDivropsTypes {
  className?: string;
}

const CenterDiv = ({ className }: CenterDivropsTypes) => {
  return (
    <div
      className={`
    ${className}`}
    >
      <LatestPosts />
    </div>
  );
};

export default CenterDiv;
