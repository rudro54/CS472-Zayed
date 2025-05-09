import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';
import EditBookForm from './EditBookForm';

function BookList() {
  const { books, loading, error, deleteBook } = useBookContext();
  const [editingId, setEditingId] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h3>Book List</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {books.map(book => (
          <div key={book.id} style={{ border: '1px solid gray', padding: '1rem' }}>
            {editingId === book.id ? (
              <EditBookForm book={book} onCancel={() => setEditingId(null)} />
            ) : (
              <>
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <button onClick={() => setEditingId(book.id)}>Edit</button>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
