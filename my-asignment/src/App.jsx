// Combined version after resolving merge conflict

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/navbar.jsx";

import About from "./about.jsx";
import Home from "./home.jsx";
import Products from "./products.jsx";
import ProductDetail from "./productdetail.jsx";
import FormDemo from "./formDemo.jsx";
import Users from "./users.jsx";
import CardInline from "./cardInLine.jsx";
import CardStylesheet from "./cardStylesheet.jsx";
import NotFound from "./notfound.jsx";

// useState -  Concept variable: To store dynamic values
// useEffect - To fetch data from API

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/form" element={<FormDemo />} />
          <Route path="/users" element={<Users />} />
          <Route path="/card-inline" element={<CardInline />} />
          <Route path="/card-css" element={<CardStylesheet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <h2>Product List (Fetched from API)</h2>
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              {p.name} — ${p.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
