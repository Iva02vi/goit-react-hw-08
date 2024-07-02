import css from "./AuthNav.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.list}>
      <NavLink className={linkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={linkClass} to="/login">
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;
