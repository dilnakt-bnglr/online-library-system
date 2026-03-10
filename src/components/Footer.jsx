import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-white flex gap-10 mt-20 shadow-lg shadow-cyan-500/50">
      <div className="w-[80%] p-5">
        <h2 className="font-bold text-4xl mb-2">BookHub</h2>
        <p className="font-thin italic text-2xl">
          Your gateway to endless stories and knowledge
        </p>
        <div className="flex gap-2 m-2 mb-5 cursor-pointer">
          <FaFacebook />
          <FaInstagram />
          <FaWhatsapp />
        </div>
      </div>
      <div className="p-5 font-thin text-xl">
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
