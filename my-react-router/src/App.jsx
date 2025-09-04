import React from 'react'

import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Home Page</h2>

      <p>This is our Home Page</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About Page</h2>

      <p>This is our About Page</p>
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <h2>Error Code- 404 </h2>

      <p>Page Not Found</p>

      <p>Lost your way?</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>

        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
