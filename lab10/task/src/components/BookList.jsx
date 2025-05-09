import React, { useEffect, useState } from 'react';


function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // optional loading state
  const [error, setError] = useState(null);     // optional error state

async function fetchBooks()
  {
       let response = await fetch('https://67d17ef590e0670699ba5929.mockapi.io/books')
       let result = await response.json()
       setBooks(result)
       setLoading(false)
  }


  useEffect(() => {
   fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
