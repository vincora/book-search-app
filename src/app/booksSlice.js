import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  total: undefined,
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = state.books.concat(action.payload.items);
      state.total = action.payload.total;
    },
    resetBooks: (state) => {
      state.books = [],
      state.total = undefined
    }
  },
});

export const { setBooks, resetBooks } = booksSlice.actions;

export default booksSlice.reducer;
