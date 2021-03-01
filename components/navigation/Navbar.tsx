// Holds the logo and the About and FAQs links
import { NavLinks } from './NavLinks';
import styles from './Navbar.module.scss'

export function Navbar() {
  return (
  <div className={styles.navbar}>
    <a href=".">
      <img 
        src="/Zero.png"
        alt="Zero Org"
        width={180}
        height={66}
      />
    </a>
    <NavLinks/>
  </div>
  );
}