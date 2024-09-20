// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice"; // Ensure this path is correct

const store = configureStore({
  reducer: {
    books: booksReducer, // Adjust this if your state structure is different
  },
});

export default store;
