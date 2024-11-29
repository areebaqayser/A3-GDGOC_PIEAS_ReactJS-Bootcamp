import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext'; // Import the context

const BorrowedBooks = () => {
  const { borrowedBooks } = useContext(LibraryContext); // Access borrowedBooks from the context

  return (
    <div>
      <h2>Borrowed Books</h2>
      {borrowedBooks.length > 0 ? (
        borrowedBooks.map((title, index) => (
          <p key={index}>{title}</p>
        ))
      ) : (
        <p>No borrowed books yet.</p>
      )}
    </div>
  );
};

export default BorrowedBooks;
