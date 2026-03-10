import { configureStore } from "@reduxjs/toolkit";
import addBookReducer from "./addBookSlice.js";

const store = configureStore({
  reducer: {
    addBook: addBookReducer,
  },
});

export default store;
