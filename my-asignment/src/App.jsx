import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import FormDemo from "./pages/FormDemo.jsx";
import Users from "./pages/Users.jsx";
import CardInline from "./pages/CardInline.jsx";
import CardStylesheet from "./pages/CardStylesheet.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
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
      </div>
    </>
  );
}
