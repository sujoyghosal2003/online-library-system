// src/components/BookDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL parameters
  const book = useSelector((state) => 
    state.books.find((b) => b.id === parseInt(id)) // Find the book in Redux state
  );

  return (
    <div>
      {book ? (
        <>
          <h1>{book.title}</h1>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Pages:</strong> {book.pages}</p>
          <img src={book.coverImage} alt={book.title} width="350px" height="200px" />
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Rating:</strong> {book.rating}/5</p>
          <Link to="/browse">Back to Browse</Link>
        </>
      ) : (
        <p>Book not found! Please check the book ID.</p>
      )}
    </div>
  );
};

export default BookDetails;
