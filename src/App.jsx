import React from "react";
import HomeBanner from "./components/HomeBanner";
import BookList from "./components/BookList";
import { popularBooks } from "./utils/mockData";

function App() {
  return (
    <div className="">
      <HomeBanner />
      <BookList books={popularBooks} />
    </div>
  );
}

export default App;
