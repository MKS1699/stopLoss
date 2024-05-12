import Image from "next/image";

export interface ArticleImagePropsTypes {
  image: {
    links: {
      original: string;
      medium?: string;
      thumbnail?: string;
    };
    caption: string;
  };
  className?: string;
  showCaption?: boolean;
}

const ArticleImage = ({
  image,
  className,
  showCaption,
}: ArticleImagePropsTypes) => {
  return (
    <div className="flex flex-col justify-between">
      <Image
        src={image?.links?.original ? image?.links?.original : ""}
        alt={image?.caption ? image?.caption : "Article Main Image"}
        quality={100}
        width={1000}
        height={1000}
        className={`w-full h-96 ${className} mt-1`}
        priority
      />
      {showCaption && (
        <div className="w-full h-fit text-xs text-center italic">
          {image?.caption}
        </div>
      )}
    </div>
  );
};

export default ArticleImage;
