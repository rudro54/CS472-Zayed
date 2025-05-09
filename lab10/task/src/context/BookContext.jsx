import React, { createContext, useContext, useEffect, useState } from 'react';

const BookContext = createContext();
const API_URL = 'https://67d17ef590e0670699ba5929.mockapi.io/books';

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GET
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch books');
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // POST
  const addBook = async (book) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      });
      const newBook = await response.json();
      setBooks(prev => [...prev, newBook]);
    } catch (err) {
      setError(err.message);
    }
  };

  // PUT
  const updateBook = async (id, updatedBook) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBook),
      });
      const data = await response.json();
      setBooks(prev => prev.map(b => (b.id === id ? data : b)));
    } catch (err) {
      setError(err.message);
    }
  };

  // DELETE
  const deleteBook = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setBooks(prev => prev.filter(b => b.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, loading, error, addBook, updateBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
