import { Outlet } from "react-router-dom";
import "./about.css";
import SideNav from "./components/SideNav";

function About() {
  return (
    <>
      About
      <SideNav />
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
}

export default About;
