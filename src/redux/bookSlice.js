// src/redux/bookSlice.js 
import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../utils/mockData";
// Initial state with a more descriptive property name
const initialState = {
  books: [], // Renamed `list` to `books` for better readability
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    // Action to add a new book
    addBook: (state, action) => {
      const { title, author, category, description, rating } = action.payload;
      const newBook = {
        id: state.books.length > 0 ? Math.max(...state.books.map(book => book.id)) + 1 : 1, // Generates a unique ID based on the highest existing ID
        title,
        author,
        category,
        description,
        rating,
      };
      state.books.push(newBook); // Adds the new book to the books array
    },
    
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload.id); // Filters out the book with the specified ID
    },
    
    
    // Action to edit an existing book
    editBook: (state, action) => {
      const { id, title, author, category, description, rating } = action.payload;
      const existingBook = state.books.find((book) => book.id === id);
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
