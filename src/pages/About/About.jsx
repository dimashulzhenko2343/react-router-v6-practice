import { NavLink, Outlet } from "react-router-dom";
import s from "./About.module.css";

const About = () => {
    const setActive = ({isActive}) => isActive ? s.aboutActiv : '';

  return (
    <div className={s.aboutPage}>
      <h1 className={s.title}>About us</h1>
      <div className={s.homes}>
        <div className={s.homesMenu}>
          <NavLink to="brick" className={setActive}>Brick house</NavLink>
          <NavLink to="wooden"className={setActive}>Wooden house</NavLink>
          <NavLink to="palace"className={setActive}>Palace</NavLink>
        </div>
        <div className={s.homesImages}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default About;
