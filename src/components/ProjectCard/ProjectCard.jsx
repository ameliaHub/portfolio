import styles from "./ProjectCard.module.css";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  tech,
  repoLink,
  demoLink,
  gradient,
  image,
}) {
  return (
    <div className={styles.card} style={{ background: gradient }}>
      <div className={styles.descImgContainer}>
        <div >
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
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconButton}
              >
                <FaGithub size={20} />
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.demoButton}
              >
                VER
              </a>
            )}
          </div>
        </div>

        <img src={image} alt={`${title} preview`} className={styles.image} />
      </div>
    </div>
  );
}
