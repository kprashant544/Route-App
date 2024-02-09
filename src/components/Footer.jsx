import { IoLogoFacebook } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaSnapchat } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import "./footer.css";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer-content">
        <h3>@Copyright 2024</h3>
        <h3>Author: Prashant Kasula</h3>
        <div className="icons">
          <IoLogoFacebook style={{ fontSize: "25px" }} />

          <FaSnapchat style={{ fontSize: "25px" }} />
          <FiInstagram style={{ fontSize: "25px" }} />
          <NavLink className="git" to="https://github.com/kprashant544">
            {" "}
            <ImGithub style={{ fontSize: "25px", color: "white" }} />
          </NavLink>

          <BsTwitterX style={{ fontSize: "25px" }} />
        </div>
      </div>
    </>
  );
}

export default Footer;
