import "./about.css";
import { NavLink } from "react-router-dom";
function SideNav() {
  return (
    <>
      <div className="sideNav">
        <ul>
          <li>
            <NavLink to="/">Side 1</NavLink>
          </li>
          <li>
            <NavLink to="/side1">Side 1</NavLink>
          </li>
          <li>
            <NavLink to="/side2">Side 2</NavLink>
          </li>
          <li>
            <NavLink to="/side3">Side 3</NavLink>
          </li>
          <li>
            <NavLink to="/side4">Side 4</NavLink>
          </li>
          <li>
            <NavLink to="/side5">Side 5</NavLink>
          </li>
          <li>
            <NavLink to="/side6">Side 6</NavLink>
          </li>
          <li>
            <NavLink to="/side7">Side 7</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideNav;
