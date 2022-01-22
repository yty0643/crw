import React from "react";
import styles from "./navbar.module.css";
const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <p className={styles.title}>navbar</p>
    </nav>
  );
};

export default Navbar;
