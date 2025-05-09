import React from 'react';
import { BookProvider } from './context/BookContext';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

function App() {
  return (
    <BookProvider>
      <div className="App">
        <h1>Lab 10 Book CRUD Management</h1>
        <AddBookForm />
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;
