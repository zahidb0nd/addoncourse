import React from 'react'

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <NavLink>Home</NavLink>

        <NavLink>About</NavLink>

        <NavLink>Products</NavLink>

        <NavLink>Form</NavLink>

        <NavLink>Users</NavLink>

        <NavLink>Card(Inline)</NavLink>

        <NavLink>Home(Stylesheet)</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
