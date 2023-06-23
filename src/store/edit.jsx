import { createSlice } from "@reduxjs/toolkit";

const initialEditState = { isEdit: false };

const editSlice = createSlice({
  name: "edit",
  initialState: initialEditState,
  reducers: {
    showEdit(state) {
      state.isEdit = true;
    },
    hideEdit(state) {
      state.isEdit = false;
    },
  },
});

export const editActions = editSlice.actions;

export default editSlice.reducer;
