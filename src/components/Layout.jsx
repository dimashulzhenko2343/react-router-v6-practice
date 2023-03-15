import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import s from "./Layout.module.css";

const setActive = ({ isActive }) => (isActive ? s.active : "");
const Layout = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <NavLink to="/about" className={setActive}>
          About
        </NavLink>
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/blog" className={setActive}>
          Blog
        </NavLink>
      </header>

      <main className={s.main}>
        <div className={s.mainContainer}>
          <Outlet />
        </div>
      </main>

      <footer className={s.footer}>2023</footer>
    </div>
  );
};

export default Layout;
