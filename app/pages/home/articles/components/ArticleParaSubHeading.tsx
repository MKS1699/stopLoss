const ArticleParaSubHeading = ({ subHeading }: { subHeading: string }) => {
  return (
    <div className="w-full h-fit px-1 text-base lg:text-lg xl:text-xl relative">
      {subHeading}
    </div>
  );
};

export default ArticleParaSubHeading;
