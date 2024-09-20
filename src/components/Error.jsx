// src/components/Error.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./Error.css"; // Ensure this path is correct

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="h1">OOPS!! Page Not Found</h1>
      <img 
        src="https://www.wordpresssupport.co/wp-content/uploads/2021/10/error-404-not-found.webp"
        alt="404 Error" 
        className="img"
      />
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Error;
