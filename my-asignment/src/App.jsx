import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/components/navbar'
import ProductDetails from './productdetail'
import Products from './products'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}
export default App
