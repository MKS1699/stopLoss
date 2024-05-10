const ArticleDescription = ({ description }: { description: string }) => {
  return (
    <div className="w-full h-auto px-1 text-base lg:text-lg my-2 text-dark dark:text-light">
      {description}
    </div>
  );
};

export default ArticleDescription;
