import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NavBar from "./components/NavBar";
import HomeLayout from "./components/HomeLayout";
import ErrorPage from "./components/ErrorPage";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import SideNav from "./pages/about/components/SideNav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sidenav" element={<SideNav />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="login" element={<div>Login</div>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
