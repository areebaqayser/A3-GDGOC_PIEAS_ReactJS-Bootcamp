import React from "react";
import Button from './Button';
const BookCard = ({ title, author, rating, genre }) => {

    return (
      
      <div className="book-card" style={{
          padding: "10px", 
          border: "1px solid #ddd",
          margin: "10px"
           }}>
  
        <h3>{title}</h3>
        <p><strong>Author:</strong> {author}</p>
        <p><strong>Rating:</strong> {rating}</p>
        <p><strong>Genre:</strong> {genre}</p>
      {/* Include the Button component, passing the title prop */}
      <Button title={title} />
      </div>

    );
  };
  
  export default BookCard;