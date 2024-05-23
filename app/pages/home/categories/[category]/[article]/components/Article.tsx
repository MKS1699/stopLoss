"use client";
import {
  ArticleTitle,
  ArticleImage,
  ArticleInfo,
  ArticleDescription,
  ArticleParagraphs,
  ArticleShareButtons,
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
          {/* post Title */}
          <ArticleTitle title={postTitle} />
          {/* main image */}
          <ArticleImage image={postImage} />
          {/* post Authors & postDate */}
          <ArticleInfo authors={postAuthors} date={postUpdated} />
          {/* article share buttons */}
          <ArticleShareButtons />
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
