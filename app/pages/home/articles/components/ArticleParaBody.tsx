const ArticleParaBody = ({ body }: { body: string }) => {
  return (
    <div className="w-full h-fit px-2 text-justify text-base lg:text-lg">
      {body}
    </div>
  );
};

export default ArticleParaBody;
