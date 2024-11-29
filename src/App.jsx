//import React from "react";
import "./App.css"; // Import the CSS
import HighRatedBooks from "./components/HighRatedBooks";
import BookDetails from "./components/BookDetails";
import FictionBooks from "./components/FictionBooks";
import BookAuthors from "./components/BookAuthors";
import BorrowedBooks from './components/BorrowedBooks'; // Import the BorrowedBooks component
import FavBooks from './components/FavBooks'; // Import the FavBooks component
import { LibraryProvider } from './context/LibraryContext'; // Import the LibraryProvider

const App =() =>{
  return(
    <LibraryProvider>
    <div>
      <h1>Library Manager</h1>
      <HighRatedBooks />
      <BookDetails />
      <FictionBooks />
      <BookAuthors />
      <BorrowedBooks />
      <FavBooks />

    </div>
    </LibraryProvider>
  );
};
export default App;