import { createSlice } from "@reduxjs/toolkit";

const initailDeleteState = { isShowDelete: false, deleteNoteID: ''};

const deleteSlice = createSlice({
  name: "delete",
  initialState: initailDeleteState,
  reducers: {
    showDelete(state) {
      state.isShowDelete = true;
    },
    hideDelete(state) {
      state.isShowDelete = false;
    },
    storeDeleteID(state, action) {
      state.deleteNoteID = action.payload;
    }
  },
});

export const deleteActions = deleteSlice.actions;

export default deleteSlice.reducer;
