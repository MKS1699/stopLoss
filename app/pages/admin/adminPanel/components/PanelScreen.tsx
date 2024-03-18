"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import AllPosts from "../allPosts/page";
import CreatePost from "../createPost/page";
import EditPost from "../editPost/page";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { PanelMenu } from ".";
import UserSettings from "./UserSettings";
import { changeAdminPanelScreen } from "@/app/redux/slice/adminPanelSlice";

import { MdOutlinePostAdd } from "react-icons/md";
import toast from "react-hot-toast";

const PanelScreen = () => {
  const dispatch = useAppDispatch();
  const panelScreen: string = useAppSelector(
    (state) => state.adminPanel.panelScreen
  );
  const [showPanelMenu, setShowPanelMenu] = useState<boolean>(false);
  function handleNewPost() {
    if (panelScreen !== "createPost") {
      dispatch(changeAdminPanelScreen({ screen: "createPost" }));
      toast("Create Post", {
        icon: <MdOutlinePostAdd size="2rem" />,
      });
    } else {
      toast.error("Already creating a Post.");
    }
  }
  return (
    <div className="w-full h-full grid grid-rows-[7%_93%] grid-cols-1 relative px-1 mt-14">
      {/* Panel Menu button & New Post button */}
      <div className="w-full h-fit grid grid-rows-1 grid-cols-2 py-2 fixed -ml-1 px-1 pl-3 z-10 backdrop-blur-sm">
        {/* Panel Menu button */}
        <div
          className={
            "text-[#003b31] dark:text-[#4cb050] self-start justify-self-start"
          }
          onClick={() => setShowPanelMenu(!showPanelMenu)}
        >
          {showPanelMenu ? (
            <RxCross1 size={"2rem"} />
          ) : (
            <RxHamburgerMenu size={"2rem"} />
          )}
        </div>
        {/* New Post Button */}
        <div
          className={`w-fit h-fit  rounded-md py-2 px-3 text-center grid grid-rows-1 grid-cols-1 self-start justify-self-end ${
            panelScreen === "createPost"
              ? "cursor-not-allowed bg-gray-500 text-white opacity-60"
              : "bg-[#003b31] dark:bg-[#4cb050] text-white cursor-pointer"
          } `}
          onClick={handleNewPost}
        >
          <h1 className="self-center text-xl">New Post</h1>
        </div>
      </div>
      {/* panel screens */}
      <div className="w-full mt-16">
        {/* All Posts Panel */}
        {panelScreen === "allPosts" && <AllPosts />}
        {/* Create New Post Panel */}
        {panelScreen === "createPost" && <CreatePost />}
        {/* Edit/Delete Post Panel */}
        {panelScreen === "editPost" && <EditPost />}
        {/* User's Settings */}
        {panelScreen === "userSettings" && <UserSettings />}
      </div>
      {/* Panel Menu this will be available on all the pages */}
      {showPanelMenu && <PanelMenu />}
    </div>
  );
};

export default PanelScreen;
