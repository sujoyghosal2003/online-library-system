// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../utils/mockData'; 

const HomePage = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery'];

  return (
    <div>
      <h1>Welcome to the Online Library</h1>
      
      <h2>Book Categories</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {categories.map((category) => (
          <li key={category} style={{ marginBottom: '8px' }}>
            <Link to={`/books/${category}`} style={{ textDecoration: 'none', color: '#007bff' }}>
              {category}
            </Link>
          </li>
        ))}
      </ul>

      <h2>Popular Books</h2>
      {mockData && mockData.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {mockData.map((book) => (
            <li key={book.id} style={{ marginBottom: '8px' }}>
              <Link to={`/books/details/${book.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No popular books available at the moment.</p>
      )}
    </div>
  );
};

export default HomePage;
