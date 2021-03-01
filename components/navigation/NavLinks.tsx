import styles from "./NavLinks.module.scss";
export function NavLinks() {
  return (
    <div className={styles.navLinks}>
      <a>About</a>
      <a>FAQs</a>
    </div>
  )
}