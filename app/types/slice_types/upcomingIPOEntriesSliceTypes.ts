export interface upcomingIPOEntriesSliceTypes {
  entries:
    | {
        _id: string;
        ipoName: string;
        open: string;
        close: string;
        linkedPostsId: string[];
        __v: number;
      }[]
    | {}[];
}
