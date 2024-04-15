"use client";

import {
  API_POSTS_UPCOMING_IPO_LIST_ENDPOINTS,
  API_POSTS_UPCOMING_IPO_LIST_ROUTE,
  API_URL,
} from "@/app/api/endPoints";
import { useAppDispatch, useHeader } from "@/app/hooks";
import {
  setPostUpcomingIPOCloseDateInfo,
  setPostUpcomingIPOLinkedPostsInfo,
  setPostUpcomingIPONameInfo,
  setPostUpcomingIPOOpenDateInfo,
} from "@/app/redux/slice/postSlice";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaAngleDown } from "react-icons/fa";

type PostUpcomingIPOSelectionPropsTypes = {
  upcomingIPO: boolean;
};

type IPOEntryType = {
  close: string;
  ipoName: string;
  linkedPostsId: string[];
  open: string;
  __v: number;
  _id: string;
};

const PostUpcomingIPOSelection = ({
  upcomingIPO,
}: PostUpcomingIPOSelectionPropsTypes) => {
  const headers = useHeader();
  const dispatch = useAppDispatch();

  const [IPOEntries, setIPOEntries] = useState<IPOEntryType[] | null>(null);

  const [ipoNames, setIPONames] = useState<string[]>([]);

  const [selectedOption, setSelectedOption] = useState<string | "None">("None");

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const [createNewEntry, setCreateNewEntry] = useState<boolean>(false);

  const [newEntryIPOName, setNewEntryIPOName] = useState<string>("");
  const [newEntryIPOOpen, setNewEntryIPOOpen] = useState<string>("");
  const [newEntryIPOClose, setNewEntryIPOClose] = useState<string>("");

  // IPO entries from DB.
  useEffect(() => {
    const GET_ALL_ENTRIES_URL = `${API_URL}${API_POSTS_UPCOMING_IPO_LIST_ROUTE}${API_POSTS_UPCOMING_IPO_LIST_ENDPOINTS.getAllEntries}`;

    const config: AxiosRequestConfig = {
      url: GET_ALL_ENTRIES_URL,
      method: "GET",
      headers,
    };
    const getEntries = async () => {
      const result = await axios(config);
      setIPOEntries(result.data.RESULT.ALL_ENTRIES);
    };
    getEntries();
  }, []);

  // IPO entries from DB as option.
  useEffect(() => {
    if (IPOEntries !== null && IPOEntries.length > 0) {
      IPOEntries.map((ipoEntry: any) => {
        if (ipoNames.length === 0) {
          setIPONames([ipoEntry.ipoName]);
        } else if (ipoNames.length > 0) {
          ipoNames.map((ipoName: string) => {
            if (ipoName !== ipoEntry.ipoName) {
              setIPONames([...ipoNames, ipoEntry.ipoName]);
            }
          });
        }
      });
    }
  }, [IPOEntries]);

  // adding New IPO Entry to store
  // newIPO Name
  useEffect(() => {
    dispatch(setPostUpcomingIPONameInfo(newEntryIPOName));
  }, [newEntryIPOName]);
  // newOpen date
  useEffect(() => {
    dispatch(setPostUpcomingIPOOpenDateInfo(newEntryIPOOpen));
  }, [newEntryIPOOpen]);
  // newClose date
  useEffect(() => {
    dispatch(setPostUpcomingIPOCloseDateInfo(newEntryIPOClose));
  }, [newEntryIPOClose]);

  // IPO Entries from db to the post
  useEffect(() => {
    if (selectedOption !== "None") {
      setCreateNewEntry(false);
      const selectedEntry: any = IPOEntries?.filter(
        (ipoEntry: any) => ipoEntry.ipoName === selectedOption
      );
      if (selectedEntry) {
        const { ipoName, open, close, linkedPostsId } = selectedEntry[0];
        dispatch(setPostUpcomingIPONameInfo(ipoName));
        dispatch(setPostUpcomingIPOOpenDateInfo(open));
        dispatch(setPostUpcomingIPOCloseDateInfo(close));
        dispatch(setPostUpcomingIPOLinkedPostsInfo(linkedPostsId));
      }
    } else {
      dispatch(setPostUpcomingIPOOpenDateInfo(""));
      dispatch(setPostUpcomingIPOCloseDateInfo(""));
      dispatch(setPostUpcomingIPONameInfo(""));
      dispatch(setPostUpcomingIPOLinkedPostsInfo([""]));
    }
    // changing new form entries to default
    setNewEntryIPOClose("");
    setNewEntryIPOName("");
    setNewEntryIPOOpen("");
  }, [selectedOption]);

  // selected entry from db to none if new entry creation
  useEffect(() => {
    setSelectedOption("None");
  }, [newEntryIPOClose, newEntryIPOName, newEntryIPOOpen]);

  // closing/erasing new entry form when upcomingIPO is false
  useEffect(() => {
    if (!upcomingIPO) {
      setCreateNewEntry(false);
      setNewEntryIPOName("");
      setNewEntryIPOClose("");
      setNewEntryIPOOpen("");
    }
  }, [upcomingIPO]);

  return (
    <div className="w-full h-auto flex flex-col gap-y-4">
      <div
        className={`w-full h-fit self-center flex flex-row items-center justify-between gap-x-2 ${
          upcomingIPO
            ? "text-green-800 dark:text-white cursor-pointer"
            : "text-gray-500 cursor-not-allowed"
        }`}
      >
        {/* ipo selection menu */}
        <div
          className="flex flex-row items-center"
          onClick={() => {
            if (upcomingIPO) {
              setShowMenu(!showMenu);
            } else {
              toast.error("Enable UpcomingIPO");
            }
          }}
        >
          <div className="w-fit h-auto relative">
            {selectedOption}
            <div
              className={`${
                showMenu ? "visible" : "hidden"
              } absolute w-auto h-auto flex flex-col gap-y-1 p-1  z-10 border-solid border-2 bg-opacity-0 ${
                upcomingIPO
                  ? "border-green-500 bg-green-500 text-black dark:text-white"
                  : "border-gray-500 bg-gray-500 dark:bg-gray-700 text-gray-950"
              } rounded-md`}
            >
              {ipoNames.map((ipoName: string) => (
                <div
                  className="w-full "
                  key={`IPO selection : ${ipoName}`}
                  onClick={() => {
                    setSelectedOption(ipoName);
                    setShowMenu(false);
                  }}
                >
                  {ipoName}
                </div>
              ))}
            </div>
          </div>
          {/* dropdown */}
          <div>
            <FaAngleDown />
          </div>
        </div>
        {/* New Entry Create Button */}
        <div
          className={`w-5 h-5 rounded-full ${
            upcomingIPO
              ? "bg-green-500 text-white cursor-pointer"
              : "bg-gray-400 text-gray-800 cursor-not-allowed"
          } flex items-center justify-around`}
          onClick={() => {
            if (upcomingIPO) {
              setCreateNewEntry(!createNewEntry);
              setSelectedOption("None");
            } else {
              toast.error("Enable UpcomingIPO");
            }
          }}
        >
          +
        </div>
      </div>
      {/* New Entry Form */}
      <div
        className={`${
          createNewEntry ? "visible" : "hidden"
        } h-auto w-full flex flex-col lg:flex-row gap-2 items-center justify-evenly`}
      >
        {/* name */}
        <div className="w-full h-auto grid grid-rows-1 grid-cols-[30%_70%] gap-2 items-center justify-items-center">
          <label
            htmlFor="ipoName"
            className="text-green-600 dark:text-white justify-self-end"
          >
            IPO Name :
          </label>
          <input
            type="text"
            name="ipoName"
            id="ipoName"
            className="outline-none border-solid border-b-2 border-green-500 pl-1 bg-transparent dark:bg-[#003b31]"
            placeholder="Enter IPO / Company Name"
            onChange={(e) => setNewEntryIPOName(e.target.value.toString())}
            value={newEntryIPOName}
          />
        </div>
        {/* open */}
        <div className="w-full h-auto grid grid-rows-1 grid-cols-[30%_70%] gap-2 items-center justify-items-center">
          <label
            htmlFor="ipoOpen"
            className="text-green-600 dark:text-white justify-self-end"
          >
            Open :
          </label>
          <input
            type="text"
            name="ipoOpen"
            id="ipoOpen"
            className="outline-none border-solid border-b-2 border-green-500 pl-1 bg-transparent dark:bg-[#003b31]"
            placeholder="Enter Opening date of IPO"
            onChange={(e) => setNewEntryIPOOpen(e.target.value.toString())}
            value={newEntryIPOOpen}
          />
        </div>
        {/* Close */}
        <div className="w-full h-auto grid grid-rows-1 grid-cols-[30%_70%] gap-2 items-center justify-items-center">
          <label
            htmlFor="ipoClose"
            className="text-green-600 dark:text-white justify-self-end"
          >
            Close :
          </label>
          <input
            type="text"
            name="ipoClose"
            id="ipoClose"
            className="outline-none border-solid border-b-2 border-green-500 pl-1 bg-transparent dark:bg-[#003b31]"
            placeholder="Enter Closing date of IPO"
            onChange={(e) => setNewEntryIPOClose(e.target.value.toString())}
            value={newEntryIPOClose}
          />
        </div>
      </div>
    </div>
  );
};

export default PostUpcomingIPOSelection;
