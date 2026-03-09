import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="text-white ">
      <ul className="flex justify-end gap-10">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/browsebooks">
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
