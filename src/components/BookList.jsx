import React from "react";
import BookItem from "./BookItem";

function BookList({ books }) {
  return (
    <div className="gap-5 flex flex-wrap sm:gap-20 sm:ml-15 md:flex justify-center items-center md:m-auto">
      {books.map((book) => (
        <BookItem book={book} />
      ))}
    </div>
  );
}

export default BookList;
