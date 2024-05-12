const ArticleParaBody = ({ body }: { body: string }) => {
  // removing <br /> from body where it is as a string
  // and replacing with "/n" because this will never(hope)
  // be posted in the db.
  const bodyRestructured = body.replaceAll("<br />", "/n");
  // splitting the body based on "/n" into multiple line body
  const paraArr = bodyRestructured.split("/n");
  return (
    <div className="w-full h-fit px-2 text-justify text-base lg:text-lg whitespace-pre-wrap">
      {/* rendering multiple lines of body */}
      {paraArr.map((para: string, index: number) => {
        if (para !== "") return <p>{para}</p>; // renders content
        else return <br />; // replaces "/n" -> "" with html <br />
      })}
    </div>
  );
};

export default ArticleParaBody;
