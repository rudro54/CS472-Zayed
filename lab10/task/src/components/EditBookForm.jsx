import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';

function EditBookForm({ book, onCancel }) {
  const { updateBook } = useBookContext();
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [error, setError] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      setError('Both fields are required');
      return;
    }

    // Trigger updateBook from context
    await updateBook(book.id, { title, author });

    // Clear error and exit edit mode
    setError('');
    onCancel();
  };

  return (
    <form onSubmit={handleUpdate}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      /><br />
      <input
        type="text"
        value={author}
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      /><br />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default EditBookForm;
