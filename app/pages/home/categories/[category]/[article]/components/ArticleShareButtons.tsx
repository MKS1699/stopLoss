"use client";
import { useEffect, useState } from "react";
import {
  // Facebook
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount,
  // Twitter
  TwitterIcon,
  TwitterShareButton,
  // Telegram
  TelegramIcon,
  TelegramShareButton,
  // WhatsApp
  WhatsappIcon,
  WhatsappShareButton,
  // Reddit
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  // LinkedIn
  LinkedinIcon,
  LinkedinShareButton,
  // Email
  EmailIcon,
  EmailShareButton,
} from "react-share";
const ArticleShareButtons = () => {
  const [url, setURL] = useState<string>("");

  useEffect(() => {
    const host = window.location;
    const urlString = host.href;
    setURL(urlString);
  }, []);
  return (
    <div className="w-full h-fit py-2 px-1 flex flex-row justify-evenly">
      {/* Facebook */}
      <FacebookShareButton url={url}>
        <FacebookIcon className="h-10 w-10" round />
      </FacebookShareButton>
      {/* Twitter */}
      <TwitterShareButton url={url}>
        <TwitterIcon className="h-10 w-10" round />
      </TwitterShareButton>
      {/* LinkedIn */}
      <LinkedinShareButton url={url}>
        <LinkedinIcon className="h-10 w-10" round />
      </LinkedinShareButton>
      {/* Telegram */}
      <TelegramShareButton url={url}>
        <TelegramIcon className="h-10 w-10" round />
      </TelegramShareButton>
      {/* WhatsApp */}
      <WhatsappShareButton url={url}>
        <WhatsappIcon className="h-10 w-10" round />
      </WhatsappShareButton>
      {/* Reddit */}
      <RedditShareButton url={url}>
        <RedditIcon className="h-10 w-10" round />
      </RedditShareButton>
      {/* Email */}
      <EmailShareButton url={url}>
        <EmailIcon className="h-10 w-10" round />
      </EmailShareButton>
    </div>
  );
};

export default ArticleShareButtons;
