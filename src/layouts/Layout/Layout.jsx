import React from "react";
import "./Layout.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

function Layout( {products, carts, tab, setTab, setToken, setRole} ) {
  return (
    <div>
      <Header />

      <Navbar products={products} carts={carts} tab={tab} setTab={setTab} setToken={setToken}  />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
