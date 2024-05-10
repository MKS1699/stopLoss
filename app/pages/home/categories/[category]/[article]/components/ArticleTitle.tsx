const ArticleTitle = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-fit text-justify text-2xl lg:text-3xl 2xl:text-4xl text-black dark:text-light pl-2 my-1 relative">
      {title?.length > 0 && (
        <div className="absolute w-[4px] h-full bg-blue-400 rounded-full left-0 top-0"></div>
      )}
      {title}
    </div>
  );
};

export default ArticleTitle;
