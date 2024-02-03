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
      state.books = action.payload.items;
      state.total = action.payload.total;
    },
  },
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
