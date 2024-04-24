"use client";
import {
  ArticleTitle,
  ArticleImage,
  ArticleInfo,
  ArticleDescription,
  ArticleParagraphs,
} from ".";

const Article = ({ post }: { post: any }) => {
  const {
    postTitle,
    postImage,
    postDescription,
    postAuthors,
    postUpdated,
    postParagraphs,
  } = post;

  return (
    <div className="w-full h-auto flex flex-col">
      {post && (
        <>
          {/* main image */}
          <ArticleImage image={postImage} />
          {/* post Title */}
          <ArticleTitle title={postTitle} />
          {/* post Authors & postDate */}
          <ArticleInfo authors={postAuthors} date={postUpdated} />
          {/* post description */}
          <ArticleDescription description={postDescription} />
          {/* post paragraphs */}
          <ArticleParagraphs paragraphs={postParagraphs} />
        </>
      )}
    </div>
  );
};

export default Article;
