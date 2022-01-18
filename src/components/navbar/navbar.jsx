import React from "react";
import styles from "./navbar.module.css";
const Navbar = (props) => {
  return (
    <navbar className={styles.navbar}>
      <p className={styles.title}>navbar</p>
    </navbar>
  );
};

export default Navbar;
