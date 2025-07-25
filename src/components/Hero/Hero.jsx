import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Desarrolladora Fullstack</h1>
        <p>
          Experiencia desarrollando aplicaciones escalables y adaptadas a las
          pantallas desde un entorno Linux. Desde la idea hasta la
          implementación, utilizando React y Next.js en el frontend, así como
          Node.js y Express.js en el backend. He trabajado integrando APIs
          RESTful, utilizando bases de datos relacionales PostgreSQL y Git como
          gestor de versiones{" "}
        </p>
      </div>
    </section>
  );
}
