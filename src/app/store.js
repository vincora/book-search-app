import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./appSlice";

export default configureStore({
  reducer: formReducer
});
