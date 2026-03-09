import React from "react";

function BookItem({ book }) {
  return (
    <div className="text-white flex-col bg-white w-[300px] overflow-hidden shadow-md mb-10 rounded-xl ">
      <img src={book.imageUrl} alt="img" />
      <div className="text-black">
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <p>{book.shortDescription}</p>
      </div>
      {/* <div className="text-black border-2 border-black"> */}
      <button className="w-[10%] text-black">View Details</button>
    </div>
  );
}

export default BookItem;
