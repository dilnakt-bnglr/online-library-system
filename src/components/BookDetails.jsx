import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { books } from "../utils/mockData";
import { FcRating } from "react-icons/fc";
import { IoMdPricetag } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";

function BookDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const bookId = params.id;
  const bookDetails = books.filter((book) => book.id == bookId);
  console.log(bookDetails);
  return (
    <div className=" mt-5 text-white sm:m-15 flex gap-5 flex-wrap">
      <a onClick={() => navigate(-1)} className="underline cursor-pointer">
        <IoArrowBackCircleOutline />
        Back to Browse
      </a>
      <div className="w-[100%]">
        <img className="h-[60vh]" src={bookDetails[0].imageUrl} />
      </div>
      <div>
        <h1 className="font-bold text-4xl mb-3">{bookDetails[0].title}</h1>
        <h3 className="font-medium text-2xl italic mb-5">
          {bookDetails[0].author}
        </h3>
        <hr />
        <p className="mt-5 font-thin">{bookDetails[0].longDescription}</p>
        <div className="flex mt-6">
          <FcRating className="mr-2 mt-1" />
          {bookDetails[0].rating}
          <IoMdPricetag className="ml-20 mr-2 mt-1" />
          Rs.{bookDetails[0].price}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
