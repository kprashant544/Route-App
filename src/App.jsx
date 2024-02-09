import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NavBar from "./components/NavBar";
import HomeLayout from "./components/HomeLayout";
import ErrorPage from "./components/ErrorPage";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Side1 from "./pages/about/components/Side1";
import Side2 from "./pages/about/components/Side2";
import Side3 from "./pages/about/components/Side3";
import Side4 from "./pages/about/components/Side4";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="side1" element={<Side1 />} />
            <Route path="side2" element={<Side2 />} />
            <Route path="side3" element={<Side3 />} />
            <Route path="side4" element={<Side4 />} />
          </Route>
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
