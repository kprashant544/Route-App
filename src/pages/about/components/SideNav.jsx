import { NavLink } from "react-router-dom";
import "../about.css";
function SideNav() {
  return (
    <>
      <div className="sideNav">
        <ul>
          <li>
            <NavLink to="side1">Side 1</NavLink>
          </li>
          <li>
            <NavLink to="side2">Side 2</NavLink>
          </li>
          <li>
            <NavLink to="side3">Side 3</NavLink>
          </li>
          <li>
            <NavLink to="side4">Side 4</NavLink>
          </li>
          <li>
            <NavLink to="side5">Side 5</NavLink>
          </li>
          <li>
            <NavLink to="side6">Side 6</NavLink>
          </li>
          <li>
            <NavLink to="side7">Side 7</NavLink>
          </li>
          <li>
            <NavLink to="side8">Side 8</NavLink>
          </li>
          <li>
            <NavLink to="side9">Side9</NavLink>
          </li>
          <li>
            <NavLink to="side10">Side 10</NavLink>
          </li>
          <li>
            <NavLink to="side11">Side 11</NavLink>
          </li>
          <li>
            <NavLink to="side12">Side 12</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideNav;
