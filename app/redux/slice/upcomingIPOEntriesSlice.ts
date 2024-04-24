import { upcomingIPOEntriesSliceTypes } from "@/app/types/slice_types/upcomingIPOEntriesSliceTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: upcomingIPOEntriesSliceTypes = {
  entries: [{}],
};

const upcomingIPOEntriesSlice = createSlice({
  name: "Upcoming IPO Entries",
  initialState,
  reducers: {
    addUpcomingIPOEntries: (state, action: PayloadAction<{}[] | any>) => {
      let upcomingArr = action.payload;
      if (state.entries.length === 0) {
        state.entries = upcomingArr;
      } else {
        state.entries = upcomingArr;
      }
    },
  },
});

export const { addUpcomingIPOEntries } = upcomingIPOEntriesSlice.actions;

export default upcomingIPOEntriesSlice.reducer;
