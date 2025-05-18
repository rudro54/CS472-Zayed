import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const BookContext = createContext([])

export const BookProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = "https://67d17ef590e0670699ba5929.mockapi.io/books"

    const loadBooks = async () => {
      if (loading === false) setLoading(true)
      await fetchBooks(url)
      setLoading(false)
    }

    const fetchBooks = async (url) => {
        try {
              const response = await fetch(url)
              const newBooklist = await response.json()
              setBooks(newBooklist)
            } 
        catch (err)
            {
              console.error(err)
            }
    }

    useEffect(
        () => {loadBooks()}
        , 
        []
    )

    const addBook = async (book) => {
        const id = Math.max(books.map(x => x.id)) + 1
        book[id] = id
        try {
            const response = await fetch(
                'https://67d17ef590e0670699ba5929.mockapi.io/books',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(book),
                }
              )
            const newBook = await response.json()
        }
        catch (err) {
            setError(err)
        }
        finally {
          loadBooks()
        }

    }

    const updateBook = async (book) => {
        let hasChange = function (book) {
          let bookById = books.find(x => x.id === book.id)
          if (bookById.title !== book.title || bookById.author !== book.author) return true
          else return false
        }
        try {
          let shouldUpdate = hasChange(book)
          if (shouldUpdate) { 
            const response = await fetch(
              `https://67d17ef590e0670699ba5929.mockapi.io/books/${book.id}`,
              {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
              }
            )
            const newBook = await response.json()
          }
        } 
        catch (err) {
            setError(err)
        }
        finally {
          loadBooks()
        }
      }
    
    const deleteBook = async (id) => {
        try {
          const response = await fetch(
            `https://67d17ef590e0670699ba5929.mockapi.io/books/${id}`,
            {
              method: 'DELETE',
            }
          )
          if (!response.ok) throw new Error('Failed to delete book')
        } catch (err) {
          setError(err)
        }
        finally {
         loadBooks()
        }
      }

    return (
        <BookContext.Provider value={{ books, addBook, updateBook, deleteBook, loading, error
       }}>
        {children}
        </BookContext.Provider>
        );
}

export const useBookContext = () => useContext(BookContext);