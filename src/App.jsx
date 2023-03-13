import React from "react";
import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Layout from "./components/Layout";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className={s.App}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
