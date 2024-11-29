// src/components/FavBooks.jsx
import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext'; // Import the context

const FavBooks = () => {
  const { favBooks } = useContext(LibraryContext); // Access favBooks from the context

  return (
    <div>
      <h2>Favourite Books</h2>
      {favBooks.length > 0 ? (
        favBooks.map((title, index) => (
          <p key={index}>{title}</p>
        ))
      ) : (
        <p>No fav books yet.</p>
      )}
    </div>
  );
};

export default FavBooks;
