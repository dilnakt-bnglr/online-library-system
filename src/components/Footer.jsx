import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-white flex gap-10">
      <div>
        <h2>E-BOOK</h2>
        <p>gsjgdjahskjk</p>
        <div className="flex gap-2">
          <FaFacebook />
          <FaInstagram />
          <FaWhatsapp />
        </div>
      </div>
      <div>
        <ul>
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
    </div>
  );
}

export default Footer;
