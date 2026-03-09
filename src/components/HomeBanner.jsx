import React from "react";

function HomeBanner() {
  return (
    <div className="text-white text-center m-8">
      <h1>Welcome to the World of Books</h1>
      <div className="flex gap-5 justify-center items-center p-5">
        <div className="border-2 border-gray-500 rounded-2xl p-4 w-[100px] h-[40px] flex items-center justify-center">
          Mystery
        </div>
        <div className="border-2 border-gray-500 rounded-2xl p-4 w-[100px] h-[40px] flex items-center justify-center">
          Romance
        </div>
        <div className="border-2 border-gray-500 rounded-2xl p-4 w-[100px] h-[40px] flex items-center justify-center">
          Fiction
        </div>
        <div className="border-2 border-gray-500 rounded-2xl p-4 w-[100px] h-[40px] flex items-center justify-center">
          Fantasy
        </div>
        <div className="border-2 border-gray-500 rounded-2xl p-4 w-[100px] h-[40px] flex items-center justify-center">
          Thriller
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
