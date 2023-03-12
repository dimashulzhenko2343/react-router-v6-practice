import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className={s.App}>
      <header className={s.header}>
        <Link to={'/'}>Home</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/about'}>About</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/blog" element={<Blog />} />        
        <Route path="/about" element={<About />} />        
      </Routes>
    </div>
  );
};

export default App;
