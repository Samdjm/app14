import logo from "../../../logo.svg";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
export default function Header({ title }) {
  const pages = [
    { routePath: "/", routeName: "Home" },
    { routePath: "/profil", routeName: "Profil" },
    { routePath: "/routine", routeName: "Routine" },
  ];

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <NavLink to='/'>
          <img className={styles.imageLogo} src={logo} alt='Logo React' />
        </NavLink>

        <div>
          {pages.map(function (route) {
            return (
              <NavLink
                key={route.routePath}
                className={({ isActive }) =>
                  isActive ? styles.navItemActive : styles.navItem
                }
                to={route.routePath}
              >
                {route.routeName}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
