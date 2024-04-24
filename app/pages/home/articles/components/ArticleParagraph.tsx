"use client";
import { ArticleImagePropsTypes } from "./ArticleImage";
import {
  ArticleParaBody,
  ArticleParaHeading,
  ArticleParaSubHeading,
  ArticleTable,
} from ".";
import { PostParaBody } from "@/app/pages/admin/adminPanel/components";
import ArticleParaImages from "./ArticleParaImages";
import { useEffect, useState } from "react";

export interface ArticleParagraphPropsTypes {
  paragraph: {
    hasImages: boolean;
    hasTable: boolean;
    paraBody: string;
    paraHeading: string;
    paraSubHeading: string;
    paraImages: ArticleImagePropsTypes["image"][];
    paraTable: string[][];
  };
  paraNumber: number;
}

const ArticleParagraph = ({
  paragraph,
  paraNumber,
}: ArticleParagraphPropsTypes) => {
  const {
    hasImages,
    hasTable,
    paraBody,
    paraHeading,
    paraSubHeading,
    paraImages,
    paraTable,
  } = paragraph;

  /* The below algorithm is done to remove empty elements of the
   * table which are present in it as of now. This needs to be
   * addressed from the admin panel as to check what is being
   * db.
   */
  const [table, setTable] = useState<string[][]>([]);
  useEffect(() => {
    let ARR: string[][] = [];

    paraTable.map((i: string[], index: number) => {
      let a = i.filter((val: string) => val.length > 0);
      if (a.length > 0) {
        ARR[index] = a;
      }
    });

    // making sure no empty table is created
    if (ARR.length > 0) {
      setTable(ARR);
    }
  }, []);

  return (
    <div className="w-full h-auto flex flex-col gap-y-2">
      <ArticleParaHeading heading={paraHeading} />
      <ArticleParaSubHeading subHeading={paraSubHeading} />
      <ArticleParaBody body={paraBody} />
      {hasImages && (
        <ArticleParaImages images={paraImages} paraNumber={paraNumber} />
      )}
      {hasTable && <ArticleTable table={table} paraNumber={paraNumber} />}
    </div>
  );
};

export default ArticleParagraph;
