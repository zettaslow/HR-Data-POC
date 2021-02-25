// Holds the logo and the About and FAQs links
import Image from 'next/image';
import Link from 'next/Link';
import Styles from './Navbar.module.scss'

export default function Navbar() {
  return (
  <div>
    <div className={Styles.navbar}>
      <Image 
        src="/Zero.png"
        alt="Zero Org"
        width={180}
        height={66}
      />
      <div className={Styles.navLinks}>
        <Link href="https://google.com">
          <a>About</a>
        </Link>
        <Link href="https://google.com">
          <a>FAQs</a>
        </Link>
      </div>
    </div>
  </div>
  );
}