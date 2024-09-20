// src/components/BrowseBooks.jsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Style.css';

const BrowseBooks = () => {
  const { category } = useParams(); // Get the category from the URL parameters
  const [search, setSearch] = useState(''); // State for the search input
  const books = useSelector((state) => state.books); // Assuming books state is an array in Redux

  // Filter books based on the category and the search input
  const filteredBooks = books
    .filter((book) => book.category === category) // Filter by category
    .filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
      <h1>{category} Books</h1>
      <input 
        type="text" 
        placeholder="Search by title or author" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author}
              <Link to={`/books/details/${book.id}`}> View Details</Link>
            </li>
          ))
        ) : (
          <li>No books found in this category.</li>
        )}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default BrowseBooks;
