import logo from "../../../logo.svg";
import styles from "./Header.module.css";
export default function Header({ title }) {
  return (
    <header className={styles.container}>
      <img className='App-logo' src={logo} alt='Logo React' />
      <p
        className={styles.texte}
        style={{
          borderBottom: "2px solid white",
          color: "rgba(200,200,200,1)",
        }}
      >
        {title}
      </p>
    </header>
  );
}
