
import React from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../utils/mockData'; 

const HomePage = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery'];

  return (
    <div>
      <h1>Welcome to the Online Library</h1>
      
      <h2>Book Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/books/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>

      <h2>Popular Books</h2>
      <ul>
        {mockData.map((book) => (
          <li key={book.id}>
            <Link to={`/books/details/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
