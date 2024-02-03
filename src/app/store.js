import { configureStore } from "@reduxjs/toolkit";
import booksSliceReducer from "./booksSlice";

export default configureStore({
  reducer: booksSliceReducer,
});
