import React from "react";
import BookItem from "./BookItem";

function BookList({ books }) {
  return (
    <div className="flex flex-wrap gap-20 ml-15">
      {books.map((book) => (
        <BookItem book={book} />
      ))}
    </div>
  );
}

export default BookList;
