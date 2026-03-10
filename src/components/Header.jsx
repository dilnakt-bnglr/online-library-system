import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="text-white flex justify-between z-50 shadow-lg shadow-cyan-500/50 ">
      <Link to="/">
        <h2 className="hidden sm:block font-bold text-4xl mb-2">BookHub</h2>
      </Link>
      <ul className="flex justify-end gap-10">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/books/Romance">
          <li>Browse Books</li>
        </Link>
        <Link to="/addbook">
          <li>Add Book</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
