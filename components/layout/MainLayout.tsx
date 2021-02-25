// Combines Header with whatever other page content needs to be displayed

import Navbar from "../navigation/Navbar";
import styles from "./MainLayout.module.scss";

export default function MainLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    // TODO: Add container style to main layout. 
    <div className={styles.container}>
      <Navbar />
      <hr/>
      <main>{children}</main>
    </div>
  )
}