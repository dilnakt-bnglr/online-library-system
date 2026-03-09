import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../utils/mockData";
import BookList from "./BookList";

function BrowseBooks() {
  const params = useParams();
  const category = params.category;
  const [categoryBooks, setCategoryBooks] = useState([]);

  useEffect(() => {
    const filteredCategoryData = books.filter(
      (book) => book.category.toLowerCase() == category.toLowerCase(),
    );
    setCategoryBooks(filteredCategoryData);
  }, [category]);

  return (
    <div>
      <BookList books={categoryBooks} />
    </div>
  );
}

export default BrowseBooks;
