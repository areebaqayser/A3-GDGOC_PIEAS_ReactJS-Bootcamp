import React, { createContext, useState } from 'react';

// Create the context
export const LibraryContext = createContext();

// Create a provider component
export const LibraryProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  // Function to borrow a book
  const borrowBook = (title) => {
    setBorrowedBooks((prevBooks) => [...prevBooks, title]);
  };

  // Function to add a book to favorites
  const addToFavorites = (title) => {
    setFavBooks((prevBooks) => [...prevBooks, title]);
  };

  return (
    <LibraryContext.Provider value={{ borrowedBooks, favBooks, borrowBook, addToFavorites }}>
      {children}
    </LibraryContext.Provider>
  );
};
