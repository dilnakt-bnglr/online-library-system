import { createSlice } from "@reduxjs/toolkit";
import { books } from "../utils/mockData";

const addBookSlice = createSlice({
  name: "addBook",
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload);
      books.push(action.payload);
    },
  },
});

export const { addBook } = addBookSlice.actions;

export default addBookSlice.reducer;
