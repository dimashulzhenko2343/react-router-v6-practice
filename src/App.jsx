import React from "react";
import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Layout from "./components/Layout";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import BrickHouse from "./pages/About/BrickHouse/BrickHouse";
import WoodenHouse from "./pages/About/WoodenHouse/WoodenHouse";
import Palace from "./pages/About/Palace/Palace";

const App = () => {
  return (
    <div className={s.App}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />}>
            <Route path="brick" element={<BrickHouse />} />
            <Route path="wooden" element={<WoodenHouse />} />
            <Route path="palace" element={<Palace />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
