// src/redux/booksSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author, category, description, rating } = action.payload;
      const newBook = {
        id: Date.now(), 
        title,
        author,
        category,
        description,
        rating,
      };
      state.list.push(newBook);
    },
    removeBook: (state, action) => {
      state.list = state.list.filter(book => book.id !== action.payload.id);
    },
    editBook: (state, action) => {
      const { id, title, author, category, description, rating } = action.payload;
      const existingBook = state.list.find(book => book.id === id);
      if (existingBook) {
        existingBook.title = title || existingBook.title;
        existingBook.author = author || existingBook.author;
        existingBook.category = category || existingBook.category;
        existingBook.description = description || existingBook.description;
        existingBook.rating = rating || existingBook.rating;
      }
    },
  },
});

// Exporting actions and reducer
export const { addBook, removeBook, editBook } = booksSlice.actions;
export default booksSlice.reducer;
