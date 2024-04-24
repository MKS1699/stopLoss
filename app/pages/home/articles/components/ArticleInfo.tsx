const ArticleInfo = ({ authors, date }: { authors: string[]; date: Date }) => {
  function getDate(timestamp: Date) {
    let date = new Date(timestamp);
    return date;
  }
  return (
    <div className="w-full h-auto text-xs md:text-sm xl:text-base grid grid-cols-[80%_20%] grid-rows-1 px-2">
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
