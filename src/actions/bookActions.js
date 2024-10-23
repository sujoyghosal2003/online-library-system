// src/actions/bookActions.js
import axios from 'axios'; // Or use fetch if you prefer

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

// Action to start the books fetching process
export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

// Action when books are successfully fetched
export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

// Action when there's an error fetching books
export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

// Thunk action to fetch books from an API or service
export const fetchBooks = () => async (dispatch) => {
  dispatch(fetchBooksRequest());
  try {
    // Use a real API endpoint for testing
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Replace with your actual API URL when ready
    const books = response.data;
    dispatch(fetchBooksSuccess(books));
  } catch (error) {
    console.error('Error fetching books:', error);
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Request made but no response received:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Error setting up request:", error.message);
    }
    dispatch(fetchBooksFailure(error.message));
  }
};
