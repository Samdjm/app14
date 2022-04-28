import logo from "../../../logo.svg";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
export default function Header({ title }) {
  console.log(styles);
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <NavLink to='/'>
          <img className={styles.imageLogo} src={logo} alt='Logo React' />
        </NavLink>

        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.navItemActive : styles.navItem
            }
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.navItemActive : styles.navItem
            }
            to='/profil'
          >
            Profil
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
