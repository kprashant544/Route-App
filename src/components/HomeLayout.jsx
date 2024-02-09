import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function HomeLayout() {
  return (
    <>
      <div className="top">
        <NavBar />

        <div className="mid">
          <Outlet />
        </div>

        <div className="foot">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
