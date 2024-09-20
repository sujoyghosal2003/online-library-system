import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice'; 
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, author, category, description, rating } = formData;

    if (!title || !author || !category || !description || !rating) {
      alert('Please fill all fields');
      return;
    }

    const parsedRating = parseInt(rating);
    if (parsedRating < 1 || parsedRating > 5) {
      alert('Rating must be between 1 and 5');
      return;
    }

    const newBook = {
      id: Date.now(), // Use timestamp for a unique ID
      title,
      author,
      category,
      description,
      rating: parsedRating,
    };

    // Dispatching the addBook action with the new book as payload
    dispatch(addBook(newBook)); 
    navigate('/browse'); // Navigating to the browse page after adding the book
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          placeholder="Title" 
          value={formData.title} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="author" 
          placeholder="Author" 
          value={formData.author} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="category" 
          placeholder="Category" 
          value={formData.category} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="description" 
          placeholder="Description" 
          value={formData.description} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="number" 
          name="rating" 
          placeholder="Rating (out of 5)" 
          value={formData.rating} 
          onChange={handleChange} 
          required 
          min="1" 
          max="5" 
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
