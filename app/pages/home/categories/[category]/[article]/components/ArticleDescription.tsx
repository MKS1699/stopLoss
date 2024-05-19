const ArticleDescription = ({ description }: { description: string }) => {
  // removing <br /> from description where it is as a string
  // and replacing with "/n" because this will never(hope)
  // be posted in the db.
  const descriptionRestructured = description.replaceAll("<br />", "/n");
  // splitting the description based on "/n" into multiple line description
  const descriptionParaArr = descriptionRestructured.split("/n");
  return (
    <div className="w-full h-auto px-1 text-base lg:text-lg my-2 text-dark dark:text-light">
      {/* rendering multiple lines (para) of description */}
      {descriptionParaArr.map((para: string, index: number) => {
        if (para !== "")
          return <p key={`article-para-${index}`}>{para}</p>; // renders content
        else return <br key={`line-break-${index}`} />; // replaces "/n" -> "" with html <br />
      })}
    </div>
  );
};

export default ArticleDescription;
