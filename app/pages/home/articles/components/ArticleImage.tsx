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
}

const ArticleImage = ({ image, className }: ArticleImagePropsTypes) => {
  return (
    <Image
      src={image?.links?.original ? image?.links?.original : ""}
      alt={image?.caption ? image?.caption : "Article Main Image"}
      quality={100}
      width={1000}
      height={1000}
      className={`w-full h-96 ${className} mt-1`}
      priority
    />
  );
};

export default ArticleImage;
