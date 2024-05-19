"use client";
import { useAppSelector } from "@/app/hooks";
import { PostCardList } from "@/app/pages/home/components";
import { PostCardListTypes } from "@/app/pages/home/components/PostCardList";
import { createTitleURL } from "@/app/utils/tools";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Timer } from ".";

const Main = () => {
  const params: { entry: string } = useParams();
  const { entry } = params;
  const router = useRouter();

  const upcomingIPOEntries = useAppSelector(
    (state) => state.data.upcomingIPOEntries
  );

  const posts = useAppSelector((state) => state.data.categoryPosts);
  const { ipoPosts } = posts;

  const [relatedPosts, setRelatedPosts] = useState<{}[]>([]);
  const [redirectURL, setRedirectURL] = useState<string>("");
  useEffect(() => {
    upcomingIPOEntries.map((ipoEntry: any) => {
      if (ipoEntry.ipoName === entry) {
        setRelatedPosts(ipoEntry.linkedPostsId);
      }
    });
  }, [entry]);

  useEffect(() => {
    if (relatedPosts.length == 1) {
      let foundPost: any = {};
      ipoPosts.filter((post: any) => {
        if (post._id == relatedPosts[0]) {
          foundPost = post;
        }
      });
      setRedirectURL(
        `/pages/home/categories/ipo/${createTitleURL(foundPost.postTitle)}?id=${
          relatedPosts[0]
        }`
      );
      router.push(
        `/pages/home/categories/ipo/${createTitleURL(foundPost.postTitle)}?id=${
          relatedPosts[0]
        }`
      );
    }
  }, [relatedPosts]);

  return (
    <div className="min-h-screen w-full dark:text-light text-dark relative">
      {/* post list when related Post are greater than one */}
      {relatedPosts.length > 1 && (
        <div className="container mx-auto w-1/2 h-full">
          {relatedPosts.map((postId: any, index: number) => {
            let el: any = "";
            {
              ipoPosts.map(
                (post: PostCardListTypes["post"] | any, index: number) => {
                  if (post._id === postId) {
                    //   console.log("found!", post);
                    el = <PostCardList post={post} key={`Post-${index}`} />;
                  }
                }
              );
            }
            return el;
          })}
        </div>
      )}
      {/* if one related post then redirecting to post */}
      {relatedPosts.length == 1 && (
        <div className="w-fit h-fit text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          You are being redirected to Post, please wait for <Timer limit={10} />{" "}
          seconds. If not redirected click{" "}
          <Link href={redirectURL} className="text-4xl bold underline">
            here.
          </Link>
        </div>
      )}
    </div>
  );
};

export default Main;
