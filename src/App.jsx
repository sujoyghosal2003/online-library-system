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

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(mockData);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = () => {
    console.log("Search Text:", searchText);

    const filterBooks = mockData.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.id.toString().includes(searchText) ||
      book.author.toLowerCase().includes(searchText.toLowerCase()) ||
      book.pages.toString().includes(searchText) ||
      book.description.toLowerCase().includes(searchText.toLowerCase())
    );

    console.log("Filtered Books:", filterBooks);

    if (filterBooks.length === 0) {
      setErrorMessage("Please search correctly."); // Consider making this more descriptive
    } else {
      setErrorMessage("");
    }

    setFilteredBooks(filterBooks);
    setSearchText(""); // Clear the search input after searching
  };

  return (
    <BrowserRouter>
      <NavBar />
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
          value={searchText} // Bind the input value to state
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Books here"
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <BookList BooksData={filteredBooks} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/books/details/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
