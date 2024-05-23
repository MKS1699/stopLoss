const ArticleInfo = ({ authors, date }: { authors: string[]; date: Date }) => {
  function getDate(timestamp: Date) {
    let date = new Date(timestamp);
    return date;
  }
  return (
    <div className="w-full h-auto text-xs md:text-sm xl:text-base flex justify-between px-2 text-dark dark:text-light">
      {/* authors */}
      <div className="w-full h-auto self-center grid grid-flow-col">
        {authors?.map((author: string, index: number) => (
          <div className="w-fit h-fit" key={`Article-Author-${index}`}>
            {author}
          </div>
        ))}
      </div>
      {/* date */}
      <div className="w-full h-fit text-right">
        {getDate(date).toLocaleDateString()}
      </div>
    </div>
  );
};

export default ArticleInfo;
