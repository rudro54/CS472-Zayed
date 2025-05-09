import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';

function AddBookForm() {
  const { addBook } = useBookContext();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      setError('All fields are required');
      return;
    }
    addBook({ title, author });
    setTitle('');
    setAuthor('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Book</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" /><br />
      <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" /><br />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddBookForm;
