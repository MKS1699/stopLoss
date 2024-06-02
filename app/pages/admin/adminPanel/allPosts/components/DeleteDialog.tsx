"use client";

import Spinner from "@/app/components/Spinner";
import { useDeletePostById } from "@/app/hooks";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { IoAlert } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { motion } from "framer-motion";
interface DeleteDialogPropsTypes {
  id: string;
  showDialog: boolean;
  closeDialog: () => void;
  postTitle: string;
  updateIsPostDeleted: () => void;
}
const DeleteDialog = ({
  id,
  showDialog,
  closeDialog,
  postTitle,
  updateIsPostDeleted,
}: DeleteDialogPropsTypes) => {
  const { postDeleteStatus, deletePost } = useDeletePostById();

  useEffect(() => {
    if (postDeleteStatus == "deleted") {
      updateIsPostDeleted();
      closeDialog();
    }
  }, [postDeleteStatus]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full min-h-screen grid grid-rows-1 grid-cols-1">
      <div className="self-center justify-self-center w-80 h-fit rounded-md text-xl border-solid border-2 border-[#FF0000] px-4 py-3 bg-light flex flex-col justify-evenly">
        <div>Do you want to delete this post?</div>
        <div className="text-wrap text-xl italic border-l-2 border-solid border-t-0 border-b-0 pl-3 my-2">
          {postTitle}
        </div>
        {/* postId
        <div className="w-fit h-fit text-xs">{id}</div> */}
        {/* deleting process info */}
        {/* when the deleted process is about to start or not started */}
        {postDeleteStatus == "start" && (
          <motion.p
            className="w-full h-fit py-1 px-2 text-xs"
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
            <span className="text-[#FF0000] font-bold text-base">
              <IoAlert className="inline-block" />
              Warning:
            </span>
            Tags and UpcomingIPO entries associated with this post will also be
            deleted with the deletion of this post. If the tags and entries are
            associated only with this post otherwise, they will be updated by
            disassociating the post with them.
          </motion.p>
        )}
        {/* when the delete process is going on */}
        {postDeleteStatus == "processing" && (
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
            <Spinner /> Deleting Post.
          </motion.p>
        )}
        {/* when the delete process is completed */}
        {postDeleteStatus == "deleted" && (
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
            <MdDeleteOutline /> Post Deleted.
          </motion.p>
        )}
        {/* buttons */}
        {postDeleteStatus == "start" && (
          <div className="w-full h-auto py-3 flex flex-row justify-between">
            {/* cancel button */}
            <motion.div
              className="bg-[#67FF33] text-dark rounded-md py-1 px-2 cursor-pointer"
              onClick={() => {
                closeDialog();
                toast.error("Post deletion cancelled.");
              }}
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
              Cancel
            </motion.div>
            <motion.div
              className="bg-[#FF0000] text-light py-1 px-2 rounded-md cursor-pointer"
              onClick={async () => {
                await deletePost(id);
              }}
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
              Delete
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteDialog;
