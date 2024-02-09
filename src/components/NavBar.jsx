import { NavLink } from "react-router-dom";
import "./navbar.css";
function NavBar() {
  return (
    <>
      <div className="navbar">
        <ul className="nav-items">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-side" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-side" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active-side" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-side" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
