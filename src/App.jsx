import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import Components from "./pages/Components/Components";
import Calculator from "./pages/Calculator/Calculator";

import Layout from "./layouts/Layout/Layout";

import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";

import Login from "./pages/Login/Login";

import { fetchProducts } from "./data/products";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import Animation from "./Animation/Animation";

const initTab = "home";

function App() {
  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(initTab);
  }, []);

  const [token, setToken] = useState('');
  const [role, setRole] = useState('');

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => setProducts(fetchProducts()), []);

  useEffect(() => console.log(products), [products]);

  if (token === '') {
    return <Login setToken={setToken} setRole={setRole} />;
  } else{
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  products={products}
                  carts={carts}
                  tab={tab}
                  setTab={setTab}
                  setToken={setToken}
                />
              }
            >
              <Route path={"/"} element={<Home />} />
              <Route path={"/home"} element={<Home />} />
              <Route path={"/components"} element={<Components />} />
              <Route path={"/calculator"} element={<Calculator />} />
              <Route path={"/animation"} element={<Animation />} />
              <Route path={"/todo"} element={<Todo />} />
              <Route
                path={"/products"}
                element={
                  <Product
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path={"/carts"}
                element={<Cart carts={carts} setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
