import { createSlice } from "@reduxjs/toolkit";

const initialNoteState = {
  uuid: "",
  title: "",
  text: "",
};

const noteSlice = createSlice({
  name: "note",
  initialState: initialNoteState,
  reducers: {
    handleUpdateData(state, action) {
      (state.uuid = action.payload.uuid),
        (state.title = action.payload.title),
        (state.text = action.payload.text);
    },
  },
});


export const noteActions = noteSlice.actions;

export default noteSlice.reducer;
