import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Pilar Bermúdez</div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
