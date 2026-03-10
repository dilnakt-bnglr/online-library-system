import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../utils/mockData";
import BookList from "./BookList";
import { useSelector } from "react-redux";

function BrowseBooks() {
  const params = useParams();
  const category = params.category;
  const [categoryBooks, setCategoryBooks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const addedBooks = useSelector((store) => store.addBook.books) || [];

  const loadTheDefaultCategoryBooks = () => {
    const filteredCategoryData = books.filter(
      (book) => book.category.toLowerCase() == category.toLowerCase(),
    );
    const filteredAddedBooks = addedBooks.filter(
      (book) => book.category === category,
    );
    const allBooks = [...filteredAddedBooks, ...filteredCategoryData];
    setCategoryBooks(allBooks);
  };

  useEffect(() => {
    loadTheDefaultCategoryBooks();
  }, [category, addedBooks]);

  const handleSearch = () => {
    let searchedBook = categoryBooks.filter((book) => {
      if (
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return book;
      }
    });
    setCategoryBooks(searchedBook);
  };

  const handleReset = () => {
    loadTheDefaultCategoryBooks();
    setSearchText("");
  };

  return (
    <div>
      <div className=" text-center m-[40px]">
        <input
          type="text"
          className="w-[100%] bg-white rounded-xl sm:w-[40%] p-[5px]"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="ml-[10px] cursor-pointer text-white"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="text-blue-300 ml-[10px] cursor-pointer"
          onClick={handleReset}
        >
          Reset Filter
        </button>
      </div>
      <BookList books={categoryBooks} />
    </div>
  );
}

export default BrowseBooks;
