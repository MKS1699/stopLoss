import { ArticleParagraphPropsTypes } from "./ArticleParagraph";

interface ArticleTablePropsTypes {
  table: ArticleParagraphPropsTypes["paragraph"]["paraTable"];
  paraNumber: number;
}

const ArticleTable = ({ table, paraNumber }: ArticleTablePropsTypes) => {
  return (
    <table className="w-full h-full">
      {/* table head */}
      <thead
        key={`Article-Paragraph-${paraNumber}-table-head`}
        className="w-full border-2 border-solid border-blue-400"
      >
        {table.map((row: string[], rIndex: number) => {
          if (rIndex === 0) {
            return (
              <tr
                key={`Article-Paragraph-${paraNumber}-table-head-row-${rIndex}`}
                className="w-full h-fit bg-blue-400"
              >
                {row.map((data: string, dIndex: number) => {
                  if (data.length > 0) {
                    return (
                      <th
                        key={`Article-Paragraph-${paraNumber}-table-head-row-${rIndex}-header-${dIndex}`}
                        className={`text-white ${
                          dIndex !== row.length - 1
                            ? "border-r-2 border-solid border-white"
                            : ""
                        }`}
                      >
                        {data}
                      </th>
                    );
                  }
                })}
              </tr>
            );
          }
        })}
      </thead>
      {/* table body */}
      <tbody key={`Article-Paragraph-${paraNumber}-table-body`} className="">
        {table.map((row: string[], rIndex: number) => {
          if (rIndex > 0) {
            return (
              <tr
                key={`Article-Paragraph-${paraNumber}-table-body}-row-${rIndex}`}
                className="border-b-2 border-solid border-blue-400"
              >
                {row.map((data: string, dIndex: number) => {
                  if (data.length > 0) {
                    return (
                      <td
                        key={`Article-Paragraph-${paraNumber}-table-body-row-${rIndex}-data-${dIndex}`}
                        className="w-fit h-fit border-x-2 border-solid px-1 text-center border-blue-400"
                      >
                        {data}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default ArticleTable;
