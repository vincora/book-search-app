import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  total: undefined,
};

export const appSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload.items;
      state.total = action.payload.total;
    },
  },
});

export const { setBooks } = appSlice.actions;

export default appSlice.reducer;
