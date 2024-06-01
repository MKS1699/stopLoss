"use client";

/* Pagination - Component (client based component)
 *
 * Info :
 * This is pagination component which creates pages for
 * any type of array based data. It works only when the data
 * is of length more than 1.
 *
 * Working:
 * It requires a currentPage prop from the parent component
 * where it is being rendered which it will update and based
 * on it the parent component will render the data.
 *
 * Props:
 * curPage : It is a number which is provided by parent component
 * updateCurrPage : Function for updating currPage
 * makePagesOf : The array based data from which pages will
 * be created
 */

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// icons
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

interface PaginationPropsTypes {
  currPage: number;
  updateCurrPage: (page: number) => void;
  makePagesOf: any[];
}

const Pagination = ({
  currPage,
  updateCurrPage,
  makePagesOf,
}: PaginationPropsTypes) => {
  const [maxPages, setMaxPages] = useState<number>(0);

  const [allPages, setAllPages] = useState<number[]>([0]);

  const [pageBtnsToShow, setPageBtnsToShow] = useState<{
    firstBatch: number[] | [];
    middleBatch: number[] | [];
    lastBatch: number[] | [];
  }>({
    firstBatch: [],
    middleBatch: [],
    lastBatch: [],
  });

  useEffect(() => {
    // setting maximum pages
    setMaxPages(makePagesOf.length);
    // creating All Pages numbers
    const pages: number[] | [] = [];
    for (let i = 0; i < makePagesOf.length; i++) {
      pages[i] = i + 1;
    }
    setAllPages(pages);
  }, []);

  // handling previous page btn fn
  function handlePrevBtn(currentPage: number): void {
    if (currentPage == 1) {
      toast(`You are at page ${currentPage}.`);
    } else {
      updateCurrPage(currentPage - 1);
    }
  }

  // handling next page btn fn
  function handleNextBtn(currentPage: number): void {
    if (currentPage == maxPages) {
      toast(`You are at last page.`);
    } else {
      updateCurrPage(currPage + 1);
    }
  }

  // function for showing page btns based on currentPage btns
  function showPageBtns() {
    const start2btns: number[] | [] = [];
    const last2btns: number[] | [] = [];
    const mid3btns: number[] | [] = []; // [((maxbtn/2) - 1), maxbtn/2, ((maxbtn/2)+1)]
    const currPageConsecutiveBtns: number[] | [] = []; // [currPage-1, currPage, currPage+1]
    if (allPages.length > 0) {
      // getting first 2 btns
      for (let i = 0; i < allPages.length && i < 2; i++) {
        start2btns[i] = allPages[i];
      }
      // getting last 2 btns
      for (let i = allPages.length; i > 0 && i > allPages.length - 2; i--) {
        last2btns[last2btns.length] = allPages[i - 1];
      }
      // getting mid3btns
      let middlePage: number = Math.floor(maxPages / 2);
      let beforeMiddlePage: number = middlePage - 1;
      let afterMiddlePage: number = middlePage + 1;

      mid3btns[0] = beforeMiddlePage;
      mid3btns[1] = middlePage;
      mid3btns[2] = afterMiddlePage;

      // getting currPage consecutivebtns
      if (currPage > 1 && currPage < maxPages) {
        let beforeCurrPage: number = currPage - 1;
        let afterCurrPage: number = currPage + 1;

        currPageConsecutiveBtns[0] = beforeCurrPage;
        currPageConsecutiveBtns[1] = currPage;
        currPageConsecutiveBtns[2] = afterCurrPage;

        setPageBtnsToShow({
          firstBatch: start2btns,
          lastBatch: last2btns.reverse(),
          middleBatch: currPageConsecutiveBtns,
        });
      } else {
        setPageBtnsToShow({
          firstBatch: start2btns,
          lastBatch: last2btns.reverse(),
          middleBatch: mid3btns,
        });
      }
    }
  }

  useEffect(() => {
    showPageBtns();
  }, [currPage, maxPages, allPages]);

  return (
    <div className="container mx-auto w-auto grid grid-rows-1 grid-cols-11 items-center justify-center gap-x-1">
      {maxPages > 1 && (
        <>
          {/* previous page button */}
          <div
            className="px-2 py-1 w-10 h-10 text-dark dark:text-light rounded-md cursor-pointer grid grid-cols-1 grid-rows-1 items-center justify-center"
            onClick={() => handlePrevBtn(currPage)}
            title="Go to previous page."
          >
            <GrPrevious />
          </div>
          {/* specific pages buttons */}
          {/* first 2 btns */}
          {pageBtnsToShow.firstBatch.map((page: number) => {
            return (
              <div
                className={`px-2 py-1 w-10 h-10 text-dark dark:text-light rounded-md border-2 border-solid border-dark cursor-pointer text-center ${
                  currPage == page ? "bg-dark text-light" : ""
                }`}
                key={`Page-btn-${page}`}
                onClick={() => updateCurrPage(page)}
              >
                {page}
              </div>
            );
          })}
          {/* separator */}
          <div className="px-2 text-dark dark:text-light rounded-md  w-fit h-fit cursor-pointer">
            ...
          </div>
          {/* middle 3 btns */}
          {pageBtnsToShow.middleBatch.map((page: number) => {
            return (
              <div
                className={`px-2 py-1 w-10 h-10 text-dark dark:text-light rounded-md border-2 border-solid border-dark cursor-pointer text-center ${
                  currPage == page ? "bg-dark text-light" : ""
                }`}
                key={`Page-btn-${page}`}
                onClick={() => updateCurrPage(page)}
              >
                {page}
              </div>
            );
          })}
          {/* separator */}
          <div className="px-2 text-dark dark:text-light rounded-md  w-fit h-fit cursor-pointer">
            ...
          </div>
          {/* last 2 btns */}
          {pageBtnsToShow.lastBatch.map((page: number) => {
            return (
              <div
                className={`px-2 py-1 w-10 h-10 text-dark dark:text-light rounded-md border-2 border-solid border-dark cursor-pointer text-center ${
                  currPage == page ? "bg-dark text-light" : ""
                }`}
                key={`Page-btn-${page}`}
                onClick={() => updateCurrPage(page)}
              >
                {page}
              </div>
            );
          })}
          {/* next page button */}
          <div
            className="px-2 py-1 w-10 h-10 text-dark dark:text-light rounded-md cursor-pointer grid grid-cols-1 grid-rows-1 items-center justify-center"
            onClick={() => handleNextBtn(currPage)}
            title="Go to next page"
          >
            <GrNext />
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
