import React, { useState } from "react";

function AddBook() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", formData);
    // …send to API / add to list…
  };
  return (
    <div className="bg-white md:bg-white md:w-[50%] md:mt-10 md:m-auto">
      <div className="text-center">
        <h1 className="font-bold text-4xl underline p-5">Add a Book</h1>
      </div>

      <div className="p-10 mb-5">
        <div className="flex flex-col mb-5">
          <label for="title">Title of Book</label>
          <input
            type="text"
            id="fname"
            name="title"
            className="border border-grey-300 p-1"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label for="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            className="border border-grey-300 p-1"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label for="category">Category : </label>
          <select
            name="category"
            id="fruits"
            className="border border-grey-300 p-1"
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
          <label for="shortDescription">Short Description</label>
          <input
            type="text"
            id="shortDescription"
            name="shortDescription"
            className="border border-grey-300 p-1"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label for="longDescription">Description</label>
          <textarea
            name="longDescription"
            className="border border-grey-300 p-1"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="flex flex-col mb-5">
          <label for="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="border border-grey-300 p-1"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label for="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="border border-grey-300 p-1"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label for="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            className="border border-grey-300 p-1"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="text-center mt-10 ">
          <buttton
            onClick={handleSubmit}
            className="border rounded-2xl p-2 bg-black text-white font-bold "
          >
            Add Book
          </buttton>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
