//import React from "react";
import Books from "../data/Books";
import BookCard from "../components/BookCard";

const BookDetails = () => {
  return (
    <section>
    
      <h2>All Books Details</h2>
      <div className="cards-container">
        {Books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
    </section>
  );
};

export default BookDetails;