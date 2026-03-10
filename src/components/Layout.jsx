import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../store/store.js";

function Layout() {
  return (
    <Provider store={store}>
      <div className="bg-black p-5">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default Layout;
