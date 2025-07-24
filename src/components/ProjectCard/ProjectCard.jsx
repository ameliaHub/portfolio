import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  title,
  description,
  tech,
  repoLink,
  demoLink,
  gradient,
}) {
  return (
    <div className={styles.card} style={{ background: gradient }}>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>

      {tech && (
        <ul className={styles.techList}>
          {tech.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      <div className={styles.links}>
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
