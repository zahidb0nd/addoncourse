import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink>Form</NavLink>
        <NavLink>Users</NavLink>
        <NavLink>Card(Inline)</NavLink>
        <NavLink>Home(Stylesheet)</NavLink>
        <NavLink>Login</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
