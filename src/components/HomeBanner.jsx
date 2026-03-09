import React from "react";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <div className="text-white text-center m-8">
      <h1>Welcome to the World of Books</h1>
      <div className="flex gap-5 justify-center items-center p-5">
        <Link to="/books/Mystery">
          <div className="border-2 border-gray-500 rounded-2xl p-4 w-[100px] h-[40px] flex items-center justify-center">
            Mystery
          </div>
        </Link>
        <Link to="/books/Romance">
          <div className="border-2 border-gray-500 rounded-2xl p-4 w-[100px] h-[40px] flex items-center justify-center">
            Romance
          </div>
        </Link>
        <Link to="/books/Fiction">
          <div className="border-2 border-gray-500 rounded-2xl p-4 w-[100px] h-[40px] flex items-center justify-center">
            Fiction
          </div>
        </Link>
        <Link to="/books/Fantasy">
          <div className="border-2 border-gray-500 rounded-2xl p-4 w-[100px] h-[40px] flex items-center justify-center">
            Fantasy
          </div>
        </Link>
        <Link to="/books/Thriller">
          <div className="border-2 border-gray-500 rounded-2xl p-4 w-[100px] h-[40px] flex items-center justify-center">
            Thriller
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomeBanner;
