import ArticleImage, { ArticleImagePropsTypes } from "./ArticleImage";
import { ArticleParagraphPropsTypes } from "./ArticleParagraph";

const ArticleParaImages = ({
  images,
  paraNumber,
}: {
  images: ArticleParagraphPropsTypes["paragraph"]["paraImages"];
  paraNumber: number;
}) => {
  return (
    <div
      className={`w-full h-auto flex flex-col ${
        images.length > 1 && "xl:grid xl:grid-cols-2 xl:grid-flow-row"
      }`}
    >
      {images?.map((image: any, index: number) => (
        <ArticleImage
          image={image}
          key={`Article-Paragraph-${paraNumber}-Image-${index + 1}`}
          className="w-80 h-80 mx-auto"
          showCaption
        />
      ))}
    </div>
  );
};

export default ArticleParaImages;
