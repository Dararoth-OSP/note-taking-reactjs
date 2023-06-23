import { configureStore } from "@reduxjs/toolkit";
import editReducer from "./edit";
import noteReducer from "./note";
import deleteReducer from "./delete";
import searchReducer from "./search";

const store = configureStore({
  reducer: {
    edit: editReducer,
    note: noteReducer,
    delete: deleteReducer,
    search: searchReducer,
  },
});

export default store;
