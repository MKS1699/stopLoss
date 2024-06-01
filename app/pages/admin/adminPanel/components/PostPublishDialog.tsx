"use client";

import Spinner from "@/app/components/Spinner";
import { usePostPublishSave } from "@/app/hooks/apiHooks";
import { IoMdCheckmark } from "react-icons/io";
import { GiTimeTrap } from "react-icons/gi";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface PostPublishDialogPropsTypes {
  closeDialog: () => void;
  showPublishDialog: boolean;
}

const PostPublishDialog = ({
  closeDialog,
  showPublishDialog,
}: PostPublishDialogPropsTypes) => {
  const { publishStatus, uploadPost } = usePostPublishSave();
  useEffect(() => {
    if (showPublishDialog) {
      uploadPost();
    }
  }, [showPublishDialog]);

  useEffect(() => {
    if (publishStatus == "published") {
      closeDialog();
    }
  }, [publishStatus]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full min-h-screen grid grid-rows-1 grid-cols-1 backdrop-blur-sm">
      <div className="self-center justify-self-center w-72 h-fit rounded-md text-xl border-solid border-2 border-[#009E60] px-4 py-3 bg-light flex flex-col justify-evenly">
        {/* idle status */}
        {publishStatus == "idle" && (
          <motion.p
            className="flex flex-row items-center justify-evenly"
            animate={{
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeIn",
            }}
          >
            <GiTimeTrap className="animate-pulse" />
            Publishing post soon.
          </motion.p>
        )}
        {/* processing status */}
        {publishStatus == "processing" && (
          <motion.p
            className="flex flex-row items-center justify-evenly"
            animate={{
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
            }}
          >
            <Spinner className="animate-spinner" />
            Publishing your post
          </motion.p>
        )}
        {/* published post status */}
        {publishStatus == "published" && (
          <motion.p
            className="flex flex-row items-center justify-evenly"
            animate={{
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeIn",
            }}
          >
            <IoMdCheckmark />
            Post Published
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PostPublishDialog;
