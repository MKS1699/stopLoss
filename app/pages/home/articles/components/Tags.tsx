const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="px-4 w-full h-auto my-2 flex flex-auto gap-1 overflow-x-scroll scrollbar-thin pb-3 scrollbar-thumb-blue-400">
      {/* to do link tags to their linked post(s) page */}
      {tags.map((tag: any, index: number) => (
        <div
          className="text-xs bg-blue-300 w-fit p-1 rounded-md text-slate-800 cursor-pointer"
          key={`Article-Tag-${index}`}
        >{`#${tag.tag}`}</div>
      ))}
    </div>
  );
};

export default Tags;
