import { ArticleParagraph } from ".";
import { ArticleParagraphPropsTypes } from "./ArticleParagraph";
const ArticleParagraphs = ({ paragraphs }: { paragraphs: {}[] }) => {
  return (
    <div className="w-full h-auto flex flex-col gap-2 text-dark dark:text-light">
      {paragraphs?.map((paragraph: any, index: number) => (
        <ArticleParagraph
          paragraph={paragraph}
          key={`Article-Paragraph-${index + 1}`}
          paraNumber={index}
        />
      ))}
    </div>
  );
};

export default ArticleParagraphs;
