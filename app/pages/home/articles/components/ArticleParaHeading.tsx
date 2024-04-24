const ArticleParaHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="w-full h-fit px-2 text-lg lg:text-xl xl:text-2xl relative">
      {heading?.length > 0 && (
        <div className="absolute w-[3px] h-full left-0 top-0 bg-blue-400 rounded-full"></div>
      )}
      {heading}
    </div>
  );
};

export default ArticleParaHeading;
