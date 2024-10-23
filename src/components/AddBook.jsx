// src/components/AddBook.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice'; 
import { useNavigate } from 'react-router-dom';

const AddBook = ({ onAddBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });
  const [error, setError] = useState(''); // State to handle errors
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, category, description, rating } = formData;

    // Basic validation
    if (!title || !author || !category || !description || !rating) {
      setError('Please fill in all fields');
      return;
    }

    // Rating validation
    const parsedRating = parseInt(rating, 10);
    if (isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
      setError('Rating must be a number between 1 and 5');
      return;
    }

    const newBook = {
      title,
      author,
      category,
      description,
      rating: parsedRating,
    };

    // Dispatch the action to add a new book
    dispatch(addBook(newBook)); 
    // Call the onAddBook function to update the book list in the parent component
    if (onAddBook) {
      onAddBook(newBook);
    }

    // Clear form after submission
    setFormData({
      title: '',
      author: '',
      category: '',
      description: '',
      rating: '',
    });

    // Clear any existing error
    setError('');

    // Navigate to the browse page after adding the book
    navigate('/browse');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { title, author, category, description, rating } = formData;

  return (
    <div>
      <h1>Add a New Book</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          placeholder="Title" 
          value={title} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="author" 
          placeholder="Author" 
          value={author} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="category" 
          placeholder="Category" 
          value={category} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="description" 
          placeholder="Description" 
          value={description} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="number" 
          name="rating" 
          placeholder="Rating (1 to 5)" 
          value={rating} 
          onChange={handleChange} 
          required 
          min="1" 
          max="5" 
        />
        <button type="submit" >Add Book</button>
      </form>
    </div>
  );
  if (!Array.isArray(books) || books.length === 0) {
    return <div>
      <h1>Book Added!</h1>
      <Link to="/">Back to Home & see</Link>
    </div>;
  }
};

export default AddBook;
 