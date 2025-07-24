import styles from "./Contact.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const cards = [
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/tu-usuario",
    },
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      url: "https://github.com/tu-usuario",
    },
    {
      icon: null,
      label: "pilaribermu@gmail.com",
      url: "",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Conecta conmigo</h2>
      <div className={styles.cardContainer}>
        {cards.map(({ icon, label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.icon}>{icon}</div>
            <span className={styles.label}>{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
