import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Desarrolladora Fullstack</h1>
        <p>
          Experiencia desarrollando aplicaciones escalables y responsives
          utilizando React y Next.js en el frontend, así como Node.js y
          Express.js en el backend. He trabajado integrando APIs RESTful,
          utilizando bases de datos relacionales como PostgreSQL desde un
          entorno Linux{" "}
        </p>
      </div>
    </section>
  );
}
