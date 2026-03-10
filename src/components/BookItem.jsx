import React from "react";
import { Link } from "react-router-dom";

function BookItem({ book }) {
  return (
    <div className="w-[100%] text-white flex-col bg-white sm:w-[300px] overflow-hidden shadow-md mb-10 rounded-xl">
      <img src={book.imageUrl} alt="img" />
      <div className="text-black p-2">
        <h2 className="font-bold text-2xl ">{book.title}</h2>
        <h3 className="font-medium italic">{book.author}</h3>
        <hr />
        <p className="font-thin">{book.shortDescription}</p>
      </div>
      <div className="text-center mb-5">
        <Link to={`/book/${book.id}`}>
          <button className="bg-black text-white rounded-2xl p-1.5 text-sm font-bold cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookItem;
