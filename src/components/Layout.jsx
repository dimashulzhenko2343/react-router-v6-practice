import { Link, Outlet } from "react-router-dom";
import s from './Layout.module.css'

const Layout = () => {
  return (
    <div className={s.container}>
      
      <header className={s.header}>
        <Link to={"/"}>Home</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/about"}>About</Link>
      </header>

      <main className={s.main}>
        <Outlet />
      </main>

      <footer className={s.footer}>2023</footer>
    </div>
  );
};

export default Layout;
