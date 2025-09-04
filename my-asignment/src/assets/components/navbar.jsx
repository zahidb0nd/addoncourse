import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Products
      </NavLink>
      <NavLink
        to="/form"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Form
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Users
      </NavLink>
      <NavLink
        to="/card-inline"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Card (Inline)
      </NavLink>
      <NavLink
        to="/card-css"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Card (Stylesheet)
      </NavLink>
    </nav>
  );
}
