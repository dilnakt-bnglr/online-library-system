import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../utils/mockData";
import BookList from "./BookList";

function BrowseBooks() {
  const params = useParams();
  const category = params.category;
  const [categoryBooks, setCategoryBooks] = useState([]);
  const [searchText, setSearchText] = useState("");

  const loadTheDefaultCategoryBooks = () => {
    const filteredCategoryData = books.filter(
      (book) => book.category.toLowerCase() == category.toLowerCase(),
    );
    setCategoryBooks(filteredCategoryData);
  };

  useEffect(() => {
    loadTheDefaultCategoryBooks();
  }, [category]);

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
          className="bg-white rounded-xl w-[40%] p-[5px]"
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
