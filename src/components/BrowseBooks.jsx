// src/components/BrowseBooks.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../actions/bookActions'; // Replace with your actual action
import './Style.css';

const BrowseBooks = () => {
  const dispatch = useDispatch();
  const { category } = useParams(); // Get the category from the URL parameters
  const [search, setSearch] = useState(''); // State for the search input

  // Get books and loading state from Redux
  const books = useSelector((state) => state.books.list) || [];
  const isLoading = useSelector((state) => state.books.loading); // Assuming you have a loading state

  useEffect(() => {
    dispatch(fetchBooks()); // Dispatch the action to fetch books when the component mounts
  }, [dispatch]);

  // Handle the loading state
  if (isLoading) {
    return <div>Loading books...</div>;
  }

  // Handle the case when there are no books
  // if (!Array.isArray(books) || books.length === 0) {
  //   return <div>
  //     <h1>Book Added!</h1>
  //     <Link to="/">Back to Home & see</Link>
  //   </div>;
  // }

  // Filter books based on the category (if provided) and the search input
  const filteredBooks = books.filter((book) => {
    // Check if the category matches (if provided) and filter by title or author based on the search input
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch = 
      book.title.toLowerCase().includes(search.toLowerCase()) || 
      book.author.toLowerCase().includes(search.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Display the category if provided */}
      {category ? <h1>{category} Books</h1> : <h1>All Books</h1>}
      
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
          <li>Books found {category ? `in ${category}` : '.'}.</li>
        )}
      </ul>

      <Link to="/">Back to Home & see it once</Link>
    </div>
  );
};

export default BrowseBooks;
