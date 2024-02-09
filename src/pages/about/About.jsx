import { Outlet } from "react-router-dom";
import "./about.css";
import SideNav from "./components/SideNav";

function About() {
  return (
    <>
      <div className="parent">
        <SideNav />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default About;
