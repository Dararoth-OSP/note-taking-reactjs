import { createSlice } from "@reduxjs/toolkit";

const initailSearchState = {
  showSearch: false,
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initailSearchState,
  reducers: {
    showSearch(state) {
      state.showSearch = true;
    },
    hideSearch(state) {
      state.showSearch = false;
    },
    handleSearchNote(state, action) {
      state.search = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
