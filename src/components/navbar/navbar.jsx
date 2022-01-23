import React from "react";
import styles from "./navbar.module.css";
const Navbar = ({ user, signOut }) => {
  return (
    <nav className={styles.navbar}>
      <p className={styles.userName}>{user}</p>
      <button onClick={signOut}>signOut</button>
    </nav>
  );
};

export default Navbar;
