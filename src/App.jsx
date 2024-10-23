// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BrowseBooks from "./components/BrowseBooks";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import { mockData } from "./utils/mockData"; 
import "./components/Style.css";
import About from "./components/About";
import Contact from "./components/Contact"; // Import the Contact component

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(mockData);
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle search
  const handleSearch = () => {
    const filterBooks = mockData.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.id.toString().includes(searchText) ||
      book.author.toLowerCase().includes(searchText.toLowerCase()) ||
      book.pages.toString().includes(searchText) ||
      book.description.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filterBooks.length === 0) {
      setErrorMessage("No books found. Please try different keywords.");
    } else {
      setErrorMessage("");
    }

    setFilteredBooks(filterBooks);
  };

  // Function to handle adding a new book
  const handleAddBook = (newBook) => {
    setFilteredBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <h1 className="heading">
              WELCOME TO{" "}
              <a href="https://www.linkedin.com/in/sujoy-ghosal-739928222/?originalSubdomain=in">
                SUJOY'S
              </a>{" "}
              BOOK MANAGEMENT APPLICATION
            </h1>

            <div className="search">
              <input
                type="text"
                className="search-input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search Books here"
              />
              <button className="search-btn" onClick={handleSearch}>
                Search
              </button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {filteredBooks.length > 0 ? (
              <BookList BooksData={filteredBooks} />
            ) : (
              !errorMessage && <p>No books available to display.</p>
            )}
          </>
        } />
        <Route path="/browse" element={<BrowseBooks />} />
        {/* <Route path="/books/:category" element={<BrowseBooks />} /> */}
        <Route path="/books/details/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook onAddBook={handleAddBook} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* Use Contact here */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
