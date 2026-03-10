import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store/addBookSlice";

function AddBook() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Creating formData object with dynamic key(name of the input field)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Adding books to store
  const handleSubmit = (e) => {
    e.preventDefault();

    const required = [
      "title",
      "author",
      "shortDescription",
      "longDescription",
      "imageUrl",
      "price",
      "rating",
    ];
    // Error handling for input fields
    for (let field of required) {
      if (!formData[field] || formData[field].toString().trim() === "") {
        setError("Please fill in all required fields.");
        return;
      }
    }

    setError("");
    let formDetails = { ...formData };
    formDetails["id"] = Date.now();
    if (!formDetails.category) {
      formDetails["category"] = "Mystery";
    }
    dispatch(addBook(formDetails));
    navigate(`/books/${formDetails.category}`);
  };
  return (
    <div className="mt-10 bg-white md:bg-white md:w-[50%] md:mt-10 md:m-auto">
      <div className="text-center">
        <h1 className="font-bold text-4xl underline p-5">Add a Book</h1>
      </div>

      <div className="p-10 mb-5">
        <div className="flex flex-col mb-5">
          <label for="title">
            Title of Book<span className="text-red-500 text-xl"> * </span>
          </label>
          <input
            type="text"
            id="fname"
            name="title"
            className="border border-grey-300 p-1 rounded-md"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label for="author">
            Author<span className="text-red-500 text-xl"> * </span>
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="border border-grey-300 p-1 rounded-md"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label for="category">
            Category <span className="text-red-500 text-xl"> * </span>{" "}
          </label>
          <select
            name="category"
            id="fruits"
            className="border border-grey-300 p-1 rounded-md"
            onChange={(e) => handleChange(e)}
          >
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Fiction">Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label for="shortDescription">
            Short Description<span className="text-red-500 text-xl"> * </span>
          </label>
          <input
            type="text"
            id="shortDescription"
            name="shortDescription"
            className="border border-grey-300 p-1 rounded-md"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label for="longDescription">
            Description<span className="text-red-500 text-xl"> * </span>
          </label>
          <textarea
            name="longDescription"
            className="border border-grey-300 p-1 rounded-md"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="flex flex-col mb-5">
          <label for="imageUrl">
            Image URL<span className="text-red-500 text-xl"> * </span>
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="border border-grey-300 p-1 rounded-md"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label for="rating">
            Rating<span className="text-red-500 text-xl"> * </span>
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="border border-grey-300 p-1 rounded-md"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label for="price">
            Price<span className="text-red-500 text-xl"> * </span>
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="border border-grey-300 p-1 rounded-md"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="text-center mt-10 ">
          <button
            onClick={handleSubmit}
            className="border rounded-2xl p-2 bg-black text-white font-bold cursor-pointer"
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
