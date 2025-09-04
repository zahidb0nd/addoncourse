import { Routes, Route } from 'react-router-dom'
import Navbar from './assets/components/navbar.jsx'

import About from './about.jsx'
import Home from './home.jsx'
import Products from './products.jsx'
import ProductDetail from './productDetail.jsx'
import FormDemo from './formDemo.jsx'
import Users from './users.jsx'
import CardInline from './cardInLine.jsx'
import CardStylesheet from './cardStylesheet.jsx'
import NotFound from './notfound.jsx'

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
  )
}
